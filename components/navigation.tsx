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
import { Menu, ChevronDown } from 'lucide-react';
import Image from "next/image";
import Logo from "@/assests/madhu.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Complete Mineral Water Projects", href: "/products/complete-mineral-water-projects" },
      { name: "Mineral Water Plants", href: "/products/mineral-water-plants" },
      { name: "RO Systems", href: "/products/ro-systems" },
      { name: "Water Softeners", href: "/products/water-softeners" },
      { name: "DM Plants", href: "/products/dm-plants" },
      { name: "Filling Machines", href: "/products/filling-machines" },
      { name: "Ozonation System", href: "/products/ozonation-system" },
      { name: "Blowing Machine", href: "/products/blowing-machine" },
      { name: "Batch Coding Machine", href: "/products/batch-coding-machine" },
      { name: "BOPP Machine", href: "/products/bopp-machine" },
      { name: "Shrink Wrapping Machine", href: "/products/shrink-wrapping-machine" },
    ],
  },
  { name: "Videos", href: "/videos" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeItemHref, setActiveItemHref] = React.useState<string>("");
  const [capsuleStyle, setCapsuleStyle] = React.useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  const navContainerRef = React.useRef<HTMLDivElement>(null);
  const navRefs = React.useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const positionTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active item based on current pathname
  React.useEffect(() => {
    const activeItem = navigation.find(item =>
      item.href === pathname || (item.hasDropdown && pathname.startsWith("/products"))
    );
    
    if (activeItem) {
      setActiveItemHref(activeItem.href);
      // Only update position if not currently hovering
      if (!hoveredItem) {
        // Use a small delay to ensure DOM is ready
        setTimeout(() => {
          updateCapsulePosition(activeItem.href);
        }, 50);
      }
    }
  }, [pathname, hoveredItem]);

  const updateCapsulePosition = React.useCallback((href: string) => {
    const element = navRefs.current[href];
    const container = navContainerRef.current;
    
    if (element && container) {
      // Use requestAnimationFrame for smooth animation
      requestAnimationFrame(() => {
        const elementRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        setCapsuleStyle({
          width: elementRect.width + 16,
          left: elementRect.left - containerRect.left - 8,
          opacity: 1,
        });
      });
    }
  }, []);

  const handleMouseEnter = React.useCallback((href: string) => {
    // Clear any pending position updates
    if (positionTimeoutRef.current) {
      clearTimeout(positionTimeoutRef.current);
    }
    
    setHoveredItem(href);
    
    // Update position immediately for responsive feel
    updateCapsulePosition(href);
    
    const item = navigation.find(nav => nav.href === href);
    if (item?.hasDropdown) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setShowDropdown(true);
    }
  }, [updateCapsulePosition]);

  const handleMouseLeave = React.useCallback(() => {
    // Don't immediately clear hover state, use a small delay
    positionTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      
      // Return capsule to active item position
      if (activeItemHref && navRefs.current[activeItemHref]) {
        updateCapsulePosition(activeItemHref);
      } else {
        setCapsuleStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    }, 50);
    
    // Handle dropdown closing with longer delay
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  }, [activeItemHref, updateCapsulePosition]);

  const handleNavContainerMouseLeave = React.useCallback(() => {
    // Only trigger leave if we're actually leaving the nav container
    positionTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      
      if (activeItemHref && navRefs.current[activeItemHref]) {
        updateCapsulePosition(activeItemHref);
      } else {
        setCapsuleStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    }, 100);
  }, [activeItemHref, updateCapsulePosition]);

  const handleNavContainerMouseEnter = React.useCallback(() => {
    // Cancel any pending leave actions when re-entering
    if (positionTimeoutRef.current) {
      clearTimeout(positionTimeoutRef.current);
    }
  }, []);

  const handleDropdownMouseEnter = React.useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    if (positionTimeoutRef.current) {
      clearTimeout(positionTimeoutRef.current);
    }
    
    setShowDropdown(true);
    setHoveredItem('#');
    updateCapsulePosition('#');
  }, [updateCapsulePosition]);

  const handleDropdownMouseLeave = React.useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
      setHoveredItem(null);
      
      if (activeItemHref && navRefs.current[activeItemHref]) {
        updateCapsulePosition(activeItemHref);
      } else {
        setCapsuleStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    }, 300);
  }, [activeItemHref, updateCapsulePosition]);

  const handleNavClick = React.useCallback((href: string) => {
    setActiveItemHref(href);
    setShowDropdown(false);
    setHoveredItem(null);
  }, []);

  const toggleMobileProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileProductsOpen(!mobileProductsOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (positionTimeoutRef.current) {
        clearTimeout(positionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          isScrolled 
            ? "bg-transparent backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center bg-white/95 backdrop-blur-md rounded-full border border-gray-200/80 shadow-lg px-8 py-3 space-x-8 relative">
                <Link 
                  href="/"
                  className="flex items-center relative z-10"
                  onClick={() => handleNavClick("/")}
                >
                  <div className="h-12 w-auto">
                    <Image
                      src={Logo || "/placeholder.svg"}
                      alt="Ma Aqua Industries Logo"
                      width={150}
                      height={200}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </Link>

                <nav 
                  ref={navContainerRef}
                  className="flex items-center space-x-2 relative"
                  onMouseEnter={handleNavContainerMouseEnter}
                  onMouseLeave={handleNavContainerMouseLeave}
                >
                  {/* Animated Capsule */}
                  <div
                    className="absolute h-10 bg-gradient-to-r from-blue-600/20 via-blue-500/30 to-blue-600/20 rounded-full transition-all duration-300 ease-out border border-blue-300/30 shadow-sm pointer-events-none"
                    style={{
                      width: `${capsuleStyle.width}px`,
                      left: `${capsuleStyle.left}px`,
                      opacity: capsuleStyle.opacity,
                      transform: 'translateZ(0)',
                      willChange: 'transform, width, left, opacity',
                    }}
                  />
                  
                  {navigation.map((item) => (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.href)}
                    >
                      {item.hasDropdown ? (
                        <>
                          <div
                            ref={(el) => (navRefs.current[item.href] = el)}
                            className={cn(
                              "flex items-center gap-1 px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full relative z-10 cursor-pointer",
                              pathname.startsWith("/products")
                                ? "text-blue-600"
                                : "text-gray-700 hover:text-blue-600"
                            )}
                          >
                            {item.name}
                            <ChevronDown 
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                showDropdown && hoveredItem === item.href ? "rotate-180" : ""
                              )}
                            />
                          </div>
                          
                          {showDropdown && hoveredItem === item.href && (
                            <div
                              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                              onMouseEnter={handleDropdownMouseEnter}
                              onMouseLeave={handleDropdownMouseLeave}
                            >
                              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45"></div>
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.href}
                                  href={dropdownItem.href}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 mx-2 rounded-lg relative"
                                  onClick={() => {
                                    handleNavClick(item.href);
                                    setShowDropdown(false);
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          ref={(el) => (navRefs.current[item.href] = el)}
                          className={cn(
                            "px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full relative z-10",
                            pathname === item.href
                              ? "text-blue-600"
                              : "text-gray-700 hover:text-blue-600"
                          )}
                          onClick={() => handleNavClick(item.href)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Mobile Logo */}
            <Link href="/" className="flex md:hidden items-center">
              <div className="h-12 w-auto">
                <Image
                  src={Logo || "/placeholder.svg"}
                  alt="Ma Aqua Industries Logo"
                  width={120}
                  height={150}
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            {/* Mobile Menu */}
            <div className="relative md:hidden">
              <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-gray-700 hover:text-blue-600 border-gray-300 hover:border-blue-300"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-64 bg-white shadow-xl rounded-lg border border-gray-200 max-h-96 overflow-y-auto"
                  align="end"
                  side="bottom"
                >
                  {navigation.map((item) => (
                    <div key={item.href}>
                      {item.hasDropdown ? (
                        <>
                          <DropdownMenuItem asChild>
                            <button
                              className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors text-left"
                              onClick={toggleMobileProducts}
                            >
                              {item.name}
                              <ChevronDown 
                                className={cn(
                                  "h-4 w-4 transition-transform duration-200",
                                  mobileProductsOpen ? "rotate-180" : ""
                                )}
                              />
                            </button>
                          </DropdownMenuItem>
                          
                          {mobileProductsOpen && (
                            <div className="bg-gray-50 border-l-2 border-blue-200 ml-4">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <DropdownMenuItem key={dropdownItem.href} asChild>
                                  <Link
                                    href={dropdownItem.href}
                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                    onClick={closeMobileMenu}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <DropdownMenuItem asChild>
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors w-full"
                            onClick={closeMobileMenu}
                          >
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      )}
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="container relative z-10 text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Pure Water, <br />
            Clean Future
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Leading manufacturer of water treatment and purification systems,
            serving industries across India with innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/products/complete-mineral-water-projects">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-full shadow-lg hover:shadow-xl">
                Our Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
