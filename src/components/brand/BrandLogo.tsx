"use client";
import { InfinityMark, type MarkVariant } from "./InfinityMark";

export type LogoLayout = "stacked" | "horizontal" | "mark-only";
export type { MarkVariant };

interface Props {
  variant?:  MarkVariant;
  layout?:   LogoLayout;
  height?:   number;
  className?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
//  WORDMARK COMPONENT
//  Matches the reference exactly:
//    EXYRA — very dark navy (#0a1228), bold geometric, wide letter-spacing
//      • X has a small cyan diamond at the stroke intersection
//      • A has a right-leg gradient from navy → bright blue
//    — TECHNOLOGIES — in electric blue, em-dashes both sides
// ─────────────────────────────────────────────────────────────────────────────

function ExyraWordmark({
  variant,
  uid,
  fontSize = 72,
}: {
  variant: MarkVariant;
  uid: string;
  fontSize?: number;
}) {
  const isC     = variant === "color";
  const onDark  = variant === "color" || variant === "white";
  const darkText = onDark ? "#0a1228" : variant === "mono" ? "#0a1020" : "#ffffff";
  const blueText = onDark ? "#1457d6" : variant === "mono" ? "#1a1a3e" : "#60a8e0";

  const fs    = fontSize;
  const subFs = fs * 0.195;

  // Letter spacing & positions (approx — tuned by eye to match reference)
  const letters = [
    { char: "E", x: 0    },
    { char: "X", x: 70   },
    { char: "Y", x: 152  },
    { char: "R", x: 228  },
    { char: "A", x: 310  },
  ];
  const totalW = 410;

  // Diamond on X: positioned at the center of the X glyph crossing
  // At 72px Syne 800, X is roughly 65px wide; center at x=70+32=102, y=0.42*72=30
  const dx = letters[1].x + fs * 0.46;
  const dy = fs * 0.42;
  const dr = fs * 0.058;   // half-size of diamond

  // A gradient: covers the A glyph from x=310 rightward
  const aGradX1 = letters[4].x;
  const aGradX2 = letters[4].x + fs * 0.7;

  return (
    <svg
      width={totalW}
      height={fs + subFs + 20}
      viewBox={`0 0 ${totalW} ${fs + subFs + 22}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* A-letter gradient: dark navy left → bright blue right */}
        <linearGradient id={`${uid}-a`} x1={aGradX1} y1="0" x2={aGradX2} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor={isC ? "#0a1228" : darkText}/>
          <stop offset="55%"  stopColor={isC ? "#1040b8" : blueText}/>
          <stop offset="100%" stopColor={isC ? "#0090e0" : blueText}/>
        </linearGradient>
      </defs>

      {/* ── E · X · Y · R in very dark navy ── */}
      {letters.slice(0, 4).map(({ char, x }) => (
        <text
          key={char}
          x={x}
          y={fs * 0.92}
          fontFamily="'Syne','Orbitron','Space Grotesk','Inter',Arial,sans-serif"
          fontWeight="800"
          fontSize={fs}
          fill={char === "X" && isC ? darkText : darkText}
        >
          {char}
        </text>
      ))}

      {/* ── A with gradient fill ── */}
      <text
        x={letters[4].x}
        y={fs * 0.92}
        fontFamily="'Syne','Orbitron','Space Grotesk','Inter',Arial,sans-serif"
        fontWeight="800"
        fontSize={fs}
        fill={isC ? `url(#${uid}-a)` : darkText}
      >
        A
      </text>

      {/* ── X diamond accent (small cyan diamond at X intersection) ── */}
      {isC && (
        <polygon
          points={`${dx},${dy - dr}  ${dx + dr},${dy}  ${dx},${dy + dr}  ${dx - dr},${dy}`}
          fill="#00bcd4"
          opacity="0.95"
        />
      )}

      {/* ── — TECHNOLOGIES — ── */}
      <g transform={`translate(0, ${fs + 6})`}>
        {/* Left dash */}
        <line
          x1={totalW / 2 - 118} y1={subFs * 0.45}
          x2={totalW / 2 - 80}  y2={subFs * 0.45}
          stroke={blueText} strokeWidth="1.4" opacity="0.8"
        />
        {/* Text */}
        <text
          x={totalW / 2}
          y={subFs * 0.88}
          textAnchor="middle"
          fontFamily="'Syne','Space Grotesk','Inter',Arial,sans-serif"
          fontWeight="600"
          fontSize={subFs}
          letterSpacing="3.5"
          fill={blueText}
        >
          TECHNOLOGIES
        </text>
        {/* Right dash */}
        <line
          x1={totalW / 2 + 80} y1={subFs * 0.45}
          x2={totalW / 2 + 118} y2={subFs * 0.45}
          stroke={blueText} strokeWidth="1.4" opacity="0.8"
        />
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  BRAND LOGO — combines InfinityMark + ExyraWordmark
// ─────────────────────────────────────────────────────────────────────────────

export function BrandLogo({
  variant   = "color",
  layout    = "stacked",
  height    = 120,
  className = "",
}: Props) {
  // ── mark only ────────────────────────────────────────────────────────────
  if (layout === "mark-only") {
    return (
      <InfinityMark
        variant={variant}
        width={height * 2}
        uid={`bl-m-${variant}`}
        className={className}
      />
    );
  }

  // ── stacked (reference layout: mark on top, wordmark below) ───────────────
  if (layout === "stacked") {
    const markWidth  = height * 0.82;
    const markHeight = markWidth / 2;
    const wmFontSize = height * 0.22;
    const wmWidth    = 410 * (wmFontSize / 72);
    const wmHeight   = (wmFontSize + wmFontSize * 0.195 + 20) * (wmFontSize / 72);
    const svgW = Math.max(markWidth, wmWidth) + 20;
    const svgH = markHeight + 12 + wmHeight;
    const markX = (svgW - markWidth) / 2;
    const wmX   = (svgW - wmWidth) / 2;

    return (
      <svg
        width={svgW}
        height={svgH}
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Exyra Technologies"
      >
        {/* Infinity mark */}
        <g transform={`translate(${markX}, 0)`}>
          <InfinityMarkInline
            variant={variant}
            width={markWidth}
            uid={`bl-s-${variant}`}
          />
        </g>
        {/* Wordmark */}
        <g transform={`translate(${wmX}, ${markHeight + 12})`}>
          <ExyraWordmark
            variant={variant}
            uid={`wm-s-${variant}`}
            fontSize={wmFontSize}
          />
        </g>
      </svg>
    );
  }

  // ── horizontal (mark left, text right) ────────────────────────────────────
  const markWidth  = height * 2;
  const markHeight = height;
  const gap        = height * 0.22;
  const wmFontSize = height * 0.44;
  const wmWidth    = 410 * (wmFontSize / 72);
  const svgW       = markWidth + gap + wmWidth;
  const wmY        = (markHeight - (wmFontSize + wmFontSize * 0.195 + 20) * (wmFontSize / 72)) / 2;

  return (
    <svg
      width={svgW}
      height={markHeight}
      viewBox={`0 0 ${svgW} ${markHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Exyra Technologies"
    >
      {/* Infinity mark */}
      <InfinityMarkInline
        variant={variant}
        width={markWidth}
        uid={`bl-h-${variant}`}
      />
      {/* Wordmark */}
      <g transform={`translate(${markWidth + gap}, ${Math.max(0, wmY)})`}>
        <ExyraWordmark
          variant={variant}
          uid={`wm-h-${variant}`}
          fontSize={wmFontSize}
        />
      </g>
    </svg>
  );
}

// ─── Inline renderer for InfinityMark (embeds all paths directly, no nesting) ─
function InfinityMarkInline({
  variant, width, uid,
}: { variant: MarkVariant; width: number; uid: string }) {
  const s   = width / 400;
  const isC = variant === "color";
  const isMo = variant === "mono";
  const bodyFill = isC ? `url(#${uid}-g1)` : isMo ? "#1a1a2e" : variant === "white" ? "#fff" : "#060e1e";

  return (
    <g transform={`scale(${s})`}>
      <defs>
        <linearGradient id={`${uid}-g1`} x1="0" y1="200" x2="400" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#0a1660"/>
          <stop offset="22%"  stopColor="#0c2090"/>
          <stop offset="45%"  stopColor="#1457d6"/>
          <stop offset="68%"  stopColor="#0d90e8"/>
          <stop offset="85%"  stopColor="#00bce8"/>
          <stop offset="100%" stopColor="#00d8f8"/>
        </linearGradient>
        <radialGradient id={`${uid}-gl`} cx="26%" cy="34%" r="44%">
          <stop offset="0%"   stopColor="#4898f8" stopOpacity={isC ? "0.55" : "0"}/>
          <stop offset="100%" stopColor="#1040b8" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id={`${uid}-gr`} cx="74%" cy="30%" r="42%">
          <stop offset="0%"   stopColor="#00e8ff" stopOpacity={isC ? "0.6" : "0"}/>
          <stop offset="100%" stopColor="#0098e0" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id={`${uid}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#fff" stopOpacity={isC ? "0.28" : "0"}/>
          <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
        <filter id={`${uid}-sh`} x="-8%" y="-12%" width="116%" height="136%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000830" floodOpacity={isC ? "0.55" : "0.2"}/>
        </filter>
      </defs>

      {/* Body */}
      <path fillRule="evenodd" fill={bodyFill} filter={`url(#${uid}-sh)`}
        d="M 200,56 C 226,22 278,2 314,2 C 360,2 398,44 398,100 C 398,156 360,198 314,198
           C 278,198 226,178 200,144 C 174,178 122,198 86,198 C 40,198 2,156 2,100
           C 2,44 40,2 86,2 C 122,2 174,22 200,56 Z
           M 176,82 C 160,52 128,34 88,36 C 48,38 18,68 16,100 C 14,132 44,164 84,168
           C 124,172 164,150 180,118 Z
           M 224,82 C 240,52 272,34 312,36 C 352,38 382,68 384,100 C 386,132 356,164 316,168
           C 276,172 236,150 220,118 Z"
      />
      {isC && <>
        <path fillRule="evenodd" fill={`url(#${uid}-gl)`}
          d="M 200,56 C 226,22 278,2 314,2 C 360,2 398,44 398,100 C 398,156 360,198 314,198
             C 278,198 226,178 200,144 C 174,178 122,198 86,198 C 40,198 2,156 2,100
             C 2,44 40,2 86,2 C 122,2 174,22 200,56 Z
             M 176,82 C 160,52 128,34 88,36 C 48,38 18,68 16,100 C 14,132 44,164 84,168
             C 124,172 164,150 180,118 Z
             M 224,82 C 240,52 272,34 312,36 C 352,38 382,68 384,100 C 386,132 356,164 316,168
             C 276,172 236,150 220,118 Z"/>
        <path fillRule="evenodd" fill={`url(#${uid}-gr)`}
          d="M 200,56 C 226,22 278,2 314,2 C 360,2 398,44 398,100 C 398,156 360,198 314,198
             C 278,198 226,178 200,144 C 174,178 122,198 86,198 C 40,198 2,156 2,100
             C 2,44 40,2 86,2 C 122,2 174,22 200,56 Z
             M 176,82 C 160,52 128,34 88,36 C 48,38 18,68 16,100 C 14,132 44,164 84,168
             C 124,172 164,150 180,118 Z
             M 224,82 C 240,52 272,34 312,36 C 352,38 382,68 384,100 C 386,132 356,164 316,168
             C 276,172 236,150 220,118 Z"/>
        <ellipse cx="86"  cy="58" rx="72" ry="22" fill={`url(#${uid}-gloss)`} opacity="0.7"/>
        <ellipse cx="314" cy="54" rx="66" ry="20" fill={`url(#${uid}-gloss)`} opacity="0.65"/>
        <path d="M 200,56 C 174,22 122,2 86,2 C 40,2 2,44 2,100"
          stroke="#5ab8f8" strokeWidth="1.8" fill="none" opacity="0.4" strokeLinecap="round"/>
        <path d="M 200,56 C 226,22 278,2 314,2 C 360,2 398,44 398,100"
          stroke="#00e8ff" strokeWidth="1.8" fill="none" opacity="0.45" strokeLinecap="round"/>
      </>}
      {/* Crossing depth */}
      <path fill={isC ? "#040c4a" : "#000"} opacity={isC ? "0.82" : "0.4"}
        d="M 200,60 C 214,76 224,88 228,100 C 224,112 214,124 200,140
           C 186,124 176,112 172,100 C 176,88 186,76 200,60 Z"/>
      {isC && <>
        <path fill="#1a5cd8" opacity="0.55"
          d="M 200,78 C 192,88 178,96 172,100 C 178,104 192,112 200,122
             C 208,112 222,104 228,100 C 222,96 208,88 200,78 Z"/>
        <path fill="#38b8f8" opacity="0.22"
          d="M 200,82 C 194,90 182,97 176,100 C 182,103 194,110 200,118
             C 206,110 218,103 224,100 C 218,97 206,90 200,82 Z"/>
        {/* Spike shadows */}
        <path d="M 200,56 C 195,66 190,74 188,82 C 194,76 198,68 200,56 Z" fill="#04083c" opacity="0.68"/>
        <path d="M 200,56 C 205,66 210,74 212,82 C 206,76 202,68 200,56 Z" fill="#04083c" opacity="0.68"/>
        <path d="M 200,144 C 195,134 190,126 188,118 C 194,124 198,132 200,144 Z" fill="#04083c" opacity="0.58"/>
        <path d="M 200,144 C 205,134 210,126 212,118 C 206,124 202,132 200,144 Z" fill="#04083c" opacity="0.58"/>
      </>}
    </g>
  );
}
