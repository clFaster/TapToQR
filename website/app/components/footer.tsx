export default function Footer() {
  return (
    <footer className="w-full py-8 bg-muted dark:bg-accent border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold">License</h3>
            <p className="mt-2 text-muted-foreground">
              This project is licensed under the GNU General Public License
              v3.0. See the{" "}
              <a
                href="https://github.com/clFaster/TapToQR/blob/main/LICENSE"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LICENSE
              </a>{" "}
              file for details.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Issues</h3>
            <p className="mt-2 text-muted-foreground">
              All issues are tracked on the{" "}
              <a
                href="https://github.com/clFaster/TapToQR/issues"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </a>
              . Feel free to report any bugs or suggest new features!
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Moritz Reis
          </p>
        </div>
      </div>
    </footer>
  );
}
