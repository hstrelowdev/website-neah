import type { site } from '../../data/site';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { Icon } from '../ui/Icon';
import { ProgressBar } from '../ui/ProgressBar';
import { ScoreRing } from '../ui/ScoreRing';
import { SectionTag } from '../ui/SectionTag';

type DiagnosticProps = {
  content: typeof site.diagnostic;
};

export function Diagnostic({ content }: DiagnosticProps) {
  return (
    <Section>
      <SectionTag {...content.tag} className="mb-space-lg" />

      <GlassCard surface="light" className="p-space-xl">
        <div className="grid grid-cols-1 items-center gap-gutter-lg lg:grid-cols-12">
          <div className="flex flex-col items-center p-space-md text-center lg:col-span-4">
            <ScoreRing score={content.score} outOf={content.scoreOut} />
            <span className="mb-space-xs rounded-full bg-tertiary-container/20 px-space-sm py-space-xs font-mono-sm text-mono-sm font-semibold text-on-tertiary-container">
              {content.badge}
            </span>
            <p className="font-body-sm text-body-sm text-surface-dim">{content.note}</p>
          </div>

          <div className="flex flex-col gap-space-sm lg:col-span-8">
            <h3 className="font-headline-lg text-headline-lg font-bold text-surface">{content.title}</h3>
            <p className="font-body-md text-body-md text-surface-dim">{content.description}</p>

            <div className="space-y-space-sm pt-space-xs">
              {content.bars.map((bar) => (
                <ProgressBar key={bar.label} {...bar} />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-md">
              <span className="font-mono-sm text-mono-sm text-outline">{content.footnote}</span>
              <Button href="#contact" size="sm">
                <span>{content.cta}</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </Button>
            </div>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
