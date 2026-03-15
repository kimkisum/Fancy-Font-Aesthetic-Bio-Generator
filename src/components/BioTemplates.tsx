"use client";

import { useState, useCallback } from "react";
import { getTranslation, type Locale } from "@/utils/i18n";
import { FONT_STYLES } from "@/utils/fontMap";
import Toast from "./Toast";

const TEMPLATES = [
  (name: string, mbti: string, fav: string) =>
    `${FONT_STYLES.find((f) => f.id === "bold-script")?.transform(name || "Name")} ⋆˙⟡ | ${
      mbti || "MBTI"
    } ☁️ | ${FONT_STYLES.find((f) => f.id === "small-caps")?.transform(fav || "Fav Song")} 🎧`,
  (name: string, mbti: string, fav: string) =>
    `╔══════╗\n║ ${FONT_STYLES.find((f) => f.id === "gothic-fraktur")?.transform(
      name || "Name"
    )}\n║ ${mbti || "MBTI"} 𓆩♡𓆪\n║ 🎧 ${fav || "Fav Song"}\n╚══════╝`,
  (name: string, mbti: string, fav: string) =>
    `₊˚ʚ ᗢ₊˚✧ ゚.\n${FONT_STYLES.find((f) => f.id === "aesthetic")?.transform(
      name || "Name"
    )}\n╰┈➤ ${mbti || "MBTI"}\n╰┈➤ ${fav || "Fav Song"} 🎀`,
  (name: string, mbti: string, fav: string) =>
    `· · • • • ✤ • • • · ·\n${FONT_STYLES.find((f) => f.id === "bold-sans")?.transform(
      name || "Name"
    )}\n${mbti || "MBTI"} 𖦹\n🎵 : ${FONT_STYLES.find((f) => f.id === "monospace")?.transform(
      fav || "Fav Song"
    )}\n· · • • • ✤ • • • · ·`,
];

export default function BioTemplates({ lang = "en" }: { lang?: Locale }) {
  const t = getTranslation(lang);
  const [name, setName] = useState("");
  const [mbti, setMbti] = useState("");
  const [fav, setFav] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = useCallback(
    (text: string) => {
      navigator.clipboard.writeText(text).then(() => {
        if (typeof navigator.vibrate === "function") navigator.vibrate([50]);
        setToastMsg(t.toastCopied);
        setToastVisible(true);
      });
    },
    [t.toastCopied]
  );

  return (
    <div className="w-full max-w-3xl mx-auto px-5 pb-16">
      <Toast message={toastMsg} visible={toastVisible} onDone={() => setToastVisible(false)} />

      <div className="mb-6 text-center">
        <h2 className="text-xl font-serif font-bold text-ed-charcoal mb-2">{t.bioTemplates}</h2>
        <p className="text-sm text-ed-muted">{t.bioTemplatesDesc}</p>
      </div>

      <div className="bg-ed-surfaceMuted border border-ed-border rounded-xl shadow-lg shadow-ed-bg/80 p-5 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (e.g. Luna)"
            className="w-full rounded-lg bg-white border border-ed-border text-ed-charcoal text-[14px] placeholder-ed-muted/40 px-3.5 py-2.5 outline-none focus:border-ed-sage focus:ring-1 transition-all"
            maxLength={20}
          />
          <input
            type="text"
            value={mbti}
            onChange={(e) => setMbti(e.target.value)}
            placeholder="MBTI (e.g. INFP)"
            className="w-full rounded-lg bg-white border border-ed-border text-ed-charcoal text-[14px] placeholder-ed-muted/40 px-3.5 py-2.5 outline-none focus:border-ed-sage focus:ring-1 transition-all"
            maxLength={10}
          />
          <input
            type="text"
            value={fav}
            onChange={(e) => setFav(e.target.value)}
            placeholder="Fav Song / Movie"
            className="w-full rounded-lg bg-white border border-ed-border text-ed-charcoal text-[14px] placeholder-ed-muted/40 px-3.5 py-2.5 outline-none focus:border-ed-sage focus:ring-1 transition-all"
            maxLength={30}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TEMPLATES.map((renderTemplate, i) => {
          const text = renderTemplate(name, mbti, fav);
          return (
            <div
              key={i}
              className="relative p-4 rounded-xl border border-ed-border bg-white hover:border-ed-sand transition-colors flex flex-col justify-between group"
            >
              <pre className="text-[14px] leading-relaxed text-ed-charcoal whitespace-pre-wrap font-sans mb-4">
                {text}
              </pre>
              <button
                onClick={() => handleCopy(text)}
                className="self-end py-1.5 px-4 rounded-lg bg-ed-bg border border-ed-border text-[12px] font-medium text-ed-charcoal hover:bg-ed-sand/50 active:scale-[0.97] transition-all"
              >
                📋 {t.copy}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
