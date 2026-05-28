"use client";

// ─────────────────────────────────────────────────────────────────────────────
//  Exyra Technologies — Official Infinity Mark
//  Faithful SVG recreation of the master logo:
//    • Wide 3D-ribbon infinity shape
//    • Dark navy → electric blue → bright cyan gradient (bottom-left → top-right)
//    • Layered radial glows for depth on each lobe
//    • Glossy highlight stripes on upper outer edges
//    • Pointed crossing spikes at center with depth shading
//    • Drop shadow for lift
// ─────────────────────────────────────────────────────────────────────────────

export type MarkVariant = "color" | "white" | "dark" | "mono";

interface Props {
  variant?:   MarkVariant;
  width?:     number;
  uid?:       string;
  className?: string;
}

export function InfinityMark({
  variant   = "color",
  width     = 260,
  uid       = "im",
  className = "",
}: Props) {
  const h    = width * (200 / 400);
  const isC  = variant === "color";
  const isW  = variant === "white";
  const isMo = variant === "mono";

  const bodyColor = isC ? `url(#${uid}-g1)` : isW ? "#ffffff" : isMo ? "#1a1a2e" : "#060e1e";

  return (
    <svg
      width={width}
      height={h}
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Exyra Technologies"
    >
      <defs>
        {/* ── Main body gradient: dark navy→electric blue→bright cyan (diagonal) ── */}
        <linearGradient id={`${uid}-g1`} x1="0" y1="200" x2="400" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#0a1660"/>
          <stop offset="22%"  stopColor="#0c2090"/>
          <stop offset="45%"  stopColor="#1457d6"/>
          <stop offset="68%"  stopColor="#0d90e8"/>
          <stop offset="85%"  stopColor="#00bce8"/>
          <stop offset="100%" stopColor="#00d8f8"/>
        </linearGradient>

        {/* ── Left-lobe radial glow (bright core on upper-left) ── */}
        <radialGradient id={`${uid}-gl`} cx="26%" cy="34%" r="44%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="#4898f8" stopOpacity={isC ? "0.55" : "0"}/>
          <stop offset="100%" stopColor="#1040b8" stopOpacity="0"/>
        </radialGradient>

        {/* ── Right-lobe radial glow (brilliant cyan upper-right) ── */}
        <radialGradient id={`${uid}-gr`} cx="74%" cy="30%" r="42%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="#00e8ff" stopOpacity={isC ? "0.6" : "0"}/>
          <stop offset="100%" stopColor="#0098e0" stopOpacity="0"/>
        </radialGradient>

        {/* ── Gloss stripe (white highlight on top surface) ── */}
        <linearGradient id={`${uid}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity={isC ? "0.3" : "0"}/>
          <stop offset="60%"  stopColor="#ffffff" stopOpacity={isC ? "0.05" : "0"}/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>

        {/* ── Crossing back-arm shadow ── */}
        <radialGradient id={`${uid}-cross`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#04083c" stopOpacity={isC ? "0.85" : "0.5"}/>
          <stop offset="100%" stopColor="#04083c" stopOpacity="0"/>
        </radialGradient>

        {/* ── Drop shadow filter ── */}
        <filter id={`${uid}-sh`} x="-8%" y="-12%" width="116%" height="136%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000830" floodOpacity={isC ? "0.55" : "0.25"}/>
        </filter>
      </defs>

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN BODY — fill-rule="evenodd" creates the hollow-loop ribbon
          Outer boundary: single connected path enclosing entire infinity
          Left hole + Right hole: subtract the interior of each lobe
      ══════════════════════════════════════════════════════════════════════ */}
      <path
        fillRule="evenodd"
        fill={bodyColor}
        filter={`url(#${uid}-sh)`}
        d="
          M 200,56
          C 226,22  278,2   314,2
          C 360,2   398,44  398,100
          C 398,156 360,198 314,198
          C 278,198 226,178 200,144
          C 174,178 122,198 86,198
          C 40,198  2,156   2,100
          C 2,44    40,2    86,2
          C 122,2   174,22  200,56
          Z
          M 176,82
          C 160,52  128,34  88,36
          C 48,38   18,68   16,100
          C 14,132  44,164  84,168
          C 124,172 164,150 180,118
          Z
          M 224,82
          C 240,52  272,34  312,36
          C 352,38  382,68  384,100
          C 386,132 356,164 316,168
          C 276,172 236,150 220,118
          Z
        "
      />

      {/* ══════════════════════════════════════════════════════════════════════
          RADIAL GLOWS — layered over body for 3D depth
      ══════════════════════════════════════════════════════════════════════ */}
      {isC && (
        <>
          <path
            fillRule="evenodd"
            fill={`url(#${uid}-gl)`}
            d="
              M 200,56 C 226,22 278,2 314,2 C 360,2 398,44 398,100
              C 398,156 360,198 314,198 C 278,198 226,178 200,144
              C 174,178 122,198 86,198 C 40,198 2,156 2,100
              C 2,44 40,2 86,2 C 122,2 174,22 200,56 Z
              M 176,82 C 160,52 128,34 88,36 C 48,38 18,68 16,100
              C 14,132 44,164 84,168 C 124,172 164,150 180,118 Z
              M 224,82 C 240,52 272,34 312,36 C 352,38 382,68 384,100
              C 386,132 356,164 316,168 C 276,172 236,150 220,118 Z
            "
          />
          <path
            fillRule="evenodd"
            fill={`url(#${uid}-gr)`}
            d="
              M 200,56 C 226,22 278,2 314,2 C 360,2 398,44 398,100
              C 398,156 360,198 314,198 C 278,198 226,178 200,144
              C 174,178 122,198 86,198 C 40,198 2,156 2,100
              C 2,44 40,2 86,2 C 122,2 174,22 200,56 Z
              M 176,82 C 160,52 128,34 88,36 C 48,38 18,68 16,100
              C 14,132 44,164 84,168 C 124,172 164,150 180,118 Z
              M 224,82 C 240,52 272,34 312,36 C 352,38 382,68 384,100
              C 386,132 356,164 316,168 C 276,172 236,150 220,118 Z
            "
          />
        </>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          GLOSS ELLIPSES — top highlight on each lobe (3D lit-from-above)
      ══════════════════════════════════════════════════════════════════════ */}
      {isC && (
        <>
          <ellipse cx="86"  cy="58" rx="72" ry="22" fill={`url(#${uid}-gloss)`} opacity="0.7"/>
          <ellipse cx="314" cy="54" rx="66" ry="20" fill={`url(#${uid}-gloss)`} opacity="0.65"/>
        </>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          RIM HIGHLIGHTS — thin bright strokes along top outer edges
      ══════════════════════════════════════════════════════════════════════ */}
      {isC && (
        <>
          {/* Left lobe top rim */}
          <path
            d="M 200,56 C 174,22 122,2 86,2 C 40,2 2,44 2,100"
            stroke="#5ab8f8" strokeWidth="1.8" fill="none" opacity="0.45"
            strokeLinecap="round"
          />
          {/* Right lobe top rim (brighter cyan) */}
          <path
            d="M 200,56 C 226,22 278,2 314,2 C 360,2 398,44 398,100"
            stroke="#00e8ff" strokeWidth="1.8" fill="none" opacity="0.5"
            strokeLinecap="round"
          />
        </>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          CROSSING DEPTH — back-arm shadow + front-arm highlight
          Creates the illusion of the ribbon passing through itself
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Back arm (goes upper-left → lower-right, appears BEHIND) */}
      <path
        fill={isC ? "#040c4a" : isMo ? "#08080f" : "#000"}
        opacity={isC ? "0.82" : "0.5"}
        d="
          M 200,60
          C 214,76 224,88 228,100
          C 224,112 214,124 200,140
          C 186,124 176,112 172,100
          C 176,88 186,76 200,60
          Z
        "
      />

      {/* Front arm top layer (brighter, sits in front) */}
      {isC && (
        <path
          fill="#1a5cd8"
          opacity="0.6"
          d="
            M 200,78
            C 192,88 178,96 172,100
            C 178,104 192,112 200,122
            C 208,112 222,104 228,100
            C 222,96 208,88 200,78
            Z
          "
        />
      )}

      {/* Subtle front-arm cyan highlight */}
      {isC && (
        <path
          fill="#38b8f8"
          opacity="0.25"
          d="
            M 200,82
            C 194,90 182,97 176,100
            C 182,103 194,110 200,118
            C 206,110 218,103 224,100
            C 218,97 206,90 200,82
            Z
          "
        />
      )}

      {/* Thin pointed spike shadows at crossing tips */}
      {isC && (
        <>
          {/* Upper spike (where the two ribbon edges converge at top of crossing) */}
          <path
            d="M 200,56 C 195,66 190,74 188,82 C 194,76 198,68 200,56 Z"
            fill="#04083c" opacity="0.7"
          />
          <path
            d="M 200,56 C 205,66 210,74 212,82 C 206,76 202,68 200,56 Z"
            fill="#04083c" opacity="0.7"
          />
          {/* Lower spike */}
          <path
            d="M 200,144 C 195,134 190,126 188,118 C 194,124 198,132 200,144 Z"
            fill="#04083c" opacity="0.6"
          />
          <path
            d="M 200,144 C 205,134 210,126 212,118 C 206,124 202,132 200,144 Z"
            fill="#04083c" opacity="0.6"
          />
        </>
      )}
    </svg>
  );
}
