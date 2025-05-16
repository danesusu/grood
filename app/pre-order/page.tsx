import { PreOrderForm } from "@/components/pre-order-form"

export default function PreOrderPage() {
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
              Pre-Order Your <span className="text-amber-400">Grood</span> Bike
            </h1>
            <p className="text-gray-700 text-lg">
              Be among the first to experience the future of sustainable transportation. Fill out the form below to
              reserve your Grood bike today.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <PreOrderForm />
          </div>
        </div>
      </section>
    </main>
  )
}
