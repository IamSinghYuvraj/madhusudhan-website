"use client";

import type React from "react";
import type { StaticImageData } from "next/image";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  Shield,
  Leaf,
  Play,
  Heart,
  Clock,
  Globe,
  MapPin,
  Factory,
  Users,
  ChevronRight,
} from "lucide-react";
import { ClientLogos } from "@/components/client-logos";
import GlobalPresence from "@/components/globalpresence";
import ContactUs from "@/components/contactus";
import AnimatedSectionPage from "@/components/animation";

// Import images from the assets folder
import Machine1 from "@/assests/Home-machine1.jpg";
import Machine2 from "@/assests/Home-machine2.jpg";
import Machine3 from "@/assests/Home-machine3.jpg";
import WaterSoftener from "@/assests/stainless-steel-water-softeners.jpg";
import Ro from "@/assests/commercial-reverse-osmosis-units.jpg";
import DM from "@/assests/DM .jpg";
import FillingMachineOperation from "@/assests/Filling Machine Operation.jpg";
import BOPPMachine from "@/assests/BOPP Machine.jpg";
import CompleteMineralWaterProject from "@/assests/Complete Mineral Water Project.jpg";

// Define types for the data structures
interface HeroImage {
  image: StaticImageData;
  alt: string;
}

interface FeaturedProduct {
  title: string;
  image: StaticImageData;
  description: string;
}

interface FeaturedVideo {
  title: string;
  thumbnail: StaticImageData;
  description: string;
}

interface GlobalStat {
  icon: JSX.Element;
  count: number;
  label: string;
}

// Update the heroImages array to use imported images
const heroImages: HeroImage[] = [
  {
    image: Machine1,
    alt: "Water treatment facility",
  },
  {
    image: Machine2,
    alt: "Industrial water system",
  },
  {
    image: Machine3,
    alt: "Water purification plant",
  },
];

const featuredProducts: FeaturedProduct[] = [
  {
    title: "Water Softeners",
    image: WaterSoftener,
    description: "Industrial and commercial water softening systems",
  },
  {
    title: "RO Systems",
    image: Ro,
    description: "Advanced reverse osmosis systems",
  },
  {
    title: "DM Plants",
    image: DM,
    description: "Demineralization plants for pure water",
  },
];

const featuredVideos: FeaturedVideo[] = [
  {
    title: "Complete Mineral Water Project",
    thumbnail: CompleteMineralWaterProject,
    description:
      "Step-by-step guide to setting up a complete mineral water project",
  },
  {
    title: "BOPP Machine",
    thumbnail: BOPPMachine,
    description: "Explore the features and applications of the BOPP machine.",
  },
  {
    title: "Filling Machine Operation",
    thumbnail: FillingMachineOperation,
    description: "Learn how to operate the filling machine efficiently",
  },
];

// CountUp Component with TypeScript
const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const globalStats: GlobalStat[] = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      count: 45,
      label: "Countries",
    },
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      count: 1200,
      label: "Plants Installed",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      count: 3500,
      label: "Clients Worldwide",
    },
  ];

  

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        {heroImages.map((image, index) => (
          <div
            key={image.alt}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.image || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover brightness-50"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/30" />
        <div className="container relative flex min-h-screen items-center pt-20">
          <div className="max-w-2xl animate-slide-in pl-5">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Pure Water,
              <br />
              <span className="text-accent">Perfectly Engineered</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Leading manufacturer of water treatment and purification systems,
              serving industries worldwide with innovative solutions
            </p>
            <div className="mt-8 flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/products">Our Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-gray-400 hover:text-gray-800"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AnimatedSectionPage>
        <section className="w-full py-24 bg-gradient-to-br from-white via-gray-50 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Story Text */}
              <div className="flex-1">
                <div className="text-center md:text-left mb-10">
                  <h2 className="text-3xl font-bold mb-4">About Us</h2>
                  <div className="w-16 h-1 bg-primary mx-auto md:mx-0"></div>
                </div>
                <div className="prose prose-lg mx-auto md:mx-0">
                  <p>
                  Madhusudan Aqua Industries, established in 2021, is a professionally managed company engaged in manufacturing, supplying, exporting, and servicing a wide range of water treatment solutions.
                 Our offerings include modern Water Treatment Plants, Reverse Osmosis (RO) Units, Demineralized Water Plants, Water Softening Units, Ozonation Systems, Desalination Plants, and complete Mineral Water Projects.
                 We also provide comprehensive spare parts and equipment for Water Treatment Plants, such as all types of cartridges and filters, membranes (BW, SW, UF, NF), resins, filter media (sand and carbon), pressure gauges and switches, SS fittings, and essential water treatment chemicals including antiscalants, Gramacid, and citric acid.

                 </p>
                  <div className="mt-6 text-center md:text-left">
                    <Link
                      href="/about"
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-70"></div>
                  <Image
                    src={Machine1 || "/placeholder.svg"}
                    alt="Our Story"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSectionPage>

      {/* Global Presence Section */}
      <AnimatedSectionPage>
        <section className="w-full py-24 bg-gradient-to-tl from-white via-primary/5 to-accent/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent"></div>
          <div className="absolute -left-32 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center"></div>
            <GlobalPresence />
          </div>
        </section>
      </AnimatedSectionPage>

      {/* 6 Reasons to Choose Us Section */}
      <AnimatedSectionPage>
        <section className="w-full py-24 bg-gradient-to-br from-white via-gray-50 to-primary/10 relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                6 Reasons to Choose Us
              </h2>
              <p className="mt-4 text-muted-foreground">
                Discover why we are the preferred choice for water treatment
                solutions
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Sparkles className="h-8 w-8" />,
                  title: "Advanced Technology",
                  description:
                    "State-of-the-art water treatment solutions using cutting-edge technology for optimal performance",
                  color: "from-blue-500 to-purple-600",
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Quality Assurance",
                  description:
                    "Rigorous quality control and testing procedures to ensure reliable and efficient water treatment",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  icon: <Leaf className="h-8 w-8" />,
                  title: "Eco-Friendly",
                  description:
                    "Sustainable solutions that minimize environmental impact while maximizing efficiency",
                  color: "from-yellow-500 to-amber-600",
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Customer-Centric",
                  description:
                    "We prioritize customer satisfaction with personalized solutions and dedicated support",
                  color: "from-red-500 to-pink-600",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Timely Delivery",
                  description:
                    "We ensure on-time delivery of products and services to meet your project deadlines",
                  color: "from-indigo-500 to-blue-600",
                },
                {
                  icon: <Globe className="h-8 w-8" />,
                  title: "Global Standards",
                  description:
                    "Our products and services meet international quality and environmental standards",
                  color: "from-purple-500 to-indigo-600",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  ></div>
                  <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="relative z-10 transition-all duration-300 group-hover:translate-y-[-0.5rem]">
                    <div
                      className={`inline-flex p-3 rounded-full bg-gradient-to-br ${card.color} text-white shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSectionPage>

      {/* Featured Products Section */}
      <AnimatedSectionPage>
        <section className="w-full py-24 bg-gradient-to-tr from-muted via-muted/50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute -left-32 top-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-32 bottom-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="mt-4 text-muted-foreground">
                Explore our range of high-quality water treatment solutions
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <Link key={product.title} href="/products" className="group">
                  <Card className="overflow-hidden transition-transform hover:scale-105 border-0 shadow-lg relative bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative aspect-video">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader className="relative">
                      <CardTitle>{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground">
                        {product.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSectionPage>

      {/* Featured Videos Section */}
      <AnimatedSectionPage>
        <section className="w-full py-24 bg-gradient-to-bl from-white via-gray-50 to-primary/5 relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Featured Videos</h2>
              <p className="mt-4 text-muted-foreground">
                Watch our product demonstrations and installation guides
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredVideos.map((video) => (
                <Link key={video.title} href="/videos" className="group">
                  <Card className="overflow-hidden transition-transform hover:scale-105 border-0 shadow-lg relative bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white rounded-full blur-md opacity-30 scale-125"></div>
                          <Play className="h-12 w-12 text-white relative" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="relative">
                      <CardTitle>{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground">
                        {video.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="/videos">View All Videos</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSectionPage>

      {/* Client Logos Section */}
      <AnimatedSectionPage>
        <ClientLogos />
      </AnimatedSectionPage>

      {/* Get a Quote Section */}
      <ContactUs />

    </>
  );
};

export default Home;
