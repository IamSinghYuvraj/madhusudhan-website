"use client";
import SearchBar from "./search";
import Commercial_Water_Treatment_Plant from "app/assests/Commercial-Water-Treatment-Plant.jpg";
import Water_Treatment_System from "app/assests/Water-Treatment-System.jpg";
import Water_Demineralisation_Plant from "app/assests/Water-Demineralisation-Plant.jpg";
import Deionisation_Plant from "app/assests/Deionisation-Plant.jpg";
import Chemical_Dosing_System from "app/assests/Chemical-Dosing-System.jpg";
import Water_Chlorination_Plant from "app/assests/Water-Chlorination-Plant.jpg";
import Water_Softening_Plant from "app/assests/Water-Softening-Plant.jpg";
import Packaged_Drinking_Water_Plant from "app/assests/Packaged-Drinking-Water-Plant.jpg";
import Water_Ultrafiltration_System from "app/assests/Water-Ultrafiltration-System.jpg";
import Activated_Carbon_Water_Filter from "app/assests/Activated-Carbon-Water-Filter.jpg";
import Sand_Water_Filter from "app/assests/Sand-Water-Filter.jpg";
import Mixed_Bed_DM_Plant from "app/assests/Mixed-Bed-DM-Plant.jpg";
import FRP_RO_Plant from "app/assests/FRP-RO-Plant.jpg";
import FRP_De_Gasification_Systems from "app/assests/FRP-De-Gasification-Systems.jpg";
import Rapid_Flow_Two_Bed_DM_Plants from "app/assests/Rapid-Flow-Two-Bed-DM-Plants.jpg";
import Mild_Steel_Rubber_Lined_Two_Bed_DM_Water_Plants from "app/assests/Mild-Steel-Rubber-Lined-Two-Bed-DM-Water-Plants.jpg";
import Auto_FRP_Two_Bed_DM_Water_Plants from "app/assests/Auto-FRP-Two-Bed-DM-Water-Plants.jpg";
import FRP_Mixed_Bed_DM_Plants from "app/assests/Mixed-Bed-DM-Plant.jpg";
import DM_Water_Plants from "app/assests/DM-Water-Plants.jpg";
import Mineral_Water_Plants from "app/assests/Mineral-Water-Plants.jpg";
import Commercial_Reverse_Osmosis_Plant from "app/assests/Commercial-Reverse-Osmosis-Plant.jpg";
import Ultraviolet_Water_Systems from "app/assests/Ultraviolet-Water-Systems.jpg";
import Reverse_Osmosis_Plant from "app/assests/Reverse-Osmosis-Plant.jpg";
import Water_Bottle_Filling_Machines from "app/assests/Water-Bottle-Filling-Machines.jpg";
import Mineral_Water_Filling_Machines from "app/assests/Mineral-Water-Filling-Machines.jpg";
import Mineral_Water_Jar_Filling_Machine from "app/assests/Mineral-Water-Jar-Filling-Machine.jpg";
import Fully_Auto_Pet_Capping_Machine from "app/assests/Fully-Auto-Pet-Bottle-Rinsing-Filling-Capping-Machine.jpg";
import Blowing_Machine from "app/assests/Blowing-Machine.jpg";
import Water_Bottling_Packaging_Solution from "app/assests/Packaged-Drinking-Water-Plant.jpg";
import Semi_Auto_Blow_Molding_Machine from "app/assests/Semi-Auto-Blow-Molding-Machine.jpg";
import Semi_Auto_Jar_Rinsing_Filling_Capping_Machine from "app/assests/Semi-Auto-Jar-Rinsing-Filling-Capping-Machine.jpg";
import Pouches_Filling_Machine from "app/assests/Pouches-Filling-Machine.jpg";
import Linear_Auto_Cup_Rinsing_Filling_and_Sealing from "app/assests/Linear-Auto-Cup-Rinsing-Filling-Sealing-Machine.jpg";
import Water_Bottle_Washing_Machine from "app/assests/Water-Bottle-Washing-Machine.jpg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Droplet,
  Filter,
  Gauge,
  Waves,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Import the static hero image
import ProductHero from "@/app/assests/product-hero.jpg"; // Update the path to your image

interface Product {
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  image: string;
  features: string[];
  rating: number;
  price: number;
  warranty: string;
  energyEfficiency: string;
}

const products: Product[] = [
  {
    title: "Commercial Water Treatment Plant",
    category: "Treatment",
    description:
      "A comprehensive system designed to purify and treat water for commercial and industrial use. It typically combines various technologies like filtration, disinfection, and chemical treatment to meet specific water quality standards.",
    icon: Droplet,
    image: Commercial_Water_Treatment_Plant,
    features: ["Great performance", "Precise construction", "Energy efficient"],
    rating: 4.5, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Water Treatment System",
    category: "Treatment",
    description:
      "A comprehensive setup that purifies water for specific end-uses. It may include various processes like filtration, disinfection, and chemical treatment to meet required water quality standards.",
    icon: Droplet,
    image: Water_Treatment_System,
    features: [
      "Advanced Filtration Technology",
      "Eco-Friendly Design",
      "User-Friendly Interface",
      "Customizable Solutions",
    ],
    rating: 4.6, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "2-year warranty with 24/7 customer support.",
    energyEfficiency:
      "Energy-efficient design reduces operational costs by 20%.",
  },

  {
    title: "Water Demineralisation Plant ",
    category: "Treatment",
    description:
      "A facility that removes mineral salts from water through ion exchange processes. It produces high-purity water essential for various industrial applications, including power generation and electronics manufacturing.",
    icon: Droplet,
    image: Water_Demineralisation_Plant,
    features: [
      "High-Purity Water Output",
      "Advanced Technology",
      "Energy-Efficient Design",
      "Customizable Configurations",
    ],
    rating: 4.0, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Deionisation Plant",
    category: "Treatment",
    description:
      "A water treatment facility that removes ions from water using ion exchange resins. It produces ultra-pure water for industries like pharmaceuticals, electronics, and laboratories where high-purity water is crucial.",
    icon: Droplet,
    image: Deionisation_Plant,
    features: [
      "Efficient functionality",
      "Ensures excellent filtration",
      "Ensures excellent filtration",
      "Negligible maintenance",
    ],
    rating: 4.1, // Rating out of 5
    price: 150000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Chemical Dosing System",
    category: "Treatment",
    description:
      "A precision equipment that accurately measures and injects chemicals into water treatment processes. It ensures proper water quality by controlling pH levels, disinfection, and other chemical treatments in various industrial and municipal applications.",
    icon: Droplet,
    image: Chemical_Dosing_System,
    features: [
      "Heavy duty construction",
      "Easy to maintain",
      "Longer service lifece",
      "Smooth operations",
    ],
    rating: 4.5, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Water Chlorination Plant",
    category: "Treatment",
    description:
      "A system that adds chlorine to water for disinfection purposes. It's commonly used in municipal water treatment to kill harmful bacteria and microorganisms, ensuring safe drinking water.",
    icon: Droplet,
    image: Water_Chlorination_Plant,
    features: [
      "Effective Disinfection",
      "Automated Chlorine Dosing",
      "Durable Construction",
      "Low Maintenance",
    ],
    rating: 4.6, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Water Softening Plant",
    category: "Treatment",
    description:
      "A system designed to remove calcium and magnesium ions from hard water. It improves water quality for domestic and industrial use, preventing scale buildup in pipes and appliances.",
    icon: Droplet,
    image: Water_Softening_Plant,
    features: [
      "Efficient Ion Exchange Process",
      "Prevents Scale Buildup",
      "Customizable Capacity",
      "Low Maintenance",
    ],
    rating: 4.3, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Packaged Drinking Water Plant",
    category: "Treatment",
    description:
      "A comprehensive system for bottling and packaging mineral water. It includes filling, capping, labeling, and packaging equipment, designed to meet the specific needs of mineral water producers.",
    icon: Droplet,
    image: Packaged_Drinking_Water_Plant,
    features: [
      "Automated Filtration System",
      "High-Purity Water Production",
      "Efficient Packaging Line",
      "Compact & Scalable Design",
    ],
    rating: 4, // Rating out of 5
    price: 1000000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Water Ultrafiltration System",
    category: "Filtration",
    description:
      "A membrane filtration process that removes suspended solids, bacteria, and some viruses from water. It's effective in producing high-quality water for industrial processes and as a pre-treatment for reverse osmosis systems.",
    icon: Droplet,
    image: Water_Ultrafiltration_System,
    features: [
      "Low power consumption",
      "Easy to install",
      "Integrated UF module with prefilter",
    ],
    rating: 4.5, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Activated Carbon Water Filter",
    category: "Filtration",
    description:
      "A filtration system that uses activated carbon to remove impurities, chlorine, and organic compounds from water. It improves taste, odor, and overall water quality, making it ideal for both residential and commercial use.",
    icon: Droplet,
    image: Activated_Carbon_Water_Filter,
    features: [
      "Effective Contaminant Removal",
      "Improved Odor Control",
      "Long-Lasting Filtration",
      "Eco-Friendly",
    ],
    rating: 4.3, // Rating out of 5
    price: 100, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Sand Water Filter",
    category: "Filtration",
    description:
      "A filtration system that uses layers of sand and gravel to remove suspended particles from water. It's effective in removing turbidity and is often used as a pre-treatment step in larger water treatment systems.",
    icon: Droplet,
    image: Sand_Water_Filter,
    features: [
      "Maintenance free",
      "Automatic back-washing",
      "Automatic back-washing",
    ],
    rating: 4.5, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },

  {
    title: "Mixed Bed DM Plant",
    category: "Industrial",
    description:
      "A water treatment plant that uses a mixture of cation and anion exchange resins in a single bed. It produces ultra-pure water by removing almost all ionic impurities, crucial for industries requiring high-purity water.",
    icon: Droplet,
    image: Mixed_Bed_DM_Plant,
    features: [
      "Easy to maintain",
      "Negligible maintenance",
      "Maximum Throughput",
      "Longer Life",
    ],
    rating: 4.5, // Rating out of 5
    price: 150000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "FRP RO Plant",
    category: "Industrial",
    description:
      "A Reverse Osmosis plant constructed with Fiber Reinforced Plastic, offering corrosion resistance and durability. It purifies water by removing contaminants and dissolved solids, suitable for various industrial and commercial applications.",
    icon: Droplet,
    image: FRP_RO_Plant,
    features: [
      "Consumes less energy",
      "Robust construction",
      "Long lasting operational life",
    ],
    rating: 4.4, // Rating out of 5
    price: 150000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "FRP De Gasification Systems",
    category: "Industrial",
    description:
      "Fiber Reinforced Plastic systems designed to remove dissolved gases from water or other liquids. They are corrosion-resistant and efficient, commonly used in industries where gas content in liquids needs to be controlled.",
    icon: Droplet,
    image: FRP_De_Gasification_Systems,
    features: [
      "Corrosion-Resistant Construction",
      "Efficient Gas Removal",
      "Compact Design",
      "Low Maintenance",
    ],
    rating: 4.8, // Rating out of 5
    price: 100000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Rapid Flow Two Bed DM Plants",
    category: "Industrial",
    description:
      "High-capacity demineralization plants with two separate beds for cation and anion exchange. They offer fast processing of large volumes of water, suitable for industries requiring significant amounts of demineralized water.",
    icon: Droplet,
    image: Rapid_Flow_Two_Bed_DM_Plants,
    features: [
      "Two-Bed Ion Exchange System",
      "Rapid Flow Rate",
      "High Purity Water Output ",
      "Low Maintenance and Operation Cost",
    ],
    rating: 4.5, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Mild Steel Rubber Lined Two Bed DM Water Plants",
    category: "Industrial",
    description:
      "A demineralization plant with mild steel construction and rubber lining for corrosion protection. It uses two beds for efficient ion exchange, producing high-quality demineralized water for industrial use.",
    icon: Droplet,
    image: Mild_Steel_Rubber_Lined_Two_Bed_DM_Water_Plants,
    features: [
      "Durable Mild Steel Construction",
      "Two-Bed Ion Exchange System",
      "High Durability",
      "Low Maintenance: ",
    ],
    rating: 4.7, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Auto FRP Two Bed DM Water Plants",
    category: "Industrial",
    description:
      "An automated water treatment system using Fiber Reinforced Plastic (FRP) construction with two demineralization beds. It efficiently removes dissolved solids and minerals from water, producing high-purity demineralized water for industrial applications.",
    icon: Droplet,
    image: Auto_FRP_Two_Bed_DM_Water_Plants,
    features: [
      "Automated Operation",
      "Two-Bed Ion Exchange",
      "Low Maintenance",
    ],
    rating: 4.4, // Rating out of 5
    price: 150000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },

  {
    title: "FRP Mixed Bed DM Plants",
    category: "Industrial",
    description:
      "Fiber Reinforced Plastic systems designed to remove dissolved gases from water or other liquids. They are corrosion-resistant and efficient, commonly used in industries where gas content in liquids needs to be controlled",
    icon: Droplet,
    image: FRP_Mixed_Bed_DM_Plants,
    features: [
      "Mixed Bed Ion Exchange",
      "Automated Operation",
      "Durable FRP Construction",
      "Low Maintenance",
    ],
    rating: 3.9, // Rating out of 5
    price: 110000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },

  {
    title: "DM Water Plants",
    category: "Purification",
    description:
      "Demineralization water plants that remove mineral ions from water through ion exchange processes. They are essential in industries requiring high-purity water, such as power plants and chemical manufacturing..",
    icon: Droplet,
    image: DM_Water_Plants,
    features: [
      "1.	Efficient Ion Exchange",
      "2.	Customizable Capacity",
      "3.	Low Operational Cost",
      "4.	Durable Construction",
    ],
    rating: 3.8, // Rating out of 5
    price: 50000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Mineral Water Plants",
    category: "Purification",
    description:
      "Complete facilities for processing and bottling mineral water. These plants include various stages of water treatment, purification, and packaging to produce bottled mineral water for consumer use.",
    icon: Droplet,
    image: Mineral_Water_Plants,
    features: [
      "•	Rugged construction",
      "•	PLC program controls",
      "•	Longer working life",
    ],
    rating: 4.5, // Rating out of 5
    price: 50000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Commercial Reverse Osmosis Plant",
    category: "Treatment",
    description:
      "A large-scale water purification system that uses semi-permeable membranes to remove contaminants, salts, and impurities from water. It's widely used in industries, hotels, and other commercial establishments to produce high-quality purified water.",
    icon: Droplet,
    image: Commercial_Reverse_Osmosis_Plant,
    features: [
      "•	Maintenance free",
      "•	Rugged construction",
      "•	PLC control system",
    ],
    rating: 4.8, // Rating out of 5
    price: 150000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Ultraviolet Water Systems",
    category: "Purification",
    description:
      "For our immense knowledge in this domain, we are counted amongst the most profound manufacturers and suppliers of Ultraviolet Water Systems. These systems are used in food industry, swimming pool, hospitals and laboratory.",
    icon: Droplet,
    image: Ultraviolet_Water_Systems,
    features: [
      "•	Easy installation",
      "•	Highly effective",
      "•	Safe and convenient operation",
    ],
    rating: 4.3, // Rating out of 5
    price: 150000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Reverse Osmosis Plant",
    category: "Purification",
    description:
      "The Reverse Osmosis Plant is a water treatment system that uses membrane filtration technology to remove dissolved salts, minerals, and impurities from water. It provides high-purity water suitable for industrial, commercial, and residential applications.",
    icon: Droplet,
    image: Reverse_Osmosis_Plant,
    features: [
      "1.	High-Efficiency Filtration",
      "2.	Energy-Efficient",
      "Minimal maintenance",
      "4.	Versatile Applications",
    ],
    rating: 4.7, // Rating out of 5
    price: 100000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Water Bottle Filling Machines",
    category: "Filling and Bottling Equipment",
    description:
      "Automated equipment designed specifically for filling water bottles of various sizes. These machines ensure accurate filling, maintain hygiene, and can handle high-speed operations in water bottling plants.",
    icon: Droplet,
    image: Water_Bottle_Filling_Machines,
    features: [
      "•	Have user friendly interface",
      "•	Rugged design and can withstand extreme climatic conditions",
      "•	Easy to install and convenient to maintain",
    ],
    rating: 4.9, // Rating out of 5
    price: 500000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },

  {
    title: "Mineral Water Filling Machines",
    category: "Filling and Bottling Equipment",
    description:
      "Specialized equipment designed for filling bottles with mineral water. These machines ensure accurate filling volumes and maintain the purity of the water during the bottling process.",
    icon: Droplet,
    image: Mineral_Water_Filling_Machines,
    features: [
      "•	Noise free operation",
      "•	Low power consumption",
      "•	Easy to install",
    ],
    rating: 4.6, // Rating out of 5
    price: 600000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Water Bottle Washing Machine",
    category: "Filling and Bottling Equipmentt",
    description:
      "Specialized equipment for cleaning and sanitizing water bottles before filling. It ensures hygienic conditions in the bottling process, crucial for maintaining water quality and safety standards.",
    icon: Droplet,
    image: Water_Bottle_Washing_Machine,
    features: [
      "•	High working efficiency",
      "•	Vibration free operation",
      "•	Longer operational life",
    ],
    rating: 4.3, // Rating out of 5
    price: 600000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },

  {
    title: "Mineral Water Jar Filling Machine",
    category: "Filling and Bottling Equipmentt",
    description:
      "A dedicated machine for filling large water jars or containers with mineral water. It's designed for efficiency and hygiene, often used in water bottling plants and distribution centers.",
    icon: Droplet,
    image: Mineral_Water_Jar_Filling_Machine,
    features: [
      "•	Hassle free performance",
      "•	High operational fluency",
      "•	Easy installation",
    ],
    rating: 4.3, // Rating out of 5
    price: 600000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Fully Auto Pet Bottle Rinsing Filling and Capping Machine",
    category: "Filling and Bottling Equipment",
    description:
      "An automated machine that performs multiple functions in bottling processes. It rinses, fills, and caps jars or bottles in a single, efficient operation, ideal for beverage and food packaging industries.",
    icon: Droplet,
    image: Fully_Auto_Pet_Capping_Machine,
    features: [
      "1.	Complete Automation",
      "2.	High-Speed Operation",
      "3.	Hygienic Design",
      "4.	Precise Filling and Capping",
    ],
    rating: 4.6, // Rating out of 5
    price: 130000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Blowing Machine",
    category: "Filling and Bottling Equipment",
    description:
      "A versatile manufacturing equipment used to produce hollow plastic products such as bottles and containers. It melts plastic and uses compressed air to shape it into desired forms, essential for packaging industries",
    icon: Droplet,
    image: Blowing_Machine,
    features: [
      "1.	High-Speed Production",
      "2.	Precise Molding",
      "3.	Energy-Efficient",
      "4.	Versatile Application",
    ],
    rating: 4.9, // Rating out of 5
    price: 300000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Water Bottling Packaging Solution",
    category: "Filling and Bottling Equipment",
    description:
      "Specialized equipment for cleaning and sanitizing water bottles before filling. It ensures hygienic conditions in the bottling process, crucial for maintaining water quality and safety standards",
    icon: Droplet,
    image: Water_Bottling_Packaging_Solution,
    features: [
      "1.	Complete Automation",
      "2.	High-Speed Production",
      "3.	Hygienic Designe",
      "4.	Customizable Options",
    ],
    rating: 4.4, // Rating out of 5
    price: 160000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },

  {
    title: "Semi Auto Blow Molding Machine",
    category: "Filling and Bottling Equipment",
    description:
      "A machine used for manufacturing hollow plastic products like bottles. It's semi-automated, requiring some manual intervention, and is suitable for smaller-scale production or specialized plastic products.",
    icon: Droplet,
    image: Semi_Auto_Blow_Molding_Machine,
    features: [
      "1.	Semi-Automated Operation",
      "2.	Versatile Molding",
      "3.	Energy Efficient",
      "4.	Compact and Space-Saving",
    ],
    rating: 4.5, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },

  {
    title: "Semi Auto Jar Rinsing Filling Capping Machine",
    category: "Filling and Bottling Equipment",
    description:
      "A machine that partially automates the process of rinsing, filling, and capping jars or bottles. It requires some manual operation, making it suitable for small to medium-scale production in food and beverage industries.",
    icon: Droplet,
    image: Semi_Auto_Jar_Rinsing_Filling_Capping_Machine,
    features: [
      "1.	Semi-Automated Operation",
      "2.	Precise Filling and Capping",
      "3.	Compact and Space-Saving",
      "4.	Cost-Effective",
    ],
    rating: 4.5, // Rating out of 5
    price: 150000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Pouches Filling Machine ",
    category: "Filling and Bottling Equipment",
    description:
      "An automated machine designed to fill and seal flexible pouches with liquids or semi-liquids. It's widely used in the packaging of water, beverages, and other liquid products in pouch format.",
    icon: Droplet,
    image: Pouches_Filling_Machine,
    features: [
      "Automatic regeneration",
      "High flow rates",
      "Minimal maintenance",
      "Custom sizes available",
    ],

    rating: 4.7, // Rating out of 5
    price: 120000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },
  {
    title: "Linear Auto Cup Rinsing Filling and Sealing",
    category: "Filling and Bottling Equipment",
    description:
      "A high-speed automated machine for cup packaging. It rinses, fills, and seals cups in a linear process, suitable for packaging beverages, dairy products, and other liquid foods.",
    icon: Droplet,
    image: Linear_Auto_Cup_Rinsing_Filling_and_Sealing,
    features: [
      "1.	Linear Automation",
      "2.	High-Speed Production",
      "3.	Precise Filling and Sealing",
      "4.	Hygienic Design",
    ],
    rating: 4.8, // Rating out of 5
    price: 150000, // Price in INR
    warranty: "3-year warranty with annual maintenance included.",
    energyEfficiency: "Energy-saving mode reduces power consumption by 25%.",
  },

  // Add the rest of your products here with the new fields (warranty and energyEfficiency)...
];

const categories = [
  "All",
  "Treatment",
  "Filtration",
  "Purification",
  "Industrial",
  "Filling and Bottling Equipment",
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLearnMoreDialogOpen, setIsLearnMoreDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendInquiry = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleLearnMore = (product: Product) => {
    setSelectedProduct(product);
    setIsLearnMoreDialogOpen(true);
  };

  const closeLearnMoreDialog = () => {
    setIsLearnMoreDialogOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {/* Hero Section with Static Image */}
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src={ProductHero}
            alt="Water treatment products"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/30" />
        <div className="container relative flex min-h-screen items-center pt-20">
          <div className="max-w-2xl animate-slide-in pl-5">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Explore Our
              <br />
              <span className="text-accent">Products</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Discover our comprehensive range of water treatment solutions for
              industrial and commercial applications
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-12 flex justify-center items-center">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="mt-8 flex w-full max-w-md gap-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Card
                key={product.title}
                className="overflow-hidden transition-transform hover:scale-105"
              >
                {/* Product Image */}
                <div className="relative aspect-video">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Title */}
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>

                {/* Product Description */}
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>

                {/* Buttons */}
                <CardFooter className="flex justify-between">
                  {/* Learn More Button */}
                  <Button onClick={() => handleLearnMore(product)}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  {/* Send Inquiry Button */}
                  <Button
                    onClick={handleSendInquiry}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    Send Inquiry
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Send Inquiry Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Enter Buying Requirement Details
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              To get accurate quotes, please include product name, order
              quantity, usage, special requests if any in your inquiry.
            </p>
            <textarea
              className="w-full p-2 border rounded mb-4 bg-white"
              placeholder="Please fill in this field."
              rows={4}
            />
            <input
              type="email"
              className="w-full p-2 border rounded mb-2 bg-white"
              placeholder="Email Id"
            />
            <input
              type="tel"
              className="w-full p-2 border rounded mb-2 bg-white"
              placeholder="+91 Mobile number"
            />
            <div className="flex justify-end">
              <Button
                onClick={closeDialog}
                className="bg-gray-500 hover:bg-gray-600 mr-2"
              >
                Cancel
              </Button>
              <Button
                onClick={closeDialog}
                className="bg-red-500 hover:bg-red-600"
              >
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Learn More Dialog Box */}
      {isLearnMoreDialogOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">{selectedProduct.title}</h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2 font-semibold">Price</td>
                  <td className="py-2">₹{selectedProduct.price}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Rating</td>
                  <td className="py-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`text-2xl ${
                          i < selectedProduct.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Features</td>
                  <td className="py-2">
                    <ul className="list-disc list-inside">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Warranty/Service</td>
                  <td className="py-2">{selectedProduct.warranty}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Energy Efficiency</td>
                  <td className="py-2">{selectedProduct.energyEfficiency}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <Button
                onClick={closeLearnMoreDialog}
                className="bg-gray-500 hover:bg-gray-600"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
