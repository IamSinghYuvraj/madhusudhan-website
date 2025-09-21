

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assests/madhu.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4 relative">
            <div className="flex items-center justify-center md:justify-start relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-2xl rounded-full" />
              {/* Logo */}
              <div className="relative">
                <Image
                  src={Logo || "/placeholder.svg"}
                  alt="Madhusudan Aqua Industries Logo"
                  width={240}
                  height={240}
                  className="rounded-full"
                />
              </div>
            </div>
            <p className="text-sm text-white/70 relative z-10">
              Leading provider of aqua solutions, committed to quality and
              innovation.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm text-white/70">
                  Gala No.5, Bld. No. 6, Parsawanath Indl. Est., Kolekar Pada,
                  Waliv Village, Vasai East, Vasai - 401208, Maharashtra, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:madhusudanaqua.ind@gmail.com"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  madhusudanaqua.ind@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919820142424"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  +91 9820142424
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Products", "Videos", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Map */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Location</h3>
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7525.735189218974!2d72.872071!3d19.418126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a2bdb82b69%3A0x45cb48da14592a85!2sMadhusudan%20Aqua%20Industries!5e0!3m2!1sen!2sin!4v1737712957125!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Madhusudan Aqua Industries. All
              rights reserved.
            </p>
            <div className="flex space-x-4">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

