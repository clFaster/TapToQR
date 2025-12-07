import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserStoreLink } from "./components/browser-store-link";
import { FeatureCard } from "./components/feature-card";
import { ScreenshotCard } from "./components/screenshot-card";
import { Icons } from "./components/icons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <section
          id="hero"
          className="w-full py-12 md:py-24 lg:py-32 bg-linear-to-b from-background to-muted dark:from-background dark:to-accent"
        >
          <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-8">
            <div className="flex items-center justify-center animate-in fade-in zoom-in duration-500">
              <Image
                src="/ic_TapToQR.svg"
                alt="TapToQR Logo"
                width={120}
                height={120}
                className="h-24 w-24 md:h-32 md:w-32 drop-shadow-lg"
              />
            </div>
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary-dark pb-2">
                TapToQR
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Generate customizable QR codes from any webpage with{" "}
                <strong className="text-foreground">TapToQR</strong> - instantly
                share links, text, or calendar events using a clean, intuitive
                browser extension with quick actions and personalization
                options.
              </p>
            </div>
            {/* Download Buttons */}
            <div className="w-full">
              <BrowserStoreLink showAll={true} />
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="w-full py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 md:gap-16 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  TapToQR - Share Instantly with QR Codes
                </h2>
                <p className="text-xl md:text-2xl text-primary font-medium">
                  Generate exactly what you need—quickly and easily.
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">TapToQR</strong> is a
                  lightweight and intuitive browser extension that lets you
                  generate custom QR codes right from your toolbar. Whether you
                  want to share the current webpage, copy a link to your phone,
                  or encode custom content like text, URLs, or calendar events,
                  TapToQR makes it seamless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-20 bg-muted/50 dark:bg-accent/20"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Key Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to generate and share QR codes efficiently.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
              <FeatureCard
                icon={<Icons.OneClick className="text-3xl" />}
                title="One-Click QR Generation"
                description="Click the toolbar icon to instantly generate a QR code for the active tab."
              />
              <FeatureCard
                icon={<Icons.CustomContent className="text-3xl" />}
                title="Custom Content Support"
                description="Encode URLs, plain text, calendar events, and more."
              />
              <FeatureCard
                icon={<Icons.MobileFriendly className="text-3xl" />}
                title="Mobile-Friendly Sharing"
                description="Open links on your phone instantly by scanning the code—no copy-paste needed."
              />
              <FeatureCard
                icon={<Icons.QuickActions className="text-3xl" />}
                title="Quick Actions"
                description="Download, copy, or customize the QR code with built-in controls."
              />
              <FeatureCard
                icon={<Icons.Personalization className="text-3xl" />}
                title="Personalization Options"
                description="Set your preferred QR code preview size, download resolution, and toggle logo visibility."
              />
              <FeatureCard
                icon={<Icons.SimpleSettings className="text-3xl" />}
                title="Simple Settings"
                description="Adjust the QR code preview and export size or configure your preferred visual style."
              />
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section
          id="screenshots"
          className="w-full py-12 md:py-20 bg-background"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                TapToQR in Action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how TapToQR can improve your workflow.
              </p>
            </div>
            <div className="grid gap-4 md:gap-7">
              <ScreenshotCard
                title="Easily Access on Mobile"
                description={
                  <>
                    Easily access the current page on your phone with a single
                    scan. <strong className="text-foreground">TapToQR</strong>{" "}
                    instantly generates a QR code for the active browser tab,
                    letting you open the same page on your mobile device in
                    seconds—no copy-pasting required. Just scan and go.
                  </>
                }
                imageSrc="/store/TapToQr-InAction.png"
                imageAlt="TapToQR in action"
              />

              <ScreenshotCard
                title="Generate a QR Code Instantly"
                description={
                  <>
                    Click the{" "}
                    <strong className="text-foreground">TapToQR</strong> icon in
                    your browser toolbar to instantly generate a QR code for the
                    current webpage.
                  </>
                }
                imageSrc="/store/TapToQr-Extension.png"
                imageAlt="TapToQR Extension"
                reverse={true}
              />

              <ScreenshotCard
                title="Customize Your QR Code Experience"
                description="In the settings panel, you can adjust the preview size of the QR code shown in the popup and configure the default resolution for downloads. You can also toggle the embedded logo on or off to match your preferences."
                imageSrc="/store/TapToQr-Settings.png"
                imageAlt="TapToQR Settings"
              />

              <ScreenshotCard
                title="Generate What You Need"
                description={
                  <>
                    With the{" "}
                    <strong className="text-foreground">TapToQR</strong> browser
                    extension, you can generate custom QR codes containing
                    various content types, such as calendar events, using a
                    simple and intuitive interface.
                  </>
                }
                imageSrc="/store/TapToQr-CustomQr.png"
                imageAlt="TapToQR Custom QR"
                reverse={true}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
