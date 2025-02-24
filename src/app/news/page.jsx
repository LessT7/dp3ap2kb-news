  "use client";

  import { useEffect, useState } from "react";
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "../services/firebase";
  import Link from "next/link";
  import Navbar from "@/components/Navbar/navbar";
  import Footer from "@/components/Footer/footer";

  export default function NewsPage() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
      const fetchNews = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "news"));
          const newsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setNewsList(newsData);
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      };
      fetchNews();
    }, []);

    return (
      <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
        <Navbar/>

        {/* News Section */}
        <section className="py-16 bg-white text-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-red-600">Berita Terbaru</h2>
            <p className="mt-4 text-gray-700 text-lg">Dapatkan informasi terbaru tentang program dan kegiatan DP3AP2KB.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {newsList.length === 0 ? (
                <p className="text-center text-gray-600">Belum ada berita.</p>
              ) : (
                newsList.map((news) => (
                  <div key={news.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={news.imageBase64} alt={news.title} className="w-full h-56 object-cover hover:scale-105 transition transform duration-700" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">{news.title}</h3>
                      <p className="text-sm text-gray-600 break-words">
                        {news.description.split(" ").slice(0, 10).join(" ")}
                        {news.description.split(" ").length > 10 ? "..." : ""}
                      </p>

                      <Link href={`/news/${news.id}`} className="text-red-600 font-medium mt-4 inline-block hover:underline">
                        Baca Selengkapnya →
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <Footer/>
      </div>
    );
  }
