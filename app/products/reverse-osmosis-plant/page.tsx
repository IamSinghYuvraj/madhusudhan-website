"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Filter, Gauge, Settings, ZoomIn, ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactUs from "@/components/contactus";

// Import product images
import ROPlant1 from "@/assests/Reverse-Osmosis-Plant.jpg";
import ROPlant2 from "@/assests/Commercial-Reverse-Osmosis-Plant.jpg";
import ROPlant3 from "@/assests/FRP-RO-Plant.jpg";
import ROPlant4 from "@/assests/Ro-img1.jpg";
import ROPlant5 from "@/assests/Ro-img2.jpg";
import ROPlant6 from "@/assests/Ro-img3.jpg";

const features = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Stainless Steel / FRP Construction",
    description: "Durable materials ensuring long-lasting performance"
  },
  {
    icon: <Filter className="w-6 h-6" />,
    title: "Energy-Efficient Membranes",
    description: "Advanced membrane technology for optimal efficiency"
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "High Recovery Rate",
    description: "Up to 70% water recovery with minimal waste"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "PLC-Controlled Automation",
    description: "Fully automated operation with intelligent controls"
  }
];

const specifications = [
  { capacity: "250 LPH", recoveryRate: "65%", tdsReduction: "95-98%", powerRequirement: "1.5 HP", outputQuality: "<50 ppm" },
  { capacity: "500 LPH", recoveryRate: "68%", tdsReduction: "95-98%", powerRequirement: "2.5 HP", outputQuality: "<50 ppm" },
  { capacity: "1000 LPH", recoveryRate: "70%", tdsReduction: "95-98%", powerRequirement: "5 HP", outputQuality: "<50 ppm" },
  { capacity: "5000 LPH", recoveryRate: "70%", tdsReduction: "95-98%", powerRequirement: "10 HP", outputQuality: "<50 ppm" },
  { capacity: "10,000 LPH", recoveryRate: "70%", tdsReduction: "95-98%", powerRequirement: "15 HP", outputQuality: "<50 ppm" }
];

interface ImageMedia {
  type: "image";
  src: StaticImageData;
  alt: string;
}

type Media = ImageMedia;

const productMedia: Media[] = [
  { type: "image", src: ROPlant1, alt: "Industrial RO Plant" },
  { type: "image", src: ROPlant2, alt: "Commercial RO Plant" },
  { type: "image", src: ROPlant3, alt: "FRP RO Plant" },
  { type: "image", src: ROPlant5, alt: "RO System Components" },
  { type: "image", src: ROPlant6, alt: "RO Plant Installation" }
];

export default function ReverseOsmosisPlantPage() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % productMedia.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + productMedia.length) % productMedia.length);
  };

  const currentMedia = productMedia[currentMediaIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-400/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              RO Plants
              <span className="block font-bold text-cyan-300">(Reverse Osmosis Systems)</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Reverse Osmosis (RO) is a proven technology for removing dissolved salts, impurities, and contaminants from raw water. We design industrial & commercial RO systems that deliver safe, clean, and reliable water.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-xl">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Media Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-black">
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt}
                fill
                className="object-cover"
              />
              
              {/* Navigation Controls */}
              <button
                onClick={prevMedia}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextMedia}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Zoom Button */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              {/* Media Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {productMedia.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentMediaIndex ? "bg-white" : "bg-white/40"
                    }`}
                  >
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsZoomOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Information Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Types of RO Plants</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Industrial RO Plants</h3>
                  <p className="text-gray-600">High-capacity systems for large-scale industries.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Commercial RO Plants</h3>
                  <p className="text-gray-600">Compact systems for hotels, schools, hospitals.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Packaged Drinking Water RO Systems</h3>
                  <p className="text-gray-600">Designed as per BIS/FSSAI norms.</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Packaged drinking water plants
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Beverages & food industry
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Hospitals & laboratories
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Process industries & power plants
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="text-blue-600">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Capacity</th>
                    <th className="px-6 py-4 text-left font-semibold">Recovery Rate</th>
                    <th className="px-6 py-4 text-left font-semibold">TDS Reduction</th>
                    <th className="px-6 py-4 text-left font-semibold">Power Requirement</th>
                    <th className="px-6 py-4 text-left font-semibold">Output Quality</th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}>
                      <td className="px-6 py-4 font-medium text-gray-900">{spec.capacity}</td>
                      <td className="px-6 py-4 text-gray-700">{spec.recoveryRate}</td>
                      <td className="px-6 py-4 text-gray-700">{spec.tdsReduction}</td>
                      <td className="px-6 py-4 text-gray-700">{spec.powerRequirement}</td>
                      <td className="px-6 py-4 text-gray-700">{spec.outputQuality}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}
