import { useState } from 'react';
import type { NavItem } from '../../data/site';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { cx, textTone } from '../ui/tone';

type HeaderProps = {
  brand: { prefix: string; suffix: string };
  navigation: NavItem[];
  languages: string[];
  ctaLabel: string;
};

export function Header({ brand, navigation, languages, ctaLabel }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-surface-container/75 shadow-[0_1px_8px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-gutter-lg">
        <a href="#home" className="group flex items-center gap-space-sm">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-high">
            <div className="absolute h-2 w-2 rounded-full bg-secondary shadow-[0_0_12px_rgba(81,218,212,0.8)]" />
            <Icon
              name="commit"
              className="relative text-[20px] text-primary transition-transform duration-300 group-hover:rotate-45"
            />
          </div>
          <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
            {brand.prefix}
            <span className="text-secondary">{brand.suffix}</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-space-md lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <div className="hidden items-center rounded-lg bg-surface-container-low p-space-xs sm:flex">
            {languages.map((language, index) => (
              <button
                key={language}
                type="button"
                className={cx(
                  'rounded px-space-sm py-space-xs font-mono-sm text-mono-sm',
                  index === 0
                    ? 'bg-primary-container font-semibold text-on-primary-container'
                    : 'text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface',
                )}
              >
                {language}
              </button>
            ))}
          </div>

          <Button href="#contact" shimmer className="hidden sm:inline-flex">
            {ctaLabel}
          </Button>

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
            <Icon name="person" className="text-[18px] text-on-primary" />
          </div>

          <button
            type="button"
            className="text-on-surface lg:hidden"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-[24px]" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-surface-container-high bg-surface-container/95 px-gutter-lg py-space-md lg:hidden">
          <div className="flex flex-col gap-space-sm">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cx('font-body-md text-body-md hover:underline', textTone.primary)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
