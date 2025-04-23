import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold">About AcuScan</h3>
            <p className="text-sm mt-2">
              AcuScan leverages AI to make 2D medical image analysis more
              accessible and user-friendly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm mt-2">Have questions? Reach out to us.</p>
            <p className="mt-2">
              <a href="mailto:support@acuscan.com" className="hover:underline">
                support@acuscan.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t mt-6 pt-4 text-center text-sm">
          <p>&copy; 2025 AcuScan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
