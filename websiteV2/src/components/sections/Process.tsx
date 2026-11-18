import { site } from '../../data/site';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { ProcessCard } from '../ui/ProcessCard';
import { SectionHeading } from '../ui/SectionHeading';

export function Process({ onContact }: { onContact: () => void }) {
  const content = site.process;

  return (
    <section
      id={content.id}
      className="relative w-full overflow-hidden bg-surface-dim px-margin py-24 md:px-margin-desktop"
    >
      <div className="dotted-grid pointer-events-none absolute inset-0 opacity-[0.14]" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow={content.eyebrow}
          titleLead={content.titleLead}
          titleAccent={content.titleAccent}
          titleTail={content.titleTail}
          description={content.description}
          tone="primary"
        />

        <div className="grid grid-cols-1 gap-gutter-desktop md:grid-cols-3">
          {content.steps.map((step) => (
            <ProcessCard key={step.number} step={step} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button onClick={onContact}>
            <span>{content.cta}</span>
            <Icon name="arrow_forward" className="text-[20px]" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
