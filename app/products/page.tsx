"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Droplet, Filter, Gauge, Waves, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    title: "Water Softeners",
    category: "Treatment",
    description: "Industrial and commercial water softening systems for hard water treatment",
    icon: Droplet,
    image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
    features: [
      "Automatic regeneration",
      "High flow rates",
      "Minimal maintenance",
      "Custom sizes available"
    ],
    models: [
      "WS-1000i Industrial Softener",
      "WS-500c Commercial Softener",
      "WS-2000 Heavy Duty Softener"
    ]
  },
  // ... other products with categories
]

const categories = ["All", "Treatment", "Filtration", "Purification", "Industrial"]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = products.filter(product =>
    (selectedCategory === "All" || product.category === selectedCategory) &&
    (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.models.some(model => 
      model.toLowerCase().includes(searchQuery.toLowerCase())
    ))
  )

  return (
    <>
      <section className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold">Our Products</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Comprehensive range of water treatment solutions for industrial and commercial applications
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
                  placeholder="Search products..." 
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                />
              </Command>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the existing product cards section */}
    </>
  )
}