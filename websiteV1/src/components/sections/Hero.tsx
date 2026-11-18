import type { site } from '../../data/site';
import { SectionTag } from '../ui/SectionTag';
import { Button } from '../ui/Button';
import { TechChip } from '../ui/TechChip';
import { TerminalWindow } from '../ui/TerminalWindow';
import { GlassCard } from '../ui/GlassCard';
import { StatRow } from '../ui/StatRow';
import { Icon } from '../ui/Icon';

type HeroProps = {
  content: typeof site.hero;
};

export function Hero({ content }: HeroProps) {
  return (
    <section id="home" className="relative mx-auto w-full max-w-7xl px-gutter-lg pt-space-lg pb-space-xl">
      <SectionTag {...content.tag} className="mb-space-md" />

      <div className="grid grid-cols-1 items-center gap-gutter-lg lg:grid-cols-12">
        <div className="flex flex-col gap-space-md lg:col-span-6">
          <div className="inline-flex items-center gap-space-xs self-start rounded-full bg-surface-container-high px-space-sm py-space-xs font-mono-sm text-mono-sm text-primary shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(81,218,212,0.8)]" />
            <span>{content.eyebrow}</span>
          </div>

          <h1 className="font-display-lg text-display-lg font-bold tracking-tight text-on-surface">
            {content.titleLead}
            <span className="bg-linear-to-r from-primary-container via-secondary-container to-tertiary bg-clip-text text-transparent">
              {content.titleAccent}
            </span>
            {content.titleTail}
          </h1>

          <p className="max-w-xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            {content.description}
          </p>

          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <Button href="#contact" shimmer>
              <span>{content.primaryCta}</span>
              <Icon name="arrow_forward" className="text-[20px]" />
            </Button>
            <Button href="#pillars" variant="secondary">
              <Icon name="account_tree" className="text-[20px] text-secondary" />
              <span>{content.secondaryCta}</span>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            {content.chips.map((chip) => (
              <TechChip key={chip.label} {...chip} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-space-md lg:col-span-6">
          <TerminalWindow
            filename={content.ide.filename}
            status={content.ide.status}
            lines={content.ide.lines}
            testsPassed={content.ide.testsPassed}
            latency={content.ide.latency}
          />

          <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
            <GlassCard className="flex flex-col justify-between p-space-md">
              <div className="mb-space-xs flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {content.topology.title}
                </span>
                <span className="rounded bg-surface-container-highest px-space-xs py-0.5 font-mono-sm text-mono-sm text-secondary">
                  {content.topology.version}
                </span>
              </div>

              <div className="my-space-xs flex h-24 w-full items-center justify-center rounded-lg bg-surface-container-lowest p-space-xs">
                <svg className="h-full w-full text-secondary" fill="none" viewBox="0 0 240 70" aria-hidden="true">
                  <path
                    d="M 20,35 H 80 M 80,35 L 120,15 M 80,35 L 120,55 M 120,15 H 170 M 120,55 H 170 M 170,15 L 220,35 M 170,55 L 220,35"
                    opacity="0.4"
                    stroke="currentColor"
                    strokeDasharray="3 3"
                    strokeWidth="2"
                  />
                  <circle className="fill-primary-container" cx="20" cy="35" r="7" />
                  <circle className="fill-secondary" cx="80" cy="35" r="6" />
                  <circle className="fill-tertiary" cx="120" cy="15" r="5" />
                  <circle className="fill-tertiary" cx="120" cy="55" r="5" />
                  <circle className="fill-tertiary" cx="170" cy="15" r="5" />
                  <circle className="fill-secondary" cx="170" cy="55" r="5" />
                  <circle className="fill-tertiary shadow-[0_0_12px_rgba(73,223,162,0.9)]" cx="220" cy="35" r="7" />
                </svg>
              </div>

              <div className="flex items-center justify-between font-mono-sm text-mono-sm text-on-surface-variant">
                <span>{content.topology.label}</span>
                <span className="font-bold text-tertiary">{content.topology.value}</span>
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col justify-between p-space-md">
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                {content.slas.title}
              </span>
              <div className="my-space-xs space-y-space-xs font-mono-sm text-mono-sm">
                {content.slas.rows.map((row) => (
                  <StatRow key={row.label} {...row} />
                ))}
              </div>
              <span className="font-mono-sm text-mono-sm text-outline">{content.slas.footer}</span>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
