"use client";

interface BioPreviewProps {
  rawText: string;
  styledText: string;
  styleName: string;
}

export default function BioPreview({ rawText, styledText, styleName }: BioPreviewProps) {
  const displayName = styledText || rawText || "Your Name";
  const bioLines    = (styledText || rawText || "Your bio goes here...")
    .split("\n")
    .slice(0, 3);

  return (
    <div className="w-full">
      <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-medium">
        ✦ Live Bio Preview
      </p>

      {/* Instagram-style card */}
      <div className="rounded-2xl bg-surface-900 border border-surface-600 overflow-hidden
                      shadow-2xl shadow-black/40">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-surface-700">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-[10px] text-slate-600 font-mono">instagram.com / profile</span>
          <div className="w-12" />
        </div>

        {/* Profile area */}
        <div className="p-5">
          {/* Avatar row */}
          <div className="flex items-start gap-5 mb-4">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-400 via-purple-500 to-pink-500
                              flex items-center justify-center text-2xl shadow-lg">
                ✨
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full
                              bg-emerald-500 border-2 border-surface-900" />
            </div>

            {/* Stats */}
            <div className="flex gap-4 pt-1">
              {[
                { label: "Posts",     value: "24"  },
                { label: "Followers", value: "1.2K"},
                { label: "Following", value: "380" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="text-white font-bold text-sm leading-tight">{value}</p>
                  <p className="text-slate-500 text-[10px] leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Name & Bio */}
          <div className="space-y-1">
            <p className="text-white font-bold text-sm leading-snug break-all">
              {displayName.slice(0, 60)}
            </p>
            {bioLines.map((line, i) => (
              <p key={i} className="text-slate-300 text-xs leading-relaxed break-all">
                {line || " "}
              </p>
            ))}
          </div>

          {/* Link placeholder */}
          <p className="text-brand-400 text-xs mt-2 font-medium">
            🔗 gofancyfont.com
          </p>

          {/* Action buttons */}
          <div className="flex gap-2 mt-4">
            <button className="flex-1 py-1.5 rounded-lg bg-brand-500/20 border border-brand-500/30
                               text-brand-400 text-xs font-semibold hover:bg-brand-500/30 transition-colors">
              Edit Profile
            </button>
            <button className="flex-1 py-1.5 rounded-lg bg-surface-700 border border-surface-500
                               text-slate-300 text-xs font-semibold hover:bg-surface-600 transition-colors">
              Share Profile
            </button>
            <button className="w-9 h-7 flex items-center justify-center rounded-lg
                               bg-surface-700 border border-surface-500 text-slate-400
                               hover:bg-surface-600 transition-colors text-sm">
              ⋯
            </button>
          </div>
        </div>

        {/* Style tag */}
        <div className="px-5 pb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                           bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Live preview · {styleName}
          </span>
        </div>
      </div>
    </div>
  );
}
