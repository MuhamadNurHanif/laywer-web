import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Alamat Perusahaan</h3>
            <p>Jl. Hukum No. 123</p>
            <p>Jakarta Selatan, DKI Jakarta</p>
            <p>Indonesia, 12345</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <p>Telepon: (021) 123-4567</p>
            <p>Email: info@namalawyeranda.com</p>
            <p>Whatsapp: +62 812-3456-7890</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Lokasi Kami</h3>
            <div className="h-48 w-full relative">
              {/* Google Maps iframe dapat ditambahkan di sini */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.29279663357!2d106.7588899!3d-6.2295712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c27bd450b3c8!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1648513711123!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p>© {new Date().getFullYear()} Nama Lawyer Anda. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
