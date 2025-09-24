"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, Zap, Shield, Clock, Download, Play } from "lucide-react";
import { motion } from "framer-motion";
import ContactUs from "@/components/contactus";

// Import product images
import RFCMachine1 from "@/assests/Automatic Rinsing, Filling, and Capping Machine.jpg";
import RFCMachine2 from "@/assests/Fully-Auto-Pet-Bottle-Rinsing-Filling-Capping-Machine.jpg";
import RFCMachine3 from "@/assests/Semi-Auto-Jar-Rinsing-Filling-Capping-Machine.jpg";

const features = [
  {
    icon: <Cog className="w-6 h-6" />,
    title: "SS construction with food-grade contact parts",
    description: "Rinsing, filling, and capping in one integrated system"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "PLC-controlled automation",
    description: "Up to 12,000 bottles per hour production capacity"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "No-bottle-no-fill technology",
    description: "Food-grade materials with easy cleaning systems"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "High-speed rotary filling system",
    description: "Minimal downtime with robust construction"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Easy changeover for different bottle sizes",
    description: "Minimal downtime with robust construction"
  }
];

const specifications = [
  { label: "Capacity Range", value: "24 BPM (Bottles per minute) to 300 BPM" },
  { label: "Bottle Size", value: "Suitable for 200 ml – 2 L bottles" }
];

const productImages = [RFCMachine1, RFCMachine2, RFCMachine3];

export default function RFCMachinePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-400/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              RFC Machine
              <span className="block font-bold text-green-300">(Rinsing Filling Capping)</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Automatic Rinsing, Filling, and Capping (RFC) machines designed for packaged drinking water and beverages. Ensures hygienic, high-speed bottling operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-xl"
              >
                Get Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
              >
                <Download className="w-5 h-5 mr-2" />
                Brochure
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={productImages[currentImageIndex]}
                alt={`RFC Machine ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced RFC Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered for precision, speed, and reliability in beverage production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-green-50">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Applications</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Packaged drinking water (PET/Glass bottles)
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Carbonated beverages
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Flavored & functional drinks
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      

      {/* Specifications Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Built for high-volume production with precision engineering 
                and food-grade materials for optimal performance.
              </p>
              
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-green-600 font-semibold">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={RFCMachine2}
                  alt="RFC Machine Technical View"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}