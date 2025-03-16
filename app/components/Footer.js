import Link from "next/link";
import { Logo } from "../constants";

// Import social media icons
import {
  SiLinkedin,
  SiFacebook,
  SiX,
  SiInstagram,
  SiThreads,
  SiTiktok,
  SiYoutube,
  SiSpotify,
  SiApplepodcasts,
  SiAmazonmusic,
  SiCastbox,
  SiIheartradio,
  SiOvercast,
  SiPocketcasts,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-container-default mx-auto grid items-center grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div>
          <Link
            href="/"
            className="w-fit block hover:text-primary transition-colors duration-300"
          >
            <Logo />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="col-span-2">
          <nav className="flex justify-center gap-8">
            <Link
              href="/episodes"
              className="uppercase font-semibold hover:text-primary transition-colors"
            >
              Episodes
            </Link>
            <Link
              href="/contact"
              className="uppercase font-semibold hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-end">
          <div className="flex space-x-4 mb-6">
            <Link href="#" className="text-white hover:text-primary">
              <SiLinkedin size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiFacebook size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiX size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiInstagram size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiThreads size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiTiktok size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiYoutube size={24} />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-primary">
              <SiSpotify size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiApplepodcasts size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiAmazonmusic size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiCastbox size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiIheartradio size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiOvercast size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-primary">
              <SiPocketcasts size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} The Experts Voice Podcast. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
