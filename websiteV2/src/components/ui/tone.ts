import type { Tone } from '../../data/site';

export const dotTone: Record<Tone, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
};

export const darkTextTone: Record<Tone, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
};

export const lightIconTone: Record<Tone, string> = {
  primary: 'bg-primary-fixed text-on-primary-fixed',
  secondary: 'bg-secondary-fixed text-on-secondary-fixed',
  tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed',
};

export const darkNumberTone: Record<Tone, string> = {
  primary: 'bg-primary-container text-white',
  secondary: 'bg-secondary-container text-on-secondary-container',
  tertiary: 'bg-tertiary-container text-tertiary-fixed',
};

export function cx(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}
