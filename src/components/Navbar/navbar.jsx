import dp from "../../../public/images/dp.png";
import Link from "next/link";
export default function navbar ()  {
    return (
        <header className="bg-gradient-to-t from-red-500 to-black  text-white py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center  px-6">
          <img src={dp.src} alt="DP3AP2KB" className="h-12" />
          <nav className="flex-grow flex justify-center space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-gray-300 transition">Home</Link>
            <Link href="/structure" className="hover:text-gray-300 transition">Structure</Link>
            <Link href="/news" className="hover:text-gray-300 transition">News</Link>
            <Link href="/contactus" className="hover:text-gray-300 transition">Contact Us</Link>
          </nav>
          <div className="flex space-x-4 items-center">
            <input type="text" placeholder="Search..." className="text-sm px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <button className="bg-white text-red-800 py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
              <Link href="/login">Login</Link>
            </button>
          </div>
        </div>
      </header>
    );
};