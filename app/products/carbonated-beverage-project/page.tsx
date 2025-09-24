"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, Zap, Settings, Award, ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactUs from "@/components/contactus";

// Import product images
import CarbonatedProject1 from "@/assests/Packaged-Drinking-Water-Plant.jpg";
import CarbonatedProject2 from "@/assests/Mineral-Water-Plants.jpg";
import CarbonatedProject3 from "@/assests/Complete Mineral Water Project.jpg";

const features = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Fully Automatic PLC-Controlled Systems",
    description: "Advanced automation for consistent quality"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "PET / Glass Bottle Compatibility",
    description: "Flexible packaging options"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "High-Capacity Carbonation Tanks",
    description: "Efficient CO2 integration systems"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Custom Flavor Support",
    description: "Versatile flavor mixing capabilities"
  }
];

const productMedia = [
  { type: "image", src: CarbonatedProject1, alt: "Carbonated Beverage Plant" },
  { type: "image", src: CarbonatedProject2, alt: "Beverage Production Line" },
  { type: "image", src: CarbonatedProject3, alt: "Complete Beverage Project" }
];

export default function CarbonatedBeverageProjectPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-400/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Carbonated Beverage
              <span className="block font-bold text-orange-300">Projects</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We offer complete turnkey projects for carbonated beverages (soda, soft drinks, flavored water). Our lines are designed for efficiency, hygiene, and flexibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-xl">
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
                {productMedia.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentMediaIndex ? "bg-white" : "bg-white/40"
                    }`}
                  />
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

      {/* Process Flow Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Process Flow</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">Raw Water Treatment</h3>
                  <p className="text-gray-600 text-sm">Complete water purification and preparation</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">Sugar Syrup Preparation</h3>
                  <p className="text-gray-600 text-sm">Precise syrup mixing and preparation</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">Mixing & Carbonation Unit</h3>
                  <p className="text-gray-600 text-sm">CO2 injection and flavor mixing</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">Bottle Rinsing, Filling, Capping</h3>
                  <p className="text-gray-600 text-sm">Automated RFC operations</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">Labeling, Packaging & Palletizing</h3>
                  <p className="text-gray-600 text-sm">Final packaging and preparation</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Carbonated water (soda)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Soft drinks (cola, lemon, orange)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Flavored beverages
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Features</h3>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <div className="text-orange-600">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capacity Range Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Capacity Range</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">Production Capacity</h3>
                <p className="text-gray-700 text-3xl font-bold">500 bottles/hour – 30,000 bottles/hour</p>
                <p className="text-gray-600 mt-4">Scalable solutions for businesses of all sizes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}