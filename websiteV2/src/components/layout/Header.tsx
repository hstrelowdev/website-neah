import { useState } from 'react';
import type { NavLink } from '../../data/site';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Container } from './Container';

type HeaderProps = {
  brand: { name: string; suffix: string };
  navigation: readonly NavLink[];
  ctaLabel: string;
  onContact: () => void;
};

export function Header({ brand, navigation, ctaLabel, onContact }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-surface-container/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-gutter">
          <a href="#inicio" className="flex items-center gap-space-sm" aria-label="Nexora Labs — inicio">
            <div className="cta-gradient flex h-10 w-10 items-center justify-center rounded-card shadow-[0_0_16px_rgba(47,107,255,0.35)]">
              <Icon name="terminal" className="text-[22px] font-bold text-on-primary-container" />
            </div>
            <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
              {brand.name}
              <span className="text-primary">{brand.suffix}</span>
            </span>
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-space-md lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-control px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-space-md">
            <Button onClick={onContact} className="hidden sm:inline-flex">
              {ctaLabel}
            </Button>
            <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-primary sm:flex">
              <Icon name="person" className="text-[18px] text-on-primary" />
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-control p-2 text-on-surface lg:hidden"
              aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
              aria-expanded={menuOpen}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} className="text-[24px]" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            aria-label="Navegación móvil"
            className="flex flex-col gap-space-xs border-t border-white/10 py-space-md lg:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-control px-space-sm py-space-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              >
                {item.label}
              </a>
            ))}
            <Button onClick={onContact} className="mt-space-xs sm:hidden">
              {ctaLabel}
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
