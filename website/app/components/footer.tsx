import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-muted/30 dark:bg-accent/10 border-t border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">License</h3>
            <p className="text-muted-foreground leading-relaxed">
              This project is licensed under the GNU General Public License
              v3.0. See the{" "}
              <a
                href="https://github.com/clFaster/TapToQR/blob/main/LICENSE"
                className="font-medium text-primary hover:underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                LICENSE
              </a>{" "}
              file for details.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Issues</h3>
            <p className="text-muted-foreground leading-relaxed">
              All issues are tracked on the{" "}
              <a
                href="https://github.com/clFaster/TapToQR/issues"
                className="font-medium text-primary hover:underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </a>
              . Feel free to report any bugs or suggest new features!
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/imprint"
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Imprint
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Moritz Reis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
