import { site } from '../../data/site';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';

export function Services({ onContact }: { onContact: () => void }) {
  const content = site.services;

  return (
    <section id={content.id} className="w-full bg-light-surface px-margin py-24 text-ink-blue md:px-margin-desktop">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          titleLead={content.titleLead}
          titleAccent={content.titleAccent}
          titleTail={content.titleTail}
          description={content.description}
          onLight
        />
        <div className="grid grid-cols-1 gap-gutter-desktop md:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <ServiceCard key={item.title} {...item} linkLabel={content.linkLabel} onSelect={onContact} />
          ))}
        </div>
      </Container>
    </section>
  );
}
