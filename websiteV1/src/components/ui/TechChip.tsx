import type { ChipData } from '../../data/site';
import { cx, dotTone } from './tone';

type TechChipProps = ChipData & {
  variant?: 'dot' | 'plain';
  surface?: 'low' | 'default' | 'lowest';
  className?: string;
};

const surfaces = {
  low: 'bg-surface-container-low',
  default: 'bg-surface-container',
  lowest: 'bg-surface-container-lowest',
};

export function TechChip({
  label,
  tone,
  variant = 'dot',
  surface = 'low',
  className,
}: TechChipProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-space-xs rounded px-space-sm py-space-xs font-mono-sm text-mono-sm',
        variant === 'plain' ? 'text-outline' : 'text-on-surface-variant',
        surfaces[surface],
        className,
      )}
    >
      {variant === 'dot' && <span className={cx('w-1.5 h-1.5 rounded-full', dotTone[tone])} />}
      {label}
    </span>
  );
}
