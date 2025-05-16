export default function HomeScreen() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-300">
      <section>
        <div className="relative w-full h-[500px] bg-black">
          <img
            src="/dep.JPG"
            alt="Electric Bike"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-6xl font-bold text-center px-6 py-4 rounded-xl">
              Ride Grood For
              <br />
              Better world
            </h2>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gray-300 py-16 md:py-24 relative">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10"
          style={{ backgroundImage: "url('/city-outline.svg')" }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              What&apos;s <span className="text-primary">Grood</span>?
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
      <section>
        <div className="max-w-8xl mx-auto my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image first in second row */}
            <div className="relative md:order-1">
              <img src="/wow.jpg" alt="Electric Bike" />
            </div>

            {/* Text second in second row */}
            <div className="flex flex-col justify-center text-balance  md:order-2 ml-6">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  GROOD <span className="text-primary">Project</span>
                </h1>

                <p className="text-gray-700">
                  Motorisation Bicycle are requipped with an electric motor to
                  assist you when you pedaling.Assimpleasthis!
                </p>
                <p className="text-gray-700">
                  Security Apoower light is insalled for safe travel during
                  sunrise or late returns to the hotel,complemented by effecient{" "}
                  dis brakes to ehance safety on the journey.
                </p>
                <p className="text-gray-700">
                  Empowering the motor continuously enhances your
                  effort,allowing you to travel faster,farther and increasing
                  the pleasure of cyclingin this luxurious Nature.
                </p>
              </div>
            </div>
          </div>
          <div className="relative md:order-1 ">
            <img src="/model.jpg" alt="Electric Bike" className="w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image first in second row */}
            <div className="relative md:order-1">
              <img src="/black.jpg" alt="Electric Bike" />
            </div>

            {/* Text second in second row */}
            <div className="flex flex-col justify-center text-balance  md:order-2 ml-6">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Buying<span className="text-primary"> Grood</span>
                </h1>
                <p className="text-gray-700">
                  Inspire visitors to explore the rigion by utilizing effective
                  travel choices that promote an active tourism experience!
                </p>
                <p className="text-gray-700">
                  Sustainable trainsportation option for the beginner cycling
                  and enhancing the experience for adventurous riders making it
                  feasible to takle uphill ride and travel greater distandnce.
                </p>
                <p className="text-gray-700">
                  Creates additional revenue for the hotel in regions
                  experiencing a rise in cycling tourism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
