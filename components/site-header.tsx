"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          {" "}
          <Image
            src="/grood-w.png?height=500&width=600"
            alt="Grood Electric Bike"
            width={100}
            height={150}
            className="rounded-lg"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/whats-grood"
            className="text-sm font-medium hover:text-amber-300 transition-colors"
          >
            What&apos;s Grood?
          </Link>
          <Link
            href="/grood-kit"
            className="text-sm font-medium hover:text-amber-300 transition-colors"
          >
            Grood Kit
          </Link>
          <Link
            href="/for-greater-good"
            className="text-sm font-medium hover:text-amber-300 transition-colors"
          >
            For Greater Good
          </Link>
          <Link href="/pre-order">
            <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium">
              Pre-Order Now
            </Button>
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#1b3a27] p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/whats-grood"
                className="text-sm font-medium hover:text-amber-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                What&apos;s Grood?
              </Link>
              <Link
                href="/grood-kit"
                className="text-sm font-medium hover:text-amber-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Grood Kit
              </Link>
              <Link
                href="/for-greater-good"
                className="text-sm font-medium hover:text-amber-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                For Greater Good
              </Link>
              <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium w-full">
                Pre-Order Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
