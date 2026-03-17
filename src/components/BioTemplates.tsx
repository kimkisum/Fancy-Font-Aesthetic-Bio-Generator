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
  pink:    { tab: "bg-pink-500/20 text-pink-400 border-pink-500/40",    card: "border-pink-500/30 hover:border-pink-400/60",    badge: "bg-pink-500/15 text-pink-400" },
  rose:    { tab: "bg-rose-500/20 text-rose-400 border-rose-500/40",    card: "border-rose-500/30 hover:border-rose-400/60",    badge: "bg-rose-500/15 text-rose-400" },
  amber:   { tab: "bg-amber-500/20 text-amber-400 border-amber-500/40", card: "border-amber-500/30 hover:border-amber-400/60",  badge: "bg-amber-500/15 text-amber-400" },
  emerald: { tab: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40", card: "border-emerald-500/30 hover:border-emerald-400/60", badge: "bg-emerald-500/15 text-emerald-400" },
  violet:  { tab: "bg-violet-500/20 text-violet-400 border-violet-500/40", card: "border-violet-500/30 hover:border-violet-400/60",  badge: "bg-violet-500/15 text-violet-400" },
  sky:     { tab: "bg-sky-500/20 text-sky-400 border-sky-500/40",       card: "border-sky-500/30 hover:border-sky-400/60",       badge: "bg-sky-500/15 text-sky-400" },
  orange:  { tab: "bg-orange-500/20 text-orange-400 border-orange-500/40", card: "border-orange-500/30 hover:border-orange-400/60",  badge: "bg-orange-500/15 text-orange-400" },
  purple:  { tab: "bg-purple-500/20 text-purple-400 border-purple-500/40", card: "border-purple-500/30 hover:border-purple-400/60",  badge: "bg-purple-500/15 text-purple-400" },
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
    <section className="w-full max-w-5xl mx-auto px-4 pb-2">
      <div className="rounded-2xl bg-surface-700 border border-surface-600 overflow-hidden">

        {/* Header */}
        <div className="px-5 py-4 border-b border-surface-600">
          <h2 className="text-sm font-bold text-white tracking-tight">
            ✦ Aesthetic Bio Templates
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
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
                    : "bg-surface-600 text-slate-400 border-transparent hover:bg-surface-500 hover:text-white"
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
                    : `bg-surface-800 ${colors.card} hover:bg-surface-700`
                  }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider opacity-80">
                    ✓ Used
                  </span>
                )}
                <span className="text-lg leading-none">{group.emoji}</span>
                <span className="text-xs text-slate-300 leading-snug line-clamp-2">
                  {t.preview}
                </span>
                <span className="text-[10px] text-slate-600 mt-auto pt-1">
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
