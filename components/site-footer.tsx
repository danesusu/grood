import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Grood</h3>
            <p className="text-sm text-white">
              Cambodia's best brand of electric bikes because we put people
              first.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link
                  href="/bikes"
                  className="hover:text-primary transition-colors"
                >
                  Electric Bikes
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories"
                  className="hover:text-primary transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/parts"
                  className="hover:text-primary transition-colors"
                >
                  Parts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="hover:text-primary transition-colors"
                >
                  Warranty
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/instagram"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/facebook"
                  className="hover:text-primary transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="/twitter"
                  className="hover:text-primary transition-colors"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Grood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
