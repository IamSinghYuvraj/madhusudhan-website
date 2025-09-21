"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Monitor, Youtube, X, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import video thumbnails
import CompleteProject from "@/assests/Complete Mineral Water Project.jpg";
import BOPPMachine from "@/assests/BOPP Machine.jpg";
import FillingMachine from "@/assests/Filling Machine Operation.jpg";
import ROVideo from "@/assests/Ro-img1.jpg";
import DMPlant from "@/assests/DM .jpg";
import WaterSoftener from "@/assests/Water-Softening-Plant.jpg";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: any;
  type: "youtube" | "local";
  url?: string; // For YouTube videos
  videoSrc?: string; // For local videos
}

const videos: Video[] = [
  {
    id: "1",
    title: "Complete Mineral Water Project Setup",
    description: "Comprehensive guide to setting up a complete mineral water production facility",
    thumbnail: CompleteProject,
    type: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "2", 
    title: "BOPP Machine Operation",
    description: "Learn how to operate and maintain BOPP labeling machines efficiently",
    thumbnail: BOPPMachine,
    type: "local",
    videoSrc: "/assests/Complete Project.mp4"
  },
  {
    id: "3",
    title: "Filling Machine Operation Guide",
    description: "Step-by-step guide for operating filling machines safely and efficiently",
    thumbnail: FillingMachine,
    type: "youtube", 
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "4",
    title: "RO Plant Installation Process",
    description: "Complete installation and commissioning process for RO plants",
    thumbnail: ROVideo,
    type: "local",
    videoSrc: "/assests/Ro-video.mp4"
  },
  {
    id: "5",
    title: "DM Plant Maintenance",
    description: "Essential maintenance procedures for demineralization plants",
    thumbnail: DMPlant,
    type: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "6",
    title: "Water Softener Setup",
    description: "Installation and setup guide for water softening systems",
    thumbnail: WaterSoftener,
    type: "local", 
    videoSrc: "/assests/RFC -FIlling machine.mp4"
  }
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleVideoClick = (video: Video) => {
    if (video.type === "youtube" && video.url) {
      window.open(video.url, "_blank");
    } else if (video.type === "local") {
      setSelectedVideo(video);
      setIsPlaying(false);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-400/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Video
              <span className="block font-bold text-cyan-300"> Gallery</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Watch our product demonstrations, installation guides, and operation tutorials
            </p>
            
            {/* Video Type Legend */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Youtube className="w-4 h-4 text-red-400" />
                YouTube Demos
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Monitor className="w-4 h-4 text-blue-400" />
                Interactive Videos
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-all duration-300 transform scale-90 group-hover:scale-100">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>

                    {/* Video Type Badge */}
                    <div className="absolute top-3 left-3">
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        video.type === "youtube" 
                          ? "bg-red-500 text-white" 
                          : "bg-blue-500 text-white"
                      }`}>
                        {video.type === "youtube" ? (
                          <Youtube className="w-3 h-3" />
                        ) : (
                          <Monitor className="w-3 h-3" />
                        )}
                        {video.type === "youtube" ? "YouTube" : "Interactive"}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {video.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {video.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl mx-4 bg-black rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Header */}
              <div className="flex items-center justify-between p-4 bg-gray-900 text-white">
                <h3 className="text-lg font-semibold truncate mr-4">
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <video
                  className="w-full h-full"
                  controls={isPlaying}
                  muted={isMuted}
                  poster={selectedVideo.thumbnail?.src}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={selectedVideo.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Controls Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button
                      onClick={togglePlay}
                      className="bg-white/20 backdrop-blur-md rounded-full p-6 hover:bg-white/30 transition-all duration-300"
                    >
                      <Play className="w-12 h-12 text-white ml-1" />
                    </button>
                  </div>
                )}

                {/* Volume Control */}
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={toggleMute}
                    className="bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-all duration-300"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>

              {/* Video Description */}
              <div className="p-4 bg-gray-900 text-white">
                <p className="text-sm text-gray-300">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}