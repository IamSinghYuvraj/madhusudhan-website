// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Menu } from "lucide-react";
// import Image from "next/image";
// import Logo from "@/app/assests/madhu.png";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Products", href: "/products" },
//   { name: "Videos", href: "/videos" },
//   { name: "Contact", href: "/contact" },
// ];

// export function Navigation() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = React.useState(false);
//   const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
//   const [capsuleStyle, setCapsuleStyle] = React.useState({
//     width: 0,
//     left: 0,
//     opacity: 0,
//   });
//   const navRefs = React.useRef<{ [key: string]: HTMLElement | null }>({});

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const updateCapsulePosition = (href: string) => {
//     const element = navRefs.current[href];
//     if (element) {
//       const rect = element.getBoundingClientRect();
//       setCapsuleStyle({
//         width: rect.width,
//         left:
//           rect.left -
//           (element.parentElement?.getBoundingClientRect().left || 0),
//         opacity: 1,
//       });
//     }
//   };

//   const handleMouseEnter = (href: string) => {
//     setHoveredItem(href);
//     updateCapsulePosition(href);
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//     setCapsuleStyle((prev) => ({ ...prev, opacity: 0 }));
//   };

//   return (
//     <header
//       className={cn(
//         "fixed top-0 z-50 w-full transition-all duration-500",
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       )}
//     >
//       <div className="container flex h-20 items-center justify-between px-4 md:px-10">
//         <Link href="/" className="flex items-center space-x-2">
//           <div className="h-16 w-auto">
//             <Image
//               src={Logo}
//               alt="Ma Aqua Industries Logo"
//               width={200}
//               height={300}
//               className="h-full w-auto object-contain"
//             />
//           </div>
//         </Link>
//         <nav className="hidden md:flex flex-1 items-center justify-end space-x-6 relative">
//           {/* Animated Capsule Background */}
//           <div
//             className="absolute h-10 bg-gradient-to-r from-blue-800/50 via-blue-600/50 to-blue-800/50 rounded-full transition-all duration-300 ease-out"
//             style={{
//               width: `${capsuleStyle.width}px`,
//               left: `${capsuleStyle.left}px`,
//               opacity: capsuleStyle.opacity,
//             }}
//           />

//           {navigation.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               ref={(el) => (navRefs.current[item.href] = el)}
//               onMouseEnter={() => handleMouseEnter(item.href)}
//               onMouseLeave={handleMouseLeave}
//               className={cn(
//                 "px-6 py-2 text-lg font-medium transition-all duration-300 rounded-full relative",
//                 pathname === item.href
//                   ? "text-blue-600"
//                   : "text-black hover:text-blue-600"
//               )}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="outline"
//               className="md:hidden text-black hover:text-blue-600"
//             >
//               <Menu className="h-6 w-6" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="w-56 bg-white text-black shadow-lg rounded-lg">
//             {navigation.map((item) => (
//               <DropdownMenuItem key={item.href} asChild>
//                 <Link
//                   href={item.href}
//                   className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
//                 >
//                   {item.name}
//                 </Link>
//               </DropdownMenuItem>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   );
// }

// export default function HomePage() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center">
//       <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
//       <div className="container relative z-10 text-white text-center">
//         <h1 className="text-5xl font-bold mb-4">
//           Pure Water, <br />
//           Clean Future
//         </h1>
//         <p className="text-lg mb-8 max-w-2xl mx-auto">
//           Leading manufacturer of water treatment and purification systems,
//           serving industries across India with innovative solutions.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Link href="/products">
//             <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-full">
//               Our Products
//             </Button>
//           </Link>
//           <Link href="/contact">
//             <Button className="bg-transparent border border-white hover:bg-white hover:text-black px-8 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-full">
//               Contact Us
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
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
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import Logo from "@/app/assests/madhu.png";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Products", 
    href: "/products",
    hasDropdown: true,
    dropdownItems: [
      { name: "Mineral Water Plants", href: "/products/mineral-water-plants" },
      { name: "RO Systems", href: "/products/ro-systems" },
      { name: "Water Softeners", href: "/products/water-softeners" },
      { name: "DM Plants", href: "/products/dm-plants" },
      { name: "Filling Machines", href: "/products/filling-machines" },
      { name: "All Products", href: "/products" }
    ]
  },
  { name: "Videos", href: "/videos" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const [capsuleStyle, setCapsuleStyle] = React.useState({
    width: 0,
    left: 0,
    opacity: 0,
  });
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
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
        "fixed top-0 z-50 w-full transition-all duration-500 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
      )}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-10">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div 
            className="h-16 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={Logo}
              alt="Ma Aqua Industries Logo"
              width={200}
              height={300}
              className="h-full w-auto object-contain"
            />
          </motion.div>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-6 relative">
          {/* Animated Capsule Background */}
          <div
            className="absolute h-10 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 rounded-full transition-all duration-300 ease-out backdrop-blur-sm"
            style={{
              width: `${capsuleStyle.width}px`,
              left: `${capsuleStyle.left}px`,
              opacity: capsuleStyle.opacity,
            }}
          />

          {navigation.map((item) => (
            <div key={item.href} className="relative">
              {item.hasDropdown ? (
                <DropdownMenu 
                  open={openDropdown === item.name} 
                  onOpenChange={(open) => setOpenDropdown(open ? item.name : null)}
                >
                  <DropdownMenuTrigger asChild>
                    <button
                      ref={(el) => (navRefs.current[item.href] = el)}
                      onMouseEnter={() => handleMouseEnter(item.href)}
                      onMouseLeave={handleMouseLeave}
                      className={cn(
                        "flex items-center gap-1 px-6 py-2 text-lg font-medium transition-all duration-300 rounded-full relative",
                        pathname.startsWith('/products')
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        openDropdown === item.name ? "rotate-180" : ""
                      )} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-64 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl p-2"
                    align="center"
                    sideOffset={8}
                  >
                    {item.dropdownItems?.map((dropdownItem, index) => (
                      <React.Fragment key={dropdownItem.href}>
                        <DropdownMenuItem asChild>
                          <Link
                            href={dropdownItem.href}
                            className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200 cursor-pointer"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span className="font-medium">{dropdownItem.name}</span>
                          </Link>
                        </DropdownMenuItem>
                        {index === item.dropdownItems!.length - 2 && (
                          <DropdownMenuSeparator className="my-2 bg-gray-200" />
                        )}
                      </React.Fragment>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  ref={(el) => (navRefs.current[item.href] = el)}
                  onMouseEnter={() => handleMouseEnter(item.href)}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    "px-6 py-2 text-lg font-medium transition-all duration-300 rounded-full relative",
                    pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="md:hidden text-gray-700 hover:text-blue-600 border-gray-200 hover:border-blue-300"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-md text-gray-700 shadow-xl rounded-xl border border-gray-200">
            {navigation.map((item) => (
              <React.Fragment key={item.href}>
                {item.hasDropdown ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                      >
                        All {item.name}
                      </Link>
                    </DropdownMenuItem>
                    {item.dropdownItems?.slice(0, -1).map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.href} asChild>
                        <Link
                          href={dropdownItem.href}
                          className="block px-6 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors text-gray-600"
                        >
                          {dropdownItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                )}
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

