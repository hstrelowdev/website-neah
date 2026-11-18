import type { Bar } from '../../data/site';
import { cx, textTone } from './tone';

const fillTone = {
  primary: 'bg-primary-container',
  secondary: 'bg-secondary-container',
  tertiary: 'bg-tertiary-container',
  inverse: 'bg-inverse-primary',
  outline: 'bg-outline',
};

export function ProgressBar({ label, value, tone }: Bar) {
  return (
    <div>
      <div className="mb-1 flex justify-between font-mono-sm text-mono-sm font-semibold text-surface">
        <span>{label}</span>
        <span className={textTone[tone]}>{value}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-variant/40">
        <div className={cx('h-full rounded-full', fillTone[tone])} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
