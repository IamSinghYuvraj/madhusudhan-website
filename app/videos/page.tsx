// "use client";

// import GlassBottleFillingandCappingMachine from "@/app/assests/Glass Bottle Filling and Capping Machine.jpg";
// import AutomaticShrinkWrappingMachine from "@/app/assests/Automatic Shrink Wrapping Machine.jpg";
// import SemiAutomaticBottleBlowingMachine from "@/app/assests/Semi Automatic Bottle Blowing Machine .jpg";
// import AutomaticPETBottleBlowingMachine from "@/app/assests/Automatic PET Bottle Blowing Machine .jpg";
// import SemiAutomaticShrinkWrapping from "@/app/assests/Semi Automatic Shrink Wrapping .jpg";
// import AutomaticRinsingFillingandCappingMachine from "@/app/assests/Automatic Rinsing, Filling, and Capping Machine.jpg";
// import BlowingMachineSafety from "@/app/assests/Blowing Machine Safety.jpg";
// import FillingMachineOperation from "@/app/assests/Filling Machine Operation.jpg";
// import BOPPMachine from "@/app/assests/BOPP Machine.jpg";
// import CompleteMineralWaterProject from "@/app/assests/Complete Mineral Water Project.jpg";
// import { useState } from "react";
// import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { supabase } from "@/lib/supabaseClient";
// import { Play, Search } from "lucide-react";

// // Import the static hero image
// import VideoHero from "@/app/assests/video-hero.jpg"; // Update the path to your image

// const videos = [
//   {
//     title: "Glass Bottle Filling and Capping Machine ",
//     thumbnail: GlassBottleFillingandCappingMachine,
//     videoId: "https://www.youtube.com/shorts/0GwRKmlieXY",
//     description:
//       "Learn how the glass bottle filling and capping machine works and its key features.",
//     category: "Bottle Filling and Capping Solutions",
//   },
//   {
//     title: "Automatic Shrink Wrapping Machine ",
//     thumbnail: AutomaticShrinkWrappingMachine,
//     videoId: "https://www.youtube.com/shorts/-Op7OLsNni8",
//     description:
//       "Watch a demonstration of the automatic shrink wrapping machine in action.",
//     category: "Packaging and Wrapping Solutions",
//   },
//   {
//     title: "Semi-Automatic Bottle Blowing Machine ",
//     thumbnail: SemiAutomaticBottleBlowingMachine,
//     videoId: "https://www.youtube.com/shorts/PS-JoQ8ZIu8",
//     description:
//       "Step-by-step guide to installing the semi-automatic bottle blowing machine.",
//     category: "Bottle Blowing and Forming Machines",
//   },
//   {
//     title: "Automatic PET Bottle Blowing Machine ",
//     thumbnail: AutomaticPETBottleBlowingMachine,
//     videoId: "https://www.youtube.com/shorts/J30c-WKndwQ",
//     description:
//       "Essential maintenance tips for the automatic PET bottle blowing machine.",
//     category: "Bottle Blowing and Forming Machines",
//   },
//   {
//     title: "Semi-Automatic Shrink Wrapping ",
//     thumbnail: SemiAutomaticShrinkWrapping,
//     videoId: "https://www.youtube.com/watch?v=BVsOviXWpto",
//     description:
//       "Common issues and solutions for the semi-automatic shrink wrapping machine.",
//     category: "Packaging and Wrapping Solutions",
//   },
//   {
//     title: "Automatic Rinsing, Filling, and Capping Machine",
//     thumbnail: AutomaticRinsingFillingandCappingMachine,
//     videoId: "https://youtube.com/shorts/VKIVqHZXqnE?si=9OSwsVnF4wBDjrY3",
//     description:
//       "Discover the features and benefits of the automatic rinsing, filling, and capping machine.",
//     category: "Bottle Filling and Capping Solutions",
//   },
//   {
//     title: "Blowing Machine Safety",
//     thumbnail: BlowingMachineSafety,
//     videoId: "https://www.youtube.com/watch?v=cK0qKvXtqUM",
//     description: "Important safety tips for operating the blowing machine.",
//     category: "Bottle Blowing and Forming Machines",
//   },
//   {
//     title: "Filling Machine Operation ",
//     thumbnail: FillingMachineOperation,
//     videoId: "https://www.youtube.com/watch?v=Nt7xhoBdidI",
//     description: "Learn how to operate the filling machine efficiently.",
//     category: "Bottle Filling and Capping Solutions",
//   },
//   {
//     title: "BOPP Machine ",
//     thumbnail: BOPPMachine,
//     videoId: "https://www.youtube.com/watch?v=8_EiTB6RWgg",
//     description: "Explore the features and applications of the BOPP machine.",
//     category: "Specialized Machinery",
//   },
//   {
//     title: "Complete Mineral Water Project",
//     thumbnail: CompleteMineralWaterProject,
//     videoId: "https://www.youtube.com/watch?v=UOJRNX0Xmxs&t=16s",
//     description:
//       "Step-by-step guide to setting up a complete mineral water project.",
//     category: "Complete Water Treatment and Packaging Projects",
//   },
//   // ... (existing video data)
// ];

// const categories = [
//   "All",
//   "Installation",
//   "Maintenance",
//   "Operation",
//   "Overview",
// ];

// export default function VideosPage() {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredVideos = videos.filter(
//     (video) =>
//       (selectedCategory === "All" || video.category === selectedCategory) &&
//       (video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         video.description.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   const handleVirtualTourClick = () => {
//     window.open("hhttps://www.youtube.com/watch?v=UOJRNX0Xmxs&t=16s", "_blank");
//   };

//   return (
//     <>
//       {/* Hero Section with Static Image */}
//       <section className="relative min-h-screen w-full">
//         <div className="absolute inset-0">
//           <Image
//             src={VideoHero}
//             alt="Product videos"
//             fill
//             className="object-cover brightness-50"
//             priority
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/30" />
//         <div className="container relative flex min-h-screen items-center pt-20">
//           <div className="max-w-2xl animate-slide-in pl-5">
//             <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
//               Watch Our
//               <br />
//               <span className="text-accent">Videos</span>
//             </h1>
//             <p className="mt-6 text-lg text-gray-200">
//               Explore our product demonstrations, installation guides, and
//               maintenance tips
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Video Cards Section */}
//       <section className="py-12 flex justify-center items-center">
//         <div className="container">
//           <div className="flex flex-col items-center text-center"></div>
//           <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredVideos.map((video) => (
//               <Card
//                 key={video.title}
//                 className="overflow-hidden transition-transform hover:scale-105"
//               >
//                 <a
//                   href={video.videoId}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <div className="relative aspect-video">
//                     <Image
//                       src={video.thumbnail}
//                       alt={video.title}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100">
//                       <Play className="h-12 w-12 text-white" />
//                     </div>
//                   </div>
//                 </a>
//                 <CardHeader>
//                   <CardTitle>{video.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">{video.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";
import { Play } from "lucide-react";

// Import the static hero image
import VideoHero from "@/app/assests/video-hero.jpg"; // Update the path to your image

// Define the type for the video data
interface Video {
  id: string;
  title: string;
  thumbnail_url: string;
  video_id: string;
  description: string;
  category: string;
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]); // Initialize with the correct type
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch videos from Supabase
  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase.from("video_cards").select("*");
      if (error) {
        console.error("Error fetching videos:", error);
      } else {
        setVideos(data as Video[]); // Cast the fetched data to the Video type
      }
    };

    fetchVideos();
  }, []);

  // Filter videos based on search query and category
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
            src={VideoHero}
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
      <section className="py-12 flex justify-center items-center">
        <div className="container">
          <div className="flex flex-col items-center text-center"></div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => (
              <Card
                key={video.id} // Use video.id as the key
                className="overflow-hidden transition-transform hover:scale-105"
              >
                <a
                  href={video.video_id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail_url} // Use thumbnail_url from Supabase
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </a>
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
