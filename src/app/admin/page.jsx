"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import jwt from "jsonwebtoken";
import dp from "../../../public/images/dp.png";

export default function AdminPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const { register, handleSubmit, reset, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
      return;
    }
    try {
      console.log("Token yang diterima:", token);
      const decoded = jwt.decode(token);
      setUserData(decoded);
    } catch (error) {
      console.error("Token decoding failed:", error);
      localStorage.removeItem("token");
      router.push("/");
    }
  }, []);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let base64Image = data.image.length > 0 ? await convertToBase64(data.image[0]) : null;
      if (editId) {
        const newsRef = doc(db, "news", editId);
        await updateDoc(newsRef, {
          title: data.title,
          description: data.description,
          ...(base64Image && { imageBase64: base64Image }),
        });
        alert("Berita berhasil diperbarui!");
        setEditId(null);
      } else {
        await addDoc(collection(db, "news"), {
          title: data.title,
          description: data.description,
          imageBase64: base64Image,
          createdAt: new Date(),
        });
        alert("Berita berhasil diunggah!");
      }
      reset();
      fetchNews();
    } catch (error) {
      console.error("Error uploading news:", error);
      alert("Gagal mengunggah berita");
    } finally {
      setLoading(false);
    }
  };

  const fetchNews = async () => {
    const querySnapshot = await getDocs(collection(db, "news"));
    const newsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setNewsList(newsData);
  };

  const handleEdit = (news) => {
    setEditId(news.id);
    setValue("title", news.title);
    setValue("description", news.description);
  };

  const handleDelete = async (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      await deleteDoc(doc(db, "news", id));
      alert("Berita berhasil dihapus!");
      fetchNews();
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <header className="bg-gradient-to-t from-red-500 to-black text-white py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <img src={dp.src} alt="DP3AP2KB" className="h-12" />
          <button className="bg-white text-red-800 py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition" onClick={() => {
              localStorage.removeItem("token");
              router.push("/");
            }}>
            Log Out
          </button>
        </div>
      </header>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">{editId ? "Edit Berita" : "Upload News"}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
          <input type="text" {...register("title", { required: true })} className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Judul Berita" />
          <textarea {...register("description", { required: true })} className="w-full p-2 border border-gray-300 rounded mt-1 " placeholder="Deskripsi" />
          <input type="file" {...register("image")} accept="image/*" className="w-full p-2 border border-gray-300 rounded mt-1" />
          <button type="submit" className="w-full bg-red-500 text-white p-2 rounded" disabled={loading}>{loading ? "Uploading..." : editId ? "Update" : "Submit"}</button>
        </form>
      </div>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">News List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map((news) => (
            <div key={news.id} className="bg-white p-4 shadow-md rounded-md">
              <img src={news.imageBase64} alt={news.title} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{news.title}</h3>
              <p className="text-sm text-gray-600 break-words">{news.description}</p>
              <div className="flex justify-end mt-3 gap-2">
                <button className="bg-yellow-500 text-white px-4 py-1 rounded" onClick={() => handleEdit(news)}>Edit</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={() => handleDelete(news.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gradient-to-b from-red-500 to-black text-white py-12 mt-auto">
        <div className="container mx-auto text-center text-sm">© 2025 DP3AP2KB Kota Blitar. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
