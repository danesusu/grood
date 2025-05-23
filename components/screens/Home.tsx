//export default function HomeScreen() {
//   return (
//     <main className="flex flex-col min-h-screen bg-gray-100">
//       <section>
//         <div className="relative w-full h-[500px] bg-black">
//           <img
//             src="/dep.JPG"
//             alt="Electric Bike"
//             className="w-full h-full object-cover opacity-25"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h2 className="text-white text-4xl md:text-6xl font-bold text-center px-6 py-4 rounded-xl font-futura">
//               Ride Grood For
//               <br />
//               Better world
//             </h2>
//           </div>
//         </div>
//       </section>

//       {/* Hero Section */}
//       <section className="bg-gray-100 py-16 md:py-24 relative">
//         <div
//           className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10"
//           style={{ backgroundImage: "url('/city-outline.svg')" }}
//         ></div>
//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <div className="max-w-3xl mx-auto text-center space-y-8">
//             <h1 className="text-4xl md:text-5xl font-bold">
//               What&apos;s <span className="text-primary">Grood</span>?
//             </h1>
//             <p className="text-gray-700 text-lg">
//               An electric bike is equipped with a motor and a battery. To make
//               pedaling easier, the engine starts automatically when you pedal
//               (and switch off when pedaling stops). To recharge the battery, it
//               plugs home at a conventional power outlet.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="max-w-8xl mx-auto my-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Image first in second row */}
//             <div className="relative md:order-1">
//               <img src="/wow.jpg" alt="Electric Bike" />
//             </div>

//             {/* Text second in second row */}
//             <div className="flex flex-col justify-center text-balance  md:order-2 ml-6">
//               <div className="space-y-6">
//                 <h1 className="text-4xl md:text-5xl font-bold">
//                   GROOD <span className="text-primary">Project</span>
//                 </h1>

//                 <p className="text-gray-700">
//                   Motorisation Bicycle are requipped with an electric motor to
//                   assist you when you pedaling.Assimpleasthis!
//                 </p>
//                 <p className="text-gray-700">
//                   Security Apoower light is insalled for safe travel during
//                   sunrise or late returns to the hotel,complemented by effecient{" "}
//                   dis brakes to ehance safety on the journey.
//                 </p>
//                 <p className="text-gray-700">
//                   Empowering the motor continuously enhances your
//                   effort,allowing you to travel faster,farther and increasing
//                   the pleasure of cyclingin this luxurious Nature.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="relative md:order-1 ">
//             <img src="/model.jpg" alt="Electric Bike" className="w-full" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Image first in second row */}
//             <div className="relative md:order-1">
//               <img src="/black.jpg" alt="Electric Bike" />
//             </div>

//             {/* Text second in second row */}
//             <div className="flex flex-col justify-center text-balance  md:order-2 ml-6">
//               <div className="space-y-6">
//                 <h1 className="text-4xl md:text-5xl font-bold">
//                   Buying<span className="text-primary"> Grood</span>
//                 </h1>
//                 <p className="text-gray-700">
//                   Inspire visitors to explore the rigion by utilizing effective
//                   travel choices that promote an active tourism experience!
//                 </p>
//                 <p className="text-gray-700">
//                   Sustainable trainsportation option for the beginner cycling
//                   and enhancing the experience for adventurous riders making it
//                   feasible to takle uphill ride and travel greater distandnce.
//                 </p>
//                 <p className="text-gray-700">
//                   Creates additional revenue for the hotel in regions
//                   experiencing a rise in cycling tourism.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";

const CapriBikesHomepage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen bg-black">
        {/* Full-width hero image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/cover.jpg"
            alt="Capri Bike on coastal road"
            className="object-cover w-full h-full opacity-80"
            layout="fill"
            priority
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold font-futura text-white tracking-tight">
              Experience the Freedom
            </h1>
            <p className="mt-6 text-xl md:text-3xl font-futura text-white max-w-2xl mx-auto">
              Premium electric bikecpas for the
              <br /> modern adventurer
            </p>
          </div>
        </div>
      </div>

      {/*Features Section */}
      <section className="bg-background py-16 font-futura">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-12">
            Introducing Grood
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Top Left - What is Capri E-Bikes? */}
            <div>
              <img
                src="/bike.jpg"
                alt="Capri E-Bike Vintage Style"
                className="w-full shadow-md"
              />
              <h2 className="text-xl font-semibold mt-4">
                What is Grood E-Bikes?
              </h2>
              <p className="mt-2 text-foreground">
                Drawing inspiration from the iconic Cambodian bicycle designs of
                the late 1970s, these bikes combine a classic aesthetic with
                modern technology .Grood has redefined urban mobility in
                Cambodia with its collection of chic, high-performance electric
                bicycles seeks eco-conscious options without compromising on
                style.
              </p>
            </div>

            {/* Top Right - Who's behind this project? */}
            <div>
              <img
                src="/bike.jpg"
                alt="Capri Team"
                className="w-full shadow-md"
              />
              <h2 className="text-xl font-semibold mt-4">
                Who's behind this project?
              </h2>
              <p className="mt-2 text-foreground">
                we create Grood bicycles back in 2020 as a classic style bicycle
                concept.
              </p>
            </div>

            {/* Bottom Left - Strong online reputation */}
            <div>
              <img
                src="/bike.jpg"
                alt="Capri Bike Online Reputation"
                className="w-full shadow-md"
              />
              <h2 className="text-xl font-semibold mt-4">
                Strong online reputation
              </h2>
              <p className="mt-2 text-foreground">
                Along this time we've achieved a strong online reputation. We
                invite you to check out our customers Google positive feedbacks
                and hundreds of reviews on biciclasica.com and on Facebook and
                Instagram.
              </p>
            </div>

            {/* Bottom Right - Made in Europe */}
            <div>
              <img
                src="/bike.jpg"
                alt="Capri Bike Manufacturing"
                className="w-full shadow-md"
              />
              <h2 className="text-xl font-semibold mt-4">
                Designed & assembled in Cambodia
              </h2>
              <p className="mt-2 text-foreground">
                Groot aims to expertly design and assemble the bike, ensuring it
                fulfills our precise standards and specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="bg-background py-16 font-futura">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-12">
            Grood Electric Bicycles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bike 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/bike.jpg"
                  alt="Capri Sport Model"
                  className="object-cover w-full h-full"
                  layout="fill"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-futura">
                  Siem Reap
                </h3>
                <p className="text-foreground mb-4">Grood Electric Bicycles.</p>
              </div>
            </div>

            {/* Bike 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/bike2.jpg"
                  alt="Capri Cruiser Model"
                  className="object-cover w-full h-full"
                  layout="fill"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-futura">
                  Phnom Penh
                </h3>
                <p className="text-foreground mb-4">Grood Electric Bicycles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapriBikesHomepage;
