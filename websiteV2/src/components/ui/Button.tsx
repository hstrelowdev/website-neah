import type { ReactNode } from 'react';
import { cx } from './tone';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg' | 'full';

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    'cta-gradient text-white shadow-[0_4px_20px_rgba(18,181,176,0.3)] hover:brightness-110 hover:shadow-[0_6px_28px_rgba(18,181,176,0.45)]',
  secondary:
    'border border-white/15 bg-white/5 text-pale hover:border-primary-container hover:bg-primary-container/10',
  ghost: 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface',
};

const sizes: Record<Size, string> = {
  sm: 'px-space-md py-space-sm text-body-sm',
  md: 'px-space-xl py-3.5 text-body-md',
  lg: 'px-10 py-4 text-body-lg',
  full: 'w-full py-3 text-body-md',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  onClick,
  className,
  ariaLabel,
  disabled = false,
}: ButtonProps) {
  const classes = cx(
    'inline-flex items-center justify-center gap-space-sm rounded-chip font-headline-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
