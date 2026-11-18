import type { site } from '../../data/site';
import { Section } from '../layout/Section';
import { SectionTag } from '../ui/SectionTag';
import { cx, filledTone, textTone } from '../ui/tone';

type PipelineProps = {
  content: typeof site.pipeline;
};

export function Pipeline({ content }: PipelineProps) {
  return (
    <Section>
      <SectionTag {...content.tag} className="mb-space-lg" />

      <div className="mb-space-lg">
        <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
          {content.titleLead}
          <span className="bg-linear-to-r from-primary-container via-secondary-container to-tertiary bg-clip-text text-transparent">
            {content.titleAccent}
          </span>
          {content.titleTail}
        </h2>
      </div>

      <div className="relative grid grid-cols-1 gap-space-sm md:grid-cols-5">
        <div className="absolute top-7 right-6 left-6 z-0 hidden h-[2px] bg-linear-to-r from-primary-container via-secondary-container to-tertiary opacity-40 md:block" />

        {content.steps.map((step) => (
          <div key={step.number} className="relative z-10 flex flex-col gap-space-xs rounded-xl bg-surface-container p-space-md shadow-md">
            <div className="mb-space-xs flex items-center justify-between">
              <span
                className={cx(
                  'flex h-7 w-7 items-center justify-center rounded-full font-mono-sm text-mono-sm font-bold',
                  filledTone[step.numberTone],
                )}
              >
                {step.number}
              </span>
              <span className={cx('rounded bg-surface-container-lowest px-space-xs py-0.5 font-mono-sm text-mono-sm', textTone[step.tone])}>
                {step.badge}
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">{step.title}</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
