import Image from "next/image";
import Link from "next/link";
import { BrowserStoreLink } from "./browser-store-link";

export default function Navbar() {
  return (
    <header className="w-full py-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/ic_TapToQR.svg"
            alt="TapToQR Logo"
            width={40}
            height={40}
            className="h-10 w-10 transition-transform group-hover:scale-110"
          />
          <span className="text-xl font-bold tracking-tight">TapToQR</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#screenshots"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Screenshots
          </Link>
          <Link
            href="https://github.com/clFaster/TapToQR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <BrowserStoreLink buttonStyle={true} />
          </div>
        </div>
      </div>
    </header>
  );
}
