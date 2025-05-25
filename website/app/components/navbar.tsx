import Image from "next/image";
import Link from "next/link";

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
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="https://addons.mozilla.org/addon/taptoqr/"
            target="_blank"
            className="hidden sm:flex items-center justify-center px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
          >
            Get Extension
          </Link>
        </div>
      </div>
    </header>
  );
}
