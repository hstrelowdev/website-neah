import type { ReactNode } from 'react';
import { cx } from '../ui/tone';

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

/** Shared max-width container for the dark, non-full-bleed sections. */
export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cx('relative w-full max-w-7xl mx-auto px-gutter-lg py-space-xl', className)}>
      {children}
    </section>
  );
}
