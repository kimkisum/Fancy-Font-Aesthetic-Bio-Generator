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
      <p className="text-[10px] text-ed-muted uppercase tracking-widest mb-2.5 font-medium">
        Live Preview
      </p>

      <div className="rounded-xl bg-white border border-ed-border overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-ed-borderLight">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
            <div className="w-2 h-2 rounded-full bg-green-400/50" />
          </div>
          <span className="text-[10px] text-ed-muted/50 font-mono">instagram.com</span>
          <div className="w-10" />
        </div>

        {/* Profile */}
        <div className="p-4">
          <div className="flex items-start gap-4 mb-3">
            <div className="w-14 h-14 rounded-full bg-ed-sand flex items-center justify-center
                           text-lg text-ed-muted shrink-0">
              ✦
            </div>
            <div className="flex gap-3 pt-1.5">
              {[
                { label: "Posts",     value: "24"  },
                { label: "Followers", value: "1.2K"},
                { label: "Following", value: "380" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="text-ed-charcoal font-semibold text-[13px] leading-tight">{value}</p>
                  <p className="text-ed-muted text-[10px] leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-0.5">
            <p className="text-ed-charcoal font-semibold text-[13px] leading-snug break-all">
              {displayName.slice(0, 60)}
            </p>
            {bioLines.map((line, i) => (
              <p key={i} className="text-ed-muted text-[12px] leading-relaxed break-all">
                {line || " "}
              </p>
            ))}
          </div>

          <p className="text-ed-sage text-[12px] mt-1.5 font-medium">
            gofancyfont.com
          </p>
        </div>

        {/* Style tag */}
        <div className="px-4 pb-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px]
                           bg-ed-bg text-ed-muted border border-ed-borderLight font-medium">
            <span className="w-1 h-1 rounded-full bg-ed-sage" />
            {styleName}
          </span>
        </div>
      </div>
    </div>
  );
}
