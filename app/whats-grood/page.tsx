import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WhatsGroodPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-gray-300 py-16 md:py-24 relative">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10"
          style={{ backgroundImage: "url('/city-outline.svg')" }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              What&apos;s <span className="text-amber-500">Grood</span>?
            </h1>
            <p className="text-gray-700 text-lg">
              An electric bike is equipped with a motor and a battery. To make
              pedaling easier, the engine starts automatically when you pedal
              (and switch off when pedaling stops). To recharge the battery, it
              plugs home at a conventional power outlet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/bike.jpg?height=500&width=600"
                alt="Grood Electric Bike"
                width={700}
                height={600}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">GROOD Project</h2>
              <p className="text-gray-700">
                <span className="text-amber-500 text-1xl font-bold">
                  Motorisation{" "}
                </span>
                Bicycle are requipped with an{" "}
                <span className="text-amber-00 text-1xl font-bold">
                  electric motor{" "}
                </span>
                to assist you when you pedaling.Assimpleasthis!
              </p>
              <p className="text-gray-700">
                <span className="text-amber-500 text-1xl font-bold">
                  Security{" "}
                </span>
                Apoower{" "}
                <span className="text-amber-00 text-1xl font-bold">light </span>
                is insalled for safe travel during sunrise or late returns to
                the hotel,complemented by effecient{" "}
                <span className="text-amber-00 text-1xl font-bold">
                  dis brakes{" "}
                </span>
                to ehance safety on the journey.
              </p>
              <p className="text-gray-700">
                <span className="text-amber-500 text-1xl font-bold">
                  Empowering{" "}
                </span>
                the motor continuously enhances your effort,allowing you to
                travel{" "}
                <span className="text-amber-00 text-1xl font-bold">
                  faster,farther{" "}
                </span>
                and increasing the{" "}
                <span className="text-amber-00 text-1xl font-bold">
                  pleasure of cycling{" "}
                </span>
                in this luxurious Nature.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Why&apos;s <span className="text-amber-500">Grood?</span>
              </h1>
              <p className="text-gray-700" text-align="justify">
                <span className="text-amber-500 text-1xl font-bold">
                  Inspire{" "}
                </span>
                visitors to explore the rigion by utilizing effective travel
                choices that promote an active tourism experience!
              </p>
              <p className="text-gray-700" text-align="justify">
                <span className="text-amber-500 text-1xl font-bold">
                  Sustainable{" "}
                </span>
                trainsportation option for the beginner cycling and enhancing
                the experience for adventurous riders making it feasible to
                takle uphill ride and travel greater distandnce.
              </p>
              <p className="text-gray-700" text-align="justify">
                <span className="text-amber-500 text-1xl font-bold">
                  Creates additional revenue{" "}
                </span>
                for the hotel in regions experiencing a rise in cycling tourism.
              </p>
            </div>
            <div>
              <Image
                src="/bike1.jpg?height=500&width=600"
                alt="Grood Electric Bike Motor"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/bike3.jpg?height=500&width=600"
                alt="Grood Electric Bike Battery"
                width={600}
                height={500}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Buying Grood</h2>
              <p className="text-gray-700" text-align="justify">
                <span className="text-amber-500 text-1xl font-bold">
                  Improve the experience{" "}
                </span>
                for guests,transforming the hotel in to a more appealing choice.
                Standing out from the competition and attract guests who
                prioritize sustainability and active travel.
              </p>
              <p className="text-gray-700" text-align="justify">
                <span className="text-amber-500 text-1xl font-bold">
                  Reducing{" "}
                </span>
                hotel&aops;s carbon footprint, eases traffic congestion and
                minimiziing pollution levels at popular tourist destinations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-300 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-700">
              What makes Grood different from other electric bike companies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "People First",
                description:
                  "We design our bikes for the people who ride them, not for tech enthusiasts or cycling purists.",
              },
              {
                title: "Sustainability",
                description:
                  "Every decision we make considers the environmental impact, from materials to manufacturing.",
              },
              {
                title: "Community",
                description:
                  "We invest in the communities where our bikes are used, creating jobs and supporting local initiatives.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
