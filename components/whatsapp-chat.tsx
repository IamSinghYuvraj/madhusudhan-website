"use client";

import WhatsAppIcon from "@/assests/whatsapp.png";
import { useState } from "react";
import Image from "next/image";

export default function WhatsAppChat() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "+919137885290";
  const message = "Hello! I'm interested in your water treatment solutions.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center hover:scale-110 transition-transform duration-300 rounded-full"
        style={{ width: "80px", height: "80px" }} // Increased button size
        aria-label="Chat on WhatsApp"
      >
        <Image
          src={WhatsAppIcon}
          alt="WhatsApp"
          className="rounded-full object-cover"
          width={72} // Bigger icon
          height={72}
        />

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-t-gray-800"></div>
          </div>
        )}
      </button>
    </div>
  );
}
