"use client";

interface TikTokPreviewProps {
  rawText: string;
  styledText: string;
  styleName: string;
}

export default function TikTokPreview({ rawText, styledText, styleName }: TikTokPreviewProps) {
  const displayName = styledText || rawText || "Your Name";

  return (
    <div className="w-full">
      <p className="text-[10px] text-ed-muted uppercase tracking-widest mb-2.5 font-medium">
        TikTok Preview
      </p>

      <div className="rounded-xl bg-[#161823] border border-ed-border overflow-hidden text-white">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[11px] text-white/50 font-medium">Profile</span>
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="12" cy="5" r="1" fill="currentColor" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="12" cy="19" r="1" fill="currentColor" />
          </svg>
        </div>

        {/* Profile */}
        <div className="px-4 pt-4 pb-3 text-center">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25F4EE] to-[#FE2C55]
                          flex items-center justify-center text-xl mx-auto mb-2.5">
            ✦
          </div>

          {/* Username */}
          <p className="text-white font-semibold text-[14px] mb-0.5">@username</p>

          {/* Stats */}
          <div className="flex justify-center gap-5 mt-2 mb-3">
            {[
              { value: "12", label: "Following" },
              { value: "847", label: "Followers" },
              { value: "5.2K", label: "Likes" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-white font-bold text-[14px] leading-tight">{value}</p>
                <p className="text-white/40 text-[10px] leading-tight">{label}</p>
              </div>
            ))}
          </div>

          {/* Bio — styled text injected here */}
          <p className="text-white/80 text-[13px] leading-relaxed break-all max-w-[240px] mx-auto mb-3">
            {displayName.slice(0, 80)}
          </p>

          {/* Action buttons */}
          <div className="flex justify-center gap-2">
            <button className="px-6 py-1.5 rounded bg-[#FE2C55] text-white text-[12px] font-semibold">
              Follow
            </button>
            <button className="px-3 py-1.5 rounded bg-white/10 text-white text-[12px] font-semibold">
              ✉
            </button>
          </div>
        </div>

        {/* Style tag */}
        <div className="px-4 pb-3 text-center">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px]
                           bg-white/5 text-white/30 font-medium">
            <span className="w-1 h-1 rounded-full bg-[#25F4EE]" />
            {styleName}
          </span>
        </div>
      </div>
    </div>
  );
}
