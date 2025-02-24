import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/services/firebase";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import Image from "next/image";

export default async function NewsDetail({ params }) {
  const { id } = await params; // Ambil ID dari URL
  let news = null;

  try {
    const docRef = doc(db, "news", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      news = { id: docSnap.id, ...docSnap.data() };
    }
  } catch (error) {
    console.error("Error fetching news:", error);
  }

  if (!news) {
    return <p className="text-center mt-10 text-red-600">Berita tidak ditemukan.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-6 py-16 w-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 ">
            <Image src={news.imageBase64} alt={news.title} width={1200} height={500} className=" object-cover rounded-md" />
            <h1 className="text-3xl font-bold text-gray-900 mt-6">{news.title}</h1>
            <p className="break-words w-[85%]">{news.description}</p>
        </div> 
      </div>
      {/* <div className="container mx-auto px-6 py-16">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img src={news.imageBase64}  alt={news.title} className="w-full h-64 object-cover rounded-md" />
          <h1 className="text-3xl font-bold text-gray-900 mt-6">{news.title}</h1>
          <p className="text-gray-600 mt-4 whitespace-pre-line w-auto">{news.description}</p>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
