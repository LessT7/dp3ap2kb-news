"use client";
import Link from "next/link";
import backadmin from "../../../public/images/backadmin.jpg";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const [userData, setUserData] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/../api/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password.");
      }

      const data = await response.json(); // Ambil data dari API

      if (data.token) {
        localStorage.setItem("token", data.token); // Menyimpan token ke localStorage
        console.log("Token disimpan:", data.token); // Debugging token
        router.push("/admin")
      } else {
        setError("Failed to retrieve token. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      console.log("Token yang diterima:", token); // Log token untuk debugging
      const decoded = jwt.decode(token); // Decode token tanpa verifikasi secret
      setUserData(decoded); // Simpan data pengguna dari token
    } catch (error) {
      console.error("Token decoding failed:", error); // Debugging
      localStorage.removeItem("token");
      router.push("/");
    }
  }, []);
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 p-4"
        style={{ backgroundImage: `url(${backadmin.src})`, backgroundSize: "cover" }}>
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Welcome Administrator</h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email} onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password} onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-t from-red-500 to-black text-white p-3 rounded-lg hover:bg-gradient-to-t from-red-600 to-black transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-gray-500 text-center mt-4"> U are not Administrator ? <Link href="/" className="text-blue-500 hover:underline">Back ?</Link></p>
        </div>
      </div>
    );
  }
  