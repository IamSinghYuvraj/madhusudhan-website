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
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const [capsuleStyle, setCapsuleStyle] = React.useState({
    width: 0,
    left: 0,
    opacity: 0,
  });
  const navRefs = React.useRef<{ [key: string]: HTMLElement | null }>({});

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateCapsulePosition = (href: string) => {
    const element = navRefs.current[href];
    if (element) {
      const rect = element.getBoundingClientRect();
      setCapsuleStyle({
        width: rect.width,
        left:
          rect.left -
          (element.parentElement?.getBoundingClientRect().left || 0),
        opacity: 1,
      });
    }
  };

  const handleMouseEnter = (href: string) => {
    setHoveredItem(href);
    updateCapsulePosition(href);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setCapsuleStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-gradient-to-r from-blue-900/80 via-black/80 to-blue-900/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="pl-10 h-20 w-auto">
            <Image
              src={Logo}
              alt="Ma Aqua Industries Logo"
              width={200}
              height={300}
              className="h-full w-auto"
            />
          </div>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-6 relative">
          {/* Animated Capsule Background */}
          <div
            className="absolute h-10 bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-blue-600/20 rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${capsuleStyle.width}px`,
              left: `${capsuleStyle.left}px`,
              opacity: capsuleStyle.opacity,
            }}
          />

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => (navRefs.current[item.href] = el)}
              onMouseEnter={() => handleMouseEnter(item.href)}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "px-6 py-2 text-lg font-medium transition-all duration-300 rounded-full relative",
                pathname === item.href
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400"
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
                className="text-white hover:text-blue-400 transition-all duration-300 rounded-full p-2"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-gradient-to-b from-blue-900/95 to-black/95 backdrop-blur-lg border-blue-400/20"
            >
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => setLanguage(language)}
                  className={cn(
                    "cursor-pointer text-white hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300",
                    currentLanguage.code === language.code && "bg-blue-400/20"
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      <div className="container relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">
          Pure Water, <br />
          Clean Future
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Leading manufacturer of water treatment and purification systems,
          serving industries across India with innovative solutions.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/products">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-full">
              Our Products
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-transparent border border-white hover:bg-white hover:text-black px-8 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-full">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
