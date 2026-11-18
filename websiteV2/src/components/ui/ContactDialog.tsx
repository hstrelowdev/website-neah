import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { site } from '../../data/site';
import { Button } from './Button';
import { Icon } from './Icon';

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactDialog({ open, onClose }: ContactDialogProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || site.contact.endpoint;
  const content = site.contact;

  useEffect(() => {
    if (!open) return;

    setStatus('idle');
    const previouslyFocused = document.activeElement as HTMLElement | null;
    firstFieldRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      formRef.current?.reset();
      setEmail('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-margin backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        aria-describedby="contact-dialog-description"
        className="glass-panel relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-panel p-space-xl shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={content.close}
          className="absolute top-space-md right-space-md rounded-control p-1 text-on-surface-variant transition-colors hover:bg-white/5 hover:text-on-surface"
        >
          <Icon name="close" className="text-[20px]" />
        </button>

        <span className="font-label-mono-sm text-label-mono-sm font-semibold uppercase tracking-widest text-secondary">
          {content.eyebrow}
        </span>
        <h2 id="contact-dialog-title" className="mt-space-xs font-headline-md text-headline-md font-bold text-on-surface">
          {content.title}
        </h2>
        <p id="contact-dialog-description" className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
          {content.description}
        </p>

        {status === 'success' ? (
          <div className="mt-space-lg flex flex-col items-start gap-space-md" role="status">
            <div className="flex items-center gap-space-sm rounded-card bg-tertiary-container/20 p-space-md font-body-md text-body-md text-tertiary-fixed">
              <Icon name="check_circle" className="text-[22px]" />
              <span>{content.success}</span>
            </div>
            <Button onClick={onClose} variant="secondary">
              {content.close}
            </Button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="mt-space-lg flex flex-col gap-space-md">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-gotcha">No completar</label>
              <input id="contact-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <input type="hidden" name="_subject" value="Nueva consulta desde Nexora Labs" />
            <input type="hidden" name="_replyto" value={email} />

            <div className="flex flex-col gap-space-xs">
              <label
                htmlFor="contact-name"
                className="font-label-mono-sm text-label-mono-sm font-semibold uppercase text-on-surface-variant"
              >
                {content.fields.name}
              </label>
              <input
                ref={firstFieldRef}
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={content.fields.namePlaceholder}
                className="h-11 rounded-control border border-white/12 bg-white/3 px-space-sm font-body-sm text-body-sm text-on-surface placeholder:text-on-surface/40 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
            </div>

            <div className="flex flex-col gap-space-xs">
              <label
                htmlFor="contact-email"
                className="font-label-mono-sm text-label-mono-sm font-semibold uppercase text-on-surface-variant"
              >
                {content.fields.email}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={content.fields.emailPlaceholder}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 rounded-control border border-white/12 bg-white/3 px-space-sm font-body-sm text-body-sm text-on-surface placeholder:text-on-surface/40 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
            </div>

            <div className="flex flex-col gap-space-xs">
              <label
                htmlFor="contact-message"
                className="font-label-mono-sm text-label-mono-sm font-semibold uppercase text-on-surface-variant"
              >
                {content.fields.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder={content.fields.messagePlaceholder}
                className="resize-none rounded-control border border-white/12 bg-white/3 p-space-sm font-body-sm text-body-sm text-on-surface placeholder:text-on-surface/40 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-space-sm rounded-control bg-error/10 p-space-sm font-body-sm text-body-sm text-error" role="alert">
                <Icon name="error" className="text-[18px]" />
                <span>{content.error}</span>
              </div>
            )}

            <Button type="submit" size="full" disabled={status === 'sending'}>
              <span>{status === 'sending' ? content.sending : content.submit}</span>
              <Icon name="send" className="text-[18px]" />
            </Button>
            <p className="font-body-sm text-body-sm text-outline">{content.privacy}</p>
          </form>
        )}
      </div>
    </div>
  );
}
