import { Droplet, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <Droplet className="h-6 w-6" />
              <span className="font-bold">Maia Aqua Industries</span>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Leading manufacturer of water treatment and purification systems
              in India, committed to delivering innovative solutions for a
              sustainable future.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="mt-1 text-sm text-white/60">
                    Plot No. 5201, Phase IV, GIDC
                    <br />
                    Vatva, Ahmedabad - 382445
                    <br />
                    Gujarat, India
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a
                    href="tel:+919825008321"
                    className="mt-1 block text-sm text-white/60 transition-colors hover:text-white"
                  >
                    +91 98250 08321
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:info@maiaquaind.com"
                    className="mt-1 block text-sm text-white/60 transition-colors hover:text-white"
                  >
                    info@maiaquaind.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Our Location</h3>
            <div className="mt-4 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7525.735189218974!2d72.872071!3d19.418126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a2bdb82b69%3A0x45cb48da14592a85!2sMadhusudan%20Aqua%20Industries!5e0!3m2!1sen!2sin!4v1737712957125!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Madhusudan Aqua Industries. All
              rights reserved.
            </p>
            <div className="flex space-x-6">
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
