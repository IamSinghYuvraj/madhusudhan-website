import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  CheckCircle2,
  Target,
  Users2,
  Factory,
  Beaker,
  Building2,
  Truck,
  Leaf,
  Hammer,
  HardHat,
  Warehouse,
} from "lucide-react";

// Import images from the assets folder
import AboutMachine1 from "@/app/assests/About-Machine1.jpg";
import AboutMachine2 from "@/app/assests/About-Machine2.jpg";
import PharmaImage from "@/app/assests/pharma-industry.jpg";
import ManufacturingImage from "@/app/assests/manufacturing-industry.jpeg";
import FoodBeverageImage from "@/app/assests/food-beverage-industry.jpeg";
import CommercialImage from "@/app/assests/commercial-industry.jpeg";
import PowerGenerationImage from "@/app/assests/power-generation-industry.jpg";
import AgricultureImage from "@/app/assests/agriculture-industry.jpeg";
import ConstructionImage from "@/app/assests/construction-industry.jpeg";
import WarehousingImage from "@/app/assests/warehousing-industry.jpeg";

const industries = [
  {
    name: "Pharmaceutical",
    icon: Beaker,
    image: PharmaImage,
    description: "Ultra-pure water systems for pharmaceutical manufacturing",
    gradient: "from-purple-600 to-blue-500",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    image: ManufacturingImage,
    description: "Industrial water treatment for manufacturing processes",
    gradient: "from-green-600 to-teal-500",
  },
  {
    name: "Food & Beverage",
    icon: Truck,
    image: FoodBeverageImage,
    description: "Safe water solutions for food processing",
    gradient: "from-orange-600 to-red-500",
  },
  {
    name: "Commercial",
    icon: Building2,
    image: CommercialImage,
    description: "Water treatment for commercial buildings",
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    name: "Power Generation",
    icon: HardHat,
    image: PowerGenerationImage,
    description: "Boiler feed water and cooling systems",
    gradient: "from-yellow-600 to-amber-500",
  },
  {
    name: "Agriculture",
    icon: Leaf,
    image: AgricultureImage,
    description: "Irrigation and hydroponics water treatment",
    gradient: "from-lime-600 to-green-500",
  },
  {
    name: "Construction",
    icon: Hammer,
    image: ConstructionImage,
    description: "Water solutions for construction projects",
    gradient: "from-gray-600 to-blue-500",
  },
  {
    name: "Warehousing",
    icon: Warehouse,
    image: WarehousingImage,
    description: "Water management for storage facilities",
    gradient: "from-pink-600 to-red-500",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[60vh] w-full">
        <Image
          src={AboutMachine1}
          alt="Industrial facility"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/30" />
        <div className="container relative flex min-h-[60vh] items-center pt-20">
          <div className="max-w-2xl animate-slide-in pl-5">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              About Maia Aqua Industries
            </h1>
            <p className="mt-4 text-lg text-white/80">
              A leading manufacturer of water treatment and purification
              systems, serving industries across India since 1998
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 flex justify-center items-center">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 1998, Maia Aqua Industries has grown to become one of
                India's most trusted manufacturers of water treatment solutions.
                Our journey began with a simple mission: to provide high-quality
                water treatment solutions that meet the diverse needs of
                industries across the country.
              </p>
              <p className="mt-4 text-muted-foreground">
                Over the years, we have expanded our capabilities and product
                range, investing in cutting-edge technology and building a team
                of skilled professionals. Today, we serve clients across various
                sectors, including pharmaceuticals, textiles, food processing,
                and more.
              </p>
            </div>
            <div className="relative h-[400px] animate-float">
              <Image
                src={AboutMachine2}
                alt="Water treatment facility"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 flex justify-center items-center">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Our water treatment solutions cater to diverse industrial needs,
            providing customized systems for various sectors
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Card
                key={industry.name}
                className={`group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br ${industry.gradient}`}
              >
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
                  <p className="text-sm text-white/80">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 flex justify-center items-center">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">
            We Undertake Turnkey Projects For
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Providing comprehensive water treatment solutions for a wide range
            of industries and applications
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-blue-600 to-indigo-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Industries / Plants / Manufacturing Units
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Customized water treatment solutions for industrial and
                  manufacturing needs.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-green-600 to-teal-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Packaged Mineral Water Manufacturers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Advanced purification systems for mineral water production.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-orange-600 to-red-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Builders / Real Estate Developers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Water treatment solutions for residential and commercial
                  projects.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-purple-600 to-pink-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Housing Societies / Complexes / Townships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Reliable water treatment for large residential communities.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-yellow-600 to-amber-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Municipality / Government Water / Waste Water / Sewage
                  Management Departments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Comprehensive solutions for public water and sewage
                  management.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-gray-600 to-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Hotels / Retail / Laundries / Swimming Pools / Parks /
                  Hospitals / Commercial / Corporates / Service Sector /
                  Airports / Stadiums / Educational Institutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Tailored water treatment systems for diverse commercial and
                  public sectors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 flex justify-center items-center">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">
            Applications for Water Treatment Plants
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Specialized water treatment solutions for various applications
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-cyan-600 to-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Battery Water: Two Bed DM Unit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Demineralized water systems for battery manufacturing.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-emerald-600 to-green-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Pharma Industries: Two Bed + Mixed Bed DM Unit (RO May Be
                  Required)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Advanced water treatment for pharmaceutical production.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-rose-600 to-pink-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Pathology Lab: Two Bed + Mixed Bed DM Unit (RO)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Pure water systems for medical and pathology labs.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-violet-600 to-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Medical Dialysis: DM or RO Unit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Water treatment for medical dialysis applications.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-amber-600 to-orange-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Mineral Water: Filtration or RO Unit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Purification systems for mineral water production.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-sky-600 to-cyan-500">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Cooling Tower: Softening Plant / Filter Unit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Water treatment for cooling tower systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}