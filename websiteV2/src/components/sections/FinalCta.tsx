import { site } from '../../data/site';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { StatusBadge } from '../ui/StatusBadge';

export function FinalCta({ onContact }: { onContact: () => void }) {
  const content = site.finalCta;

  return (
    <section
      id={content.id}
      className="relative w-full overflow-hidden bg-surface-dim px-margin py-28 md:px-margin-desktop"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[350px] w-[600px] rounded-full bg-linear-to-r from-primary-container/20 to-secondary-container/20 blur-[130px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <StatusBadge tone="tertiary" pulse className="mb-space-md">
          {content.eyebrow}
        </StatusBadge>
        <h2 className="max-w-3xl font-display-hero-mobile text-display-hero-mobile font-bold tracking-tight text-on-surface md:font-display-hero md:text-display-hero">
          {content.titleLead}
          <span className="gradient-text">{content.titleAccent}</span>
          {content.titleTail}
        </h2>
        <p className="mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
          {content.description}
        </p>
        <Button size="lg" onClick={onContact}>
          <span>{content.cta}</span>
          <Icon name="arrow_forward" className="text-[20px]" />
        </Button>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-space-lg font-label-mono-sm text-label-mono-sm text-on-surface-variant">
          {content.assurances.map((item) => (
            <span key={item.label} className="flex items-center gap-1.5">
              <Icon name={item.icon} className="text-[16px] text-tertiary" />
              {item.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
