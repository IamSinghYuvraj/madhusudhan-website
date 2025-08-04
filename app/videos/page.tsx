
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";
import { Play, Search, X, ArrowRight, CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import VideoHero from "@/assests/video-hero.jpg";

interface Video {
  id: string;
  title: string;
  thumbnail_url: string;
  video_id: string; // Use video_id directly as the YouTube URL
  description: string;
  category: string; // Use category instead of category_id
}

interface InquiryData {
  productName: string;
  buyingRequirements: string;
  emailAddress: string;
  mobileNumber: string;
}

const categories: string[] = [
  "All",
  "Mineral Water Plants and Machinery",
  "Industrial Filtration Systems",
  "Bottle Filling Machines",
  "Demineralisation Plant",
  "Filling Machine",
  "Reverse Osmosis Plant",
  "Jar Filling Machines",
  "Water Softening Plants",
  "Water Treatment Plant",
  "Water Treatment System",
  "Packaged Drinking Water",
  "Mineral Water Bottling Plant",
  "Liquid Filling Machine",
  "Water Purification Systems",
  "Activated Carbon Filter",
  "SS Storage Tanks",
  "Pumps and Dosing Systems",
  "Bottling Plant",
  "Turnkey Mineral Water Project",
  "Ro Plant",
  "Bopp Labeling Machine",
];

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [inquiryData, setInquiryData] = useState<InquiryData>({
    productName: "",
    buyingRequirements: "",
    emailAddress: "",
    mobileNumber: "",
  });
  const [errors, setErrors] = useState<{
    emailAddress?: string;
    mobileNumber?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
    show: boolean;
  }>({
    type: "success",
    message: "",
    show: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch videos
        const { data: videoData, error: videoError } = await supabase
          .from("video_cards")
          .select("*");

        if (videoError) throw videoError;
        setVideos(videoData as Video[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredVideos = videos.filter(
    (video) =>
      (selectedCategory === "All" || video.category === selectedCategory) &&
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVideoClick = (videoId: string) => {
    // Open the YouTube URL in a new tab
    window.open(videoId, "_blank");
  };

  const validateForm = () => {
    const newErrors: { emailAddress?: string; mobileNumber?: string } = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !inquiryData.emailAddress ||
      !emailRegex.test(inquiryData.emailAddress)
    ) {
      newErrors.emailAddress = "Please enter a valid email address.";
    }

    // Mobile number validation (10 digits)
    const mobileRegex = /^\d{10}$/;
    if (
      !inquiryData.mobileNumber ||
      !mobileRegex.test(inquiryData.mobileNumber)
    ) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendInquiry = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Insert into Supabase
      const { data, error } = await supabase.from("card_queries").insert([
        {
          product_name: inquiryData.productName,
          buying_requirements: inquiryData.buyingRequirements,
          email_address: inquiryData.emailAddress,
          mobile_number: inquiryData.mobileNumber,
        },
      ]);

      if (error) throw error;

      // 2. Send email via API route
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Video Inquiry", // Since we don't collect name for video inquiries
          email: inquiryData.emailAddress,
          phone: inquiryData.mobileNumber,
          message: `Product: ${inquiryData.productName}\nBuying Requirements: ${inquiryData.buyingRequirements}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      // Show success notification
      setNotification({
        type: "success",
        message: "Inquiry sent successfully!",
        show: true,
      });

      // Auto-hide notification after 3 seconds
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 3000);

      // Close dialog and reset form
      setIsDialogOpen(false);
      setInquiryData({
        productName: "",
        buyingRequirements: "",
        emailAddress: "",
        mobileNumber: "",
      });
    } catch (error) {
      console.error("Error sending inquiry:", error);

      // Show error notification
      setNotification({
        type: "error",
        message: "Failed to send inquiry. Please try again.",
        show: true,
      });

      // Auto-hide notification after 3 seconds
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setErrors({});
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }));
  };

  return (
    <>
      {notification.show && (
        <div
          className={`
            fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center
            ${
              notification.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }
          `}
        >
          {notification.type === "success" ? (
            <CheckCircle className="mr-2 h-5 w-5" />
          ) : null}
          <span className="flex-grow">{notification.message}</span>
          <button
            onClick={closeNotification}
            className="ml-4 hover:bg-white/20 rounded-full p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <section className="relative min-h-[60vh] w-full">
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
        <div className="container relative flex min-h-[60vh] items-center pt-20">
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

      <section className="container py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full border-2 h-12 rounded-lg bg-white hover:border-primary/80 transition-all">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700">
                    Category:
                  </span>
                  <SelectValue
                    placeholder="Select a category"
                    className="ml-2"
                  />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[400px] overflow-y-auto">
                <div className="sticky top-0 bg-white p-2 border-b">
                  <div className="font-semibold text-sm text-primary">
                    Categories
                  </div>
                </div>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    className="hover:bg-primary/5 transition-colors py-2.5"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="relative flex-1">
            <div className="relative h-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search videos by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-12 border-2 rounded-lg hover:border-primary/80 transition-all focus-visible:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 flex justify-center items-center">
        <div className="container">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : filteredVideos.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-700">
                No videos found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video) => (
                <Card
                  key={video.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <div
                    className="relative aspect-video overflow-hidden cursor-pointer"
                    onClick={() => handleVideoClick(video.video_id)} // Use video_id directly
                  >
                    <Image
                      src={video.thumbnail_url}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="line-clamp-1 text-lg font-semibold">
                      {video.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {video.description}
                    </p>
                  </CardContent>
                  <div className="pt-0">
                    <Button
                      onClick={() => {
                        setInquiryData({
                          ...inquiryData,
                          productName: video.title,
                        });
                        setIsDialogOpen(true);
                      }}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Send Inquiry
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl w-11/12 max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-primary">Send Inquiry</h2>
              <Button
                onClick={closeDialog}
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Buying Requirements
                </label>
                <textarea
                  className="w-full p-3 border-2 rounded-lg focus:border-primary focus:ring-primary bg-white"
                  placeholder="Please describe your requirements in detail..."
                  rows={4}
                  value={inquiryData.buyingRequirements}
                  onChange={(e) =>
                    setInquiryData({
                      ...inquiryData,
                      buyingRequirements: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  className="w-full p-3 h-12 border-2 rounded-lg focus:border-primary focus:ring-primary bg-white"
                  placeholder="your@email.com"
                  value={inquiryData.emailAddress}
                  onChange={(e) =>
                    setInquiryData({
                      ...inquiryData,
                      emailAddress: e.target.value,
                    })
                  }
                />
                {errors.emailAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  className="w-full p-3 h-12 border-2 rounded-lg focus:border-primary focus:ring-primary bg-white"
                  placeholder="10-digit mobile number"
                  value={inquiryData.mobileNumber}
                  onChange={(e) =>
                    setInquiryData({
                      ...inquiryData,
                      mobileNumber: e.target.value,
                    })
                  }
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button
                onClick={closeDialog}
                variant="outline"
                className="border-gray-300"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSendInquiry}
                className="bg-primary hover:bg-primary/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}