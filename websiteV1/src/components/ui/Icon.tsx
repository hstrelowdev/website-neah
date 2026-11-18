import { cx } from './tone';

type IconProps = {
  name: string;
  className?: string;
};

/** Thin wrapper around the Material Symbols font used by the Stitch mockup. */
export function Icon({ name, className }: IconProps) {
  return (
    <span className={cx('material-symbols-outlined', className)} aria-hidden="true">
      {name}
    </span>
  );
}
