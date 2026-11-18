import type { site } from '../../data/site';
import { Section } from '../layout/Section';
import { Icon } from '../ui/Icon';
import { SectionTag } from '../ui/SectionTag';
import { cx, textTone } from '../ui/tone';

type PillarsProps = {
  content: typeof site.pillars;
};

export function Pillars({ content }: PillarsProps) {
  return (
    <Section id={content.id}>
      <SectionTag {...content.tag} className="mb-space-lg" />

      <div className="mb-space-xl flex flex-col gap-space-xs">
        <h2 className="font-headline-xl text-headline-xl font-bold tracking-tight text-on-surface">
          {content.titleLead}
          <span className="bg-linear-to-r from-primary-container via-secondary-container to-tertiary bg-clip-text text-transparent">
            {content.titleAccent}
          </span>
          {content.titleTail}
        </h2>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">{content.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-gutter-lg lg:grid-cols-3">
        {content.items.map((pillar) => (
          <div
            key={pillar.phase}
            className="flex flex-col justify-between rounded-xl bg-surface-container p-space-lg shadow-xl transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div>
              <div className="mb-space-md flex items-center justify-between">
                <span className={cx('rounded bg-surface-container-high px-space-sm py-space-xs font-mono-sm text-mono-sm font-semibold', textTone[pillar.tone])}>
                  {pillar.phase}
                </span>
                <Icon name={pillar.icon} className={cx('text-[28px]', textTone[pillar.tone])} />
              </div>

              <h3 className="mb-space-xs font-headline-md text-headline-md font-bold text-on-surface">
                {pillar.title}
              </h3>
              <p className="mb-space-md font-body-md text-body-md text-on-surface-variant">{pillar.description}</p>

              <ul className="mb-space-lg space-y-space-xs font-body-sm text-body-sm text-on-surface">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-space-xs">
                    <Icon name="check" className="text-[16px] text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between border-t border-surface-container-high pt-space-sm font-mono-sm text-mono-sm text-secondary">
              <span>{pillar.footer}</span>
              <Icon name="arrow_outward" className="text-[16px]" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
