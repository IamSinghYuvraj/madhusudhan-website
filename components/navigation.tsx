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
import { Droplet, Globe } from "lucide-react";
import { useTranslationStore, type Language } from "@/lib/translations";
import Image from "next/image"; // Import the Image component
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
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-2">
          {/* Use the Image component for the logo */}
          <div
            className={cn(
              "pl-10 h-20 w-auto transition-colors", // Adjust height as needed
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            <Image
              src={Logo} // Path to your logo in the public folder
              alt="Ma Aqua Industries Logo"
              width={200} // Adjust width to fit your logo
              height={300} // Adjust height to fit your logo
              className="h-full w-auto" // Ensure the logo scales properly
            />
          </div>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === item.href
                  ? isScrolled
                    ? "text-foreground"
                    : "text-white"
                  : isScrolled
                  ? "text-foreground/60 hover:text-primary"
                  : "text-white/80 hover:text-white"
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
                  "transition-colors",
                  isScrolled
                    ? "text-foreground hover:bg-accent/10"
                    : "text-white hover:bg-white/10"
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
