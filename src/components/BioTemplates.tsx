"use client";

import { useState, useCallback } from "react";

interface Template {
  id: string;
  text: string;
  preview: string; // short display text
}

interface AestheticGroup {
  id: string;
  label: string;
  emoji: string;
  color: string;
  templates: Template[];
}

const AESTHETIC_GROUPS: AestheticGroup[] = [
  {
    id: "softgirl",
    label: "Soft Girl",
    emoji: "🎀",
    color: "pink",
    templates: [
      {
        id: "sg1",
        text: "she/her ✿ dreamer ✿\nbringing soft energy your way\n💌 kindness always",
        preview: "she/her ✿ dreamer",
      },
      {
        id: "sg2",
        text: "your daily dose of soft ♡\nart + music + love\n🌸 spreading good vibes only",
        preview: "daily dose of soft ♡",
      },
      {
        id: "sg3",
        text: "soft heart, strong mind\nliving in pastel daydreams\n✨ she believed she could",
        preview: "soft heart, strong mind",
      },
      {
        id: "sg4",
        text: "romanticizing my life daily\ncoffee lover & sunset chaser\n🎀 main character energy",
        preview: "romanticizing my life",
      },
    ],
  },
  {
    id: "coquette",
    label: "Coquette",
    emoji: "🩷",
    color: "rose",
    templates: [
      {
        id: "cq1",
        text: "she/her 🎀 dreaming in pink\nsugar, lace & everything nice\n💌 love letters always welcome",
        preview: "dreaming in pink 🎀",
      },
      {
        id: "cq2",
        text: "pink everything + soft music\ncoquette at heart, bold in spirit\n🩷 your main character",
        preview: "coquette at heart",
      },
      {
        id: "cq3",
        text: "lace ribbons & rosé dreams\ndelicate but dangerous 🌹\nadoring the finer things",
        preview: "lace ribbons & rosé",
      },
      {
        id: "cq4",
        text: "balletcore & butterfly kisses\nforever a romantic at heart\n🎀 pretty in every way",
        preview: "balletcore & butterfly",
      },
    ],
  },
  {
    id: "darkacademia",
    label: "Dark Academia",
    emoji: "📚",
    color: "amber",
    templates: [
      {
        id: "da1",
        text: "books & black coffee ☕\nmysteries, melancholy & poetry\nthink deeply, feel everything",
        preview: "books & black coffee",
      },
      {
        id: "da2",
        text: "classic literature & rainy days\nfound in the library, always\n📚 knowledge is power",
        preview: "found in the library",
      },
      {
        id: "da3",
        text: "haunted by great art\ncollecting old books & new thoughts\n🕯 the world is a book",
        preview: "haunted by great art",
      },
      {
        id: "da4",
        text: "midnight studies & candlelight\ngreek mythology + gothic novels\n📜 learner of all things",
        preview: "midnight studies",
      },
    ],
  },
  {
    id: "cottagecore",
    label: "Cottagecore",
    emoji: "🌿",
    color: "emerald",
    templates: [
      {
        id: "cc1",
        text: "foraging + baking + daydreaming\ncottage life is the only life\n🌿 slow living advocate",
        preview: "foraging + baking",
      },
      {
        id: "cc2",
        text: "wildflowers & herbal tea 🍃\nliving simply, loving deeply\nnature is my home",
        preview: "wildflowers & herbal tea",
      },
      {
        id: "cc3",
        text: "fairy lights & fresh bread\ngarden witch in training\n🍄 magical & grounded",
        preview: "fairy lights & fresh bread",
      },
      {
        id: "cc4",
        text: "pressed flowers in old journals\nbirdsong & morning dew\n🌸 embracing the gentle life",
        preview: "pressed flowers",
      },
    ],
  },
  {
    id: "y2k",
    label: "Y2K",
    emoji: "💿",
    color: "violet",
    templates: [
      {
        id: "y1",
        text: "2000s baby 💿\nstyle obsessed | music addict\nliving in my own world ✦",
        preview: "2000s baby 💿",
      },
      {
        id: "y2",
        text: "low battery but high vibes\ny2k forever ⭒ pop princess\n✧ that girl era",
        preview: "y2k forever ⭒",
      },
      {
        id: "y3",
        text: "glitter, chrome & nostalgia\nretro future is now 🌐\n💾 loading my best self",
        preview: "glitter, chrome & nostalgia",
      },
      {
        id: "y4",
        text: "flip phones & butterfly clips\ncelebrating the iconic era\n✨ pop culture obsessed",
        preview: "flip phones & butterfly",
      },
    ],
  },
  {
    id: "cleangirl",
    label: "Clean Girl",
    emoji: "☁️",
    color: "sky",
    templates: [
      {
        id: "cg1",
        text: "skincare → wellness → self-love\nworking on my best self always\n☁️ peaceful energy only",
        preview: "skincare → wellness",
      },
      {
        id: "cg2",
        text: "green smoothies & good vibes\nhealth + wellness journey\n✨ glowing from within",
        preview: "glowing from within",
      },
      {
        id: "cg3",
        text: "pilates queen & matcha lover\ngratitude daily, no excuses\n🤍 leveling up always",
        preview: "pilates queen & matcha",
      },
      {
        id: "cg4",
        text: "morning routines & cold water\nmindfulness is my superpower\n🌿 clean living, full life",
        preview: "morning routines",
      },
    ],
  },
  {
    id: "indie",
    label: "Indie / Alt",
    emoji: "🎸",
    color: "orange",
    templates: [
      {
        id: "in1",
        text: "music + art + overthinking\nindependent spirit 🎸\nkind of a mess, mostly okay",
        preview: "independent spirit 🎸",
      },
      {
        id: "in2",
        text: "thrifted fits & vinyl records\nliving off melody and caffeine\n🎵 music is my language",
        preview: "thrifted fits & vinyl",
      },
      {
        id: "in3",
        text: "bedroom pop & existential crises\nfound in my feelings again\n🌙 beautifully chaotic",
        preview: "bedroom pop",
      },
      {
        id: "in4",
        text: "creating things that matter\nart school dropout energy\n🖤 unapologetically weird",
        preview: "creating things",
      },
    ],
  },
  {
    id: "gaming",
    label: "Gamer Girl",
    emoji: "🎮",
    color: "purple",
    templates: [
      {
        id: "gg1",
        text: "gamer girl | streamer ✦\ncoffee first, then gaming\n💜 your p1 in the squad",
        preview: "gamer girl | streamer",
      },
      {
        id: "gg2",
        text: "respawning in real life too\nranked obsessed & loving it\n🎮 GGs only please",
        preview: "respawning in real life",
      },
      {
        id: "gg3",
        text: "healing others in-game & irl\nsupport main, soft heart\n✨ loot & love",
        preview: "support main, soft heart",
      },
      {
        id: "gg4",
        text: "cozy gamer & cat mom\nstardew valley is my therapy\n🌟 living the pixel dream",
        preview: "cozy gamer & cat mom",
      },
    ],
  },
];

const COLOR_MAP: Record<string, { tab: string; card: string; badge: string }> = {
  pink:    { tab: "bg-pink-100 text-pink-600 border-pink-300",          card: "border-pink-200 hover:border-pink-400",          badge: "bg-pink-50 text-pink-600 border border-pink-200" },
  rose:    { tab: "bg-rose-100 text-rose-600 border-rose-300",          card: "border-rose-200 hover:border-rose-400",          badge: "bg-rose-50 text-rose-600 border border-rose-200" },
  amber:   { tab: "bg-amber-100 text-amber-700 border-amber-300",       card: "border-amber-200 hover:border-amber-400",        badge: "bg-amber-50 text-amber-700 border border-amber-200" },
  emerald: { tab: "bg-emerald-100 text-emerald-700 border-emerald-300", card: "border-emerald-200 hover:border-emerald-400",    badge: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  violet:  { tab: "bg-violet-100 text-violet-600 border-violet-300",    card: "border-violet-200 hover:border-violet-400",      badge: "bg-violet-50 text-violet-600 border border-violet-200" },
  sky:     { tab: "bg-sky-100 text-sky-600 border-sky-300",             card: "border-sky-200 hover:border-sky-400",            badge: "bg-sky-50 text-sky-600 border border-sky-200" },
  orange:  { tab: "bg-orange-100 text-orange-600 border-orange-300",    card: "border-orange-200 hover:border-orange-400",      badge: "bg-orange-50 text-orange-600 border border-orange-200" },
  purple:  { tab: "bg-purple-100 text-purple-600 border-purple-300",    card: "border-purple-200 hover:border-purple-400",      badge: "bg-purple-50 text-purple-600 border border-purple-200" },
};

export default function BioTemplates({ lang: _lang }: { lang?: string } = {}) {
  const [activeGroup, setActiveGroup] = useState(AESTHETIC_GROUPS[0].id);
  const [selectedId, setSelectedId]   = useState<string | null>(null);

  const group = AESTHETIC_GROUPS.find((g) => g.id === activeGroup)!;
  const colors = COLOR_MAP[group.color];

  const selectTemplate = useCallback((template: Template) => {
    setSelectedId(template.id);
    window.dispatchEvent(
      new CustomEvent("selectBioTemplate", { detail: { text: template.text } })
    );
    setTimeout(() => setSelectedId(null), 1500);
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <div className="rounded-2xl bg-white border border-ed-border overflow-hidden shadow-sm shadow-petal-100/30">

        {/* Header */}
        <div className="px-5 py-4 border-b border-ed-borderLight bg-ed-bg">
          <h2 className="text-[13px] font-semibold text-ed-charcoal tracking-tight">
            ✦ Aesthetic Bio Templates
          </h2>
          <p className="text-xs text-ed-muted mt-0.5">
            Pick a template · it loads into your text box below · then choose a font style
          </p>
        </div>

        {/* Aesthetic tabs — horizontal scroll on mobile */}
        <div className="flex gap-1.5 px-4 pt-3 pb-1 overflow-x-auto scrollbar-none">
          {AESTHETIC_GROUPS.map((g) => {
            const c = COLOR_MAP[g.color];
            return (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full
                            text-xs font-medium border transition-all duration-150
                  ${activeGroup === g.id
                    ? c.tab
                    : "bg-ed-bg text-ed-muted border-ed-border hover:border-petal-200 hover:text-ed-charcoal"
                  }`}
              >
                <span>{g.emoji}</span>
                <span>{g.label}</span>
              </button>
            );
          })}
        </div>

        {/* Template cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-4 pb-5 pt-3">
          {group.templates.map((t) => {
            const isSelected = selectedId === t.id;
            return (
              <button
                key={t.id}
                onClick={() => selectTemplate(t)}
                className={`relative flex flex-col items-start gap-2 p-3 rounded-xl border
                            text-left transition-all duration-150 active:scale-95
                  ${isSelected
                    ? `${colors.badge} border-current`
                    : `bg-ed-bg ${colors.card}`
                  }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider opacity-70">
                    ✓ Used
                  </span>
                )}
                <span className="text-lg leading-none">{group.emoji}</span>
                <span className="text-xs text-ed-charcoal leading-snug line-clamp-2">
                  {t.preview}
                </span>
                <span className="text-[10px] text-ed-muted mt-auto pt-1">
                  tap to use →
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
