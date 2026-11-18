type ScoreRingProps = {
  score: number;
  outOf: string;
  /** stroke-dashoffset from the original SVG; kept for visual parity. */
  offset?: number;
};

export function ScoreRing({ score, outOf, offset = 38 }: ScoreRingProps) {
  return (
    <div className="relative flex h-44 w-44 items-center justify-center">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120" role="img" aria-label={`${score} out of 5.0`}>
        <circle cx="60" cy="60" r="50" fill="transparent" stroke="#c3c5d8" strokeWidth="8" opacity="0.2" />
        <circle
          className="text-inverse-primary"
          cx="60"
          cy="60"
          r="50"
          fill="transparent"
          stroke="currentColor"
          strokeDasharray="314.159"
          strokeDashoffset={offset}
          strokeLinecap="round"
          strokeWidth="8"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display-lg text-display-lg font-bold text-surface">{score.toFixed(1)}</span>
        <span className="font-mono-sm text-mono-sm font-semibold text-outline">{outOf}</span>
      </div>
    </div>
  );
}
