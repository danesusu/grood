import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GroodKitPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-gray-300 py-8 md:py-12 relative">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10"
          style={{ backgroundImage: "url('/city-outline.svg')" }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              The <span className="text-amber-500">Grood</span> Kit
            </h1>
            <p className="text-gray-700 text-lg">
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
        <div className="bg-gray-300 min-h-screen py-12 px-4">
          <div className="max-w-8xl mx-auto">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Enviolo Text Column */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2 text-gray-800 px-12">
                  GEARS
                </h2>
                <p className="text-gray-600 mb-6 textalign-center px-12">
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
                <img src="/lek.jpg" alt="Electric Bike" className="w-full" />
              </div>
            </div>
          </div>

          {/* Second Row with reversed columns */}
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image first in second row */}
              <div className="relative ml-12 md:order-1">
                <img src="/brang.jpg" alt="Electric Bike" className="w-full" />
              </div>

              {/* Text second in second row */}
              <div className="flex flex-col justify-center md:order-2">
                <h2 className="text-3xl font-bold mb-2 text-gray-800 px-12">
                  BRAKES
                </h2>
                <p className="text-gray-600 mb-6 textalign-center px-12">
                  Smart technology at its finest point, the Enviolo gear system
                  takes automatic gear shifting to the next level. As you ride,
                  the system adjusts to a steady RPM, optimizing your
                  performance. Experience urban riding with performance and
                  comfort in a system where advanced technology produces a
                  smooth gear to gear experience for all types of terrain
                  conditions.
                </p>
              </div>
            </div>
          </div>
          {/* Third Row */}
          <div className="max-w-8xl mx-auto">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Enviolo Text Column */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 px-12">
                  CRANK
                </h2>
                <p className="text-gray-600 mb-6 textalign-center px-12">
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
                <img src="/theak.jpg" alt="Electric Bike" className="w-full" />
              </div>
            </div>
          </div>
          {/* Fourth Row with reversed columns */}
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image first in second row */}
              <div className="relative ml-12 md:order-1">
                <img src="/lamp2.jpg" alt="Electric Bike" className="w-full" />
              </div>

              {/* Text second in second row */}
              <div className="flex flex-col justify-center md:order-2">
                <h2 className="text-3xl font-bold mb-2 text-gray-800 px-12">
                  PRECISION LIGHT
                </h2>
                <p className="text-gray-600 mb-6 textalign-center px-12">
                  Smart technology at its finest point, the Enviolo gear system
                  takes automatic gear shifting to the next level. As you ride,
                  the system adjusts to a steady RPM, optimizing your
                  performance. Experience urban riding with performance and
                  comfort in a system where advanced technology produces a
                  smooth gear to gear experience for all types of terrain
                  conditions.
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
                <h2 className="text-3xl font-bold text-gray-800 px-12">
                  BATTERY
                </h2>
                <p className="text-gray-600 mb-6 textalign-center px-12">
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
                <img
                  src="/battery.jpg"
                  alt="Electric Bike"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          {/* Sixth Row with reversed columns */}
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image first in second row */}
              <div className="relative ml-12 md:order-1">
                <img src="/kep.jpg" alt="Electric Bike" className="w-full" />
              </div>

              {/* Text second in second row */}
              <div className="flex flex-col justify-center md:order-2">
                <h2 className="text-3xl font-bold mb-2 text-gray-800 px-12">
                  SEAT
                </h2>
                <p className="text-gray-600 mb-6 textalign-center px-12">
                  Smart technology at its finest point, the Enviolo gear system
                  takes automatic gear shifting to the next level. As you ride,
                  the system adjusts to a steady RPM, optimizing your
                  performance. Experience urban riding with performance and
                  comfort in a system where advanced technology produces a
                  smooth gear to gear experience for all types of terrain
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-8 font-sans bg-gray-300 overflow-hidden shadow-lg px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Frame Column */}
            <div className="space-y-6">
              <h2 className="text-3xl font-medium text-gray-800">Frame</h2>

              <div className="space-y-1">
                <h3 className="text-lg font-medium">Frame</h3>
                <p className="text-gray-600">
                  Coated aluminium with integrated battery case
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-medium">Paint</h3>
                <p className="text-gray-600">PPG Powder Coating 2K</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-medium">Weight</h3>
                <p className="text-gray-600">Frame 26 kg</p>
                <p className="text-gray-600">Battery 3 kg</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-medium">Rider Height</h3>
                <p className="text-gray-600">164-184cm</p>
              </div>

              <div className="mt-8 text-gray-600">
                <p>Your bike comes 85% assembled.</p>
              </div>
            </div>

            {/* Components Column */}
            <div className="space-y-6">
              <h2 className="text-3xl font-medium text-gray-800">Components</h2>

              <div className="space-y-1">
                <h3 className="text-lg font-medium">Motor</h3>
                <p className="text-gray-600">
                  Bafang® 36V 250W / Torq + Rotation Sensor w/ a maximum torque
                  of 65 Nm
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-medium">Battery</h3>
                <p className="text-gray-600">
                  Removable Smart Battery / 36Vdc, 540 WH
                </p>
                <p className="text-gray-600">60-120 km range</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-medium">Gears</h3>
                <p className="text-gray-600">
                  Enviolo® TR / Pro 44T Stepless Automatic Shifting / Ratio 310%
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-medium">Display</h3>
                <p className="text-gray-600">Veloretti built-in display</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-medium">Brakes</h3>
                <p className="text-gray-600">
                  Shimano® MT200 hydraulic disc brakes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
