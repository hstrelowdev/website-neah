import type { FooterColumn, Tone } from '../../data/site';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { TextField } from '../ui/TextField';
import { cx, dotTone, textTone } from '../ui/tone';

type FooterProps = {
  brand: { prefix: string; suffix: string; description: string };
  footer: {
    newsletterTitle: string;
    newsletterPlaceholder: string;
    newsletterCta: string;
    columns: FooterColumn[];
    compliance: {
      title: string;
      items: { icon: string; label: string; tone: Tone }[];
    };
    status: string;
    copyright: string;
  };
};

export function Footer({ brand, footer }: FooterProps) {
  return (
    <footer className="relative w-full bg-surface-container-lowest pt-space-xl pb-space-lg">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-xl px-gutter-lg">
        <div className="flex flex-col items-start justify-between gap-space-lg border-b border-surface-container-high pb-space-lg lg:flex-row lg:items-center">
          <div className="flex max-w-md flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-container-high">
                <Icon name="commit" className="text-[18px] text-secondary" />
              </div>
              <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">
                {brand.prefix}
                <span className="text-secondary">{brand.suffix}</span>
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{brand.description}</p>
          </div>

          <div className="flex w-full flex-col gap-space-xs sm:w-auto">
            <span className="font-mono-sm text-mono-sm font-semibold uppercase text-on-surface">
              {footer.newsletterTitle}
            </span>
            <div className="flex items-center gap-space-xs">
              <TextField
                id="newsletter-email"
                label="Email for the Commit Dispatch newsletter"
                type="email"
                placeholder={footer.newsletterPlaceholder}
                hideLabel
                className="w-full sm:w-64"
              />
              <Button variant="secondary" size="sm" className="h-10 shrink-0 rounded">
                {footer.newsletterCta}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-gutter-lg md:grid-cols-4">
          {footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-space-xs">
              <span className={cx('mb-space-xs font-mono-md text-mono-md font-semibold tracking-wider uppercase', textTone[column.tone])}>
                {column.title}
              </span>
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
          ))}

          <div className="flex flex-col gap-space-xs">
            <span className="mb-space-xs font-mono-md text-mono-md font-semibold tracking-wider uppercase text-on-surface">
              {footer.compliance.title}
            </span>
            <div className="flex flex-col gap-space-xs font-mono-sm text-mono-sm text-on-surface-variant">
              {footer.compliance.items.map((item) => (
                <span key={item.label} className="flex items-center gap-1">
                  <Icon name={item.icon} className={cx('text-[16px]', textTone[item.tone])} />
                  <span className={cx(textTone[item.tone])}>{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-sm border-t border-surface-container pt-space-lg font-mono-sm text-mono-sm text-outline sm:flex-row">
          <div className="flex items-center gap-space-xs">
            <span className={cx('h-2 w-2 rounded-full bg-tertiary', dotTone.tertiary)} />
            <span>{footer.status}</span>
          </div>
          <div>{footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
