import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={120} height={60} />
          </Link>
        </div>
        <div className="flex space-x-6 ml-8">
          <Link href="/" className="text-gray-800 hover:text-blue-700 font-medium">
            Beranda
          </Link>
          <Link href="/tentang-kami" className="text-gray-800 hover:text-blue-700 font-medium">
            Tentang Kami
          </Link>
          <Link href="/layanan" className="text-gray-800 hover:text-blue-700 font-medium">
            Layanan
          </Link>
          <Link href="/hubungi-kami" className="text-gray-800 hover:text-blue-700 font-medium">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;