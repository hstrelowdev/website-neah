import type { ProcessStep } from '../../data/site';
import { Icon } from './Icon';
import { cx, darkNumberTone, darkTextTone } from './tone';

export function ProcessCard({ step }: { step: ProcessStep }) {
  return (
    <article className="glass-panel glass-panel-hover flex flex-col justify-between rounded-panel p-space-xl shadow-xl">
      <div>
        <div className="mb-space-lg flex items-center justify-between">
          <span
            className={cx(
              'flex h-10 w-10 items-center justify-center rounded-card font-headline-sm font-bold shadow-md',
              darkNumberTone[step.tone],
            )}
          >
            {step.number}
          </span>
          <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
            {step.phase}
          </span>
        </div>
        <h3 className="mb-space-xs font-headline-sm text-headline-sm font-semibold text-on-surface">
          {step.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{step.description}</p>
      </div>
      <div className="mt-space-md border-t border-white/10 pt-space-md">
        <span className={cx('flex items-center gap-1 text-body-sm', darkTextTone[step.tone])}>
          <Icon name={step.icon} className="text-[16px]" />
          {step.footnote}
        </span>
      </div>
    </article>
  );
}
