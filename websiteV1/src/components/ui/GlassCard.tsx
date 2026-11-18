import type { ReactNode } from 'react';
import { cx } from './tone';

type Surface = 'default' | 'high' | 'low' | 'lowest' | 'light' | 'lightSoft';

type GlassCardProps = {
  children: ReactNode;
  surface?: Surface;
  className?: string;
  lift?: boolean;
  as?: 'div' | 'article' | 'blockquote';
};

const surfaces: Record<Surface, string> = {
  default: 'bg-surface-container shadow-md',
  high: 'bg-surface-container-high/90 backdrop-blur-xl shadow-xl',
  low: 'bg-surface-container-low shadow-xl',
  lowest: 'bg-surface-container-lowest/80 shadow-inner',
  light: 'bg-on-surface text-surface shadow-xl',
  lightSoft: 'bg-surface-variant/40 text-surface shadow-md',
};

export function GlassCard({
  children,
  surface = 'default',
  className,
  lift = false,
  as: Tag = 'div',
}: GlassCardProps) {
  return (
    <Tag className={cx('rounded-xl', surfaces[surface], lift && 'card-hover-lift', className)}>{children}</Tag>
  );
}
