import React, { useEffect, useRef, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

const GlobalPresence: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const chartRef = useRef<am4maps.MapChart | undefined>(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Only create the map if mapRef.current exists
    if (mapRef.current) {
      // Create map instance
      let map = am4core.create(mapRef.current, am4maps.MapChart);
      chartRef.current = map;

      // Set map definition
      map.geodata = am4geodata_worldLow;

      // Set projection
      map.projection = new am4maps.projections.Miller();

      // Disable zoom and pan
      map.chartContainer.wheelable = false;
      map.chartContainer.draggable = false;
      map.chartContainer.resizable = false;
      map.seriesContainer.draggable = false;
      map.seriesContainer.resizable = false;

      // Create map polygon series
      let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.useGeodata = true;

      // Configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = am4core.color("#74B266");

      // Create image series for pins
      let imageSeries = map.series.push(new am4maps.MapImageSeries());
      let imageTemplate = imageSeries.mapImages.template;
      imageTemplate.propertyFields.longitude = "longitude";
      imageTemplate.propertyFields.latitude = "latitude";

      // Create a water droplet pin image
      let pin = imageTemplate.createChild(am4core.Sprite);
      pin.path =
        "M12 2C8.14 2 5 5.14 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.14 15.86 2 12 2ZM13 18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V17H13V18Z";
      pin.width = 8; // Decrease the size of the pin
      pin.height = 8; // Decrease the size of the pin
      pin.horizontalCenter = "middle";
      pin.verticalCenter = "bottom";
      pin.fill = am4core.color("#0000FF"); // Blue color for pins

      // Add pins to the map
      imageSeries.data = [
        { latitude: 5.6037, longitude: -0.187, name: "Ghana" },
        { latitude: -4.0383, longitude: 21.7587, name: "DR Congo" },
        { latitude: -6.369, longitude: 34.8888, name: "Tanzania" },
        { latitude: -18.6657, longitude: 35.5296, name: "Mozambique" },
        { latitude: -13.1339, longitude: 27.8493, name: "Zambia" },
        { latitude: 12.8628, longitude: 30.2176, name: "Sudan" },
        { latitude: 15.5007, longitude: 32.5599, name: "Khartoum" },
        { latitude: 9.082, longitude: 8.6753, name: "Nigeria" },
        { latitude: -13.2543, longitude: 34.3015, name: "Malawi" },
        { latitude: -11.2027, longitude: 17.8739, name: "Angola" },
        { latitude: 28.3949, longitude: 84.124, name: "Nepal" },
        { latitude: 20.5937, longitude: 78.9629, name: "India" },
        { latitude: 23.685, longitude: 90.3563, name: "Bangladesh" },
      ];
    }

    // Clean up function
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering excellence in water treatment solutions across the globe
          </p>
        </div>
        <div
          className={`transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative mx-auto max-w-full mb-16">
            <div
              id="chartdiv"
              ref={mapRef}
              style={{ width: "100%", height: "600px" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
