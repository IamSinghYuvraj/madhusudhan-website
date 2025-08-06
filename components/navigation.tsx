
// "use client"

// import * as React from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Menu, ChevronDown } from "lucide-react"
// import Image from "next/image"
// import Logo from "@/assests/madhu.png"
// import { motion } from "framer-motion"

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   {
//     name: "Products",
//     href: "/products",
//     hasDropdown: true,
//     dropdownItems: [
//       { name: "Mineral Water Plants", href: "/products/mineral-water-plants" },
//       { name: "RO Systems", href: "/products/ro-systems" },
//       { name: "Water Softeners", href: "/products/water-softeners" },
//       { name: "DM Plants", href: "/products/dm-plants" },
//       { name: "Filling Machines", href: "/products/filling-machines" },
//     ],
//   },
//   { name: "Videos", href: "/videos" },
//   { name: "Contact", href: "/contact" },
// ]

// export function Navigation() {
//   const pathname = usePathname()
//   const [isScrolled, setIsScrolled] = React.useState(false)
//   const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
//   const [borderStyle, setBorderStyle] = React.useState({ width: 0, left: 0, opacity: 0 })
//   const navRefs = React.useRef<{ [key: string]: HTMLElement | null }>({})
//   const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Update border position for current page
//   React.useEffect(() => {
//     const currentNavItem = navigation.find(item => 
//       item.href === pathname || (item.hasDropdown && pathname.startsWith("/products"))
//     )
//     if (currentNavItem) {
//       updateBorderPosition(currentNavItem.href)
//     }
//   }, [pathname])

//   const updateBorderPosition = (href: string) => {
//     const element = navRefs.current[href]
//     if (element) {
//       const rect = element.getBoundingClientRect()
//       const parentRect = element.parentElement?.getBoundingClientRect() || { left: 0 }
//       setBorderStyle({
//         width: rect.width,
//         left: rect.left - parentRect.left,
//         opacity: 1,
//       })
//     }
//   }

//   return (
//     <motion.header
//       className={cn(
//         "fixed top-0 z-50 w-full transition-all duration-300",
//         isScrolled 
//           ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
//           : "bg-white/90 backdrop-blur-sm"
//       )}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex h-20 items-center justify-between">
          
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ duration: 0.2 }}
//             >
//               <Image
//                 src={Logo || "/placeholder.svg?height=80&width=160"}
//                 alt="Ma Aqua Industries Logo"
//                 width={160}
//                 height={80}
//                 className="h-16 w-auto"
//               />
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-10 relative">
//             {/* Animated Border */}
//             <motion.div
//               className="absolute bottom-0 h-0.5 bg-blue-600 rounded-full"
//               style={{
//                 width: `${borderStyle.width}px`,
//                 left: `${borderStyle.left}px`,
//               }}
//               animate={{
//                 opacity: borderStyle.opacity,
//                 width: borderStyle.width,
//                 left: borderStyle.left,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 30,
//               }}
//             />

//             {navigation.map((item) => (
//               <div
//                 key={item.href}
//                 className="relative"
//                 onMouseEnter={() => {
//                   if (timeoutRef.current) clearTimeout(timeoutRef.current)
//                   updateBorderPosition(item.href)
//                   if (item.hasDropdown) setOpenDropdown(item.name)
//                 }}
//                 onMouseLeave={() => {
//                   // Return border to current page
//                   const currentNavItem = navigation.find(navItem => 
//                     navItem.href === pathname || (navItem.hasDropdown && pathname.startsWith("/products"))
//                   )
//                   if (currentNavItem) {
//                     updateBorderPosition(currentNavItem.href)
//                   }
                  
//                   if (item.hasDropdown) {
//                     timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
//                   }
//                 }}
//               >
//                 {item.hasDropdown ? (
//                   <DropdownMenu open={openDropdown === item.name}>
//                     <DropdownMenuTrigger asChild>
//                       <motion.button
//                         ref={(el) => (navRefs.current[item.href] = el)}
//                         className={cn(
//                           "flex items-center gap-1 px-4 py-3 text-base font-medium rounded-lg transition-colors relative",
//                           pathname.startsWith("/products") 
//                             ? "text-blue-600 bg-blue-50" 
//                             : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
//                         )}
//                         whileHover={{ y: -1 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         {item.name}
//                         <motion.div
//                           animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <ChevronDown className="h-5 w-5" />
//                         </motion.div>
//                       </motion.button>
//                     </DropdownMenuTrigger>
                    
//                     <DropdownMenuContent
//                       className="w-64 mt-2 bg-white border shadow-lg rounded-lg"
//                       onMouseEnter={() => {
//                         if (timeoutRef.current) clearTimeout(timeoutRef.current)
//                         setOpenDropdown(item.name)
//                       }}
//                       onMouseLeave={() => {
//                         timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
//                       }}
//                     >
//                       {item.dropdownItems?.map((dropdownItem) => (
//                         <DropdownMenuItem key={dropdownItem.href} asChild>
//                           <Link
//                             href={dropdownItem.href}
//                             className="block px-5 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                             onClick={() => setOpenDropdown(null)}
//                           >
//                             {dropdownItem.name}
//                           </Link>
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ) : (
//                   <Link href={item.href}>
//                     <motion.div
//                       ref={(el) => (navRefs.current[item.href] = el)}
//                       className={cn(
//                         "px-4 py-3 text-base font-medium rounded-lg transition-colors relative",
//                         pathname === item.href 
//                           ? "text-blue-600 bg-blue-50" 
//                           : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
//                       )}
//                       whileHover={{ y: -1 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {item.name}
//                     </motion.div>
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Mobile Menu */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="ghost"
//                 size="lg"
//                 className="md:hidden"
//               >
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent 
//               className="w-64 bg-white border shadow-lg rounded-lg"
//               align="end"
//             >
//               {navigation.map((item) => (
//                 <React.Fragment key={item.href}>
//                   {item.hasDropdown ? (
//                     item.dropdownItems?.map((dropdownItem) => (
//                       <DropdownMenuItem key={dropdownItem.href} asChild>
//                         <Link
//                           href={dropdownItem.href}
//                           className="block px-5 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                         >
//                           {dropdownItem.name}
//                         </Link>
//                       </DropdownMenuItem>
//                     ))
//                   ) : (
//                     <DropdownMenuItem asChild>
//                       <Link
//                         href={item.href}
//                         className="block px-5 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                       >
//                         {item.name}
//                       </Link>
//                     </DropdownMenuItem>
//                   )}
//                 </React.Fragment>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </motion.header>
//   )
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
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Logo from "@/assests/madhu.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
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
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-10">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-16 w-auto">
            <Image
              src={Logo}
              alt="Ma Aqua Industries Logo"
              width={200}
              height={300}
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-6 relative">
          {/* Animated Capsule Background */}
          <div
            className="absolute h-10 bg-gradient-to-r from-blue-800/50 via-blue-600/50 to-blue-800/50 rounded-full transition-all duration-300 ease-out"
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
                  ? "text-blue-600"
                  : "text-black hover:text-blue-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="md:hidden text-black hover:text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white text-black shadow-lg rounded-lg">
            {navigation.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
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
      </section>
    </div>
  );
}