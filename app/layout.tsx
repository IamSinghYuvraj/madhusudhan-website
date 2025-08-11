import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import WhatsAppChat from "@/components/whatsapp-chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madhusudan Aqua Industries",
  description:
    "Leading manufacturer of water treatment and purification systems in India",
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
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