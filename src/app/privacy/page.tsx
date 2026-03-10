import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — GoFancyFont.com",
  description:
    "Privacy Policy for GoFancyFont.com — how we handle cookies, Google AdSense DoubleClick DART cookies, localStorage, and user data.",
  robots: "index, follow",
};

const LAST_UPDATED = "March 10, 2026";
const SITE         = "GoFancyFont.com";
const URL          = "https://gofancyfont.com";
const CONTACT      = "privacy@gofancyfont.com";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-surface-900 text-white">
      <header className="border-b border-surface-600 bg-surface-800/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
            ← Back to Generator
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">

          <section>
            <p>
              Welcome to <strong className="text-white">{SITE}</strong> ("{URL}"). We are
              committed to protecting your privacy and being fully transparent about how
              this website operates. This Privacy Policy explains what data is collected,
              why it is collected, and your rights regarding that data. By using {SITE},
              you agree to the practices described below.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>

            <h3 className="text-base font-semibold text-slate-200 mb-2">
              1.1 Text You Enter in the Generator
            </h3>
            <p className="mb-3">
              All text entered into the GoFancyFont generator is processed{" "}
              <strong className="text-white">entirely within your browser</strong> using
              client-side JavaScript. This text is{" "}
              <strong className="text-white">never transmitted to our servers</strong>,
              never stored, and never logged. We have no access to the content you generate.
            </p>

            <h3 className="text-base font-semibold text-slate-200 mb-2 mt-4">
              1.2 localStorage
            </h3>
            <p className="mb-3">
              GoFancyFont uses your browser&apos;s{" "}
              <strong className="text-white">localStorage API</strong> to save your
              favorite font styles locally on your device. This data is stored only on
              your device and is never sent to our servers. It persists across sessions
              until you clear your browser data or manually remove favorites. You can
              clear this data at any time through your browser&apos;s storage settings
              (DevTools → Application → Local Storage → {URL}).
            </p>

            <h3 className="text-base font-semibold text-slate-200 mb-2 mt-4">
              1.3 Automatically Collected Technical Data
            </h3>
            <p>
              Standard server logs and third-party analytics services collect technical
              data when you visit, including: IP address (anonymized where possible),
              browser type and version, operating system, referring URL, pages visited,
              time on page, and date/time of visit. This data is used only in aggregate
              to understand traffic patterns and improve the site.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Cookies &amp; Tracking Technologies</h2>
            <p className="mb-3">
              We use the following categories of cookies. You can manage cookie preferences
              through your browser settings.
            </p>
            <ul className="space-y-3 text-slate-400">
              <li>
                <strong className="text-slate-200">Essential Cookies:</strong> Required for
                basic site functionality such as session management and security. Cannot
                be disabled without affecting site operation.
              </li>
              <li>
                <strong className="text-slate-200">Analytics Cookies (Google Analytics):</strong>{" "}
                We use Google Analytics 4 (GA4) to collect anonymized data on how
                visitors interact with {SITE}. Analytics cookies are set by Google
                (google.com, doubleclick.net). IP addresses are anonymized before
                storage. You may opt out via the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer"
                   className="text-brand-400 underline hover:text-brand-300">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </li>
              <li>
                <strong className="text-slate-200">Advertising Cookies (Google AdSense &amp; DoubleClick):</strong>{" "}
                {SITE} uses <strong className="text-slate-200">Google AdSense</strong> to
                display advertisements. Google AdSense uses the{" "}
                <strong className="text-slate-200">DoubleClick DART cookie</strong> to
                serve ads based on your prior visits to this and other websites. The
                DoubleClick DART cookie is placed by Google&apos;s ad-serving infrastructure
                (doubleclick.net) and enables Google and its partners to serve ads to
                you based on your browsing history across sites. You may opt out of the
                use of the DART cookie by visiting the{" "}
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer"
                   className="text-brand-400 underline hover:text-brand-300">
                  Google advertising opt-out page
                </a>{" "}
                or{" "}
                <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer"
                   className="text-brand-400 underline hover:text-brand-300">
                  aboutads.info
                </a>.
              </li>
            </ul>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Google AdSense &amp; Third-Party Advertising</h2>
            <p className="mb-3">
              {SITE} is a participant in the Google AdSense program. Google AdSense is an
              advertising service provided by Google LLC (1600 Amphitheatre Parkway,
              Mountain View, CA 94043, USA). Google&apos;s use of advertising cookies enables
              it and its partners to serve ads based on your visit to {SITE} and other
              sites on the internet.
            </p>
            <p className="mb-3">
              Third-party vendors, including Google, use cookies to serve ads based on
              a user&apos;s prior visits to our website and other websites on the internet.
              This means Google may show our site visitors ads for GoFancyFont on other
              websites they visit (remarketing). It also means other advertisers&apos; ads
              may appear on GoFancyFont based on users&apos; interests and browsing history.
            </p>
            <p>
              For more information on how Google collects and processes data in connection
              with advertising, please visit{" "}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer"
                 className="text-brand-400 underline hover:text-brand-300">
                How Google uses data when you use our partners&apos; sites or apps
              </a>.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. How We Use Collected Information</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>To operate and improve the website and user experience</li>
              <li>To analyze aggregate traffic patterns and popular features</li>
              <li>To display relevant advertisements via Google AdSense</li>
              <li>To comply with applicable laws and regulations</li>
            </ul>
            <p className="mt-3">
              We do <strong className="text-white">not</strong> sell, trade, or rent any
              personally identifiable information to third parties.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Children&apos;s Privacy (COPPA)</h2>
            <p>
              {SITE} does not knowingly collect personally identifiable information from
              children under the age of 13. If you are a parent or guardian and believe
              your child has provided us with personal data, please contact us at{" "}
              <a href={`mailto:${CONTACT}`} className="text-brand-400 underline hover:text-brand-300">
                {CONTACT}
              </a>{" "}
              so we can take appropriate action.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Rights (GDPR &amp; CCPA)</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Opt out of the sale of personal information (California residents — CCPA)</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${CONTACT}`} className="text-brand-400 underline hover:text-brand-300">
                {CONTACT}
              </a>.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of
              significant changes by posting the revised policy on this page and updating
              the &quot;Last updated&quot; date. Continued use of {SITE} after changes are posted
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
            <p>
              Questions about this Privacy Policy?{" "}
              <a href={`mailto:${CONTACT}`} className="text-brand-400 underline hover:text-brand-300">
                {CONTACT}
              </a>
            </p>
          </section>

        </div>
      </div>

      <footer className="border-t border-surface-600 py-6 text-center text-slate-600 text-sm mt-8">
        <p>
          © {new Date().getFullYear()} {SITE} ·{" "}
          <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
          {" · "}
          <Link href="/terms" className="hover:text-slate-400">Terms</Link>
          {" · "}
          <Link href="/about" className="hover:text-slate-400">About</Link>
        </p>
      </footer>
    </main>
  );
}
