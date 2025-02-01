"use client";

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
} from "lucide-react"; // Import additional icons   
import { ChatBot } from "@/components/chat-bot";
import { ClientLogos } from "@/components/client-logos";

// Import images from the assets folder
import Machine1 from "@/app/assests/Home-machine1.jpg";
import Machine2 from "@/app/assests/Home-machine2.jpg";
import Machine3 from "@/app/assests/Home-machine3.jpg";

import WaterSoftener from "@/app/assests/stainless-steel-water-softeners.jpg";
import Ro from "@/app/assests/commercial-reverse-osmosis-units.jpg";
import DM  from "app/assests/DM .jpg";

import FillingMachineOperation from "app/assests/Filling Machine Operation.jpg";
import BOPPMachine from "app/assests/BOPP Machine.jpg";
import CompleteMineralWaterProject from "app/assests/Complete Mineral Water Project.jpg";

// Update the heroImages array to use imported images
const heroImages = [
  {
    image: Machine1, // Use the imported image
    alt: "Water treatment facility",
  },
  {
    image: Machine2, // Use the imported image
    alt: "Industrial water system",
  },
  {
    image: Machine3, // Use the imported image
    alt: "Water purification plant",
  },
];

const featuredProducts = [
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
    image: DM ,
      
    description: "Demineralization plants for pure water",
  },
];

const featuredVideos = [
  {
    title: "Complete Mineral Water Project",
    thumbnail:
    CompleteMineralWaterProject,
    description: "Step-by-step guide to setting up a complete mineral water project",
  },
  {
    title: "BOPP Machine",
    thumbnail:
    BOPPMachine,
    description: "Explore the features and applications of the BOPP machine.",
  },
  {
    title: "Filling Machine Operation",
    thumbnail:
      FillingMachineOperation,
    description: "Learn how to operate the filling machine efficiently",
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen w-full">
        {heroImages.map((image, index) => (
          <div
            key={image.alt}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.image} // Use the imported image
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
              <span className="text-accent">Clean Future</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Leading manufacturer of water treatment and purification systems,
              serving industries across India with innovative solutions
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

      {/* New Section: 6 Reasons to Choose Us */}
      <section className="py-24 flex justify-center items-center">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">6 Reasons to Choose Us</h2>
            <p className="mt-4 text-muted-foreground">
              Discover why we are the preferred choice for water treatment
              solutions
            </p>
           </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Existing Cards */}
            <div className="group relative overflow-hidden rounded-2xl bg-primary p-8 text-black transition-transform hover:-translate-y-2">
              <div className="relative z-10">
                <Sparkles className="h-12 w-12 text-white" />
                <h3 className="mt-6 text-2xl font-bold text-black">Advanced Technology</h3>
                <p className="mt-4 text-black/80">
                  State-of-the-art water treatment solutions using cutting-edge
                  technology for optimal performance 
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-secondary p-8 text-white transition-transform hover:-translate-y-2">
              <div className="relative z-10">
                <Shield className="h-12 w-12 text-accent" />
                <h3 className="mt-6 text-2xl font-bold text-black">Quality Assurance</h3>
                <p className="mt-4 text-black/80">
                  Rigorous quality control and testing procedures to ensure
                  reliable and efficient water treatment
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-accent p-8 text-accent-foreground transition-transform hover:-translate-y-2">
              <div className="relative z-10">
                <Leaf className="h-12 w-12" />
                <h3 className="mt-6 text-2xl font-bold">Eco-Friendly</h3>
                <p className="mt-4 opacity-80">
                  Sustainable solutions that minimize environmental impact while
                  maximizing efficiency
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            {/* New Cards */}
            <div className="group relative overflow-hidden rounded-2xl bg-primary p-8 text-black transition-transform hover:-translate-y-2">
              <div className="relative z-10">
                <Heart className="h-12 w-12 text-white" />
                <h3 className="mt-6 text-2xl font-bold  text-black">Customer-Centric</h3>
                <p className="mt-4 text-black/80">
                  We prioritize customer satisfaction with personalized
                  solutions and dedicated support
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-secondary p-8 text-white transition-transform hover:-translate-y-2">
              <div className="relative z-10">
                <Clock className="h-12 w-12 text-accent" />
                <h3 className="mt-6 text-2xl font-bold text-black">Timely Delivery</h3>
                <p className="mt-4 text-black/80">
                  We ensure on-time delivery of products and services to meet
                  your project deadlines
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-accent p-8 text-accent-foreground transition-transform hover:-translate-y-2">
              <div className="relative z-10">
                <Globe className="h-12 w-12" />
                <h3 className="mt-6 text-2xl font-bold">Global Standards</h3>
                <p className="mt-4 opacity-80">
                  Our products and services meet international quality and
                  environmental standards
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-24 flex justify-center items-center">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="mt-4 text-muted-foreground">
              Explore our range of high-quality water treatment solutions
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Link key={product.title} href="/products" className="group">
                <Card className="overflow-hidden transition-transform hover:scale-105">
                  <div className="relative aspect-video">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
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

      <section className="py-24 flex justify-center items-center">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Featured Videos</h2>
            <p className="mt-4 text-muted-foreground">
              Watch our product demonstrations and installation guides
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((video) => (
              <Link key={video.title} href="/videos" className="group">
                <Card className="overflow-hidden transition-transform hover:scale-105">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{video.description}</p>
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

      <ClientLogos />

      <ChatBot />
    </>
  );
}
