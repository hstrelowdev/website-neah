import type { site } from '../../data/site';
import { Icon } from '../ui/Icon';
import { Container } from './Container';

type FooterProps = {
  brand: typeof site.brand;
  footer: typeof site.footer;
  onContact: () => void;
};

export function Footer({ brand, footer, onContact }: FooterProps) {
  return (
    <footer className="w-full bg-surface-container text-on-surface-variant">
      <Container className="pt-space-xl pb-space-lg">
        <div className="mb-space-xl grid grid-cols-1 gap-gutter-desktop md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-space-md lg:col-span-2">
            <div className="flex items-center gap-space-sm">
              <div className="cta-gradient flex h-9 w-9 items-center justify-center rounded-card shadow-[0_0_12px_rgba(47,107,255,0.25)]">
                <Icon name="terminal" className="text-[20px] text-on-primary-container" />
              </div>
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
                {brand.name}
                <span className="text-primary">{brand.suffix}</span>
              </span>
            </div>
            <p className="max-w-sm font-body-md text-body-md text-on-surface-variant">{brand.description}</p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              {footer.social.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={onContact}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-control bg-surface-container-low text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-on-surface"
                >
                  <Icon name={item.icon} className="text-[18px]" />
                </button>
              ))}
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-space-md">
              <span className="font-label-mono-sm text-label-mono-sm font-semibold uppercase tracking-wider text-on-surface">
                {column.title}
              </span>
              <div className="flex flex-col gap-space-sm">
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md rounded-panel bg-surface-container-low/50 px-space-lg py-space-md md:flex-row">
          <span className="font-body-sm text-body-sm text-on-surface-variant">{footer.copyright}</span>
          <div className="flex items-center gap-space-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
            <span className="font-label-mono-sm text-label-mono-sm uppercase text-tertiary">
              {footer.status}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
