"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Droplet,
  Filter,
  Gauge,
  Waves,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Import the static hero image
import ProductHero from "@/app/assests/product-hero.jpg"; // Update the path to your image

const products = [
  {
    title: "Water Softeners",
    category: "Treatment",
    description:
      "Industrial and commercial water softening systems for hard water treatment",
    icon: Droplet,
    image:
      "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    features: [
      "Automatic regeneration",
      "High flow rates",
      "Minimal maintenance",
      "Custom sizes available",
    ],
    models: [
      "WS-1000i Industrial Softener",
      "WS-500c Commercial Softener",
      "WS-2000 Heavy Duty Softener",
    ],
  },
  // Add 19 more products here...
];

const categories = [
  "All",
  "Treatment",
  "Filtration",
  "Purification",
  "Industrial",
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.models.some((model) =>
          model.toLowerCase().includes(searchQuery.toLowerCase())
        ))
  );

  return (
    <>
      {/* Hero Section with Static Image */}
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src={ProductHero} // Use the imported static image
            alt="Water treatment products"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/30" />
        <div className="container relative flex min-h-screen items-center pt-20">
          <div className="max-w-2xl animate-slide-in pl-5">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Explore Our
              <br />
              <span className="text-accent">Products</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Discover our comprehensive range of water treatment solutions for
              industrial and commercial applications
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="mt-8 flex w-full max-w-md gap-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Command className="rounded-lg border shadow-md">
                <CommandInput
                  placeholder="Search products..."
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                />
              </Command>
            </div>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Card
                key={product.title}
                className="overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative aspect-video">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link
                      href={`/products/${product.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
