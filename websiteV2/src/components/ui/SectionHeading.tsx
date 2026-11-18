import type { Tone } from '../../data/site';
import { StatusBadge } from './StatusBadge';

type SectionHeadingProps = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  titleTail?: string;
  description: string;
  tone?: Tone;
  onLight?: boolean;
};

export function SectionHeading({
  eyebrow,
  titleLead,
  titleAccent,
  titleTail = '',
  description,
  tone = 'tertiary',
  onLight = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center md:mb-16">
      <StatusBadge tone={tone} onLight={onLight} pulse={onLight} className="mb-space-sm">
        {eyebrow}
      </StatusBadge>
      <h2
        className={cxHeading(onLight)}
      >
        {titleLead}
        <span className="gradient-text">{titleAccent}</span>
        {titleTail}
      </h2>
      <p className={cxDescription(onLight)}>{description}</p>
    </div>
  );
}

function cxHeading(onLight: boolean) {
  return [
    'font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tight md:font-headline-lg md:text-headline-lg',
    onLight ? 'text-ink' : 'text-on-surface',
  ].join(' ');
}

function cxDescription(onLight: boolean) {
  return [
    'mt-space-xs font-body-md text-body-md',
    onLight ? 'text-ink-soft' : 'text-on-surface-variant',
  ].join(' ');
}
