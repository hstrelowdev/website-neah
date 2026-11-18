import type { Tone } from '../../data/site';

/** Shared Tailwind class maps so every section uses the same palette. */
export const textTone: Record<Tone, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  inverse: 'text-inverse-primary',
  outline: 'text-outline',
};

export const dotTone: Record<Tone, string> = {
  primary: 'bg-primary-container',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
  inverse: 'bg-inverse-primary',
  outline: 'bg-outline',
};

export const badgeTone: Record<Tone, string> = {
  primary: 'bg-surface-container-high text-primary',
  secondary: 'bg-surface-container-high text-secondary',
  tertiary: 'bg-surface-container-high text-tertiary',
  inverse: 'bg-surface-variant text-on-surface',
  outline: 'bg-surface-container-high text-outline',
};

export const filledTone: Record<Tone, string> = {
  primary: 'bg-primary-container text-on-primary-container',
  secondary: 'bg-secondary text-on-secondary',
  tertiary: 'bg-tertiary text-on-tertiary',
  inverse: 'bg-surface-variant text-on-surface',
  outline: 'bg-surface-container text-on-surface-variant',
};

export const iconBoxTone: Record<Tone, string> = {
  primary: 'bg-primary-container/10 text-primary',
  secondary: 'bg-secondary-container/20 text-on-secondary-container',
  tertiary: 'bg-tertiary-container/20 text-on-tertiary-container',
  inverse: 'bg-inverse-primary/10 text-inverse-primary',
  outline: 'bg-surface-container text-on-surface-variant',
};

export const glowTone: Record<Tone, string> = {
  primary: 'shadow-[0_0_16px_rgba(47,107,255,0.7)]',
  secondary: 'shadow-[0_0_16px_rgba(81,218,212,0.6)]',
  tertiary: 'shadow-[0_0_16px_rgba(73,223,162,0.6)]',
  inverse: 'shadow-[0_0_12px_rgba(0,81,224,0.4)]',
  outline: 'shadow-[0_0_12px_rgba(141,144,161,0.4)]',
};

export function cx(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}
