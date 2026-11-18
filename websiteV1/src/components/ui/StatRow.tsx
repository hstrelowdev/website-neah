import type { SlaRow } from '../../data/site';
import { cx, textTone } from './tone';

type StatRowProps = SlaRow & {
  className?: string;
};

export function StatRow({ label, value, tone, className }: StatRowProps) {
  return (
    <div className={cx('flex items-center justify-between rounded bg-surface-container-low p-space-xs', className)}>
      <span className="text-on-surface-variant">{label}</span>
      <span className={cx('font-bold', textTone[tone])}>{value}</span>
    </div>
  );
}
