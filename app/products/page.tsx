"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Search,
  X,
  Minimize2,
  Maximize2,
  CheckCircle,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: string;
  name: string;
  image_urls: string[]; // Array of image URLs
  min_order_quantity: number;
  delivery_time: string;
  product_description: string;
  features: string;
  applications: string;
  specifications: string | null;
  category: string;
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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isLearnMoreDialogOpen, setIsLearnMoreDialogOpen] =
    useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  // New states for inquiry functionality
  const [inquiryData, setInquiryData] = useState<InquiryData>({
    productName: "",
    buyingRequirements: "",a
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
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery, products]);

  async function fetchProducts() {
    try {
      const { data, error } = await supabase.from("products").select("*");

      if (error) throw error;

      setProducts(data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  }

  const filterProducts = () => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleLearnMore = (product: Product) => {
    setSelectedProduct(product);
    setIsLearnMoreDialogOpen(true);
  };

  const closeLearnMoreDialog = () => {
    setIsLearnMoreDialogOpen(false);
    setSelectedProduct(null);
    setIsMaximized(false);
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleSendInquiry = (product?: Product) => {
    if (product) {
      setInquiryData({
        ...inquiryData,
        productName: product.name,
      });
    }
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setErrors({});
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }));
  };

  // Validation function
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

  // Submit inquiry function
  const submitInquiry = async () => {
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
          name: "Product Inquiry",
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

  return (
    <>
      {/* Notification */}
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

      {/* Filters Section */}
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
                placeholder="Search products..."
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

      {/* Product Cards Section */}
      <section className="py-12 flex justify-center items-center">
        <div className="container">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-700">
                No products found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={product.image_urls[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button
                        onClick={() => handleLearnMore(product)}
                        variant="secondary"
                        className="w-full bg-white/90 hover:bg-white text-primary font-medium"
                      >
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="line-clamp-1 text-lg font-semibold">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {product.product_description}
                    </p>
                    <div className="mt-3 flex items-center text-xs text-gray-500">
                      <span className="flex items-center">
                        <span className="font-medium">Min Order:</span>
                        <span className="ml-1">
                          {product.min_order_quantity} units
                        </span>
                      </span>
                      <span className="mx-2">•</span>
                      <span>{product.category.split(" ")[0]}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button
                      onClick={() => handleSendInquiry(product)}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Send Inquiry
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Inquiry Dialog */}
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
                onClick={submitInquiry}
                className="bg-primary hover:bg-primary/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Learn More Dialog with Carousel */}
      {isLearnMoreDialogOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div
            className={`bg-white rounded-xl ${
              isMaximized
                ? "w-full h-full rounded-none"
                : "w-11/12 max-w-5xl max-h-[90vh]"
            } overflow-hidden flex flex-col transition-all duration-300`}
          >
            <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-primary">
                {selectedProduct.name}
              </h2>
              <div className="flex gap-2">
                <Button
                  onClick={toggleMaximize}
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-9 w-9 hover:bg-gray-100"
                >
                  {isMaximized ? (
                    <Minimize2 className="h-5 w-5" />
                  ) : (
                    <Maximize2 className="h-5 w-5" />
                  )}
                </Button>
                <Button
                  onClick={closeLearnMoreDialog}
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-9 w-9 hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="overflow-y-auto flex-1 p-6">
              <div className="mb-8">
                <Carousel className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    {selectedProduct.image_urls.map((url, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video rounded-xl overflow-hidden border">
                          <Image
                            src={url || "/placeholder.svg"}
                            alt={`${selectedProduct.name} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 h-8 w-8 opacity-70 hover:opacity-100" />
                  <CarouselNext className="right-2 h-8 w-8 opacity-70 hover:opacity-100" />
                </Carousel>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    Product Details
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm font-medium text-gray-500">
                        Minimum Order
                      </div>
                      <div className="text-base mt-1">
                        {selectedProduct.min_order_quantity} units
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm font-medium text-gray-500">
                        Delivery Time
                      </div>
                      <div className="text-base mt-1">
                        {selectedProduct.delivery_time}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm font-medium text-gray-500">
                        Category
                      </div>
                      <div className="text-base mt-1">
                        {selectedProduct.category}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    Specifications
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm font-medium text-gray-500">
                        Features
                      </div>
                      <div className="text-base mt-1">
                        {selectedProduct.features}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm font-medium text-gray-500">
                        Applications
                      </div>
                      <div className="text-base mt-1">
                        {selectedProduct.applications}
                      </div>
                    </div>

                    {selectedProduct.specifications && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm font-medium text-gray-500">
                          Technical Specifications
                        </div>
                        <div className="text-base mt-1">
                          {selectedProduct.specifications}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t sticky bottom-0 bg-white flex justify-between items-center">
              <Button
                onClick={closeLearnMoreDialog}
                variant="outline"
                className="border-gray-300"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  closeLearnMoreDialog();
                  handleSendInquiry(selectedProduct);
                }}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
