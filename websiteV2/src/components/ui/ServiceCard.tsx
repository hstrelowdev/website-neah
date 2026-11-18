import type { Service } from '../../data/site';
import { Icon } from './Icon';
import { cx, lightIconTone } from './tone';

type ServiceCardProps = Service & {
  linkLabel: string;
  onSelect: () => void;
};

export function ServiceCard({
  icon,
  title,
  description,
  tone,
  linkLabel,
  onSelect,
}: ServiceCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-panel bg-white p-space-lg shadow-[0_10px_30px_rgba(0,18,49,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(47,107,255,0.12)]">
      <div>
        <div
          className={cx(
            'mb-space-md flex h-12 w-12 items-center justify-center rounded-card transition-transform group-hover:scale-105',
            lightIconTone[tone],
          )}
        >
          <Icon name={icon} className="text-[26px]" />
        </div>
        <h3 className="mb-space-xs font-headline-sm text-headline-sm font-semibold text-ink">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-ink-soft">{description}</p>
      </div>
      <div className="mt-space-md border-t border-slate-border pt-space-md">
        <button
          type="button"
          onClick={onSelect}
          className="inline-flex items-center gap-1 font-body-sm text-body-sm font-semibold text-on-primary-fixed-variant transition-colors hover:text-ink-blue"
        >
          {linkLabel}
          <Icon name="arrow_forward" className="text-[16px] transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
}
