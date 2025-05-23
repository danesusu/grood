import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GroodKitPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <section className="py-8 md:py-12 relative font-futura">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10"
          style={{ backgroundImage: "url('/city-outline.svg')" }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              The <span className="text-primary">Grood</span> Kit
            </h1>
            <p className="text-foreground text-xl">
              Hit the streets and traffic jams with this top-notch city bike.
              Phnom Penh front and rear alloy brakes, a Shimano 6-speed
              drivetrain, and RevoShift grip shifters for safety, precision, and
              total control. Includes fenders and rear rack, wheels size
              700x35C.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 my-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kit Components</h2>
          </div>
        </div>
      </section>
      {/* sectionRubpheap */}
      <section>
        <div className="bg-background min-h-screen py-12 px-4 font-futura">
          <div className="max-w-8xl mx-auto">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Enviolo Text Column */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2 text-foreground px-12">
                  Pedal assistance
                </h2>
                <p className="text-foreground mb-6 textalign-center px-12">
                  Our pedal assistance system is incredibly user-friendly: as
                  you pedal, the motor provides support based on the selected
                  speed level (ranging from 1 to 5). Setting 0 means no
                  assistance, functioning like a traditional bike. This system
                  requires continuous pedalling, but a gentle and relaxed pace
                  is sufficient to receive assistance. You can ride the bike
                  even with the motor and battery turned off. Additionally, its
                  lightweight construction ensures that riding it requires no
                  more effort than a standard bike. The pedal assistance and
                  battery of our Grood e-velo are engineered for maximum range.
                  However, it's essential to consider various factors that can
                  influence battery performance, including:
                  <li>The weight of the cyclist.</li>
                  <li>The power exerted by the cyclist.</li>
                  <li>The selected levels of assistance.</li>
                  <li>The terrain (including slope and surface conditions).</li>
                  <li>Tire conditions (pressure and tread).</li>
                  <li>Ambient temperature.</li>
                </p>
              </div>

              {/* Enviolo Image Column */}
              <div className="relative mr-12 contain">
                <img src="/brang.jpg" alt="Electric Bike" className="w-full" />
              </div>
            </div>
          </div>

          {/* Second Row with reversed columns */}
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image first in second row */}
              <div className="relative ml-12 md:order-1">
                <img
                  src="/battery.JPG"
                  alt="Electric Bike"
                  className="w-full"
                />
              </div>

              {/* Text second in second row */}
              <div className="flex flex-col justify-center md:order-2 font-futura">
                <h2 className="text-3xl font-bold mb-2 text-foreground px-12">
                  Invisible Battery
                </h2>
                <p className="text-foreground mb-6 textalign-center px-12">
                  36v 7,0 Ah and 40 Km of autonomy in just 1.16 Kg. You just
                  need 2 hours to get your battery fully charged. or 36v 15 Ah
                  and 80 Km of autonomy in just 2.9 Kg.You just need 3 hours to
                  get your battery fully charged. Battery&apos;s lifespan is
                  around 800 charges.
                </p>
              </div>
            </div>
          </div>
          {/* Third Row */}
          <div className="max-w-8xl mx-auto">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Enviolo Text Column */}
              <div className="flex flex-col justify-center font-futura">
                <h2 className="text-3xl font-bold text-foreground px-12">
                  CRANK
                </h2>
                <p className="text-foreground mb-6 textalign-center px-12">
                  Smart technology at its finest point, the Enviolo gear system
                  takes automatic gear shifting to the next level. As you ride,
                  the system adjusts to a steady RPM, optimizing your
                  performance. Experience urban riding with performance and
                  comfort in a system where advanced technology produces a
                  smooth gear to gear experience for all types of terrain
                  conditions.
                </p>
              </div>

              {/* Enviolo Image Column */}
              <div className="relative mr-12">
                <img src="/theak.JPG" alt="Electric Bike" className="w-full" />
              </div>
            </div>
          </div>
          {/* Fourth Row with reversed columns */}
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image first in second row */}
              <div className="relative ml-12 md:order-1">
                <img src="/lamp2.JPG" alt="Electric Bike" className="w-full" />
              </div>

              {/* Text second in second row */}
              <div className="flex flex-col justify-center md:order-2 font-futura">
                <h2 className="text-3xl font-bold mb-2 text-foreground px-12">
                  Lightness but made for lasting
                </h2>
                <p className="text-foreground mb-6 textalign-center px-12">
                  High-quality TIG welding in steel under 20 kg. The engine,
                  which is approximately 2.5 grams lighter than comparable
                  engines, and the battery, weighing just 2.6 kg, are notably
                  lightweight components. We have dedicated significant effort
                  to the development of these two key elements. Additionally,
                  the remaining components of the bike have been selected based
                  on criteria of durability, lightweight design, and optimal
                  performance.
                </p>
              </div>
            </div>
          </div>
          {/* Fifth Row */}
          <div className="max-w-8xl mx-auto">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Enviolo Text Column */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-foreground px-12 font-futura">
                  9 Speed Gear
                </h2>
                <p className="text-foreground mb-6 textalign-center px-12">
                  9 Speed Shimano, a classic in bike gears, proven durability
                  and robustness.
                </p>
              </div>

              {/* Enviolo Image Column */}
              <div className="relative mr-12">
                <img src="/lek.JPG" alt="Electric Bike" className="w-full" />
              </div>
            </div>
          </div>
          {/* Sixth Row with reversed columns */}
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image first in second row */}
              <div className="relative ml-12 mdS:order-1">
                <img src="/kep.JPG" alt="Electric Bike" className="w-full" />
              </div>

              {/* Text second in second row */}
              <div className="flex flex-col justify-center md:order-2">
                <h2 className="text-3xl font-bold mb-2 text-foreground px-12">
                  Compact Motor
                </h2>
                <p className="text-foreground mb-6 textalign-center px-12">
                  350W rear hub motor 32 Km/h max speed. with 5 assistant
                  levels. Our bikes have been designed for a safe and reliable
                  urban and exploring use
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
