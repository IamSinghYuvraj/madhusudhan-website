import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className=" m-5">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-auto w-auto text-accent" />
                <div>
                  <p className="text-sm text-white/60">
                    Gala No.5, Bld. No. 6, Parsawanath Indl. Est., Kolekar Pada,
                    Waliv Village, Vasai East,Vasai - 401208, Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-white/60">
                    Email: madhusudanaqua.ind@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-white/60">
                    Mobile No.: +91 9820142424
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-white/60 hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-sm text-white/60 hover:text-white"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div className="space-y-6">
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
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Madhusudan Aqua Industries. All
              rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-white/60 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
