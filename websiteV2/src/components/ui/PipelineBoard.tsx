import { useEffect, useRef, useState } from 'react';
import type { site } from '../../data/site';
import { Icon } from './Icon';
import { cx } from './tone';

type PipelineBoardProps = {
  content: typeof site.telemetry.board;
};

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function PipelineBoard({ content }: PipelineBoardProps) {
  const [completed, setCompleted] = useState<boolean[]>(() => content.steps.map(() => true));
  const [status, setStatus] = useState<string>(content.finalStatus);
  const [running, setRunning] = useState(false);
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  const replay = () => {
    clearTimers();
    setCompleted(content.steps.map(() => false));
    setStatus(content.runningStatus);
    setRunning(true);

    if (prefersReducedMotion()) {
      setCompleted(content.steps.map(() => true));
      setStatus(content.finalStatus);
      setRunning(false);
      return;
    }

    content.stepStatuses.forEach((message, index) => {
      timers.current.push(
        setTimeout(() => {
          setCompleted((current) => current.map((value, i) => (i <= index ? true : value)));
          setStatus(message);
        }, (index + 1) * 450),
      );
    });

    timers.current.push(
      setTimeout(() => {
        setCompleted(content.steps.map(() => true));
        setStatus(content.finalStatus);
        setRunning(false);
      }, 1400),
    );
  };

  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-panel bg-white shadow-[0_16px_45px_rgba(0,18,49,0.08)]">
      <div className="flex items-center justify-between bg-[#e2ecf5] p-space-lg">
        <div className="flex items-center gap-space-sm">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-tertiary-container" />
          </span>
          <span className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider text-on-tertiary">
            {content.title}
          </span>
        </div>
        <span className="font-label-mono-sm text-label-mono-sm text-ink-muted">{content.engine}</span>
      </div>

      <div className="space-y-space-lg p-space-xl">
        <div className="flex flex-col justify-between gap-space-sm rounded-card bg-light-surface p-space-md font-code-snippet text-body-sm md:flex-row md:items-center">
          <div className="flex items-center gap-space-sm text-ink-blue">
            <Icon name="commit" className="text-[18px] text-primary-container" />
            <span className="font-bold">{content.commit}</span>
          </div>
          <span className="font-label-mono-sm text-label-mono-sm text-ink-soft">{content.request}</span>
        </div>

        <div className="space-y-space-md" data-testid="pipeline-steps">
          {content.steps.map((step, index) => (
            <div
              key={step.label}
              className={cx(
                'flex items-center justify-between gap-space-sm rounded-card bg-[#f8fafc] p-space-md transition-all duration-300',
                !completed[index] && 'scale-[0.98] opacity-35',
              )}
              data-testid={`pipeline-step-${index}`}
            >
              <div className="flex items-center gap-space-md">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed">
                  <Icon name="check" className="text-[18px]" />
                </div>
                <span className="font-body-md text-body-md font-medium text-ink">{step.label}</span>
              </div>
              <span className="hidden shrink-0 rounded-chip bg-tertiary-fixed/20 px-2.5 py-1 font-label-mono-sm text-label-mono-sm font-semibold text-tertiary-container sm:inline-block">
                {step.result}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-space-sm border-t border-slate-border pt-space-sm sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 text-body-sm text-ink-muted" aria-live="polite">
            <span className="h-2 w-2 rounded-full bg-tertiary-container" />
            <span>{status}</span>
          </div>
          <button
            type="button"
            onClick={replay}
            disabled={running}
            className="inline-flex items-center justify-center gap-2 rounded-card bg-primary-fixed px-space-lg py-2.5 font-body-sm text-body-sm font-semibold text-ink-blue transition-all hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Icon
              name="refresh"
              className={cx('text-[18px] transition-transform duration-500', running && 'rotate-180')}
            />
            {content.replayLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
