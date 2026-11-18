import { useEffect, useRef, useState } from 'react';
import type { site } from '../../data/site';
import { Icon } from './Icon';

type TerminalPanelProps = {
  content: typeof site.hero.terminal;
};

const toneClass = {
  prompt: 'text-tertiary',
  success: 'text-secondary',
  muted: 'text-on-surface-variant',
};

export function TerminalPanel({ content }: TerminalPanelProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  const copyCommand = async () => {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(content.command);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative">
      <div className="rounded-panel bg-surface-container-lowest/90 p-space-md shadow-2xl backdrop-blur-xl">
        <div className="mb-space-sm flex items-center justify-between rounded-card bg-surface-container-low/50 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex items-center gap-1.5 font-label-mono-sm text-label-mono-sm text-on-surface-variant">
            <Icon name="terminal" className="text-[14px]" />
            <span>{content.title}</span>
          </div>
          <span className="rounded bg-tertiary/10 px-2 py-0.5 text-[10px] font-medium text-tertiary">
            {content.version}
          </span>
        </div>

        <div className="space-y-3 p-space-sm font-code-snippet text-code-snippet">
          <div className="flex items-center justify-between gap-space-sm">
            <div className="flex min-w-0 items-center gap-2 text-primary">
              <span className="text-tertiary">$</span>
              <span className="truncate font-semibold text-on-surface">{content.command}</span>
            </div>
            <button
              type="button"
              onClick={copyCommand}
              className="shrink-0 rounded-control p-1 text-on-surface-variant transition-colors hover:bg-white/5 hover:text-secondary"
              aria-label={content.copyLabel}
            >
              <Icon name={copied ? 'check' : 'content_copy'} className="text-[18px]" />
            </button>
          </div>
          <span className="sr-only" role="status">
            {copied ? content.copiedLabel : ''}
          </span>

          {content.lines.map((line) => (
            <div key={line.text} className="flex items-center gap-2 text-on-surface-variant">
              <span className={toneClass[line.tone]}>{line.prefix}</span>
              <span>{line.text}</span>
            </div>
          ))}

          <div className="flex items-center justify-between rounded-card bg-surface-container-low/80 p-2.5 text-tertiary">
            <div className="flex items-center gap-2">
              <span className="flex gap-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
                <span className="h-2 w-2 rounded-full bg-tertiary" />
              </span>
              <span className="text-body-sm font-medium text-tertiary">{content.edgeLabel}</span>
            </div>
            <span className="rounded bg-tertiary/10 px-1.5 py-0.5 font-label-mono-sm text-label-mono-sm font-bold text-tertiary">
              {content.edgeBadge}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 text-[12px] text-on-surface-variant">
            {content.matrix.map((item) => (
              <div key={item.label} className="rounded-control bg-surface-container/40 p-2">
                <span className="block text-[10px] uppercase text-outline">{item.label}</span>
                <span className="font-mono text-on-surface">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-card bg-surface-container-high/90 px-space-md py-2 shadow-xl backdrop-blur-md">
        <Icon name="verified" className="text-[18px] text-secondary" />
        <span className="font-label-mono-sm text-label-mono-sm font-medium text-on-surface">
          {content.badge}
        </span>
      </div>
    </div>
  );
}
