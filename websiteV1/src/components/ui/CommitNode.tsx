import type { Tone } from '../../data/site';
import { Icon } from './Icon';
import { cx, dotTone, filledTone, glowTone } from './tone';

type CommitNodeProps = {
  tone?: Tone;
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  icon?: string;
  onLight?: boolean;
  className?: string;
};

const outerSizes = { sm: 'w-6 h-6', md: 'w-7 h-7', lg: 'w-8 h-8' };
const innerSizes = { sm: 'w-2.5 h-2.5', md: 'w-3 h-3', lg: 'w-3.5 h-3.5' };

/** Git-graph node: a ring with a concentric core, matching DESIGN.md. */
export function CommitNode({
  tone = 'primary',
  size = 'sm',
  glow = false,
  icon,
  onLight = false,
  className,
}: CommitNodeProps) {
  if (icon) {
    return (
      <div
        className={cx(
          'relative z-30 flex shrink-0 items-center justify-center rounded-full',
          outerSizes[size],
          filledTone[tone],
          glow && 'commit-node-glow',
          className,
        )}
      >
        <Icon name={icon} className="text-[20px] font-bold" />
      </div>
    );
  }

  return (
    <div
      className={cx(
        'relative z-30 flex shrink-0 items-center justify-center rounded-full',
        outerSizes[size],
        onLight ? 'bg-surface-variant' : 'bg-surface-container-high',
        glow && glowTone[tone],
        className,
      )}
    >
      <div className={cx('rounded-full', innerSizes[size], dotTone[tone], glow && 'commit-node-glow')} />
    </div>
  );
}
