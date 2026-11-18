import type { site } from '../../data/site';
import { Section } from '../layout/Section';
import { Icon } from '../ui/Icon';
import { SectionTag } from '../ui/SectionTag';
import { cx, textTone } from '../ui/tone';

type InsightsProps = {
  content: typeof site.insights;
};

export function Insights({ content }: InsightsProps) {
  return (
    <Section id={content.id}>
      <SectionTag {...content.tag} className="mb-space-lg" />

      <div className="grid grid-cols-1 gap-gutter-lg lg:grid-cols-3">
        {content.items.map((article) => (
          <article key={article.title} className="group flex flex-col justify-between rounded-xl bg-surface-container p-space-lg shadow-md transition-colors hover:bg-surface-container-high">
            <div className="flex flex-col gap-space-xs">
              <div className="mb-space-xs flex items-center justify-between font-mono-sm text-mono-sm text-outline">
                <span className={cx('font-semibold', textTone[article.tone])}>{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className={cx('font-headline-md text-headline-md font-bold transition-colors', textTone[article.tone])}>
                {article.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{article.description}</p>
            </div>

            <div className="pt-space-md">
              <a href="#contact" className="inline-flex items-center gap-space-xs font-headline-sm text-headline-sm text-secondary transition-colors hover:text-tertiary">
                <span>Read article</span>
                <Icon name="arrow_forward" className="text-[16px]" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
