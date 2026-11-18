import type { site } from '../../data/site';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { SectionTag } from '../ui/SectionTag';
import { cx, textTone } from '../ui/tone';

type EngagementProps = {
  content: typeof site.engagement;
};

export function Engagement({ content }: EngagementProps) {
  return (
    <Section>
      <SectionTag {...content.tag} className="mb-space-lg" />

      <div className="mx-auto mb-space-xl max-w-2xl text-center">
        <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
          {content.titleLead}
          <span className="bg-linear-to-r from-primary-container via-secondary-container to-tertiary bg-clip-text text-transparent">
            {content.titleAccent}
          </span>
          {content.titleTail}
        </h2>
        <p className="mt-space-xs font-body-lg text-body-lg text-on-surface-variant">{content.description}</p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-gutter-lg lg:grid-cols-3">
        {content.models.map((model) => (
          <div
            key={model.model}
            className={cx(
              'relative flex flex-col justify-between rounded-xl bg-surface-container p-space-lg shadow-xl',
              model.order,
              model.featured && 'border-2 border-primary-container/40',
            )}
          >
            {model.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-primary-container to-secondary-container px-space-sm py-0.5 font-mono-sm text-mono-sm font-bold text-on-primary-container shadow-[0_0_12px_rgba(47,107,255,0.6)]">
                {content.featuredBadge}
              </div>
            )}

            <div>
              <div className={cx('mb-space-xs font-mono-sm text-mono-sm font-bold uppercase tracking-wider', textTone[model.tone])}>
                {model.model}
              </div>
              <h3 className="mb-space-xs font-headline-md text-headline-md font-bold text-on-surface">{model.title}</h3>
              <p className="mb-space-md font-body-md text-body-md text-on-surface-variant">{model.description}</p>

              <ul className="mb-space-lg space-y-space-xs font-body-sm text-body-sm text-on-surface">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-space-xs">
                    <Icon
                      name={model.featured ? 'verified' : 'check'}
                      className={cx('text-[16px]', model.tone === 'tertiary' ? 'text-tertiary' : 'text-secondary')}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              href="#contact"
              variant={model.featured ? 'primary' : 'secondary'}
              size="full"
              shimmer={model.featured}
              className={model.featured ? undefined : 'bg-surface-container-high hover:bg-surface-container-highest'}
            >
              {model.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
