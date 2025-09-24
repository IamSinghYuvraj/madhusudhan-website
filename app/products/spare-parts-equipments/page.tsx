'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench, Package, Settings, Award, FileText, ZoomIn, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactUs from '@/components/contactus';

// Import product images
import SpareParts1 from '@/assests/Water-Treatment-System.jpg';
import SpareParts2 from '@/assests/Commercial-Water-Treatment-Plant.jpg';
import SpareParts3 from '@/assests/Sand-Water-Filter.jpg';

const features = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Complete Range',
    description: 'Comprehensive spare parts for all water treatment systems',
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Quality Components',
    description: 'Premium quality parts from trusted manufacturers',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Easy Installation',
    description: 'Designed for quick replacement and maintenance',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Reliable Supply',
    description: 'Consistent availability with fast delivery',
  },
];

const specifications = [
  { label: 'Cartridge Filters', value: 'All micron ratings available' },
  { label: 'RO Membranes', value: 'BW, SW, UF, NF types' },
  { label: 'Ion Exchange Resins', value: 'Cation, Anion, Mixed bed' },
  { label: 'Filter Media', value: 'Sand, Carbon, Anthracite' },
  { label: 'Pressure Components', value: 'Gauges, switches, valves' },
  { label: 'Fittings', value: 'SS 304/316 grade fittings' },
];

const productMedia = [
  { type: 'image', src: SpareParts1, alt: 'Water Treatment System Components' },
  { type: 'image', src: SpareParts2, alt: 'Commercial Water Treatment Parts' },
  { type: 'image', src: SpareParts3, alt: 'Sand Water Filter Components' },
];

export default function SparePartsEquipmentsPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-violet-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-400/30 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Spare Parts &
              <span className="block font-bold text-violet-300">Equipments (WTP)</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We supply a wide range of spare parts and equipment for water treatment plants, ensuring reliable operation and easy maintenance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-xl">
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
              <Image src={currentMedia.src} alt={currentMedia.alt} fill className="object-cover" />

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
                      index === currentMediaIndex ? 'bg-white' : 'bg-white/40'
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
              <Image src={currentMedia.src} alt={currentMedia.alt} fill className="object-contain" />
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

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Parts & Equipment Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to maintain and optimize your water treatment systems
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
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-violet-50">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Parts Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Available Parts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Antiscalant
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Pressure Gauges & Switches
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Dosing Pump Sets
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Rotameters (all capacities)
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  SS Adapters with TC (all sizes)
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  NRV (SS)
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Spun Cartridges (all sizes), Jumbo Spun, Special Jumbo XL Threaded, Pleated DOE & Code 7 Cartridges
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Bag Filters (all sizes)
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Valves: Air Release, Multiport, Ball, Butterfly, Sampling, Vent, Diaphragm
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Membranes (all sizes)
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Floaty, Pressure Tubes, MF Housings
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  UV Systems and Spare Parts
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-white">
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
                <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                RO, DM, Softener, and Mineral Water Plants
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                Beverage & process industries
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                OEM supply & plant maintenance
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Available Components Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Available Components</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive inventory of high-quality spare parts and equipment for all types of water treatment systems.
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
                    <span className="text-violet-600 font-semibold">{spec.value}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8"
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-lg"
                >
                  <a href="/pdf/spare-parts-equipments.pdf" download="MAI-Spare-Parts-Equipments.pdf">
                    <FileText className="w-5 h-5 mr-2" />
                    Download Complete Catalog
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}
