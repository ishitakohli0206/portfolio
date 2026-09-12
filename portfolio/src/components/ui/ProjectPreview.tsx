const accentMap = {
  blue: {
    glow: "#4e7cff",
    bar: "#4e7cff55",
    barSoft: "#4e7cff22",
  },
  violet: {
    glow: "#8b6bff",
    bar: "#8b6bff55",
    barSoft: "#8b6bff22",
  },
};

function Chrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <div className="ml-3 h-4 flex-1 max-w-[160px] rounded-full bg-white/5" />
    </div>
  );
}

// Abstract dashboard layout — represents School ERP's role-based panels
function DashboardPreview({ accent }: { accent: "blue" | "violet" }) {
  const c = accentMap[accent];
  return (
    <div className="flex h-full gap-3 p-4">
      <div className="flex w-1/4 flex-col gap-2">
        <div className="h-3 w-3/4 rounded-full" style={{ background: c.barSoft }} />
        <div className="mt-2 h-2 w-full rounded-full bg-white/5" />
        <div className="h-2 w-full rounded-full bg-white/5" />
        <div className="h-2 w-2/3 rounded-full bg-white/5" />
      </div>
      <div className="flex flex-1 flex-col gap-2.5">
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              className="h-14 rounded-lg border border-white/5"
              style={{ background: n === 0 ? c.barSoft : "transparent" }}
            />
          ))}
        </div>
        <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02]" />
      </div>
    </div>
  );
}

// Abstract conversational/analytics layout — represents BimaFy's chatbot + recommendation engine
function AdvisorPreview({ accent }: { accent: "blue" | "violet" }) {
  const c = accentMap[accent];
  return (
    <div className="flex h-full flex-col justify-end gap-2.5 p-4">
      <div className="h-16 w-3/4 self-end rounded-2xl rounded-br-sm" style={{ background: c.barSoft }} />
      <div className="h-10 w-2/3 rounded-2xl rounded-bl-sm border border-white/5" />
      <div className="h-10 w-1/2 self-end rounded-2xl rounded-br-sm border border-white/5" />
      <div className="mt-1 flex items-end gap-1.5">
        {[40, 65, 30, 80, 50, 70, 35].map((h, i) => (
          <div
            key={i}
            className="w-full rounded-t-sm"
            style={{
              height: `${h * 0.4}px`,
              background: i % 2 === 0 ? c.barSoft : "rgba(255,255,255,0.05)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectPreview({
  variant,
  accent,
}: {
  variant: "dashboard" | "advisor";
  accent: "blue" | "violet";
}) {
  const c = accentMap[accent];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/5 bg-[#0d0d10]">
      <div
        className="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full opacity-40"
        style={{ background: `radial-gradient(closest-side, ${c.glow}33, transparent 70%)`, filter: "blur(10px)" }}
      />
      <Chrome />
      <div className="h-[calc(100%-2.5rem)]">
        {variant === "dashboard" ? (
          <DashboardPreview accent={accent} />
        ) : (
          <AdvisorPreview accent={accent} />
        )}
      </div>
    </div>
  );
}
