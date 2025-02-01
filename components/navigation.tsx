"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useTranslationStore, type Language } from "@/lib/translations";
import Image from "next/image";
import Logo from "@/app/assests/madhu.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Videos", href: "/videos" },
  { name: "Contact", href: "/contact" },
];

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "zh", name: "中文" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "ar", name: "العربية" },
  { code: "bn", name: "বাংলা" },
  { code: "pt", name: "Português" },
  { code: "ru", name: "Русский" },
  { code: "ur", name: "اردو" },
  { code: "ja", name: "日本語" },
  { code: "de", name: "Deutsch" },
  { code: "ko", name: "한국어" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { currentLanguage, setLanguage } = useTranslationStore();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-400 bg-black", // Black background
        isScrolled ? "bg-black/90" : "bg-black" // Adjust opacity on scroll
      )}
    >
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div
            className={cn(
              "pl-10 h-20 w-auto transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            <Image
              src={Logo}
              alt="Ma Aqua Industries Logo"
              width={200}
              height={300}
              className="h-full w-auto"
            />
          </div>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium transition-colors", // Added transition-colors for smooth hover effect
                pathname === item.href
                  ? isScrolled
                    ? "text-blue-500 hover:text-white" // Blue when scrolled, white on hover
                    : "text-blue-500 hover:text-white" // Blue at rest, white on hover
                  : isScrolled
                  ? "text-blue-500 hover:text-white" // Blue when scrolled, white on hover
                  : "text-blue-500 hover:text-white" // Blue at rest, white on hover
              )}
            >
              {item.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "transition-colors text-blue-500 hover:text-white", // Blue at rest, white on hover
                  isScrolled
                    ? "hover:bg-accent/10"
                    : "hover:bg-white/10"
                )}
              >
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => setLanguage(language)}
                  className={cn(
                    "cursor-pointer",
                    currentLanguage.code === language.code && "bg-accent/10"
                  )}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text visibility */}

      {/* Hero Content - Centered */}
      <div className="container relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">
          Pure Water, <br />
          Clean Future
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Leading manufacturer of water treatment and purification systems, serving industries across India with innovative solutions.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/products">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
              Our Products
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-transparent border border-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}