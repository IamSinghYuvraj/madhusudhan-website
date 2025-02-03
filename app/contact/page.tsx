"use client";

import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, X } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Contact from "@/app/assests/contact-hero.jpeg";

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
      console.error("Error saving to Supabase:", error);
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
        <Image
          src={Contact}
          alt="Contact us"
          className="absolute inset-0 h-full w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/30" />
        <div className="container relative flex min-h-[60vh] items-center pt-10 pl-10">
          <div className="max-w-2xl animate-slide-in">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Get in touch with us for any inquiries about our products and
              services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 flex justify-center items-center">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Gala No.5, Bld. No. 6, Parsawanath Indl. Est., Kolekar Pada,
                    Waliv Village. Vasai East, Vasai - 401208, Maharashtra,
                    India.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <a href="tel:++919820142424" className="hover:text-primary">
                      +91 9820142424
                    </a>
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <a
                      href="mailto:madhusudanaquaind@gmail.com"
                      className="hover:text-primary"
                    >
                      madhusudanaquaind@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card className="mx-auto w-full max-w-2xl p-6">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("name")}
                      required
                      className={getInputClassName("name")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("email")}
                      required
                      className={getInputClassName("email")}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (10 digits)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("phone")}
                    required
                    placeholder="Enter 10-digit phone number"
                    className={getInputClassName("phone")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("message")}
                    required
                    className={`min-h-[150px] ${getInputClassName("message")}`}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full transition-all hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            <div className="h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7525.735189218974!2d72.872071!3d19.418126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a2bdb82b69%3A0x45cb48da14592a85!2sMadhusudan%20Aqua%20Industries!5e0!3m2!1sen!2sin!4v1737712957125!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
