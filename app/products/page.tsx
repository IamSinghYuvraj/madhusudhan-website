"use client";
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

const products = [
  {
    title: "Commercial Water Treatment Plant",
    category: "Treatment",
    description:
      "We are engaged in the business of manufacturing and supplying of high quality commercial water treatment plant. We manufacture machines of this plant using premium quality of metal under the guidance of our highly skilled professionals. Its construction complies with the set industry standards to ensure its optimum performance. Industrial water treatment plant is required to remove impurities and pathogens from the water to make it safe for drinking purpose. Before its installation, we check it on different levels of quality and safety parameters. The offered industrial water treatment plant consumes less power and is highly durable in nature.",
    icon: Droplet,
    image: Commercial_Water_Treatment_Plant,
    features: [
      "Great performance",
      "Precise construction",
      "Energy efficient",
  
    ],
    
    rating: 4.5, // Rating out of 5
    price: 120000, // Price in INR
  },


    {
      title: "Water Treatment System",
      category: "Treatment",
      description:
        "The Water Treatment System is an advanced solution designed to purify and improve water quality for residential, commercial, or industrial use. It efficiently removes impurities, contaminants, and harmful substances, ensuring safe, clean, and great-tasting water. Featuring eco-friendly technology and easy maintenance, it promotes health, sustainability, and reliable water access",
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
  
    },
    {
      title: "Water Demineralisation Plant ",
      category: "Treatment",
      description:
        "The Water Demineralisation Plant is an advanced solution engineered to eliminate dissolved minerals, salts, and impurities from water, delivering high-purity water for industrial, pharmaceutical, and laboratory applications. Utilizing cutting-edge technologies like ion exchange or reverse osmosis, it ensures optimal water quality. Its energy-efficient design, durability, and low maintenance make it a reliable choice for demanding processes.",
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
    },
    {
      title: "Deionisation Plant",
      category: "Treatment",
      description:
        "Being a trusted entity, we are consistently engaged in providing optimum quality industrial Deionisation Plant in several specifications. At our highly advanced production set-up, the offered plant is manufactured using supreme grade components and pioneering techniques. Widely used for deionisation of water for several commercial as well as industrial applications, the offered plant is much cherished in the market. In addition to this, our clients can avail this durable Deionisation Plant at reasonable prices from us",
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
      
    },
    {
      title: "Chemical Dosing System",
      category: "Treatment",
      description:
        "Since our inception in 1996, we have been engaged in manufacturing, exporting and supplying a wide range of durable Chemical Dosing Systems in standard specifications. The offered systems are manufactured at our highly advanced production set-up with the use of top-notch grade components as per international quality standards. Widely used in disinfection, pH adjustment as well as flocculation, the provided systems find its importance in water treatment. In addition to this, our clients can purchase these Chemical Dosing Systems at reasonable prices from us.",
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
      
    },
    {
      title: "Water Chlorination Plant",
      category: "Treatment",
      description:
        "The Water Chlorination Plant is a reliable system designed to disinfect water by effectively eliminating bacteria, viruses, and other harmful microorganisms through controlled chlorine dosing. Ideal for municipal, industrial, and residential water treatment, it ensures safe, clean, and potable water. Featuring automated controls, durable construction, and minimal maintenance, it offers a cost-effective solution for water sanitation needs",
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
    },
    {
      title: "Water Softening Plant",
      category: "Treatment",
      description:
        "The Water Softening Plant is designed to remove hardness-causing minerals like calcium and magnesium from water through ion exchange technology. It prevents scale buildup in pipelines, appliances, and industrial equipment, enhancing efficiency and durability. Ideal for residential, commercial, and industrial use, it ensures soft, high-quality water, reduces maintenance costs, and improves overall water system performance.",
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

    },
    {
      title: "Packaged Drinking Water Plant",
      category: "Treatment",
      description:
        "Nishu Enterprises is a name to trust when it comes to selecting the best packaged drinking water plant. This plant can be installed and used for water purification, purified water filling in bottles/ pouches, sealing bottles/ pouches for selling. The tap water is usually not suitable for human consumption, as it contains mineral salts and other contaminants. This water is made suitable for drinking by removing all contaminants, suspended solids and microorganisms. The disinfected water is then safely packaged and sold for consumption. Based on the modern technology, this plant matches up with the specified water purification requirements. This highly efficient packaged drinking water plant supplies purified water as per approved norms. Apart from water purification, this plant also carries out process, like filling, rinsing and capping",
      icon: Droplet,
      image: Packaged_Drinking_Water_Plant,
      features: [
        "Automated Filtration System",
        "High-Purity Water Production",
        "Efficient Packaging Line",
        "Compact & Scalable Design",
      ],
      rating: 4., // Rating out of 5
      price: 1000000, // Price in INR
    },
    {
      title: "Water Ultrafiltration System",
      category: "Filtration",
      description:
        "We are known as one of the prominent and premier manufacturers and suppliers of an extensive range of durable Water Ultrafiltration System. This system is ideal for treating municipal, well and surface water. We manufacture this system under the firm guidance of expert supervisors using high quality materials and components. Clients can avail our industrial Water Ultrafiltration System in different technical specifications from us. Also, we offer this system at market leading price.",
      icon: Droplet,
      image: Water_Ultrafiltration_System,
      features: [
        "Low power consumption",
        "Easy to install",
        "Integrated UF module with prefilter",
      ],
      rating: 4.5, // Rating out of 5
      price: 120000, // Price in INR
    },
    {
      title: "Activated Carbon Water Filter",
      category: "Filtration",
      description:
        "Nishu Enterprises is a trusted name in the field of water filter manufacturing. The company manufactures and exports Activated Carbon Water Filter, along with other filters and water plant. This water filter is used for cleaning water to make it suitable for re-use in industrial applications in textile, chemical, pharmaceutical and other industries. This easy to install and operate water filter comes with a self-cleaning cycle system. The components of activated carbon water filter are mild steel pressure vessel, mild steel/ PVC piping and valves, multi port control valve, electrical controls with all interlocks, etc. This compact filter is factory tested before shipped at client's location. The pre-assembled filter can be mounted using the offered stainless steel 304 skid. It has to be connected with electricity, drain and water supply.",
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
    },
    {
      title: "Sand Water Filter",
      category: "Filtration",
      description:
        "Backed by sharp business wisdom and profound industrial knowledge, we have emerged as a leading manufacturer and supplier of durable Sand Water Filter. This filter effectively removes the suspended substance from water.  The filter is used in food and chemical industry. To manufacture this filter, our expert workforce uses optimum quality materials and components. Highly demanded in the market, this Sand Water Filter is available in different specifications. We offer this filter at cost effective price.",
      icon: Droplet,
      image: Sand_Water_Filter,
      features: [
        "Maintenance free",
        "Automatic back-washing",
        "Automatic back-washing",
      ],
      rating: 4.5, // Rating out of 5
    price: 120000, // Price in INR
    },
    
    
    
    {
      title: "Mixed Bed DM Plant",
      category: "Industrial",
      description:
        "We are a trustworthy manufacturer, exporter and supplier of a quality tested array of Mixed Bed DM Plant in several specifications. The provided plant is manufactured under the supervision of our talented professionals with the use of optimum quality components and sophisticated techniques. Known for efficient functionality, the offered plant is suitable for demineralization of water to make it fit for several industrial, commercial as well as household applications. Apart from this, our patrons can avail this Mixed Bed DM Plant at highly competitive prices from us.",
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
    },
    {
      title: "FRP RO Plant",
      category: "Industrial",
      description:
        "We are one of the leading manufacturer and supplier of durable FRP RO Plant. It has been manufactured using premium quality of Fiber Reinforced Plastic by our highly skilled engineers. This reverse osmosis plant offered by us ensures high quality safe drinking water. It is used to remove all the contained impurities and hardness from the water. FRP Reverse Osmosis Plant provided by us assures optimum performance and is being tested on different quality parameters to conform the predefined industry norms. We offer this plant at competitive prices.",
      icon: Droplet,
      image: FRP_RO_Plant,
      features: [
        "Consumes less energy",
        "Robust construction",
        "Long lasting operational life",
      ],
      rating: 4.4, // Rating out of 5
    price: 150000, // Price in INR
    },
    {
      title: "FRP De Gasification Systems",
      category: "Industrial",
      description:
        "The FRP De-Gasification System is designed to efficiently remove dissolved gases like oxygen and carbon dioxide from water or liquids in industrial processes. Constructed with fiberglass-reinforced plastic (FRP), it offers corrosion resistance and durability. Ideal for water treatment, chemical processing, and power plants, this system ensures optimal water quality, enhancing system efficiency while minimizing operational costs.",
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
    },
    {
      title: "Rapid Flow Two Bed DM Plants",
      category: "Industrial",
      description:
        "IThe Rapid Flow Two Bed DM (Demineralization) Plant is designed to provide high-quality demineralized water for industrial applications. It uses a two-bed ion exchange process, consisting of a cation and anion resin bed, to effectively remove dissolved salts and minerals. The system ensures rapid flow rates, high purity, and low maintenance, making it ideal for power plants, pharmaceuticals, and chemical industries",
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
    },
    {
      title: "Mild Steel Rubber Lined Two Bed DM Water Plants",
      category: "Industrial",
      description:
        "The Mild Steel Rubber Lined Two Bed DM Water Plant is designed for efficient demineralization of water in industrial applications. Constructed with mild steel and lined with durable rubber, it offers enhanced corrosion resistance and longevity. The two-bed ion exchange system effectively removes dissolved salts and minerals, providing high-purity water. Ideal for power plants, pharmaceuticals, and chemical industries, it ensures reliable, low-maintenance performance.",
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
    },
    {
      title: "Auto FRP Two Bed DM Water Plants",
      category: "Industrial",
      description:
        "The Auto FRP Two Bed DM Water Plant is an advanced water treatment system designed to deliver high-quality demineralized water. Constructed with fiberglass-reinforced plastic (FRP), it ensures durability and corrosion resistance. Featuring an automated two-bed ion exchange process, it efficiently removes dissolved salts and minerals, providing high-purity water with minimal manual intervention. Ideal for industrial applications, it offers low maintenance and reliable performance.",
      icon: Droplet,
      image: Auto_FRP_Two_Bed_DM_Water_Plants,
      features: [
        "Automated Operation",
        "Two-Bed Ion Exchange",
        "Low Maintenance",
      ],
      rating: 4.4, // Rating out of 5
    price: 150000, // Price in INR
    },
   
    {
      title: "FRP Mixed Bed DM Plants",
      category: "Industrial",
      description:
        "The Mixed Bed FRP DM Plant is a high-efficiency water treatment system designed to produce ultra-pure demineralized water. It combines both cation and anion resins in a single vessel for optimal removal of dissolved salts, minerals, and impurities. Constructed with durable fiberglass-reinforced plastic (FRP), it offers corrosion resistance, longevity, and low maintenance, making it ideal for industries requiring high-quality water.",
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
    },
   
    {
      title: "DM Water Plants",
      category: "Purification",
      description:
        "Nishu Enterprises, a 1996 established company manufactures and exports DM Water Plant of best grade category. As the name of the plant suggests, it demineralizes the water and make the water suitable for drinking, cooking and other purposes. It follows an ion exchange process to separate dissolved mineral salts as well as other contaminants from water. The compact demineralization water plant is pre-assembled and supplied to client's site for installation with ease. This plant must be connected to electricity, water and drain supply. This minimal maintenance plant filters water through resin media. It is possible to monitor the quality of water through several sampling points. The operating person can also calculate pressure from pressure gauges.",
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
    },
    {
      title: "Mineral Water Plants",
      category: "Purification",
      description:
        "We are persistently striving to sustain our high credibility in the market by manufacturing and supplying an extensive range of stainless steel Mineral Water Plant. This plant is used for filling bottles with drinking water. At our sophisticated production unit, we manufacture this plant using high quality materials. This plant can perform washing, filling and capping automatically. We check this industrial Mineral Water Treatment Plant on defined quality parameters to provide a flawless range to clients.",
      icon: Droplet,
      image: Mineral_Water_Plants,
      features: [
        "•	Rugged construction",
        "•	PLC program controls",
        "•	Longer working life",
      ],
      rating: 4.5, // Rating out of 5
    price: 50000, // Price in INR
    },
    {
      title: "Commercial Reverse Osmosis Plant",
      category: "Treatment",
      description:
        "Leveraging on our immense understanding and skills in this domain, we are reckoned as a valuable manufacturer and supplier of durable Commercial Reverse Osmosis Plant. This system is used to purify saline and impure water in commercial establishments. Our diligent workforce uses high quality materials and components to manufacture this system. To provide a defect free range, we check this durable Commercial RO Plant on varied functioning parameters. We offer this system at pocket friendly price.",
      icon: Droplet,
      image: Commercial_Reverse_Osmosis_Plant,
      features: [
        "•	Maintenance free",
        "•	Rugged construction",
        "•	PLC control system",
      ],
      rating: 4.8, // Rating out of 5
    price: 150000, // Price in INR
    },
    {
      title: "Ultraviolet Water Systems",
      category: "Purification",
      description:
        "For our immense knowledge in this domain, we are counted amongst the most profound manufacturers and suppliers of Ultraviolet Water Systems. These systems are used in food industry, swimming pool, hospitals and laboratory. In order to comply with set industrial norms, we use optimum quality materials to manufacture these systems. We check these UV Water System on defined quality parameters to provide the best range to clients. Also, we offer these systems at reasonable prices.",
      icon: Droplet,
      image: Ultraviolet_Water_Systems,
      features: [
        "•	Easy installation",
        "•	Highly effective",
        "•	Safe and convenient operation",
      ],
      rating: 4.3, // Rating out of 5
    price: 150000, // Price in INR
    },
    {
      title: "Reverse Osmosis Plant",
      category: "Purification",
      description:
        "The Reverse Osmosis Plant is a water treatment system that uses membrane filtration technology to remove dissolved salts, minerals, and impurities from water. It provides high-purity water suitable for industrial, commercial, and residential applications. The system ensures efficient filtration, reduces contaminants, and enhances water quality. With minimal maintenance and energy-efficient operation, it is a reliable solution for clean water needs",
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
    },
    {
      title: "Water Bottle Filling Machines",
      category: "Filling and Bottling Equipment",
      description:
        "With an aim to achieve clients' satisfaction, we manufacture, supply and export quality assured durable Bottle Filling Machines. The offered machines are widely used in water packaging sector to fill purified water into the bottles of different quantities and for sealing the water containing bottles for further marketing purpose. Backed by our immense knowledge about primary market, we source best grade raw materials from accredited vendors for manufacturing these machines. At our well equipped production facility, we make these machines under valuable guidance of our experts and in accordance with the set industry standards for quality assurance. We make these industrial bottle filling machines available to our clients at highly affordable rates",
      icon: Droplet,
      image: Water_Bottle_Filling_Machines,
      features: [
        "•	Have user friendly interface",
        "•	Rugged design and can withstand extreme climatic conditions",
        "•	Easy to install and convenient to maintain",
      ],
      rating: 4.9, // Rating out of 5
    price: 500000, // Price in INR
    },
    
    {
      title: "Mineral Water Filling Machines",
      category: "Filling and Bottling Equipment",
      description:
        "With the combination of our sturdy infrastructure and the skills of our technical personnel, we are engaged in manufacturing and exporting Mineral Water Filling Machines. These machines are highly utilized in beverage industry for filling bottles with drinking water and juice. To manufacture these machines, our diligent workforce uses optimum grade materials. We check these Mineral Water Filling Machines on construction and efficiency parameters to provide a flawless range to clients",
      icon: Droplet,
      image: Mineral_Water_Filling_Machines,
      features: [
        "•	Noise free operation",
        "•	Low power consumption",
        "•	Easy to install",
      ],
      rating: 4.6, // Rating out of 5
    price: 600000, // Price in INR
    },
    {
      title: "Water Bottle Washing Machine",
      category: "Filling and Bottling Equipmentt",
      description:
        "We have set up a state of the art manufacturing plant, which enables us to manufacture and supply a quality approved Water Bottle Washing Machine. this machine is manufactured in compliance with latest technology using high quality materials and components. In beverage industry, this machine is used for washing and filling bottles with liquid. We make this Water Bottle Washing Machine available for clients in different specifications as per their requirements.",
      icon: Droplet,
      image: Water_Bottle_Washing_Machine,
      features: [
        "•	High working efficiency",
        "•	Vibration free operation",
        "•	Longer operational life",
      ],
      rating: 4.3, // Rating out of 5
    price: 600000, // Price in INR
    },
    
    {
      title: "Mineral Water Jar Filling Machine",
      category: "Filling and Bottling Equipmentt",
      description:
        "We have marked a unique place in the market by manufacturing and supplying an extensive range of Mineral Water Jar Filling Machine. This machine in beverage industry for filling bottles with drinking water. We manufacture this machine under the strict inspection of expert professionals using high quality materials and components. Available in different specifications, our Mineral Water Jar Filling Machine is highly demanded in the market. We offer this machine at cost effective price to clients.",
      icon: Droplet,
      image: Mineral_Water_Jar_Filling_Machine,
      features: [
        "•	Hassle free performance",
        "•	High operational fluency",
        "•	Easy installation",
      ],
      rating: 4.3, // Rating out of 5
    price: 600000, // Price in INR
    },
    {
      title: "Fully Auto Pet Bottle Rinsing Filling and Capping Machine",
      category: "Filling and Bottling Equipment",
      description:
        "The Fully Auto Pet Bottle Rinsing, Filling, and Capping Machine is a high-efficiency system designed for the complete automation of the bottling process. It rinses, fills, and caps PET bottles with high-speed precision. Ideal for industries like beverages and bottled water, it ensures hygienic filling, consistent quality, and maximizes production output while minimizing human intervention and operational costs.",
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
    },
    {
      title: "Blowing Machine",
      category: "Filling and Bottling Equipment",
      description:
        "Nishu Enterprises has years of experience in manufacturing blowing machine, along with other machinery and plant. This machine is meant for the production of different shapes of the PET bottle. This semi-automatic, portable machine requires a professional operator for operating it. Different types of bottles can be produced using this machine for different uses. Companies can use the machine for making oil bottles, milk bottles, juice bottles, mineral water bottles, cosmetic bottles and many other bottles. Each blowing machine fabricated in-house is tested on different quality and safety parameters, so that once installed for real operations can operate & perform at its best. When using this machine, the owner can be assured of the uniform bottle quality, energy efficiency, shorter changeover times and safe operations.",
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
    },
    {
      title: "Water Bottling Packaging Solution",
      category: "Filling and Bottling Equipment",
      description:
        "The Water Bottling Packaging Solution is a comprehensive system designed for the efficient bottling, labeling, and packaging of bottled water. It integrates automatic rinsing, filling, capping, and labeling, ensuring consistent quality and high production speeds. Ideal for commercial use, it minimizes manual intervention, reduces operational costs, and maintains hygienic standards, making it a reliable choice for high-volume water bottling operations",
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
    },
    
    
    {
      title: "Semi Auto Blow Molding Machine",
      category: "Filling and Bottling Equipment",
      description:
        "The Semi Auto Blow Molding Machine is a versatile system designed for producing plastic bottles and containers with semi-automated controls. It uses a combination of manual and automated processes for shaping, cooling, and ejecting bottles, offering a balance of efficiency and flexibility. Ideal for small to medium-scale production, it delivers consistent quality, precision, and cost-effective performance in industries like beverages and packaging.",
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
    },
   
    {
      title: "Semi Auto Jar Rinsing Filling Capping Machine",
      category: "Filling and Bottling Equipment",
      description:
        "The Semi Auto Jar Rinsing Filling Capping Machine is a semi-automated system designed for efficient jar packaging. It combines manual and automated processes to rinse, fill, and cap jars with high precision. Ideal for small to medium-scale production, it ensures consistent filling, secure capping, and maintains hygiene standards, offering a cost-effective solution for industries like food, beverages, and pharmaceuticals.",
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
    },
    {
      title: "Pouches Filling Machine ",
      category: "Filling and Bottling Equipment",
      description:
        "The Pouches Filling Machine is an automated system designed for the efficient filling of liquid, semi-liquid, or powdered products into pouches. It ensures precise filling, high-speed operation, and minimal product wastage. Ideal for industries like food, beverages, and chemicals, it streamlines the packaging process, offering hygienic, accurate, and cost-effective solutions for high-volume pouch filling.",
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
    },
    {
      title: "Linear Auto Cup Rinsing Filling and Sealing",
      category: "Filling and Bottling Equipment",
      description:
        "The Linear Auto Cup Rinsing, Filling, and Sealing Machine is an automated system designed for efficient cup packaging. It performs rinsing, filling, and sealing in a linear format, ensuring consistent quality and high-speed production. Ideal for industries such as dairy, beverages, and food, it minimizes manual labor, reduces operational costs, and maintains high hygiene standards during the entire packaging process.",
      icon: Droplet,
      image:Linear_Auto_Cup_Rinsing_Filling_and_Sealing,
      features: [
        "1.	Linear Automation",
        "2.	High-Speed Production",
        "3.	Precise Filling and Sealing",
        "4.	Hygienic Design",
      ],
      rating: 4.8, // Rating out of 5
    price: 150000, // Price in INR
    },
    // Add 19 more products here...
  ]; // Your product data here...


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
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for Send Inquiry dialog
  const [isLearnMoreDialogOpen, setIsLearnMoreDialogOpen] = useState(false); // State for Learn More dialog
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.models?.some((model) =>
          model.toLowerCase().includes(searchQuery.toLowerCase())
        ))
  );

  const handleSendInquiry = () => {
    setIsDialogOpen(true); // Open the Send Inquiry dialog
  };

  const closeDialog = () => {
    setIsDialogOpen(false); // Close the Send Inquiry dialog
  };

  const handleLearnMore = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsLearnMoreDialogOpen(true); // Open the Learn More dialog
  };

  const closeLearnMoreDialog = () => {
    setIsLearnMoreDialogOpen(false); // Close the Learn More dialog
    setSelectedProduct(null); // Clear the selected product
  };

  return (
    <>
      {/* Hero Section with Static Image */}
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src={ProductHero} // Use the imported static image
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
      <section className="py-12">
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
              <Command className="rounded-lg border shadow-md">
                <CommandInput
                  placeholder="Search products..."
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                />
              </Command>
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
                    className="bg-red-500 hover:bg-red-600" // Red color for the button
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
            <h2 className="text-xl font-bold mb-4">Enter Buying Requirement Details</h2>
            <p className="text-sm text-gray-600 mb-4">
              To get accurate quotes, please include product name, order quantity, usage,
              special requests if any in your inquiry.
            </p>
            <textarea
              className="w-full p-2 border rounded mb-4 bg-white" // White background
              placeholder="Please fill in this field."
              rows={4}
            />
            <input
              type="email"
              className="w-full p-2 border rounded mb-2 bg-white" // White background
              placeholder="Email Id"
            />
            <input
              type="tel"
              className="w-full p-2 border rounded mb-2 bg-white" // White background
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
                  <td className="py-2 font-semibold">Description</td>
                  <td className="py-2">{selectedProduct.description}</td>
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
                  <td className="py-2 font-semibold">Models</td>
                  <td className="py-2">
                    <ul className="list-disc list-inside">
                      {selectedProduct?.models?.map((model, index) => (
                        <li key={index}>{model}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Rating</td>
                  <td className="py-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`text-2xl ${
                          i < (selectedProduct.rating || 4) ? "text-yellow-500" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Price</td>
                  <td className="py-2">₹{selectedProduct.price || 1000}</td>
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