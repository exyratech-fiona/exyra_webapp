export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center"
      style={{ background: "#060e1e" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/exyra-logo.png"
          alt="Exyra Technologies"
          style={{ height: "72px", width: "auto", opacity: 0.9, animation: "pulse 2s ease-in-out infinite" }}
        />
        <div style={{ display: "flex", gap: "6px" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#00bcd4",
              animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.7} 50%{opacity:1} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      `}</style>
    </div>
  );
}
