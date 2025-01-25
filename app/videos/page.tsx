"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
import { Play, Search } from "lucide-react";

// Import the static hero image
import VideoHero from "@/app/assests/video-hero.jpg"; // Update the path to your image

const videos = [
  {
    title: "Water Softener Installation Guide",
    thumbnail:
      "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "dQw4w9WgXcQ",
    description: "Step-by-step guide for installing industrial water softeners",
    category: "Installation",
  },
  // Add 19 more videos here...
];

const categories = [
  "All",
  "Installation",
  "Maintenance",
  "Operation",
  "Overview",
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = videos.filter(
    (video) =>
      (selectedCategory === "All" || video.category === selectedCategory) &&
      (video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      {/* Hero Section with Static Image */}
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src={VideoHero} // Use the imported static image
            alt="Product videos"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/30" />
        <div className="container relative flex min-h-screen items-center pt-20">
          <div className="max-w-2xl animate-slide-in pl-5">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Watch Our
              <br />
              <span className="text-accent">Videos</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Explore our product demonstrations, installation guides, and
              maintenance tips
            </p>
          </div>
        </div>
      </section>

      {/* Video Cards Section */}
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
                  placeholder="Search videos..."
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                />
              </Command>
            </div>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => (
              <Card
                key={video.title}
                className="overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100">
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
