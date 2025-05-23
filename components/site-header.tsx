"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/whats-grood", label: "What's Grood?" },
    { href: "/grood-kit", label: "Grood Kit" },
    { href: "/for-greater-good", label: "For Greater Good" },
  ];

  const linkClass = (href: string) => {
    const isActive =
      (pathname === "/" && href === "/whats-grood") ||
      (pathname === "/whats-grood" &&
        (href === "/whats-grood" || href === "/"));

    return `text-sm font-medium transition-colors ${
      isActive || pathname === href
        ? "text-amber-300"
        : "hover:text-amber-300 text-white"
    }`;
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-secondary text-white font-futura">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/grood-w.png?height=500&width=600"
            alt="Grood Electric Bike"
            width={100}
            height={150}
            className="rounded-lg"
          />
        </Link>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
          <Link href="/pre-order">
            <Button className="bg-primary hover:bg-primary hover:text-secondary text-black font-medium">
              Get In Touch
            </Button>
          </Link>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#1b3a27] p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={linkClass(href)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link href="/pre-order" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-primary hover:bg-primary text-black font-medium w-full">
                  Pre-Order Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
