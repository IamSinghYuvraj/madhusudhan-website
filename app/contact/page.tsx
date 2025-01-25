"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Contact from "@/app/assests/contact-hero.jpeg";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
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
                    Waliv Village. Vasai East,Vasai - 401208, Maharashtra,
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
                      required
                      className="transition-all focus:ring-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="transition-all focus:ring-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="transition-all focus:ring-2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    className="min-h-[150px] transition-all focus:ring-2"
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
