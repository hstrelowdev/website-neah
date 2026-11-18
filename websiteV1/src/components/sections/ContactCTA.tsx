import type { site } from '../../data/site';
import { Button } from '../ui/Button';
import { CommitNode } from '../ui/CommitNode';
import { GlassCard } from '../ui/GlassCard';
import { Icon } from '../ui/Icon';
import { TextField } from '../ui/TextField';
import { cx, textTone } from '../ui/tone';

type ContactProps = {
  content: typeof site.contact;
};

export function ContactCTA({ content }: ContactProps) {
  return (
    <section id={content.id} className="relative mx-auto w-full max-w-7xl px-gutter-lg pt-space-xl pb-space-xl">
      <div className="mb-space-lg flex items-center gap-space-sm">
        <CommitNode tone="tertiary" size="lg" icon="done_all" glow />
        <div className="inline-flex items-center gap-space-xs rounded-lg bg-surface-container px-space-sm py-space-xs font-mono-sm text-mono-sm text-tertiary shadow-sm">
          <span className="font-bold">
            {content.tag.index} · {content.tag.slug}
          </span>
          <span className="text-outline">/</span>
          <span>{content.tag.meta}</span>
        </div>
      </div>

      <GlassCard surface="high" className="relative overflow-hidden p-space-xl">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-secondary-container/10 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-gutter-lg lg:grid-cols-12">
          <div className="flex flex-col gap-space-md lg:col-span-6">
            <span className="font-mono-md text-mono-md font-semibold uppercase tracking-widest text-secondary">
              {content.eyebrow}
            </span>
            <h2 className="font-display-lg text-display-lg font-bold tracking-tight text-on-surface">
              {content.titleLead}
              <span className="bg-linear-to-r from-primary-container via-secondary-container to-tertiary bg-clip-text text-transparent">
                {content.titleAccent}
              </span>
              {content.titleTail}
            </h2>
            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">{content.description}</p>

            <div className="flex flex-col gap-space-xs pt-space-xs font-mono-sm text-mono-sm text-on-surface-variant">
              {content.assurances.map((assurance) => (
                <div key={assurance.text} className="flex items-center gap-space-xs">
                  <Icon name={assurance.icon} className={cx('text-[16px]', textTone[assurance.tone as keyof typeof textTone])} />
                  <span>{assurance.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest/80 p-space-lg shadow-inner lg:col-span-6">
            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
              <TextField id="fullName" label={content.form.nameLabel} placeholder={content.form.namePlaceholder} />
              <TextField id="workEmail" label={content.form.emailLabel} placeholder={content.form.emailPlaceholder} type="email" />
            </div>
            <TextField
              id="projectScope"
              label={content.form.scopeLabel}
              placeholder={content.form.scopePlaceholder}
              multiline
            />
            <Button type="button" size="full" shimmer>
              <span>{content.form.submit}</span>
              <Icon name="rocket" className="text-[20px]" />
            </Button>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
