import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";

export default function ForGreaterGoodPage() {
  return (
    <div className="bg-blue-50 min-h-screen py-10 px-4 text-center">
      <h1 className="text-4xl font-bold">
        Why's <span className="text-primary"> Grood?</span>
      </h1>
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
        Grood bikes can effortlessly reach a speed of 32km/h, easily climb the
        coast or make trips that would be too long to travel with a conventional
        bike.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="flex flex-col items-center">
          <img
            src="/bike-b.png"
            alt="Lithium Battery"
            className="w-24 h-24 text-primary"
          />
          <h2 className="text-xl font-semibold italic mt-4">Lithium Battery</h2>
          <p className="text-gray-600 italic">1000 cycles of charge</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/battery.png"
            alt="Range Battery"
            className="w-24 h-24 text-primary"
          />
          <h2 className="text-xl font-semibold italic mt-4">Range Battery</h2>
          <p className="text-gray-600 italic">40km average</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/speed.png"
            alt="Speed"
            className="w-24 h-24 text-primary"
          />
          <h2 className="text-xl font-semibold italic mt-4">Speed</h2>
          <p className="text-gray-600 italic">32km/h</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold italic mt-16">
        When you buy a GROOD, you're investing in:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 font-bold">
        <div className="flex flex-col items-center">
          <img
            src="/1yearw.png"
            alt="Warranty"
            className="w-24 h-24 text-primary"
          />
          <p className="text-gray-700 italic mt-4 max-w-xs">
            The peace of mind of an industry leading one year warranty
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/local-cop.png"
            alt="Local Company"
            className="w-24 h-24 text-primary"
          />
          <p className="text-gray-700 italic mt-4">Local Company</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/customer-care.png"
            alt="Customer Care"
            className="w-24 h-24 text-primary"
          />
          <p className="text-gray-700 italic mt-4 max-w-xs">
            Friendly customer care that goes the extra mile
          </p>
        </div>
      </div>
    </div>
  );
}
