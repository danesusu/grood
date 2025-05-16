import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WhatsGroodPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-sky-50 py-16 md:py-24 relative">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10"
          style={{ backgroundImage: "url('/city-outline.svg')" }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              What&apos;s <span className="text-amber-400">Grood</span>?
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
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/bike.jpg?height=500&width=600"
                alt="Grood Electric Bike"
                width={700}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-700">
                Founded in 2020, Grood was born from a simple idea: create
                electric bikes that are accessible, sustainable, and
                community-focused. Our founder saw the need for reliable
                transportation in Cambodia that wouldn&apos;t contribute to
                pollution or traffic congestion.
              </p>
              <p className="text-gray-700">
                We believe that transportation should be a force for good in the
                world. That&apos;s why we design our bikes with sustainability
                in mind, use ethical manufacturing practices, and invest in the
                communities where our bikes are used.
              </p>
              <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-8 py-6 h-auto rounded-md">
                Learn About Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 md:py-24">
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
