import type { ReactNode } from 'react';
import type { Tone } from '../../data/site';
import { cx, dotTone } from './tone';

type StatusBadgeProps = {
  children: ReactNode;
  tone?: Tone;
  onLight?: boolean;
  pulse?: boolean;
  className?: string;
};

/** Uppercase JetBrains Mono pill with a status dot, used across all sections. */
export function StatusBadge({
  children,
  tone = 'tertiary',
  onLight = false,
  pulse = false,
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-space-sm rounded-chip px-space-md py-1 font-label-mono-sm text-label-mono-sm uppercase tracking-wider',
        onLight ? 'bg-ink-blue/5 text-ink-blue' : 'bg-surface-container/80 text-on-surface',
        className,
      )}
    >
      <span
        className={cx(
          'h-2 w-2 shrink-0 rounded-full',
          dotTone[tone],
          pulse && 'animate-pulse',
        )}
      />
      {children}
    </span>
  );
}
