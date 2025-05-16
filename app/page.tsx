import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./globals.css";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-300">
      <section>
        <div className="relative md:order-1 height- ">
          <img src="/fbbike.jpg" alt="Electric Bike" className="w-full" />
        </div>
      </section>
      {/* Hero Section */}
      <section className="bg-gray-300 py-16 md:py-24 relative">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10 my-2"
          style={{ backgroundImage: "url('/city-outline.svg')" }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              GROOD E-BIKECYCLE
            </h1>
            <h6 className="text-4xl md:text-5xl font-bold">
              <span className="text">
                Elictric&nbsp;&nbsp;Effortless&nbsp;&nbsp;Epic
              </span>
            </h6>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-8xl mx-auto my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image first in second row */}
            <div className="relative ml-12 md:order-1">
              <img src="/wow.jpg" alt="Electric Bike" className="w-full" />
            </div>

            {/* Text second in second row */}
            <div className="flex flex-col justify-center md:order-2">
              <h2 className="text-3xl font-bold mb-2 text-gray-800 px-12">
                Men Bike
              </h2>
              <p className="text-gray-600 mb-6 textalign-center px-12">
                Smart technology at its finest point, the Enviolo gear system
                takes automatic gear shifting to the next level. As you ride,
                the system adjusts to a steady RPM, optimizing your performance.
                Experience urban riding with performance and comfort in a system
                where advanced technology produces a smooth gear to gear
                experience for all types of terrain conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative md:order-1">
          <img src="/model.jpg" alt="Electric Bike" className="w-full" />
        </div>
      </section>
      <section>
        <div className="max-w-8xl mx-auto my-12">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enviolo Text Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 px-12">CRANK</h2>
              <p className="text-gray-600 mb-6 textalign-center px-12">
                Smart technology at its finest point, the Enviolo gear system
                takes automatic gear shifting to the next level. As you ride,
                the system adjusts to a steady RPM, optimizing your performance.
                Experience urban riding with performance and comfort in a system
                where advanced technology produces a smooth gear to gear
                experience for all types of terrain conditions.
              </p>
            </div>

            {/* Enviolo Image Column */}
            <div className="relative mr-12">
              <img src="/black.jpg" alt="Electric Bike" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
