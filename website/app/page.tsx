import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserStoreLink } from "./components/browser-store-link";
import { Icons } from "./components/icons";

const features = [
  {
    icon: Icons.OneClick,
    title: "Current page in one click",
    text: "Create a QR code for the active tab directly from the toolbar.",
  },
  {
    icon: Icons.CustomContent,
    title: "More than website links",
    text: "Encode text, links, contacts, email, phone numbers, Wi-Fi, and calendar events.",
  },
  {
    icon: Icons.MobileFriendly,
    title: "Hand off to mobile",
    text: "Open the same page on your phone without copy-paste or chat-to-self.",
  },
  {
    icon: Icons.QuickActions,
    title: "Useful quick actions",
    text: "Copy the QR image, download a PNG, or regenerate after switching tabs.",
  },
  {
    icon: Icons.Personalization,
    title: "Personal defaults",
    text: "Choose preview size, export resolution, and whether to show the embedded logo.",
  },
  {
    icon: Icons.SimpleSettings,
    title: "Simple settings",
    text: "A small settings surface keeps the popup clear and easy to use.",
  },
];

const flow = [
  {
    step: "01",
    title: "Start from the current tab",
    text: "Click TapToQR Icon to generate a QR for the page you are already on.",
  },
  {
    step: "02",
    title: "Scan, copy, or download",
    text: "Share immediately from the popup or export a clean PNG for later use.",
  },
];

const screenshots = [
  {
    src: "/store/TapToQr-InAction.png",
    alt: "TapToQR in action",
    title: "Scan a page on desktop, open it on phone",
  },
  {
    src: "/store/TapToQr-Extension.png",
    alt: "TapToQR extension",
    title: "Toolbar popup with immediate QR output",
  },
  {
    src: "/store/TapToQr-Settings.png",
    alt: "TapToQR settings",
    title: "Settings for preview and export defaults",
  },
  {
    src: "/store/TapToQr-CustomQr.png",
    alt: "TapToQR custom QR",
    title: "Custom QR builder for structured content",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-background">
        <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
          <div className="aurora-blob aurora-blob-a aurora-drift-slow" />
          <div className="aurora-blob aurora-blob-b aurora-drift-fast" />
          <div className="aurora-grid-overlay" />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="reveal-up">
                <h1 className="max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
                  Turn any page into a QR code in seconds
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  TapToQR is a lightweight browser extension for sharing pages
                  and custom content.
                </p>

                <div className="mt-8">
                  <BrowserStoreLink showAll={true} />
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-primary">
                  <span className="rounded-full border border-primary/30 bg-background/70 px-3 py-1">
                    No tracking
                  </span>
                  <span className="rounded-full border border-primary/30 bg-background/70 px-3 py-1">
                    Open source
                  </span>
                  <span className="rounded-full border border-primary/30 bg-background/70 px-3 py-1">
                    Lightweight
                  </span>
                </div>
              </div>

              <div className="reveal-up-delay rounded-3xl border border-border bg-background/85 p-6 shadow-2xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  At a glance
                </p>
                <h2 className="mt-3 max-w-sm text-2xl font-bold leading-tight tracking-tight">
                  Practical by default
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                    <p className="text-2xl font-bold text-primary">3</p>
                    <p className="text-xs text-muted-foreground">
                      Browsers supported
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                    <p className="text-2xl font-bold text-primary">6+</p>
                    <p className="text-xs text-muted-foreground">
                      QR content types
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                    <p className="text-2xl font-bold text-primary">0</p>
                    <p className="text-xs text-muted-foreground">
                      Tracking scripts
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-border bg-background p-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src="/store/TapToQr-InAction.png"
                      alt="TapToQR extension"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="relative overflow-hidden bg-muted/30 py-20 md:py-24"
        >
          <div className="aurora-spotlight-left" />
          <div className="aurora-spotlight-right" />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Key Features
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                What you can do with TapToQR
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-border bg-background/90 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Workflow
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                  A clear workflow for everyday use
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                  Whether you share links daily or only occasionally, the flow
                  is easy to remember.
                </p>
              </div>

              <div className="grid gap-5">
                {flow.map((item) => (
                  <article
                    key={item.step}
                    className="rounded-2xl border border-border bg-muted/20 p-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-sm font-bold text-primary">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="screenshots" className="bg-muted/30 py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Screenshots
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                TapToQR in Action
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {screenshots.map((shot, idx) => (
                <article
                  key={shot.src}
                  className={`rounded-3xl border border-border bg-background p-5 shadow-xl ${
                    idx % 2 === 1 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-tight">
                    {shot.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
