import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";

export default function ForGreaterGoodPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-gray-300 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Environmental Impact</h2>
              <p className="text-gray-700">
                Every Grood bike on the road means fewer carbon emissions in our
                atmosphere. By choosing electric transportation, our riders
                collectively prevent thousands of tons of CO2 from entering the
                atmosphere each year.
              </p>
              <p className="text-gray-700">
                We're also committed to sustainable manufacturing practices. Our
                frames use recycled aluminum where possible, and we're
                constantly working to reduce waste and energy consumption in our
                production process.
              </p>
            </div>
            <div>
              <Image
                src="/person&bike.jpg"
                alt="Environmental Impact"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/wow.jpg"
                alt="Community Programs"
                width={600}
                height={500}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Community Programs</h2>
              <p className="text-gray-700">
                We invest in the communities where our bikes are used. Our Grood
                Gives Back program donates a portion of every sale to local
                initiatives focused on sustainable transportation
                infrastructure.
              </p>
              <p className="text-gray-700">
                We also partner with local organizations to provide bikes to
                those who need them most. Through our Bikes for All program,
                we've donated over 500 bikes to low-income families and
                essential workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              When you buy a GROOD, you're investing in:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "The peace of mind",
              },
              {
                number: "Local Company",
              },
              {
                number: "Friendly customer service",
              },
              {
                number: "Industry leading one year warranty",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-300 p-6 rounded-lg shadow-sm text-center"
              >
                <h5 className="text-3xl  text-gray-700 mb-3">{stat.number}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
