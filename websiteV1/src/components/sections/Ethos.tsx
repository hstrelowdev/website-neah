import type { site } from '../../data/site';
import { GlassCard } from '../ui/GlassCard';
import { Icon } from '../ui/Icon';
import { SectionTag } from '../ui/SectionTag';
import { cx, iconBoxTone } from '../ui/tone';

type EthosProps = {
  content: typeof site.ethos;
};

export function Ethos({ content }: EthosProps) {
  return (
    <section id="ethos" className="relative my-space-lg w-full bg-on-surface py-space-xl text-surface">
      <div className="mx-auto w-full max-w-7xl px-gutter-lg">
        <SectionTag {...content.tag} className="mb-space-lg" />

        <div className="grid grid-cols-1 items-start gap-gutter-lg lg:grid-cols-12">
          <div className="flex flex-col gap-space-md lg:col-span-5">
            <span className="font-mono-md text-mono-md font-semibold uppercase tracking-widest text-inverse-primary">
              {content.eyebrow}
            </span>

            <h2 className="font-headline-xl text-headline-xl font-bold tracking-tight text-surface">
              {content.titleLead}
              <span className="bg-linear-to-r from-inverse-primary to-secondary-container bg-clip-text text-transparent">
                {content.titleAccent}
              </span>
              {content.titleTail}
            </h2>

            <GlassCard
              as="blockquote"
              surface="lightSoft"
              className="border-l-4 border-inverse-primary p-space-lg"
            >
              <p className="mb-space-sm font-body-lg text-body-lg italic leading-relaxed text-surface-dim">
                {content.quote}
              </p>
              <div className="flex items-center gap-space-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high font-mono-sm text-mono-sm font-bold text-primary">
                  {content.author.initials}
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm font-semibold text-surface">
                    {content.author.name}
                  </div>
                  <div className="font-mono-sm text-mono-sm text-outline">{content.author.role}</div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 gap-gutter-sm sm:grid-cols-2 lg:col-span-7">
            {content.values.map((value) => (
              <div
                key={value.title}
                className="card-hover-lift flex flex-col gap-space-xs rounded-xl bg-surface-variant/30 p-space-lg shadow-md"
              >
                <div className={cx('mb-space-xs flex h-10 w-10 items-center justify-center rounded-lg', iconBoxTone[value.iconTone])}>
                  <Icon name={value.icon} className="text-[24px]" />
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-surface">{value.title}</h3>
                <p className="font-body-md text-body-md leading-relaxed text-surface-dim">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
