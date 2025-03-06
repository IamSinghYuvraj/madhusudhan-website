"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import MANTRA from "@/app/assests/MANTRA.jpg";
import BISLERI from "@/app/assests/BISLERI.jpg";
import BAILEY from "@/app/assests/BAILEY.jpg";
import AQUAFINA from "@/app/assests/AQUAFINA.jpg";
import MCD from "@/app/assests/MCD.jpg";
import O2RISE from "@/app/assests/O2RISE.jpg";
import ROYAL from "@/app/assests/ROYAL.jpg";
import ACTIVE from "@/app/assests/ACTIVE.jpg";

import { Card } from "@/components/ui/card";

const clients = [
  { logo: MANTRA },
  { logo: BISLERI },
  { logo: BAILEY },
  { logo: AQUAFINA },
  { logo: MCD },
  { logo: O2RISE },
  { logo: ROYAL },
  { logo: ACTIVE },
];

export function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 1;
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-muted py-16 flex justify-center items-center">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">Our Trusted Clients</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          We are proud to serve some of India's largest companies with our water
          treatment solutions
        </p>

        <div className="mt-12 overflow-hidden" ref={containerRef}>
          <div className="flex animate-scroll gap-8">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <Card
                key={`${index}`} // Use index as the key since there's no unique identifier
                className="min-w-[300px] h-[300px] flex-shrink-0 flex flex-col items-center text-center overflow-hidden relative"
              >
                {/* Fullscreen logo */}
                <div className="absolute inset-0">
                  <Image
                    src={client.logo}
                    alt="Client Logo" // Use a generic alt text since there's no name
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
