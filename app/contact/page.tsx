// app/contact/page.tsx - Clean contact form without WhatsApp mentions
"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/contactApi";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, X, Loader2, Mail, MapPin, Phone, AlertCircle, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface TouchedState {
  name: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}

interface Notification {
  type: "success" | "error" | "warning";
  message: string;
  show: boolean;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [notification, setNotification] = useState<Notification>({
    type: "success",
    message: "",
    show: false,
  });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [touched, setTouched] = useState<TouchedState>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleBlur = (field: keyof TouchedState): void => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;
    const fieldName = id as keyof FormData;
    
    if (fieldName === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [fieldName]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [fieldName]: value }));
    }
    
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  };

  const validateForm = (): boolean => {
    const { name, email, phone, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return (
      name.trim() !== "" &&
      emailRegex.test(email.trim()) &&
      phone.length === 10 &&
      message.trim() !== ""
    );
  };

  const showNotification = (type: "success" | "error" | "warning", message: string) => {
    setNotification({ type, message, show: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 8000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    if (!validateForm()) {
      showNotification("error", "Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      let notificationType: "success" | "warning" | "error" = "success";
      let message = "Thank you for your message! We&apos;ll get back to you soon.";

      // Handle different response scenarios
      if (result && typeof result === "object") {
        if ("success" in result) {
          if (result.success) {
            message = "Your query has been sent successfully! We&apos;ll contact you shortly.";
          } else {
            message = "Message received! We&apos;ll get back to you as soon as possible.";
            notificationType = "warning";
          }
        }
      }

      showNotification(notificationType, message);
      
      // Reset form on success
    // ...existing code...
      // Reset form on success
      if (notificationType === "success" || notificationType === "warning") {
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
      }
      
    } catch (error) {
      console.error("Error sending message:", error);
      
      const errorMessage = error instanceof Error 
        ? "Failed to send your message. Please try again or contact us directly."
        : "An error occurred. Please try again or contact us directly.";
      
      showNotification("error", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (field: keyof FormData): string => {
    const baseClass = "transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:scale-[1.02] hover:border-primary/50 focus:shadow-lg focus:shadow-primary/10";
    const isFieldTouched = touched[field];
    let isFieldInvalid = false;

    if (isFieldTouched) {
      if (field === "phone") {
        isFieldInvalid = formData.phone.length !== 10;
      } else if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isFieldInvalid = !emailRegex.test(formData.email.trim());
      } else {
        isFieldInvalid = !formData[field].trim();
      }
    }
    
    const errorClass = isFieldInvalid ? "border-red-500 ring-red-500/20" : "";
    
    return `${baseClass} ${errorClass}`;
  };

  const closeNotification = (): void => {
    setNotification((prev) => ({ ...prev, show: false }));
  };

  const getNotificationIcon = () => {
    switch (notification.type) {
      case "success":
        return <CheckCircle className="mr-3 h-5 w-5 animate-bounce" />;
      case "warning":
        return <AlertCircle className="mr-3 h-5 w-5 animate-pulse" />;
      default:
        return <X className="mr-3 h-5 w-5 animate-pulse" />;
    }
  };

  const getNotificationColors = () => {
    switch (notification.type) {
      case "success":
        return "bg-green-500 text-white shadow-green-500/30";
      case "warning":
        return "bg-yellow-500 text-white shadow-yellow-500/30";
      default:
        return "bg-red-500 text-white shadow-red-500/30";
    }
  };

  return (
    <section className="py-16 flex justify-center items-center bg-gradient-to-b from-background to-muted/20">
      {/* Enhanced Notification */}
      {notification.show && (
        <div
          className={`
            fixed top-4 right-4 z-50 p-4 rounded-lg shadow-2xl flex items-center max-w-md
            animate-in slide-in-from-right-4 duration-500
            ${getNotificationColors()}
          `}
        >
          {getNotificationIcon()}
          <span className="flex-grow text-sm font-medium">{notification.message}</span>
          <button
            onClick={closeNotification}
            className="ml-4 hover:bg-white/20 rounded-full p-1 transition-all duration-200 hover:scale-110 hover:rotate-90"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Contact Information Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="group p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 delay-100">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <MapPin className="h-6 w-6 text-primary group-hover:animate-pulse" />
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Address</h3>
                <address className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors not-italic">
                  Gala No.5, Bld. No. 6, Parsawanath Indl. Est., Kolekar Pada,<br />
                  Waliv Village. Vasai East, Vasai - 401208, Maharashtra,<br />
                  India.
                </address>
              </div>
            </div>
          </Card>

          <Card className="group p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 delay-200">
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
                    aria-label="Call +91 9820142424"
                  >
                    +91 9820142424
                  </a>
                </p>
              </div>
            </div>
          </Card>

          <Card className="group p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 delay-300">
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
                    aria-label="Email madhusudanaquaind@gmail.com"
                  >
                    madhusudanaquaind@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form and Map */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Card className="mx-auto w-full max-w-2xl p-8 border-0 shadow-2xl shadow-primary/10 bg-white/90 backdrop-blur-sm animate-in slide-in-from-left-4 duration-700 delay-400 hover:shadow-3xl hover:shadow-primary/20 transition-all ring-1 ring-primary/5 hover:ring-primary/10 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-lg pointer-events-none"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-6">
                We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2 group">
                    <Label htmlFor="name" className="text-sm font-medium group-focus-within:text-primary transition-colors">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("name")}
                      required
                      className={getInputClassName("name")}
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2 group">
                    <Label htmlFor="email" className="text-sm font-medium group-focus-within:text-primary transition-colors">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("email")}
                      required
                      className={getInputClassName("email")}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <Label htmlFor="phone" className="text-sm font-medium group-focus-within:text-primary transition-colors">
                    Phone (10 digits) *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("phone")}
                    required
                    placeholder="Enter 10-digit phone number"
                    className={getInputClassName("phone")}
                    maxLength={10}
                    pattern="[0-9]{10}"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2 group">
                  <Label htmlFor="message" className="text-sm font-medium group-focus-within:text-primary transition-colors">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("message")}
                    required
                    className={`min-h-[150px] resize-none ${getInputClassName("message")}`}
                    placeholder="Tell us about your inquiry..."
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                  disabled={isSubmitting || !validateForm()}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      <span className="animate-pulse">Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      <span className="group-hover:animate-pulse">Send Message</span>
                    </>
                  )}
                </Button>

                {/* Simple contact info */}
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-center text-blue-700 text-sm">
                    <Mail className="h-4 w-4 mr-2" />
                    We&apos;ll respond to your message within 24 hours
                  </div>
                </div>
              </form>
            </div>
          </Card>
          
          <div className="h-[600px] w-full overflow-hidden rounded-xl shadow-2xl shadow-primary/10 animate-in slide-in-from-right-4 duration-700 delay-500 hover:shadow-3xl hover:shadow-primary/20 transition-all ring-1 ring-primary/5 hover:ring-primary/10">
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
                title="Madhusudan Aqua Industries Location"
              />
            </div>
          </div>
        </div>

        {/* Emergency Contact Info */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                For urgent inquiries: <a href="tel:+919820142424" className="underline hover:no-underline">+91 9820142424</a>
              </span>
            </div>
            
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-medium">
                Email: <a 
                  href="mailto:madhusudanaquaind@gmail.com" 
                  className="underline hover:no-underline"
                >
                  madhusudanaqua.ind@gmail.com
                </a>
              </span>
            </div>
          </div>

          {/* Simple footer */}
          <div className="mt-6 text-xs text-muted-foreground">
            <p>We value your privacy and will never share your information with third parties.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
