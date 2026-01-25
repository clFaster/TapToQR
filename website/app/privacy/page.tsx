import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <section className="w-full py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto max-w-3xl">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Datenschutzerklärung
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Informationen über die Verarbeitung Ihrer Daten gemäß Art. 13
                  DSGVO
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">
                  Allgemeines zur Datenverarbeitung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Beim Besuch dieser Website werden keine personenbezogenen
                  Daten aktiv erhoben, gespeichert oder verarbeitet.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Hosting</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Website wird auf einem externen Server gehostet. Die
                  dabei technisch notwendigen Daten (z.B. IP-Adresse,
                  Browsertyp, Zugriffszeitpunkt) können vom Hosting-Provider in
                  Server-Log-Dateien gespeichert werden. Diese Datenverarbeitung
                  erfolgt auf Grundlage berechtigter Interessen (Art. 6 Abs. 1
                  lit. f DSGVO) zur Sicherstellung des Betriebs und der
                  Sicherheit der Website.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Google Fonts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Website verwendet Google Fonts zur Darstellung von
                  Schriftarten. Google Fonts ist ein Dienst der Google Ireland
                  Limited ("Google"), Gordon House, Barrow Street, Dublin 4,
                  Irland. Beim Aufruf dieser Website lädt Ihr Browser die
                  benötigten Web Fonts von den Servern von Google. Dabei wird
                  Ihre IP-Adresse an Google übertragen. Die Nutzung von Google
                  Fonts erfolgt im Interesse einer einheitlichen und
                  ansprechenden Darstellung unserer Website. Dies stellt ein
                  berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
                  dar. Weitere Informationen zu Google Fonts finden Sie unter
                  https://developers.google.com/fonts/faq und in der
                  Datenschutzerklärung von Google:
                  https://policies.google.com/privacy
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Cookies und Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Website verwendet keine Cookies und setzt keine
                  Tracking-Tools oder Analysedienste ein. Es erfolgt keine
                  Verfolgung des Nutzerverhaltens.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Externe Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Website enthält Links zu externen Websites (z.B. GitHub,
                  LinkedIn, Stack Overflow). Beim Klick auf diese Links
                  verlassen Sie diese Website. Für die Datenverarbeitung auf den
                  verlinkten Websites sind deren Betreiber verantwortlich. Bitte
                  informieren Sie sich dort über die jeweiligen
                  Datenschutzbestimmungen.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Kontaktaufnahme</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bei Kontaktaufnahme per E-Mail werden die von Ihnen
                  mitgeteilten Daten (E-Mail-Adresse, Name, Nachrichteninhalt)
                  zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden
                  nicht ohne Ihre Einwilligung weitergegeben. Die Verarbeitung
                  erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
                  Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
                  oder zur Durchführung vorvertraglicher Maßnahmen erforderlich
                  ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren
                  berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Ihre Rechte</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                  Einschränkung der Verarbeitung, Datenübertragbarkeit und
                  Widerspruch gemäß den Artikeln 15-21 DSGVO. Zur Ausübung
                  dieser Rechte wenden Sie sich bitte an me@moritzreis.dev. Sie
                  haben außerdem das Recht, sich bei einer
                  Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                  personenbezogenen Daten zu beschweren.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Speicherdauer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Soweit personenbezogene Daten verarbeitet werden, werden diese
                  nur so lange gespeichert, wie es für die Erfüllung des
                  jeweiligen Zwecks erforderlich ist oder gesetzliche
                  Aufbewahrungsfristen bestehen.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">
                  Änderungen dieser Datenschutzerklärung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Datenschutzerklärung kann bei Bedarf angepasst werden,
                  um rechtlichen Anforderungen oder Änderungen an der Website
                  gerecht zu werden.
                </p>
              </div>

              <p>Stand: Januar 2026</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
