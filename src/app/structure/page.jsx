import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";


import kadin from "../../../public/images/kabid/kadin.png";
import pa from "../../../public/images/kabid/kabid pa.png";
import p3 from "../../../public/images/kabid/kabin p3.png";
import p2kb from "../../../public/images/kabid/kabid p2kb.png";
import sekretaris from "../../../public/images/kabid/sekretaris.png";

export default function StructurePage() {
  const members = [
    { name: "DIAN RAHMAWATI, S.Sos., M.A.P", role: "Kabid Perlindungan Anak", image: pa },
    { name: "DIYANI JULI PANGASTUTI, SKM", role: "Kabid Pengendalian Penduduk dan Keluarga Berencana", image: p2kb },
    { name: "PARMINTO, S.Sos., M.Si", role: "Kepala Dinas", image: kadin },
    { name: "drg. MOHAMAD AGUS SABTONI", role: "Sekretaris", image: sekretaris },
    { name: "ENDANG SULISTIYANINGSIH", role: "Kabid Pemberdayaan dan Perlindungan Perempuan", image : p3 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <Navbar/>
      {/* Struktur Organisasi */}
      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-600">Struktur Organisasi</h2>
          <p className="mt-4 text-gray-700 text-lg">Berikut adalah struktur organisasi perusahaan kami.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {members.map((member, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-40 mx-auto object-cover"
                />
                <h2 className="text-xl font-semibold text-gray-700 mt-4">{member.name}</h2>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>

    </div>
  );
}
