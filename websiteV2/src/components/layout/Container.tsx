import type { ReactNode } from 'react';
import { cx } from '../ui/tone';

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cx('mx-auto w-full max-w-[1280px] px-margin md:px-margin-desktop', className)}>
      {children}
    </div>
  );
}
