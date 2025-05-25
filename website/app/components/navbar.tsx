import Image from "next/image";
import Link from "next/link";
import { BrowserStoreLink } from "./browser-store-link";

export default function Navbar() {
  return (
    <header className="w-full py-4 border-b border-border bg-background/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/ic_TapToQR.svg"
            alt="TapToQR Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">TapToQR</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-foreground/80 hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#screenshots"
            className="text-foreground/80 hover:text-primary"
          >
            Screenshots
          </Link>
          <Link
            href="https://github.com/clFaster/TapToQR"
            target="_blank"
            className="text-foreground/80 hover:text-primary"
          >
            GitHub
          </Link>
        </nav>{" "}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <BrowserStoreLink buttonStyle={true} />
          </div>
        </div>
      </div>
    </header>
  );
}
