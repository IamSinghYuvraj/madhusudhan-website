"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Factory, Droplets, Filter, Wrench, Beaker, Zap, Shield, Package, Cog, FlaskConical, Award } from "lucide-react";
import { motion } from "framer-motion";
import ContactUs from "@/components/contactus";

// Import product images
import ROPlant from "@/assests/Reverse-Osmosis-Plant.jpg";
import DMPlant from "@/assests/DM .jpg";
import WaterSoftener from "@/assests/Water-Softening-Plant.jpg";
import SSVessel from "@/assests/Commercial-Water-Treatment-Plant.jpg";
import MineralWaterProject from "@/assests/Complete Mineral Water Project.jpg";
import CarbonatedProject from "@/assests/Packaged-Drinking-Water-Plant.jpg";
import DosingSystem from "@/assests/Chemical-Dosing-System.jpg";
import RFCMachine from "@/assests/Automatic Rinsing, Filling, and Capping Machine.jpg";
import Antiscalent from "@/assests/AntiScalent.jpg";
import SpareParts from "@/assests/Water-Treatment-System.jpg";

interface Product {
  id: string;
  title: string;
  description: string;
  image: any;
  icon: JSX.Element;
  href: string;
  color: string;
  hoverColor: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "Reverse Osmosis Plant (RO)",
    description: "Advanced RO systems for pure water production with high efficiency and reliability",
    image: ROPlant,
    icon: <Droplets className="w-8 h-8" />,
    href: "/products/reverse-osmosis-plant",
    color: "from-blue-500 to-cyan-500",
    hoverColor: "hover:from-blue-600 hover:to-cyan-600"
  },
  {
    id: "2", 
    title: "Demineralized Plant (DM)",
    description: "Ultra-pure water systems for pharmaceutical and electronics industries",
    image: DMPlant,
    icon: <Beaker className="w-8 h-8" />,
    href: "/products/demineralized-plant",
    color: "from-purple-500 to-indigo-500",
    hoverColor: "hover:from-purple-600 hover:to-indigo-600"
  },
  {
    id: "3",
    title: "Water Softening Plant", 
    description: "Efficient water softening solutions to prevent scale formation",
    image: WaterSoftener,
    icon: <Filter className="w-8 h-8" />,
    href: "/products/water-softening-plant",
    color: "from-emerald-500 to-teal-500",
    hoverColor: "hover:from-emerald-600 hover:to-teal-600"
  },
  {
    id: "4",
    title: "SS and MS Vessel/Tanks",
    description: "Specially fabricated stainless steel and mild steel vessels for various applications",
    image: SSVessel,
    icon: <Factory className="w-8 h-8" />,
    href: "/products/ss-ms-vessels",
    color: "from-gray-500 to-slate-500", 
    hoverColor: "hover:from-gray-600 hover:to-slate-600"
  },
  {
    id: "5",
    title: "Complete Mineral Water Project",
    description: "Turnkey mineral water projects from planning to commissioning",
    image: MineralWaterProject,
    icon: <Package className="w-8 h-8" />,
    href: "/products/complete-mineral-water-project",
    color: "from-blue-500 to-indigo-500",
    hoverColor: "hover:from-blue-600 hover:to-indigo-600"
  },
  {
    id: "6",
    title: "Complete Carbonated Beverage Project",
    description: "End-to-end carbonated beverage production solutions",
    image: CarbonatedProject,
    icon: <FlaskConical className="w-8 h-8" />,
    href: "/products/carbonated-beverage-project", 
    color: "from-orange-500 to-red-500",
    hoverColor: "hover:from-orange-600 hover:to-red-600"
  },
  {
    id: "7",
    title: "Dosing, Ozonation & UV System",
    description: "Advanced water treatment systems for disinfection and chemical dosing",
    image: DosingSystem,
    icon: <Zap className="w-8 h-8" />,
    href: "/products/dosing-ozonation-uv-system",
    color: "from-yellow-500 to-amber-500",
    hoverColor: "hover:from-yellow-600 hover:to-amber-600"
  },
  {
    id: "8",
    title: "Rinsing Filling Capping Machine (RFC)",
    description: "High-speed RFC machines for efficient bottle processing",
    image: RFCMachine,
    icon: <Cog className="w-8 h-8" />,
    href: "/products/rfc-machine",
    color: "from-green-500 to-emerald-500",
    hoverColor: "hover:from-green-600 hover:to-emerald-600"
  },
  {
    id: "9",
    title: "RO - Antiscalent",
    description: "Premium antiscalent chemicals for RO membrane protection",
    image: Antiscalent,
    icon: <Shield className="w-8 h-8" />,
    href: "/products/ro-antiscalent",
    color: "from-pink-500 to-rose-500",
    hoverColor: "hover:from-pink-600 hover:to-rose-600"
  },
  {
    id: "10",
    title: "Spare Parts / Equipments (WTP)",
    description: "Comprehensive spare parts and equipment for water treatment plants",
    image: SpareParts,
    icon: <Wrench className="w-8 h-8" />,
    href: "/products/spare-parts-equipments",
    color: "from-violet-500 to-purple-500",
    hoverColor: "hover:from-violet-600 hover:to-purple-600"
  }
];

export default function ProductsPage() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <>
      {/* Hero Section - No Images */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Our
              <span className="block font-bold text-accent"> Products</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of water treatment solutions, 
              engineered for excellence and built to last.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Factory className="w-4 h-4" />
                Industrial Solutions
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Droplets className="w-4 h-4" />
                Water Treatment
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Package className="w-4 h-4" />
                Complete Projects
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive water treatment solutions for every industry need
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={product.href}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${product.color} text-white shadow-lg`}>
                          {product.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <Button 
                          variant="ghost" 
                          className="p-0 h-auto text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-transform duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        
                        <div className={`w-12 h-1 bg-gradient-to-r ${product.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our premium water treatment solutions
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Premium Quality",
                description: "ISO certified manufacturing with highest standards",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Reliable Performance", 
                description: "Proven track record with 25+ years of expertise",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Energy Efficient",
                description: "Optimized designs for minimal power consumption",
                color: "from-yellow-500 to-amber-500"
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Expert Support",
                description: "24/7 technical support and maintenance services",
                color: "from-purple-500 to-indigo-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactUs />
    </>
  );
}