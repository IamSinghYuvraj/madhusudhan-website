"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Search } from "lucide-react"

const videos = [
  {
    title: "Water Softener Installation Guide",
    thumbnail: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    videoId: "dQw4w9WgXcQ",
    description: "Step-by-step guide for installing industrial water softeners",
    category: "Installation"
  },
  // ... other videos
]

const categories = ["All", "Installation", "Maintenance", "Operation", "Overview"]

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredVideos = videos.filter(video =>
    (selectedCategory === "All" || video.category === selectedCategory) &&
    (video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <>
      <section className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold">Product Videos</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Watch our product demonstrations and installation guides
            </p>
            <div className="mt-8 flex w-full max-w-md gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
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
        </div>
      </section>

      {/* Rest of the existing video cards section */}
    </>
  )
}