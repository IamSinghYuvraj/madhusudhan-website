"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const clients = [
  {
    name: "Tata Steel",
    logo: "/client-logos/tata.png",
    description: "Leading steel manufacturer"
  },
  {
    name: "Reliance Industries",
    logo: "/client-logos/reliance.png",
    description: "Petrochemicals and textiles"
  },
  {
    name: "Hindustan Unilever",
    logo: "/client-logos/hul.png",
    description: "FMCG manufacturer"
  },
  {
    name: "ITC Limited",
    logo: "/client-logos/itc.png",
    description: "Diversified conglomerate"
  },
  {
    name: "Adani Group",
    logo: "/client-logos/adani.png",
    description: "Infrastructure and energy"
  },
  {
    name: "Sun Pharma",
    logo: "/client-logos/sun.png",
    description: "Pharmaceutical company"
  }
]

export function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth
    let scrollPos = 0

    const scroll = () => {
      scrollPos += 1
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0
      }
      container.scrollLeft = scrollPos
    }

    const interval = setInterval(scroll, 20)
    return () => clearInterval(interval)
  }, [])

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
                key={`${client.name}-${index}`}
                className="min-w-[300px] flex-shrink-0 p-8"
              >
                <div className="relative h-20 w-40">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{client.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {client.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}