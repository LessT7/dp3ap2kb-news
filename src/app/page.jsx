"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../../public/images/slider/slider1.jpg";
import slide2 from "../../public/images/slider/slider2.jpg";
import slide3 from "../../public/images/slider/slider3.jpg";
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const slides = [slide1, slide2, slide3];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans  ">
      <Navbar />
      

      <section className="bg-white ">
        <div className="container mx-auto relative ">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full h-screen">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentSlide}
                src={slides[currentSlide].src}
                alt={`Slide ${currentSlide + 1}`}
                initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-xl hover:bg-opacity-75" onClick={prevSlide}>← Prev</button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-xl hover:bg-opacity-75" onClick={nextSlide}>Next →</button> */}
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center">
              <div>
                <h2 className="text-3xl font-bold">Selamat Datang di Situs DP3AP2KB</h2>
                <p className="mt-4 text-sm">Dapatkan informasi terbaru tentang program dan kegiatan unggulan.</p>
                <button className="mt-6 bg-red-700 py-2 px-6 rounded-lg hover:bg-red-600 transition" 
                onClick={() => {
                  window.location.href = "/news";}}
                >BACA LEBIH LANJUT</button>
              </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-600">Tentang Kami</h2>
          <p className="mt-4 text-gray-700 text-lg">Dinas Pemberdayaan Perempuan, Perlindungan Anak, dan Keluarga Berencana (DP3A2KB) Kabupaten Blitar adalah lembaga pemerintahan yang bertanggung jawab dalam perencanaan, pelaksanaan, serta pengawasan program terkait pemberdayaan perempuan, perlindungan anak, dan keluarga berencana di Kabupaten Blitar. Kami berkomitmen untuk memberikan layanan terbaik dalam mewujudkan masyarakat yang lebih sejahtera, berkeadilan gender, serta ramah anak.</p>
          <p className="mt-4 text-gray-700 text-lg">Sebagai lembaga yang memiliki peran strategis dalam pembangunan sosial dan kesejahteraan masyarakat, DP3A2KB Kabupaten Blitar terus berinovasi dan beradaptasi terhadap dinamika sosial guna menciptakan lingkungan yang mendukung peran serta perempuan dan melindungi hak-hak anak. Kami menyadari bahwa keluarga adalah unit terkecil dalam masyarakat yang memiliki peran penting dalam pembangunan bangsa, oleh karena itu, kami berusaha untuk menghadirkan berbagai program yang dapat membantu peningkatan kualitas kehidupan keluarga di Kabupaten Blitar.</p>
        </div>
      </section>

      <section className="py-8 bg-white text-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-600">Visi & Misi</h2>
          <div className="mt-6 text-lg text-gray-700">
            <p className="font-semibold">Visi:</p>
            <p>Menjadi lembaga yang unggul dalam pemberdayaan perempuan, perlindungan anak, dan pengendalian penduduk.</p>
            <p className="font-semibold mt-4">Misi:</p>
            <ul className="list-disc list-inside text-left inline-block">
              <li>Meningkatkan kesejahteraan perempuan dan anak.</li>
              <li>Mendorong partisipasi aktif dalam program pembangunan keluarga.</li>
              <li>Menyediakan layanan berkualitas dalam perlindungan anak dan perempuan.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-8 bg-white text-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-600">Program Unggulan</h2>
          <div className="mt-6 text-lg text-gray-700">
            <ul className="list-disc list-inside text-left inline-block">
              <li>Program Pemberdayaan Perempuan dan Kesetaraan Gender.</li>
              <li>Program Perlindungan Anak dari Kekerasan dan Eksploitasi Serta Gerakan KB.</li>
              <li>Gerakan Keluarga Berencana dan Kependudukan.</li>
              <li>Pendampingan dan Konsultasi Kesejahteraan Keluarga.</li>
              <li>Pusat Layanan Koseling untuk Perempuan dan Anak.</li>
            </ul>
            
            <p className="mt-4">DP3A2KB Kabupaten Blitar berkomitmen untuk terus meningkatkan kualitas hidup perempuan, anak, dan keluarga melalui berbagai program strategis yang berkelanjutan dan berbasis partisipasi masyarakat.</p>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}