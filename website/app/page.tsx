import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserStoreLink } from "./components/browser-store-link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <section
          id="hero"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted dark:from-background dark:to-accent"
        >
          <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-4">
            <div className="flex items-center justify-center">
              <Image
                src="/ic_TapToQR.svg"
                alt="TapToQR Logo"
                width={120}
                height={120}
                className="h-24 w-24"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              TapToQR
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl lg:text-2xl text-muted-foreground">
              Generate customizable QR codes from any webpage with{" "}
              <strong>TapToQR</strong> - instantly share links, text, or
              calendar events using a clean, intuitive browser extension with
              quick actions and personalization options.
            </p>
            {/* Download Buttons */}
            <BrowserStoreLink showAll={true} />
          </div>
        </section>

        {/* Description Section */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 md:gap-16">
              <div className="mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  TapToQR – Share Instantly with QR Codes
                </h2>
                <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
                  <strong>
                    Generate exactly what you need-quickly and easily.
                  </strong>
                </p>
              </div>
              <div className="max-w-[800px] mx-auto text-center">
                <p className="text-lg md:text-xl text-foreground/90">
                  <strong>TapToQR</strong> is a lightweight and intuitive
                  browser extension that lets you generate custom QR codes right
                  from your toolbar. Whether you want to share the current
                  webpage, copy a link to your phone, or encode custom content
                  like text, URLs, or calendar events, TapToQR makes it
                  seamless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-16 bg-muted dark:bg-accent"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Key Features
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center p-4 border border-border rounded-lg bg-background dark:bg-background/5 shadow-sm">
                <div className="p-2 rounded-full bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M15 15h.01"></path>
                    <path d="M11 19h.01"></path>
                    <path d="M15 11h.01"></path>
                    <path d="M19 15h.01"></path>
                    <path d="M15 19h.01"></path>
                    <path d="M19 19h.01"></path>
                    <path d="M19 11h.01"></path>
                    <path d="M19 7h.01"></path>
                    <path d="M15 7h.01"></path>
                    <path d="M11 7h.01"></path>
                    <path d="M7 7h.01"></path>
                    <path d="M7 11h.01"></path>
                    <path d="M7 15h.01"></path>
                    <path d="M7 19h.01"></path>
                    <path d="M11 11h.01"></path>
                    <rect width="20" height="20" x="2" y="2" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">One-Click QR Generation</h3>
                <p className="text-muted-foreground mt-2">
                  Click the toolbar icon to instantly generate a QR code for the
                  active tab.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-border rounded-lg bg-background dark:bg-background/5 shadow-sm">
                <div className="p-2 rounded-full bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                    <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                    <path d="M15 2v2"></path>
                    <path d="M15 20v2"></path>
                    <path d="M2 15h2"></path>
                    <path d="M20 15h2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Custom Content Support</h3>
                <p className="text-muted-foreground mt-2">
                  Encode URLs, plain text, calendar events, and more.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-border rounded-lg bg-background dark:bg-background/5 shadow-sm">
                <div className="p-2 rounded-full bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Mobile-Friendly Sharing</h3>
                <p className="text-muted-foreground mt-2">
                  Open links on your phone instantly by scanning the code-no
                  copy-paste needed.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-border rounded-lg bg-background dark:bg-background/5 shadow-sm">
                <div className="p-2 rounded-full bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m8 12 3 3 5-5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Quick Actions</h3>
                <p className="text-muted-foreground mt-2">
                  Download, copy, or customize the QR code with built-in
                  controls.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-border rounded-lg bg-background dark:bg-background/5 shadow-sm">
                <div className="p-2 rounded-full bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Personalization Options</h3>
                <p className="text-muted-foreground mt-2">
                  Set your preferred QR code preview size, download resolution,
                  and toggle logo visibility.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-border rounded-lg bg-background dark:bg-background/5 shadow-sm">
                <div className="p-2 rounded-full bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Simple Settings</h3>
                <p className="text-muted-foreground mt-2">
                  Adjust the QR code preview and export size or configure your
                  preferred visual style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section
          id="screenshots"
          className="w-full py-12 md:py-16 bg-background"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                TapToQR in Action
              </h2>
            </div>
            <div className="grid gap-8 md:gap-12">
              <div className="flex flex-col md:flex-row gap-6 items-center border border-border rounded-lg p-6 bg-muted dark:bg-accent">
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">
                    Easily Access on Mobile
                  </h3>
                  <p className="text-muted-foreground">
                    Easily access the current page on your phone with a single
                    scan. <strong>TapToQR</strong> instantly generates a QR code
                    for the active browser tab, letting you open the same page
                    on your mobile device in seconds-no copy-pasting required.
                    Just scan and go.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/store/TapToQr-InAction.png"
                    alt="TapToQR in action"
                    width={500}
                    height={400}
                    className="rounded-lg border border-border shadow-md mx-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-6 items-center border border-border rounded-lg p-6 bg-muted dark:bg-accent">
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">
                    Generate a QR Code Instantly
                  </h3>
                  <p className="text-muted-foreground">
                    Click the <strong>TapToQR</strong> icon in your browser
                    toolbar to instantly generate a QR code for the current
                    webpage.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/store/TapToQr-Extension.png"
                    alt="TapToQR Extension"
                    width={500}
                    height={400}
                    className="rounded-lg border border-border shadow-md mx-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center border border-border rounded-lg p-6 bg-muted dark:bg-accent">
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">
                    Customize Your QR Code Experience
                  </h3>
                  <p className="text-muted-foreground">
                    In the settings panel, you can adjust the preview size of
                    the QR code shown in the popup and configure the default
                    resolution for downloads. You can also toggle the embedded
                    logo on or off to match your preferences.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/store/TapToQr-Settings.png"
                    alt="TapToQR Settings"
                    width={500}
                    height={400}
                    className="rounded-lg border border-border shadow-md mx-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-6 items-center border border-border rounded-lg p-6 bg-muted dark:bg-accent">
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">Generate What You Need</h3>
                  <p className="text-muted-foreground">
                    With the <strong>TapToQR</strong> browser extension, you can
                    generate custom QR codes containing various content types,
                    such as calendar events, using a simple and intuitive
                    interface.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/store/TapToQr-CustomQr.png"
                    alt="TapToQR Custom QR"
                    width={500}
                    height={400}
                    className="rounded-lg border border-border shadow-md mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
