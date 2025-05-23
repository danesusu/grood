import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";

export default function ForGreaterGoodPage() {
  return (
    <div className="bg-background min-h-screen py-24 px-24 text-center font-futura">
      <h1 className="text-4xl font-bold">
        Why's <span className="text-primary"> Grood?</span>
      </h1>
      <p className="text-foreground mt-4 max-w-2xl mx-auto text-lg">
        Grood bikes can effortlessly reach a speed of 32km/h, easily climb the
        coast or make trips that would be too long to travel with a conventional
        bike.
      </p>
      {/* grood1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 font-futura max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <img
            src="/bike-b1.png"
            alt="Lithium Battery"
            className="w-24 h-24 text-primary"
          />
          <h2 className="text-xl font-semibold italic mt-4">Lithium Battery</h2>
          <p className="text-foreground italic">1000 cycles of charge</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/battery1.png"
            alt="Range Battery"
            className="w-24 h-24 text-primary"
          />
          <h2 className="text-xl font-semibold italic mt-4">Range Battery</h2>
          <p className="text-foreground italic">40km average</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/speed1.png"
            alt="Speed"
            className="w-24 h-24 text-primary"
          />
          <h2 className="text-xl font-semibold italic mt-4">Speed</h2>
          <p className="text-foreground italic">32km/h</p>
        </div>
      </div>

      {/* grood2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 font-futura max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <img
            src="/motor1.png"
            alt="Motor"
            className="w-24 h-24 text-primary"
          />
          <h2 className="text-xl font-semibold italic mt-4">Motor</h2>
          <p className="text-foreground italic">Powerful and efficient</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/gears1.png"
            alt="Gears"
            className="w-24 h-24 text-primary"
          />
          <h2 className="text-xl font-semibold italic mt-4">Gears</h2>
          <p className="text-foreground italic">Smooth and reliable shifting</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/brake1.png"
            alt="Brake"
            className="w-24 h-24 text-primary"
          />
          <h2 className="text-xl font-semibold italic mt-4">Brake</h2>
          <p className="text-foreground italic">Powerful and responsive</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold italic mt-16">
        When you buy a GROOD, you're investing in:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 font-futura max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <img
            src="/1yearw1.png"
            alt="Warranty"
            className="w-24 h-24 text-primary"
          />
          <p className="text-foreground italic mt-4 max-w-xs">
            The peace of mind of an industry leading one year warranty
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/local-cop1.png"
            alt="Local Company"
            className="w-24 h-24 text-primary"
          />
          <p className="text-foreground italic mt-4">Local Company</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/customer-care1.png"
            alt="Customer Care"
            className="w-24 h-24 text-primary"
          />
          <p className="text-foreground italic mt-4 max-w-xs">
            Friendly customer care that goes the extra mile
          </p>
        </div>
      </div>
      {/* Testimonial Section */}
      <section className="bg-background py-16 font-futura">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Warranties & Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Warranty: Frame and Fork */}
            <div className="bg-background p-6 rounded-lg border border-border shadow-sm">
              <div className="mb-4">
                <h4 className="font-semibold text-2xl text-primary">
                  Frame and Fork
                </h4>
              </div>
              <p className="text-foreground">
                2-year warranty on all Grood frames and forks, allowing you to
                focus solely on your enjoyment.
              </p>
            </div>

            {/* Warranty: Motor */}
            <div className="bg-background p-6 rounded-lg border border-border shadow-sm">
              <div className="mb-4">
                <h4 className="font-semibold text-2xl text-primary">Motor</h4>
              </div>
              <p className="text-foreground">
                Motors are designed for long-lasting performance. If a defect
                occurs, you're entitled to a complimentary replacement within
                two years.
              </p>
            </div>

            {/* Warranty: Battery */}
            <div className="bg-background p-6 rounded-lg border border-border shadow-sm">
              <div className="mb-4">
                <h4 className="font-semibold text-2xl text-primary">Battery</h4>
              </div>
              <p className="text-foreground">
                Our batteries undergo rigorous testing. If any defects are
                found, you have a 1-year period to request a replacement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
