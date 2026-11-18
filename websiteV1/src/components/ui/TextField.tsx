import { cx } from './tone';

type TextFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'email';
  multiline?: boolean;
  rows?: number;
  hideLabel?: boolean;
  className?: string;
};

export function TextField({
  id,
  label,
  placeholder,
  type = 'text',
  multiline = false,
  rows = 4,
  hideLabel = false,
  className,
}: TextFieldProps) {
  const inputClasses = cx(
    'rounded bg-surface-container font-body-sm text-body-sm text-on-surface placeholder:text-on-surface/40 focus:outline-none focus:ring-1 focus:ring-secondary',
    multiline ? 'w-full resize-none p-space-sm' : 'h-10 w-full px-space-sm',
    className,
  );

  return (
    <div className="flex flex-col gap-space-xs">
      <label htmlFor={id} className={cx('font-mono-sm text-mono-sm font-semibold uppercase text-on-surface-variant', hideLabel && 'sr-only')}>
        {label}
      </label>
      {multiline ? (
        <textarea id={id} rows={rows} placeholder={placeholder} className={inputClasses} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} className={inputClasses} />
      )}
    </div>
  );
}
