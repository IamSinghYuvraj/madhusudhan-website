"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Cog, Award, Users, ZoomIn, ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactUs from "@/components/contactus";

// Import product images
import MineralWaterProject1 from "@/assests/Complete Mineral Water Project.jpg";
import MineralWaterProject2 from "@/assests/Mineral-Water-Plants.jpg";
import MineralWaterProject3 from "@/assests/Packaged-Drinking-Water-Plant.jpg";
import ProjectDiagram from "@/assests/COMPLETE PROJECT FLOW DIAGRAM.jpg";

const features = [
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Raw Water Treatment",
    description: "RO + UV + Ozonation for complete purification"
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Mineral Dosing System",
    description: "Precise mineral addition for optimal taste"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality Control Laboratory",
    description: "Complete lab setup for quality assurance"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Licensing & Regulatory Support",
    description: "Complete assistance with BIS, FSSAI compliance"
  }
];

const productMedia = [
  { type: "image", src: MineralWaterProject1, alt: "Complete Mineral Water Project" },
  { type: "image", src: MineralWaterProject2, alt: "Mineral Water Plants" },
  { type: "image", src: MineralWaterProject3, alt: "Packaged Drinking Water Plant" },
  { type: "video", src: "/assests/Complete Project.mp4", poster: ProjectDiagram, alt: "Complete Project Setup Video" },
  { type: "image", src: ProjectDiagram, alt: "Complete Project Flow Diagram" }
];

export default function CompleteMineralWaterProjectPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-400/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Turnkey Mineral Water
              <span className="block font-bold text-indigo-300">/ Packaged Drinking Water Projects</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We provide end-to-end turnkey packaged drinking water plants as per BIS, WHO & FSSAI standards – from raw water treatment to bottling & packaging.
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
              {currentMedia.type === "image" ? (
                <Image
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={currentMedia.poster?.src}
                >
                  <source src={currentMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              
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

              {/* Zoom Button (only for images) */}
              {currentMedia.type === "image" && (
                <button
                  onClick={() => setIsZoomOpen(true)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              )}

              {/* Media Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {productMedia.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                      index === currentMediaIndex ? "bg-white" : "bg-white/40"
                    }`}
                  >
                    {media.type === "video" && (
                      <Play className="w-2 h-2 text-black absolute top-0.5 left-0.5" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomOpen && currentMedia.type === "image" && (
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

      {/* Scope of Work Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Scope of Work</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="text-blue-600">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Scope</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Bottling line (PET/Glass) – Rinsing, Filling, Capping (RFC) machine
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Labeling, Shrink wrapping, Carton packaging
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capacity Range & Deliverables */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Capacity Range</h2>
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-blue-600 mb-2">Small</h3>
                      <p className="text-gray-700 text-lg">1000 LPH</p>
                      <p className="text-gray-600 text-sm mt-2">Ideal for local markets and small businesses</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-blue-600 mb-2">Medium</h3>
                      <p className="text-gray-700 text-lg">5000–20,000 LPH</p>
                      <p className="text-gray-600 text-sm mt-2">Perfect for regional distribution</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-blue-600 mb-2">Large</h3>
                      <p className="text-gray-700 text-lg">50,000+ LPH</p>
                      <p className="text-gray-600 text-sm mt-2">For large-scale commercial operations</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Deliverables</h2>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <strong>Plant machinery & layout design</strong>
                        <p className="text-sm text-gray-600 mt-1">Complete engineering and design services</p>
                      </div>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <strong>Installation & commissioning</strong>
                        <p className="text-sm text-gray-600 mt-1">End-to-end setup and testing</p>
                      </div>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <strong>Training of operators</strong>
                        <p className="text-sm text-gray-600 mt-1">Comprehensive staff training programs</p>
                      </div>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <strong>AMC & technical support</strong>
                        <p className="text-sm text-gray-600 mt-1">Ongoing maintenance and support services</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}