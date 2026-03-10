import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Fancy Font Generator",
  description:
    "Privacy Policy for FancyFont.io — how we handle cookies, advertising data, and user information.",
  robots: "index, follow",
};

const LAST_UPDATED = "March 10, 2026";
const SITE_NAME    = "FancyFont.io";
const SITE_URL     = "https://fancyfont.io";
const CONTACT      = "privacy@fancyfont.io";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-surface-900 text-white">
      {/* Header */}
      <header className="border-b border-surface-600 bg-surface-800/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
            ← Back to Generator
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">

          {/* Intro */}
          <section>
            <p>
              Welcome to <strong className="text-white">{SITE_NAME}</strong> ("{SITE_URL}"). We respect your
              privacy and are committed to being transparent about how we operate this website. This Privacy
              Policy explains what information is collected when you visit our site, how it is used, and your
              rights regarding that information.
            </p>
            <p className="mt-3">
              By using {SITE_NAME}, you agree to the practices described in this policy. If you do not agree,
              please discontinue use of the site.
            </p>
          </section>

          <hr className="border-surface-600" />

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <h3 className="text-base font-semibold text-slate-200 mb-2">1.1 Information You Provide</h3>
            <p>
              {SITE_NAME} is a free, no-login utility tool. We do <strong className="text-white">not</strong> require
              you to create an account, provide your name, email address, or any personally identifiable
              information (PII) to use any feature on this website. Text entered into the generator field is
              processed entirely within your browser and is never transmitted to our servers.
            </p>

            <h3 className="text-base font-semibold text-slate-200 mt-5 mb-2">1.2 Automatically Collected Information</h3>
            <p>When you visit {SITE_NAME}, certain technical data is automatically collected:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>IP address (anonymized where possible)</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URL</li>
              <li>Pages visited and time spent on each page</li>
              <li>Date and time of your visit</li>
            </ul>
            <p className="mt-3">
              This data is collected through standard server logs and third-party analytics services and is used
              only in aggregate form to improve the website.
            </p>
          </section>

          <hr className="border-surface-600" />

          {/* 2. Cookies */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Cookies & Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to operate and improve our service. Cookies are
              small text files stored on your device. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent, though some features of the site may not function properly
              without them.
            </p>
            <h3 className="text-base font-semibold text-slate-200 mt-4 mb-2">Types of cookies we use:</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Essential Cookies:</strong> Required for basic site
                functionality (e.g., remembering theme preferences).
              </li>
              <li>
                <strong className="text-slate-200">Analytics Cookies:</strong> Set by Google Analytics to
                collect anonymized data on how visitors interact with our site, helping us understand traffic
                patterns and improve content.
              </li>
              <li>
                <strong className="text-slate-200">Advertising Cookies:</strong> Set by Google AdSense and its
                advertising partners to display relevant ads based on your browsing history. These cookies may
                track your activity across other websites.
              </li>
            </ul>
          </section>

          <hr className="border-surface-600" />

          {/* 3. Google AdSense */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Google AdSense & Advertising</h2>
            <p>
              {SITE_NAME} uses <strong className="text-white">Google AdSense</strong> to display advertisements.
              Google AdSense is a service provided by Google LLC that uses cookies to serve ads based on your
              prior visits to this and other websites.
            </p>
            <p className="mt-3">
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on
              your visit to {SITE_NAME} and/or other sites on the Internet. You may opt out of personalized
              advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 underline hover:text-brand-300"
              >
                Google Ad Settings
              </a>{" "}
              or{" "}
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 underline hover:text-brand-300"
              >
                aboutads.info
              </a>
              .
            </p>
            <p className="mt-3">
              For more information on how Google collects and uses data, please visit Google&apos;s{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 underline hover:text-brand-300"
              >
                Privacy & Terms
              </a>
              .
            </p>
          </section>

          <hr className="border-surface-600" />

          {/* 4. Analytics */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Analytics</h2>
            <p>
              We use <strong className="text-white">Google Analytics</strong> to collect anonymized usage data.
              Google Analytics collects information such as how often users visit our site, what pages they
              visit, and what other sites they used prior to visiting {SITE_NAME}. We use this information solely
              to improve our website. Google Analytics collects only the IP address assigned to you at the time
              you visit the site. We have enabled IP anonymization on all our Google Analytics properties.
            </p>
            <p className="mt-3">
              You can prevent your data from being collected by Google Analytics by downloading and installing
              the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 underline hover:text-brand-300"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <hr className="border-surface-600" />

          {/* 5. Third-Party Links */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Third-Party Links</h2>
            <p>
              Our website may contain links to external sites. We have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of any third-party sites or
              services. We encourage you to review the privacy policy of every site you visit.
            </p>
          </section>

          <hr className="border-surface-600" />

          {/* 6. Children's Privacy */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Children&apos;s Privacy</h2>
            <p>
              {SITE_NAME} does not knowingly collect any personally identifiable information from children under
              the age of 13. If you are a parent or guardian and believe your child has provided us with
              personal information, please contact us immediately so we can take appropriate action.
            </p>
          </section>

          <hr className="border-surface-600" />

          {/* 7. Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Your Rights (GDPR / CCPA)</h2>
            <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>The right to access the personal data we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt out of the sale of your personal information (California residents)</li>
              <li>The right to withdraw consent for data processing at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href={`mailto:${CONTACT}`} className="text-brand-400 underline hover:text-brand-300">
                {CONTACT}
              </a>
              .
            </p>
          </section>

          <hr className="border-surface-600" />

          {/* 8. Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top. You are
              advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <hr className="border-surface-600" />

          {/* 9. Contact */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href={`mailto:${CONTACT}`} className="text-brand-400 underline hover:text-brand-300">
                {CONTACT}
              </a>
              .
            </p>
          </section>

        </div>
      </div>

      <footer className="border-t border-surface-600 py-6 text-center text-slate-600 text-sm mt-8">
        <p>
          © {new Date().getFullYear()} {SITE_NAME} ·{" "}
          <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          {" · "}
          <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
        </p>
      </footer>
    </main>
  );
}
