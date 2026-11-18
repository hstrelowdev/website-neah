import type { site } from '../../data/site';
import { Section } from '../layout/Section';
import { SectionTag } from '../ui/SectionTag';
import { TechChip } from '../ui/TechChip';

type TechStackProps = {
  content: typeof site.tech;
};

export function TechStack({ content }: TechStackProps) {
  return (
    <Section>
      <SectionTag {...content.tag} className="mb-space-lg" />

      <div className="rounded-xl bg-surface-container-low p-space-xl shadow-xl">
        <div className="mb-space-lg flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">{content.title}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{content.description}</p>
          </div>
          <div className="flex items-center gap-space-xs font-mono-sm text-mono-sm text-tertiary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
            <span>{content.status}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-space-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {content.tools.map((tool) => (
            <div
              key={tool.label}
              className="flex items-center gap-space-sm rounded-lg bg-surface-container p-space-md transition-colors hover:bg-surface-container-high"
            >
              <TechChip {...tool} surface="default" className="bg-transparent px-0 py-0 text-on-surface" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
