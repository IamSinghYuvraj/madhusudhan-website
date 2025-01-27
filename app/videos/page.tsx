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
    title: "Glass Bottle Filling and Capping Machine ",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "dQw4w9WgXcQ",
    description: "Learn how the glass bottle filling and capping machine works and its key features.",
    category: "Bottle Filling and Capping Solutions",
    verified: true
  },

  {
    title: "Automatic Shrink Wrapping Machine ",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "BVsOviXWpto",
    description: "Watch a demonstration of the automatic shrink wrapping machine in action.",
    category: "Packaging and Wrapping Solutions",
    verified: true
  },

  {
    title: "Semi-Automatic Bottle Blowing Machine ",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "dQw4w9WgXcQ",
    description: "Step-by-step guide to installing the semi-automatic bottle blowing machine.",
    category: "Bottle Blowing and Forming Machines",
    verified: true
  },

  {
    title: "Automatic PET Bottle Blowing Machine ",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "dQw4w9WgXcQ",
    description: "Essential maintenance tips for the automatic PET bottle blowing machine.",
    category: "Bottle Blowing and Forming Machines",
    verified: true
  },

  {
    title: "Semi-Automatic Shrink Wrapping ",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "dQw4w9WgXcQ",
    description: "Common issues and solutions for the semi-automatic shrink wrapping machine.",
    category: "Packaging and Wrapping Solutions",
    verified: true
  },

  {
    title: "Automatic Rinsing, Filling, and Capping Machine",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "dQw4w9WgXcQ",
    description: "Discover the features and benefits of the automatic rinsing, filling, and capping machine.",
    category: "Bottle Filling and Capping Solutions",
    verified: true
  },

  {
    title: "Blowing Machine Safety",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "cK0qKvXtqUM",
    description: "Important safety tips for operating the blowing machine.",
    category: "Bottle Blowing and Forming Machines",
    verified: true
  },

  {
    title: "Filling Machine Operation ",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "Nt7xhoBdidI",
    description: "Learn how to operate the filling machine efficiently.",
    category: "Bottle Filling and Capping Solutions",
    verified: true
  },

  {
    title: "BOPP Machine ",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "8_EiTB6RWgg",
    description: "Explore the features and applications of the BOPP machine.",
    category: "Specialized Machinery",
    verified: true
  },

  {
    title: "Complete Mineral Water Project",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "UOJRNX0Xmxs",
    description: "Step-by-step guide to setting up a complete mineral water project.",
    category: "Complete Water Treatment and Packaging Projects",
    verified: true
  },

  // Add more videos here...
];

const categories = [
  "All",
  "Bottle Filling and Capping Solutions",
  "Bottle Blowing and Forming Machines",
  "Packaging and Wrapping Solutions",
  "Specialized Machinery",
  "Complete Water Treatment and Packaging Projects",
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

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

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
                className="overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                onClick={() => handleVideoClick(video.videoId)}
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
                  <CardTitle>
                    {video.title} {video.verified && <span className="text-green-500">✔️</span>}
                  </CardTitle>
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