"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Beaker,
  Factory,
  Truck,
  Building2,
  HardHat,
  Leaf,
  Hammer,
  Warehouse,
} from "lucide-react";

import AnimatedSection from "@/components/animation";
import ContactUs from "@/components/contactus";

// Import images from the assets folder
import AboutMachine1 from "@/assests/About-Machine1.jpg";
import AboutMachine2 from "@/assests/About-Machine2.jpg";
import PharmaImage from "@/assests/pharma-industry.jpg";
import ManufacturingImage from "@/assests/manufacturing-industry.jpeg";
import FoodBeverageImage from "@/assests/food-beverage-industry.jpeg";
import CommercialImage from "@/assests/commercial-industry.jpeg";
import PowerGenerationImage from "@/assests/power-generation-industry.jpg";
import AgricultureImage from "@/assests/agriculture-industry.jpeg";
import ConstructionImage from "@/assests/construction-industry.jpeg";
import WarehousingImage from "@/assests/warehousing-industry.jpeg";

const industries = [
  {
    name: "Pharmaceutical",
    icon: Beaker,
    image: PharmaImage,
    description: "Ultra-pure water systems for pharmaceutical manufacturing",
    color: "bg-violet-500",
    hoverColor: "group-hover:bg-violet-600",
    textColor: "text-violet-50",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    image: ManufacturingImage,
    description: "Industrial water treatment for manufacturing processes",
    color: "bg-emerald-500",
    hoverColor: "group-hover:bg-emerald-600",
    textColor: "text-emerald-50",
  },
  {
    name: "Food & Beverage",
    icon: Truck,
    image: FoodBeverageImage,
    description: "Safe water solutions for food processing",
    color: "bg-amber-500",
    hoverColor: "group-hover:bg-amber-600",
    textColor: "text-amber-50",
  },
  {
    name: "Commercial",
    icon: Building2,
    image: CommercialImage,
    description: "Water treatment for commercial buildings",
    color: "bg-sky-500",
    hoverColor: "group-hover:bg-sky-600",
    textColor: "text-sky-50",
  },
  {
    name: "Power Generation",
    icon: HardHat,
    image: PowerGenerationImage,
    description: "Boiler feed water and cooling systems",
    color: "bg-rose-500",
    hoverColor: "group-hover:bg-rose-600",
    textColor: "text-rose-50",
  },
  {
    name: "Agriculture",
    icon: Leaf,
    image: AgricultureImage,
    description: "Irrigation and hydroponics water treatment",
    color: "bg-lime-500",
    hoverColor: "group-hover:bg-lime-600",
    textColor: "text-lime-50",
  },
  {
    name: "Construction",
    icon: Hammer,
    image: ConstructionImage,
    description: "Water solutions for construction projects",
    color: "bg-cyan-500",
    hoverColor: "group-hover:bg-cyan-600",
    textColor: "text-cyan-50",
  },
  {
    name: "Warehousing",
    icon: Warehouse,
    image: WarehousingImage,
    description: "Water management for storage facilities",
    color: "bg-fuchsia-500",
    hoverColor: "group-hover:bg-fuchsia-600",
    textColor: "text-fuchsia-50",
  },
];

const turnkeyProjects = [
  {
    title: "Industries / Plants / Manufacturing Units",
    description:
      "Customized water treatment solutions for industrial and manufacturing needs.",
    color: "bg-teal-600",
    hoverColor: "hover:bg-teal-700",
    icon: Factory,
  },
  {
    title: "Packaged Mineral Water Manufacturers",
    description: "Advanced purification systems for mineral water production.",
    color: "bg-cyan-600",
    hoverColor: "hover:bg-cyan-700",
    icon: Beaker,
  },
  {
    title: "Builders / Real Estate Developers",
    description:
      "Water treatment solutions for residential and commercial projects.",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    icon: Building2,
  },
  {
    title: "Housing Societies / Complexes / Townships",
    description: "Reliable water treatment for large residential communities.",
    color: "bg-indigo-600",
    hoverColor: "hover:bg-indigo-700",
    icon: Building2,
  },
  {
    title:
      "Municipality / Government Water / Waste Water / Sewage Management Departments",
    description:
      "Comprehensive solutions for public water and sewage management.",
    color: "bg-purple-600",
    hoverColor: "hover:bg-purple-700",
    icon: HardHat,
  },
  {
    title:
      "Hotels / Retail / Laundries / Swimming Pools / Parks / Hospitals / Commercial / Corporates",
    description:
      "Tailored water treatment systems for diverse commercial sectors.",
    color: "bg-violet-600",
    hoverColor: "hover:bg-violet-700",
    icon: Building2,
  },
];

const applications = [
  {
    title: "Battery Water: Two Bed DM Unit",
    description: "Demineralized water systems for battery manufacturing.",
    color: "bg-amber-600",
    hoverColor: "hover:bg-amber-700",
    icon: Factory,
  },
  {
    title: "Pharma Industries: Two Bed + Mixed Bed DM Unit",
    description: "Advanced water treatment for pharmaceutical production.",
    color: "bg-emerald-600",
    hoverColor: "hover:bg-emerald-700",
    icon: Beaker,
  },
  {
    title: "Pathology Lab: Two Bed + Mixed Bed DM Unit (RO)",
    description: "Pure water systems for medical and pathology labs.",
    color: "bg-sky-600",
    hoverColor: "hover:bg-sky-700",
    icon: Beaker,
  },
  {
    title: "Medical Dialysis: DM or RO Unit",
    description: "Water treatment for medical dialysis applications.",
    color: "bg-rose-600",
    hoverColor: "hover:bg-rose-700",
    icon: Beaker,
  },
  {
    title: "Mineral Water: Filtration or RO Unit",
    description: "Purification systems for mineral water production.",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    icon: Beaker,
  },
  {
    title: "Cooling Tower: Softening Plant / Filter Unit",
    description: "Water treatment for cooling tower systems.",
    color: "bg-cyan-600",
    hoverColor: "hover:bg-cyan-700",
    icon: Factory,
  },
];

export default function AboutPage() {
  

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-cyan-50 via-white to-cyan-50 flex justify-center items-center">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            {/* Left Content */}
            <AnimatedSection delay={200}>
              <div className="animate-slide-in pl-8">
                <h2 className="text-4xl font-extrabold text-cyan-800">
                  Our Story
                </h2>
                <div className="mt-4 h-1 w-20 bg-cyan-600 rounded"></div>
                                  <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                  Madhusudan Aqua Industries, established in 2021, is a professionally managed company engaged in manufacturing, supplying, exporting, and servicing a wide range of water treatment solutions.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Our offerings include modern Water Treatment Plants, Reverse Osmosis (RO) Units, Demineralized Water Plants, Water Softening Units, Ozonation Systems, Desalination Plants, and complete Mineral Water Projects.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  We also provide comprehensive spare parts and equipment for Water Treatment Plants, such as all types of cartridges and filters, membranes (BW, SW, UF, NF), resins, filter media (sand and carbon), pressure gauges and switches, SS fittings, and essential water treatment chemicals including antiscalants, Gramacid, and citric acid.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Over the years, we have strengthened our expertise by adopting cutting-edge technology and building a skilled team of professionals. Today, our solutions serve a wide customer base across diverse industries, including the Pharmaceutical and Food & Beverage Industry.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  The company is driven by a philosophy of innovation and excellence, with a strong focus on turnkey project execution and a total system approach, ensuring reliability, efficiency, and customer satisfaction.
                  </p>
              </div>
            </AnimatedSection>

            {/* Right Image */}
            <AnimatedSection delay={400}>
              <div className="relative h-[400px] group">
                <div className="absolute inset-0 bg-cyan-100 rounded-lg shadow-lg transition-all duration-500 group-hover:bg-cyan-200"></div>
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-[0.97] group-hover:rotate-1">
                  <Image
                    src={AboutMachine2 || "/placeholder.svg"}
                    alt="Water treatment facility"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-cyan-50 py-16 flex justify-center items-center">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold text-cyan-800">
              Industries We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Our water treatment solutions cater to diverse industrial needs,
              providing customized systems for various sectors
            </p>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 100}>
                <div className="group h-full">
                  <Card
                    className={`h-full overflow-hidden transition-all duration-300 ${industry.color} hover:shadow-xl hover:-translate-y-2`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                          <industry.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                          {industry.name}
                        </h3>
                      </div>
                    </div>
                    <CardContent className={`p-4 ${industry.textColor}`}>
                      <p className="text-sm opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                        {industry.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white flex justify-center items-center">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold text-cyan-800">
              We Undertake Turnkey Projects For
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Providing comprehensive water treatment solutions for a wide range
              of industries and applications
            </p>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {turnkeyProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 100}>
                <Card
                  className={`h-full transition-all duration-300 ${project.color} ${project.hoverColor} hover:shadow-xl hover:-translate-y-2`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <project.icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-12" />
                      <CardTitle className="text-xl text-white">
                        {project.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90">{project.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-cyan-50 to-white py-16 flex justify-center items-center">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold text-cyan-800">
              Applications for Water Treatment Plants
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Specialized water treatment solutions for various applications
            </p>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application, index) => (
              <AnimatedSection key={application.title} delay={index * 100}>
                <Card
                  className={`h-full transition-all duration-300 ${application.color} ${application.hoverColor} hover:shadow-xl hover:-translate-y-2 group`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <application.icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-12" />
                      <CardTitle className="text-xl text-white">
                        {application.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90">{application.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
}
