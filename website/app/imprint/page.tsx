import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Imprint",
};

export default function ImprintPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <section className="w-full py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto max-w-3xl">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Impressum
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Angaben gemäß § 5 ECG und Offenlegung gemäß § 25 Mediengesetz
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Medieninhaber und Herausgeber</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TapToQR (Open-Source-Projekt)
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Verantwortlich: Moritz Reis
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wien, Österreich
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  legal@moritzreis.dev
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Kontakt</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bei Fragen oder Hinweisen nutze bitte die
                  {" "}
                  <Link
                    href="https://github.com/clFaster/TapToQR/issues"
                    className="font-medium text-primary hover:underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Issues
                  </Link>
                  .
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Lizenz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TapToQR wird unter der GNU General Public License v3.0
                  veroeffentlicht. Details findest du in der
                  {" "}
                  <Link
                    href="https://github.com/clFaster/TapToQR/blob/main/LICENSE"
                    className="font-medium text-primary hover:underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LICENSE-Datei
                  </Link>
                  .
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Hinweis</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dieses Impressum gilt für diese Website & Browser Extension TapToQR.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Haftungsausschluss</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
