import Link from "next/link";
import "./globals.css";
import { Play } from "next/font/google";

const play = Play({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Reactionary",
  description: "Help me out Notebook!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={play.className}>
        <header>
          <div className="container">
            <h1>
              <Link href="/rules" className="homeLink">
                Reactionary
              </Link>
            </h1>
            <span>
              <Link href="/rules" className="menuLink">
                Rules
              </Link>
              <Link href="/hooks" className="menuLink">
                Hooks
              </Link>
              <Link href="/custom" className="menuLink">
                Custom
              </Link>
            </span>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <h4>Side Effects</h4>
          <h4>!doing(view=function(state))</h4>
          <p>
            A component has a side effect any time it does anything other than
            take some input, props and state, and calculate some output, a view.
            <br />A side effect is anything that interacts with the outside
            world (outside the local function). Mutating non-local variables,
            making network requests, and updating the DOM are all examples of
            common side effects.
          </p>
        </footer>
      </body>
    </html>
  );
}
