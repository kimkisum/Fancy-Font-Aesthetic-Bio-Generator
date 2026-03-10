import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Fancy Font Generator",
  description:
    "Terms of Service for FancyFont.io — rules and guidelines for using our free fancy font generator tool.",
  robots: "index, follow",
};

const LAST_UPDATED = "March 10, 2026";
const SITE_NAME    = "FancyFont.io";
const SITE_URL     = "https://fancyfont.io";
const CONTACT      = "legal@fancyfont.io";

export default function TermsOfServicePage() {
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
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">

          <section>
            <p>
              Please read these Terms of Service (&quot;Terms&quot;) carefully before using{" "}
              <strong className="text-white">{SITE_URL}</strong> (the &quot;Service&quot;) operated by{" "}
              <strong className="text-white">{SITE_NAME}</strong> (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>
            <p className="mt-3">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any
              part of the Terms, you may not access the Service.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Description of Service</h2>
            <p>
              {SITE_NAME} provides a free, browser-based text transformation tool that converts standard Latin
              characters into Unicode lookalike characters for aesthetic and decorative purposes. The Service
              requires no registration and stores no user-generated content on our servers. All text processing
              occurs locally in your browser.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Acceptable Use</h2>
            <p>You agree to use the Service only for lawful purposes and in a manner that does not infringe the rights of others. You must not use the Service to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-slate-400">
              <li>Generate, distribute, or promote content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.</li>
              <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity.</li>
              <li>Engage in any activity that could damage, disable, or impair the Service or servers connected to it.</li>
              <li>Attempt to gain unauthorized access to any part of the Service or its related systems.</li>
              <li>Use automated tools, bots, or scripts to access the Service in a manner that places an unreasonable load on our infrastructure.</li>
              <li>Violate any applicable local, national, or international law or regulation.</li>
            </ul>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h2>
            <p>
              The Service, including its design, graphics, underlying code, and all written content (excluding
              user-generated text), is the property of {SITE_NAME} and is protected by applicable intellectual
              property laws.
            </p>
            <p className="mt-3">
              The Unicode characters produced by this tool are part of the publicly available Unicode Standard
              and are not owned by {SITE_NAME}. You are free to copy, share, and use the styled text output for
              any lawful personal or commercial purpose.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Advertising</h2>
            <p>
              {SITE_NAME} displays advertisements served by Google AdSense and other third-party advertising
              networks. These advertisers may use cookies and web beacons to collect information about your
              browsing activity in order to provide targeted advertisements. {SITE_NAME} has no control over the
              content of these advertisements and is not responsible for any products, services, or claims made
              therein.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Disclaimers & Limitation of Liability</h2>
            <p>
              The Service is provided on an <strong className="text-white">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</strong> basis
              without warranties of any kind, either express or implied. We do not warrant that the Service will
              be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
            <p className="mt-3">
              To the fullest extent permitted by applicable law, {SITE_NAME} shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including but not limited to
              loss of profits, data, or goodwill, arising out of or in connection with your use of (or inability
              to use) the Service.
            </p>
            <p className="mt-3">
              Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability.
              In such jurisdictions, our liability is limited to the maximum extent permitted by law.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Availability & Modifications</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the Service (or any part of it) at any
              time, with or without notice. We will not be liable to you or any third party for any modification,
              suspension, or discontinuation of the Service.
            </p>
            <p className="mt-3">
              We also reserve the right to update these Terms at any time. Continued use of the Service after
              changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard
              to conflict of law principles. Any disputes arising under these Terms shall be subject to the
              exclusive jurisdiction of the competent courts.
            </p>
          </section>

          <hr className="border-surface-600" />

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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
