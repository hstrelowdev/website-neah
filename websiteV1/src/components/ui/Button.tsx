import type { ReactNode } from 'react';
import { cx } from './tone';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'full';

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  shimmer?: boolean;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary:
    'bg-linear-to-r from-primary-container to-secondary-container text-on-primary-container shadow-[0_4px_14px_rgba(47,107,255,0.3)] hover:shadow-[0_0_24px_rgba(81,218,212,0.5)] hover:scale-[1.01]',
  secondary: 'bg-surface-container hover:bg-surface-container-high text-on-surface shadow-sm',
  ghost: 'bg-transparent text-secondary hover:bg-white/5',
  light: 'bg-surface text-on-surface hover:bg-surface-container-high shadow-md',
};

const sizes: Record<Size, string> = {
  sm: 'px-space-sm py-space-xs',
  md: 'px-space-lg py-space-sm',
  full: 'w-full py-space-sm',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  shimmer = false,
  href,
  type = 'button',
  className,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = cx(
    'inline-flex items-center justify-center gap-space-xs rounded-lg font-headline-sm text-headline-sm font-semibold tracking-tight transition-all duration-200 active:scale-[0.99]',
    variants[variant],
    sizes[size],
    shimmer && 'btn-shimmer',
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
    <button type={type} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
