<<<<<<< HEAD
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, X } from "lucide-react"
=======
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X } from "lucide-react";
>>>>>>> a9eb06b9c2c54e8c85a96d7fdb0fd2b3f4809384

interface Message {
  type: "user" | "bot" | "typing";
  content: string;
}

const greetings = [
  "Hello! How can I assist you today?",
  "Hi there! Need help with water treatment solutions?",
  "Welcome! Ask us anything about our products.",
];

const waterIndustryResponses: { [key: string]: string } = {
  "what is madhusudan aqua industries?": "madhusudan aqua industries is a leading manufacturer and supplier of water filtration, packaging, and treatment machinery, catering to the packaged drinking water industry and other water purification needs.",
  "when was madhusudan aqua industries founded?": "madhusudan aqua industries was founded in 2021.",
  "where is madhusudan aqua industries located?": "madhusudan aqua industries operates from [company location], serving customers nationwide and internationally.",
  "what is the main business of madhusudan aqua industries?": "the company specializes in designing, manufacturing, and supplying advanced water treatment, filtration, and packaging machinery.",
  "what industries does madhusudan aqua industries serve?":"a.packaged drinking water industry  b.food & beverage industry c.pharmaceutical industry d.chemical processing plants \n e.industrial and municipal water treatment",
  "what sets madhusudan aqua industries apart from competitors?":"a.  cutting-edge water treatment technology b.  customizable solutions for different industries c.  high-quality and durable machinery d. excellent customer service and technical support",
  "who are the key clients of madhusudan aqua industries?":"the company serves both small-scale and large-scale water packaging brands, industrial clients, and municipal water treatment plants.",
  "do you provide international services?":"yes, we cater to international clients and offer global shipping, installation, and technical support services.",
  "what is the mission of madhusudan aqua industries?":"our mission is to provide high-quality, efficient, and sustainable water purification solutions to ensure clean and safe water for all.",
  "what is the vision of madhusudan aqua industries?":"to be a global leader in water treatment and packaging machinery, pioneering innovations that enhance water safety and accessibility.",
  "what types of machines do you manufacture?":"we manufacture a wide range of machines, including water filtration systems, ro plants, bottle-filling machines, jar-filling machines, pouch-filling machines, and chemical dosing systems.",
  "what are the key features of your water filtration machines?": "a. high efficiency and reliability b.  multi-stage filtration c. low energy consumption d. easy maintenance and long lifespan",
  "what is the capacity range of your filtration machines?": "our machines are available in various capacities, from small-scale units to large industrial systems handling thousands of liters per hour.",
  "how do your machines ensure water purity?":"we use multi-stage filtration, including activated carbon, sand filtration, reverse osmosis, uv treatment, and chemical dosing systems.",
  "what materials are used in your machines?":"a. stainless steel (food-grade) b. frp (fiber reinforced plastic) c. high-quality rubber linings d.  industrial-grade plastic components.",
  "do your machines comply with industry standards?":"yes, all our machines comply with bis, iso, and other relevant water treatment and food safety standards.",
  "what certifications do your machines have?": "a. bis certification b.  iso 9001:2015 c.  ce certification (for international markets) d. fda compliance (where applicable).",
  "how does the filtration process work in your machines?": "the process includes: a. pre-filtration (sand and carbon filtration) b.  reverse osmosis (ro) or deionization c. uv sterilization d. final purification and packaging.",
  "what types of contaminants can your machines remove?": "our machines remove sediment, chlorine, bacteria, viruses, heavy metals, and other dissolved impurities.",
  "how often do your machines require maintenance?":"regular maintenance depends on usage, but most machines require filter replacements every 6-12 months and periodic servicing.",
  "do you provide installation services for your machines?": "yes, we offer professional installation services to ensure optimal machine performance.",
  "do you offer machine customization?": "yes, we provide customization based on client requirements, such as capacity, automation level, and filtration stages.",
  "what kind of maintenance services do you provide?": "a.  regular servicing b.  filter and membrane replacement c.  machine performance optimization.",
  "do you offer on-site servicing?": "yes, we provide on-site servicing for machine repairs and maintenance.",
  "can you train employees on how to use the machines?": "yes, we offer training sessions for operators to ensure efficient machine handling and maintenance.",
  "do you provide remote troubleshooting?": "yes, we offer virtual support for troubleshooting minor issues.",
  "what kind of support do you offer after the sale?": "we provide technical assistance, spare parts, and annual maintenance contracts.",
  "do you provide spare parts for your machines?": "yes, we supply genuine spare parts for all our machines.",
  "how long does installation take?":"the time varies based on the machine type, but most installations are completed within 1-3 days.",
  "do you offer annual maintenance contracts (amc)?": "yes, we offer amcs for regular maintenance and servicing.",
  "what quality standards does your equipment follow?": "our machines comply with bis, iso, and fda standards.",
  "how does your filtration process compare to ro (reverse osmosis)?": "we offer ro-based systems, as well as ultrafiltration and deionization-based systems, depending on customer needs.",
  "does your equipment comply with bis (bureau of indian standards)?": "yes, all our packaged drinking water plants meet bis guidelines.",
  "can your machines be used for both mineral and packaged drinking water?":"yes, our machines can be adapted for both types of water production.",
  "what is the tds (total dissolved solids) range your machines can handle?":"our machines can purify water with tds levels ranging from 100 ppm to 2000 ppm.",
  "what is the official website of madhusudan aqua industries?": "the official website of madhusudan aqua industries provides detailed information about products, services, and company updates. please visit [your website url] for more details.",
  "can i order your machines online?": "yes, our website allows you to place inquiries and requests for orders. however, for finalizing purchases, we prefer direct communication to ensure all specifications are met.",
  "do you provide an online catalog of your products?":"yes, our website features a detailed catalog with descriptions, specifications, and images of all our machines and water treatment solutions.",
  "does your website have product demonstration videos?": "yes, we provide demonstration videos for many of our products to help customers understand how they function.",
  "can i download brochures for your machines from the website?": "yes, downloadable brochures are available on our website for each product, providing technical specifications and benefits.",
  "do you have customer testimonials available on your website?": "yes, we feature testimonials from satisfied customers who have used our products.",
  "is there a live chat feature for customer support on your website?": "yes, we offer a live chat option where customers can ask queries and get instant responses from our support team.",
  "can i book a consultation online for machine selection?": "yes, we provide an online booking system for free consultations to help customers choose the right machine.",
  "does your website have an faq section?": "yes, we have an faq section answering common questions related to our products and services.",
  "can i track my machine order online?": "yes, once your order is confirmed, you will receive a tracking link to monitor the shipment status.",
  "what is the working principle of an activated carbon water filter?": "activated carbon water filters use adsorption technology to remove impurities, chlorine, and organic contaminants from water.",
  "how does activated carbon remove impurities from water?":"the porous structure of activated carbon traps and absorbs contaminants, effectively removing unwanted chemicals, odors, and tastes from water.",
  "can your activated carbon water filter remove chlorine from water?": "yes, our filters effectively remove chlorine, improving the taste and safety of water.",
  "how often should i replace the activated carbon filter?": "filter replacement depends on water usage and contamination levels but is generally recommended every 6-12 months.",
  "can activated carbon filters be used in industrial water treatment?":"yes, our activated carbon filters are used in both residential and industrial water treatment applications.",
  "are you planning to introduce ai-powered water filtration systems?":"yes, we are working on integrating ai-based monitoring and automation in our water filtration systems.",
  "do you have upcoming innovations in the pipeline?":"yes, we continually research and develop new technologies to improve water purification efficiency and sustainability.",
  "are you expanding into new geographical markets?":"yes, we are actively looking to expand our operations into international markets.",
  "do you plan to add more automation features to your machines?":"yes, automation is a key focus area for us, and we are working on incorporating more smart features into our equipment.",
  "will your company launch smart monitoring tools for machine efficiency?":"yes, we are developing iot-enabled monitoring systems for real-time tracking of machine performance.",
  "what are your company’s goals for the next five years?":"our goals include expanding production capacity, enhancing automation, and reaching more global markets.",
  "do you plan to collaborate with research institutions for water purification advancements?":"yes, we collaborate with research institutions to improve water purification processes and introduce innovative solutions.",
  "are there any new technologies you are currently testing?":"yes, we are testing advanced filtration techniques and energy-efficient purification systems.",
  "do you participate in industry expos and trade shows?":"yes, we regularly participate in trade shows and industry events to showcase our latest products.",
  "how does madhusudan aqua industries plan to stay ahead in the competitive market?":"we focus on innovation, quality, and customer satisfaction to remain a leader in the water treatment industry.",
  "what is madhusudan aqua industries?":"a company specializing in manufacturing and selling water filtration, packaging, and delivery machines for the packaged drinking water industry.",
  "when was the company established?":"the madhusudan aqua industries was found in the year 2021!",
  "what is the mission and vision of the company?": "mission: to provide innovative and sustainable water purification and packaging solutions. vision: to become a global leader in water technology.",
  "who are the founders of madhusudan aqua industries?":"[insert founder names].",
  "what is the company's core business?":"manufacturing and selling water filtration, packaging, and delivery machines.",
  "what industries does the company serve?":"packaged drinking water, beverage, and industrial water treatment industries.",
  "what is the company's market reach?":"[insert market reach, e.g., national or international].",
  "how many employees work at madhusudan aqua industries?":"[insert number of employees].",
  "what is the company's annual revenue?":"[insert revenue details].",
  "what are the company's future growth plans?":"expand product lines, enter new markets, and invest in r&d.",
  "what types of machines does madhusudan aqua industries sell?":"water filtration, packaging, and delivery machines.",
  "do you offer customized machines for specific needs?":"yes, we provide customized solutions based on client requirements.",
  "what is the capacity of your water filtration machines?":"capacities range from [x] liters/hour to [y] liters/hour.",
  "what types of water filtration technologies do your machines use?": "ro, uv, uf, and activated carbon filtration.",
  "do you offer reverse osmosis (ro) machines?":"yes, we specialize in ro machines.",
  "what is the lifespan of your machines?":"approximately [x] years with proper maintenance.",
  "what is the cost range of your machines?":"costs range from [x] to [y] depending on the model and features.",
  "do you provide installation services for the machines?":"yes, we offer installation services.",
  "do you offer maintenance and repair services?":"yes, we provide comprehensive maintenance and repair services.",
  "what is the warranty period for your machines?":"[x] years warranty on all machines.",
  "what technologies are used in your machines?":"ro, uv, iot, and automation technologies.",
  "do you use iot in your machines for remote monitoring?":"yes, iot-enabled machines allow remote monitoring and control.",
  "are your machines automated or semi-automated?":"we offer both automated and semi-automated machines.",
  "do you offer ai-based water quality monitoring systems?":"yes, ai-based systems are available for advanced water quality monitoring.",
  "how do your machines ensure water quality?":"through multi-stage filtration and real-time monitoring.",
  "who are your major clients?":"[insert major clients, e.g., packaged water brands].",
  "do you work with packaged drinking water brands?":"yes, we serve multiple packaged drinking water brands.",
  "have you partnered with any government organizations?":"[insert details if applicable].",
  "do you collaborate with ngos for water purification projects?":"yes, we work with ngos on rural water projects.",
  "how do you ensure the quality of your machines?":"through rigorous testing and quality control processes.",
  "what is your production process for machines?":"design, manufacturing, testing, and delivery.",
  "do you manufacture all components in-house?":"[insert details, e.g.,most components are manufactured in-house.]",
  "how do your machines contribute to water conservation?":"by minimizing water wastage during filtration.",
  "do your machines reduce plastic waste?":"yes, through efficient packaging solutions.",
  "what is the energy consumption of your machines?":"[insert energy consumption details].",
  "what is your marketing strategy for selling machines?":"digital marketing, trade shows, and direct sales.",
  "do you attend trade shows and exhibitions?":"yes, we regularly participate in industry events.",
  "what after-sales services do you provide?":"maintenance, repairs, and technical support.",
  "do you offer 24/7 customer support?":"yes, we provide round-the-clock support.",
  "what makes your machines unique?":"advanced technology, customization, and excellent after-sales support.",
  "how do you compare to competitors in the market?":"we offer better pricing, superior technology, and faster delivery.",
  "what are the biggest challenges in your industry?":"high competition and regulatory compliance.",
  "how do you handle machine downtime?":"through quick repair services and spare parts availability.",
  "what are your plans for expanding your product line?":"introduce solar-powered and ai-based machines.",
  "do you plan to enter new markets?":"yes, we aim to expand internationally.",
  "do you offer leasing options for your machines?":"yes, leasing options are available.",
  "what certifications do your machines have?":"iso, fda, and other relevant certifications.",
  "how do you ensure compliance with water quality standards?": "by adhering to national and international standards.",
  "how do you innovate your machines?":"through continuous research and client feedback.",
  "do you offer training for operating your machines?":"yes, we provide comprehensive training programs.",
  "do you provide training for machine maintenance?":"yes, maintenance training is included.",
  "can you share a case study of a successful client?":"[insert case study details].",
  "how have your machines helped clients increase production?":"by improving efficiency and reducing downtime.",
  "what are the latest trends in water filtration?":"iot, ai, and sustainable technologies.",
  "how is the packaged drinking water industry evolving?":"increasing demand for eco-friendly packaging.",
  "how do you handle client feedback?":"through regular surveys and feedback sessions.",
  "do you offer demo sessions for your machines?":"yes, we provide live demos.",
  "what services does madhusudan aqua industries offer apart from selling water filtration machines?":"madhusudan aqua industries also provides installation, maintenance, spare parts, and consultation services for water filtration and treatment solutions.",
  "does your website have a chatbot for instant customer support?":"yes, our website features a chatbot to assist customers with common queries and product information.",
  "can i subscribe to updates for new product launches?":"yes, you can subscribe to our newsletter to receive updates on new product launches, company news, and industry insights.",
  "do you provide case studies on your website?":"yes, we showcase case studies of successful implementations and client experiences with our products.",
  "is there a community forum on your website?":"currently, we do not have a forum, but customers can reach out via email or live chat for discussions and support.",
  "what are the benefits of using an activated carbon water filter?":"it effectively removes chlorine, organic compounds, and bad odors, improving the taste and safety of water.",
  "can activated carbon water filters remove heavy metals?":"while they remove chlorine and vocs, they are not highly effective against heavy metals like lead and mercury.",
  "what is the flow rate capacity of auto frp two bed dm water plants?":"our models offer different capacities ranging from small-scale to industrial-grade applications.",
  "how does an auto frp two bed dm water plant work?":"it uses cation and anion exchange resins to remove dissolved salts and minerals from water.",
  "what is the difference between a semi-auto and fully auto blowing machine?":"the semi-auto version requires some manual intervention, while the fully auto machine streamlines the process from preform loading to bottle blowing.",
  "can your blowing machine create custom bottle shapes?":"yes, we offer customization to meet different bottle design requirements.",
  "what industries use chemical dosing systems?":"industries like water treatment, food processing, and pharmaceuticals rely on chemical dosing for water purification.",
  "can the dosing be adjusted remotely?":"some models offer remote monitoring and adjustment via iot-based control systems.",
  "what are the key features of your commercial ro plant?":"our ro plants feature energy-efficient membranes, automated controls, and high recovery rates.",
  "do you offer customization for ro plants?":"yes, we can design ro plants based on specific capacity and water quality requirements.",
  "do you provide volume discounts on bulk orders?":"yes, discounts are available for bulk purchases. contact our sales team for details.",
  "what is the average delivery time for orders?":"depending on the product and location, delivery times range from a few days to several weeks.",
  "do you provide training for machine operation?":"yes, we offer training sessions for proper usage and maintenance of our machines.",
  "how frequently should filters be replaced in your water treatment machines?":"filter replacement depends on water usage and quality, but we recommend routine checks every 3-6 months.",
  "do your machines help in reducing water wastage?":"yes, our systems are designed for high efficiency, ensuring minimal water wastage during the purification process.",
  "are your machines made from environmentally friendly materials?":"we prioritize sustainability by using recyclable and bpa-free materials in our production.",
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedMessages = localStorage.getItem("chatMessages");
        if (storedMessages) {
          setMessages(JSON.parse(storedMessages));
        } else {
          setMessages([
            { type: "bot", content: greetings[Math.floor(Math.random() * greetings.length)] },
          ]);
        }
      } catch (e) {
        console.error("Error loading messages from localStorage", e);
        setMessages([{ type: "bot", content: greetings[Math.floor(Math.random() * greetings.length)] }]);
      }

      const timer = setTimeout(() => setShowPopup(true), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", content: input };
    setMessages((prev) => [...prev, userMessage, { type: "typing", content: "Typing..." }]);
    const userInput = input.trim();

    setInput(""); // Clear input immediately

    setTimeout(() => {
      const lowerInput = userInput.toLowerCase();
     let botResponse;

      if (lowerInput === "hello") {
        botResponse = "I am an AI assistant of Madhusudan Aqua Industries. What are your questions? How may I assist you?";
      } else {
        botResponse =
          waterIndustryResponses[lowerInput] ||
          "Sorry, I can only answer questions related to the water industry.";
      }

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { type: "bot", content: botResponse },
      ]);
    }, 1500);
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg z-50"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPopup(false);
        }}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {showPopup && !isOpen && (
        <div className="fixed bottom-20 right-4 animate-bounce z-50">
          <Card className="relative p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => setShowPopup(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <p className="pr-6 text-sm">
              Need help with water treatment solutions? Chat with us now!
            </p>
          </Card>
        </div>
      )}

      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-[350px] max-w-[90vw] shadow-lg z-50">
          <div className="flex h-[500px] flex-col">
            <div className="border-b p-4 flex justify-between items-center">
              <h2 className="font-semibold">Chat with Us</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 transition-opacity duration-300 ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : message.type === "bot"
                          ? "bg-muted"
                          : "text-muted"
                      } max-w-[80%]`}
                    >
                      <p className="text-sm break-words">{message.content}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <Button size="icon" onClick={handleSend} disabled={!input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
