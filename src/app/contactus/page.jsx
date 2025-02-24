import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";

import dp from "../../../public/images/dp.png";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <Navbar />

      {/* Contact Section */}
      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-600 text-center">Hubungi Kami</h2>
          <p className="mt-4 text-center text-gray-700">Silakan hubungi kami jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Kirim Pesan</h3>
              <form>
                <label className="block text-sm font-medium">Nama</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border mt-1" placeholder="Nama Anda" />

                <label className="block text-sm font-medium mt-4">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border mt-1" placeholder="Email Anda" />

                <label className="block text-sm font-medium mt-4">Pesan</label>
                <textarea className="w-full px-4 py-2 rounded-lg border mt-1" rows="4" placeholder="Tulis pesan Anda..."></textarea>

                <button className="mt-4 bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition">
                  Kirim
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold">Informasi Kontak</h3>
              <p className="mt-4 text-gray-700">Jalan Dr. Soetomo 50, Kota Blitar</p>
              <p className="mt-2 text-gray-700">Telp: (0342) 801080</p>
              <p className="mt-2 text-gray-700">Email: dp3a-p2kb@blitarkota.go.id</p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold">Lokasi</h3>
                <iframe
                  className="w-full h-64 mt-2 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5823422031036!2d112.16267837481364!3d-8.095681681449812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ff79f4a2b35f%3A0x5027a76e3564ea0!2sBlitar!5e0!3m2!1sen!2sid!4v1712345678901"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-red-500 to-black text-white py-12 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 DP3AP2KB Kota Blitar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
