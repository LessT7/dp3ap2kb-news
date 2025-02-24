import Image from "next/image";
export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-red-500 to-black text-white py-12 mt-auto">
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-bold text-lg">DP3AP2KB Kota Blitar</h3>
                    <p className="text-sm mt-2">Jalan Dr. Soetomo 50 Kota Blitar<br />Telp: (0342) 801080<br />Surél: dp3a-p2kb@blitarkota.go.id</p>
                  </div>
                  <div></div>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:opacity-75 "><Image src="/images/fb.svg" width={50} height={50} alt="Facebook" className="h-10" /></a>
                    <a href="#" className="hover:opacity-75"><Image src="/images/ig.svg" width={50} height={50} alt="Instagram" className="h-10" /></a>
                    <a href="#" className="hover:opacity-75"><Image src="/images/yt.svg" width={50} height={50} alt="Youtube" className="h-10" /></a>
                  </div>
                </div>
                <div className="mt-6 text-center text-sm">© 2025 DP3AP2KB Kota Blitar. All Rights Reserved.</div>
              </footer>
    );
};