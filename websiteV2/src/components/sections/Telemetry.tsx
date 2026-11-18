import { site } from '../../data/site';
import { Container } from '../layout/Container';
import { PipelineBoard } from '../ui/PipelineBoard';
import { SectionHeading } from '../ui/SectionHeading';

export function Telemetry() {
  const content = site.telemetry;

  return (
    <section id={content.id} className="w-full bg-pale px-margin py-24 text-ink-blue md:px-margin-desktop">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          titleLead={content.titleLead}
          titleAccent={content.titleAccent}
          titleTail={content.titleTail}
          description={content.description}
          onLight
        />
        <PipelineBoard content={content.board} />
      </Container>
    </section>
  );
}
