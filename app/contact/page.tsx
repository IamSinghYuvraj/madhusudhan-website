"use client";

import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, X, Loader2 } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Contact from "@/assests/contact-hero.jpeg";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
    show: boolean;
  }>({
    type: "success",
    message: "",
    show: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (id === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [id]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }

    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      formData.phone.length !== 10 ||
      !formData.message
    ) {
      setNotification({
        type: "error",
        message: "Please fill all fields correctly",
        show: true,
      });

      setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_queries")
        .insert([formData]);

      if (error) {
        throw error;
      }

      // Send email
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setNotification({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
        show: true,
      });

      setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 3000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        message: false,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setNotification({
        type: "error",
        message: "Failed to send message. Please try again.",
        show: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (field: string) => {
    const baseClass = "transition-all focus:ring-2";
    const touchedAndInvalid =
      touched[field as keyof typeof touched] &&
      (!formData[field as keyof typeof formData] ||
        (field === "phone" && formData.phone.length !== 10));
    return `${baseClass} ${touchedAndInvalid ? "border-red-500" : ""}`;
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }));
  };

  return (
    <>
      {notification.show && (
        <div
          className={`
      fixed top-4 right-4 z-50 p-4 rounded-lg shadow-2xl flex items-center max-w-md
      animate-in slide-in-from-right-4 duration-500
      ${
        notification.type === "success"
          ? "bg-green-500 text-white shadow-green-500/30"
          : "bg-red-500 text-white shadow-red-500/30"
      }
    `}
        >
          {notification.type === "success" ? (
            <CheckCircle className="mr-3 h-5 w-5 animate-bounce" />
          ) : (
            <X className="mr-3 h-5 w-5 animate-pulse" />
          )}
          <span className="flex-grow text-sm font-medium">{notification.message}</span>
          <button
            onClick={closeNotification}
            className="ml-4 hover:bg-white/20 rounded-full p-1 transition-all duration-200 hover:scale-110 hover:rotate-90"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <section className="relative min-h-[60vh] w-full overflow-hidden">
        <Image
          src={Contact}
          alt="Contact us"
          width={1200}
          height={600}
          className="absolute inset-0 h-full w-full object-cover brightness-50 transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/30" />
        <div className="container relative flex min-h-[60vh] items-center pt-10 pl-10">
          <div className="max-w-2xl animate-in slide-in-from-left-8 duration-1000">
            <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4 hover:animate-pulse transition-all cursor-default">
              Contact Us
            </h1>
            <p className="text-lg text-white/90 leading-relaxed animate-in slide-in-from-left-8 duration-1000 delay-200">
              Get in touch with us for any inquiries about our products and services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 flex justify-center items-center bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
  <Card className="group p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-700 delay-100">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
        <MapPin className="h-6 w-6 text-primary group-hover:animate-pulse" />
      </div>
      <div className="group-hover:translate-x-1 transition-transform duration-300">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Address</h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
          Gala No.5, Bld. No. 6, Parsawanath Indl. Est., Kolekar Pada,
          Waliv Village. Vasai East, Vasai - 401208, Maharashtra,
          India.
        </p>
      </div>
    </div>
  </Card>

  <Card className="group p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-700 delay-200">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
        <Phone className="h-6 w-6 text-primary group-hover:animate-bounce" />
      </div>
      <div className="group-hover:translate-x-1 transition-transform duration-300">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Phone</h3>
        <p className="text-sm text-muted-foreground">
          <a 
            href="tel:+919820142424" 
            className="hover:text-primary transition-all duration-200 hover:underline hover:scale-105 inline-block"
          >
            +91 9820142424
          </a>
        </p>
      </div>
    </div>
  </Card>

  <Card className="group p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-700 delay-300">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
        <Mail className="h-6 w-6 text-primary group-hover:animate-pulse" />
      </div>
      <div className="group-hover:translate-x-1 transition-transform duration-300">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Email</h3>
        <p className="text-sm text-muted-foreground">
          <a
            href="mailto:madhusudanaquaind@gmail.com"
            className="hover:text-primary transition-all duration-200 hover:underline hover:scale-105 inline-block"
          >
            madhusudanaquaind@gmail.com
          </a>
        </p>
      </div>
    </div>
  </Card>
</div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Card className="mx-auto w-full max-w-2xl p-8 border-0 shadow-2xl shadow-primary/10 bg-white/90 backdrop-blur-sm animate-in slide-in-from-left-4 duration-700 delay-400 hover:shadow-3xl hover:shadow-primary/20 transition-all duration-500 ring-1 ring-primary/5 hover:ring-primary/10">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-lg pointer-events-none"></div>
  <div className="relative">
    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
      Send us a message
    </h2>
    <p className="text-muted-foreground mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
    
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2 group">
          <Label htmlFor="name" className="text-sm font-medium group-focus-within:text-primary transition-colors">Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={() => handleBlur("name")}
            required
            className={`transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:scale-[1.02] hover:border-primary/50 focus:shadow-lg focus:shadow-primary/10 ${
              touched.name && !formData.name ? "border-red-500 animate-pulse" : ""
            }`}
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2 group">
          <Label htmlFor="email" className="text-sm font-medium group-focus-within:text-primary transition-colors">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={() => handleBlur("email")}
            required
            className={`transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:scale-[1.02] hover:border-primary/50 focus:shadow-lg focus:shadow-primary/10 ${
              touched.email && !formData.email ? "border-red-500 animate-pulse" : ""
            }`}
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2 group">
        <Label htmlFor="phone" className="text-sm font-medium group-focus-within:text-primary transition-colors">Phone (10 digits) *</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          onBlur={() => handleBlur("phone")}
          required
          placeholder="Enter 10-digit phone number"
          className={`transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:scale-[1.02] hover:border-primary/50 focus:shadow-lg focus:shadow-primary/10 ${
            touched.phone && formData.phone.length !== 10 ? "border-red-500 animate-pulse" : ""
          }`}
        />
      </div>
      
      <div className="space-y-2 group">
        <Label htmlFor="message" className="text-sm font-medium group-focus-within:text-primary transition-colors">Message *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={() => handleBlur("message")}
          required
          className={`min-h-[150px] resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:scale-[1.02] hover:border-primary/50 focus:shadow-lg focus:shadow-primary/10 ${
            touched.message && !formData.message ? "border-red-500 animate-pulse" : ""
          }`}
          placeholder="Tell us about your inquiry..."
        />
      </div>
      
      <Button
        type="submit"
        className="w-full h-12 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed group"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            <span className="animate-pulse">Sending Message...</span>
          </>
        ) : (
          <span className="group-hover:animate-pulse">Send Message</span>
        )}
      </Button>
    </form>
  </div>
</Card>

            <div className="h-[600px] w-full overflow-hidden rounded-xl shadow-2xl shadow-primary/10 animate-in slide-in-from-right-4 duration-700 delay-500 hover:shadow-3xl hover:shadow-primary/20 transition-all duration-500 ring-1 ring-primary/5 hover:ring-primary/10">
  <div className="h-full w-full transition-transform duration-500 hover:scale-[1.01]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7525.735189218974!2d72.872071!3d19.418126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a2bdb82b69%3A0x45cb48da14592a85!2sMadhusudan%20Aqua%20Industries!5e0!3m2!1sen!2sin!4v1737712957125!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-xl"
    />
  </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
}
