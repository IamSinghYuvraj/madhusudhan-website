import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle2, Target, Users2, Factory, Beaker, Building2, Truck, Leaf, Hammer, HardHat, Warehouse } from "lucide-react"

const industries = [
  {
    name: "Pharmaceutical",
    icon: Beaker,
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80",
    description: "Ultra-pure water systems for pharmaceutical manufacturing"
  },
  {
    name: "Manufacturing",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    description: "Industrial water treatment for manufacturing processes"
  },
  {
    name: "Food & Beverage",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1582095128060-e9ca8130cc6b?auto=format&fit=crop&q=80",
    description: "Safe water solutions for food processing"
  },
  {
    name: "Commercial",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    description: "Water treatment for commercial buildings"
  },
  {
    name: "Power Generation",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80",
    description: "Boiler feed water and cooling systems"
  },
  {
    name: "Agriculture",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80",
    description: "Irrigation and hydroponics water treatment"
  },
  {
    name: "Construction",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
    description: "Water solutions for construction projects"
  },
  {
    name: "Warehousing",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    description: "Water management for storage facilities"
  }
]

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
          alt="Industrial facility"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/30" />
        <div className="container relative flex min-h-[60vh] items-center pt-20">
          <div className="max-w-2xl animate-slide-in">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">About Maia Aqua Industries</h1>
            <p className="mt-4 text-lg text-white/80">
              A leading manufacturer of water treatment and purification systems, serving industries across India since 1998
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 1998, Maia Aqua Industries has grown to become one of India's most trusted manufacturers of water treatment solutions. Our journey began with a simple mission: to provide high-quality water treatment solutions that meet the diverse needs of industries across the country.
              </p>
              <p className="mt-4 text-muted-foreground">
                Over the years, we have expanded our capabilities and product range, investing in cutting-edge technology and building a team of skilled professionals. Today, we serve clients across various sectors, including pharmaceuticals, textiles, food processing, and more.
              </p>
            </div>
            <div className="relative h-[400px] animate-float">
              <Image
                src="https://images.unsplash.com/photo-1615870123253-f3de8aa89e24?auto=format&fit=crop&q=80"
                alt="Water treatment facility"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Industries We Serve</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Our water treatment solutions cater to diverse industrial needs, providing customized systems for various sectors
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Card key={industry.name} className="group overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                      <industry.icon className="h-5 w-5" />
                      {industry.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Our Certifications</h2>
            <p className="mt-4 text-muted-foreground">
              We maintain the highest standards of quality and safety in our operations
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Image
                src="https://images.unsplash.com/photo-1607000975985-760647ed2c7f?auto=format&fit=crop&q=80"
                alt="ISO Certification"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">ISO 9001:2015</h3>
              <p className="mt-2 text-muted-foreground">
                Quality Management System
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="https://images.unsplash.com/photo-1607000975985-760647ed2c7f?auto=format&fit=crop&q=80"
                alt="CE Certification"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">CE Certified</h3>
              <p className="mt-2 text-muted-foreground">
                European Conformity
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="https://images.unsplash.com/photo-1607000975985-760647ed2c7f?auto=format&fit=crop&q=80"
                alt="MSME Certification"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">MSME Registered</h3>
              <p className="mt-2 text-muted-foreground">
                Government of India
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}