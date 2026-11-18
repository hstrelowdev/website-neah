import { cx } from './tone';

type IconProps = {
  name: string;
  className?: string;
};

/** Material Symbols wrapper — no extra icon dependency. */
export function Icon({ name, className }: IconProps) {
  return (
    <span className={cx('material-symbols-outlined', className)} aria-hidden="true">
      {name}
    </span>
  );
}
