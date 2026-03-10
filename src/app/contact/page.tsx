import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — GoFancyFont.com",
  description:
    "Get in touch with the GoFancyFont.com team. Send us feedback, bug reports, partnership inquiries, or general questions.",
  alternates: { canonical: "https://gofancyfont.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface-900 text-white">
      <header className="border-b border-surface-600 bg-surface-800/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
            ← Back to Generator
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                          bg-brand-500/10 border border-brand-500/20 text-brand-400
                          text-xs font-medium tracking-widest uppercase mb-4">
            Contact
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-3">Contact Us</h1>
          <p className="text-slate-400 leading-relaxed">
            We read every message. Typical response time is 1–2 business days.
          </p>
        </div>

        {/* Contact options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            {
              icon: "💬",
              title: "General Inquiry",
              desc: "Questions about how the tool works, feature suggestions, or anything else.",
              email: "hello@gofancyfont.com",
            },
            {
              icon: "🐛",
              title: "Bug Report",
              desc: "Found a style that renders incorrectly or a UI issue? Let us know.",
              email: "bugs@gofancyfont.com",
            },
            {
              icon: "🤝",
              title: "Partnership",
              desc: "Collaboration, sponsorship, or link exchange inquiries.",
              email: "partner@gofancyfont.com",
            },
            {
              icon: "⚖️",
              title: "Legal / Privacy",
              desc: "GDPR requests, CCPA opt-out, or intellectual property concerns.",
              email: "legal@gofancyfont.com",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={`mailto:${item.email}`}
              className="group p-5 rounded-xl bg-surface-700 border border-surface-600
                         hover:border-brand-400/50 hover:bg-surface-600 transition-all duration-200"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h2 className="font-semibold text-white mb-1 group-hover:text-brand-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">{item.desc}</p>
              <p className="text-sm text-brand-400 font-medium">{item.email}</p>
            </a>
          ))}
        </div>

        {/* Contact form (static HTML — wire up to Formspree / Resend in future) */}
        <div className="p-6 rounded-2xl bg-surface-700 border border-surface-600">
          <h2 className="text-lg font-bold text-white mb-5">Send a Message</h2>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-slate-400 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full bg-surface-900 border border-surface-500 rounded-lg px-4 py-2.5
                           text-white placeholder-slate-600 text-sm outline-none
                           focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-400 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full bg-surface-900 border border-surface-500 rounded-lg px-4 py-2.5
                           text-white placeholder-slate-600 text-sm outline-none
                           focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-slate-400 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full bg-surface-900 border border-surface-500 rounded-lg px-4 py-2.5
                           text-white text-sm outline-none
                           focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all"
              >
                <option value="general">General Inquiry</option>
                <option value="bug">Bug Report</option>
                <option value="partnership">Partnership</option>
                <option value="legal">Legal / Privacy</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Describe your inquiry..."
                className="w-full bg-surface-900 border border-surface-500 rounded-lg px-4 py-2.5
                           text-white placeholder-slate-600 text-sm outline-none resize-none
                           focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white
                         font-semibold text-sm transition-all duration-200 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="border-t border-surface-600 py-6 text-center text-slate-600 text-sm mt-8">
        <p>
          © {new Date().getFullYear()} GoFancyFont.com ·{" "}
          <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          {" · "}
          <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
          {" · "}
          <Link href="/about" className="hover:text-slate-400 transition-colors">About</Link>
        </p>
      </footer>
    </main>
  );
}
