import { site } from '../../data/site';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { StatusBadge } from '../ui/StatusBadge';
import { TerminalPanel } from '../ui/TerminalPanel';

export function Hero({ onContact }: { onContact: () => void }) {
  const content = site.hero;

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-surface-dim px-margin pt-12 pb-24 md:px-margin-desktop"
    >
      <div className="dotted-grid pointer-events-none absolute inset-0 opacity-[0.14]" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary-container/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-10 h-[500px] w-[500px] rounded-full bg-secondary-container/15 blur-[140px]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-gutter-desktop lg:grid-cols-12">
          <div className="flex flex-col items-start gap-space-lg lg:col-span-7">
            <StatusBadge tone="tertiary" pulse>
              {content.eyebrow}
            </StatusBadge>

            <h1 className="font-display-hero-mobile text-display-hero-mobile font-bold tracking-tight text-on-surface md:font-display-hero md:text-display-hero">
              {content.titleLead}
              <span className="gradient-text">{content.titleAccent}</span>
              {content.titleTail}
            </h1>

            <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              {content.description}
            </p>

            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <Button onClick={onContact}>
                <span>{content.primaryCta}</span>
                <Icon name="arrow_forward" className="text-[20px]" />
              </Button>
              <Button href="#servicios-seccion" variant="secondary">
                {content.secondaryCta}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-space-md pt-space-sm font-label-mono-sm text-label-mono-sm text-on-surface-variant">
              {content.telemetry.map((item, index) => (
                <span key={item.label} className="flex items-center gap-space-md">
                  {index > 0 && <span className="text-outline">/</span>}
                  <span className="flex items-center gap-1.5">
                    <Icon name={item.icon} className="text-[16px] text-tertiary" />
                    {item.label}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <TerminalPanel content={content.terminal} />
          </div>
        </div>
      </Container>
    </section>
  );
}
