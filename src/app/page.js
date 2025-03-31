import React from 'react';
import Head from 'next/head';
import Navbar from "./components/Navbar";
import PartnerSlider from './components/PartnerSlider';
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jasa Lawyer - Beranda</title>
        <meta name="description" content="Layanan jasa hukum terpercaya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        {/* Hero Section dengan Video Background */}
        <div className="relative h-screen">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-4 text-white">
              <h1 className="text-5xl font-bold mb-4">Solusi Hukum Terpercaya</h1>
              <p className="text-xl mb-8">Kami menyediakan layanan hukum profesional untuk kebutuhan pribadi dan bisnis Anda</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                Konsultasi Sekarang
              </button>
            </div>
          </div>
        </div>
        
        {/* Pendampingan Hukum Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pendampingan Hukum</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Hukum Bisnis</h3>
                <p>Kami membantu perusahaan Anda mengatasi berbagai masalah hukum bisnis, mulai dari pendirian usaha, kontrak, hingga sengketa dagang.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Hukum Pidana</h3>
                <p>Tim pengacara kami siap memberikan pendampingan untuk kasus-kasus pidana dengan pendekatan yang profesional dan solusi terbaik.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Hukum Perdata</h3>
                <p>Dapatkan bantuan hukum untuk masalah perdata seperti sengketa tanah, warisan, dan perjanjian dengan pendekatan yang komprehensif.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partner Slider */}
        <PartnerSlider />
      </main>

      <Footer />
    </div>
  );
}