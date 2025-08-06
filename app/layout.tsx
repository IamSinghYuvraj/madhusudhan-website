import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import WhatsAppChat from "@/components/whatsapp-chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maia Aqua Industries - Water Treatment Solutions",
  description:
    "Leading manufacturer of water treatment and purification systems in India",
  icons: {
    icon: "/madhusudan_icon.png", // Path to the favicon in the public directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <WhatsAppChat />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
