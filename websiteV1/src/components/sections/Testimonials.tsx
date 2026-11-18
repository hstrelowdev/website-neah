import type { site } from '../../data/site';
import { SectionTag } from '../ui/SectionTag';
import { Icon } from '../ui/Icon';
import { cx, filledTone } from '../ui/tone';

type TestimonialsProps = {
  content: typeof site.testimonials;
};

export function Testimonials({ content }: TestimonialsProps) {
  return (
    <section className="relative my-space-lg w-full bg-on-surface py-space-xl text-surface">
      <div className="mx-auto w-full max-w-7xl px-gutter-lg">
        <SectionTag {...content.tag} className="mb-space-lg" />

        <div className="mb-space-xl">
          <h2 className="font-headline-xl text-headline-xl font-bold text-surface">
            {content.titleLead}
            <span className="bg-linear-to-r from-inverse-primary to-secondary-container bg-clip-text text-transparent">
              {content.titleAccent}
            </span>
            {content.titleTail}
          </h2>
          <p className="font-body-lg text-body-lg text-surface-dim">{content.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-gutter-lg lg:grid-cols-3">
          {content.items.map((review) => (
            <div key={review.name} className="flex flex-col justify-between rounded-xl bg-surface-variant/40 p-space-lg shadow-md">
              <div className="space-y-space-sm">
                <div className="flex items-center gap-1 text-tertiary-container">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Icon key={index} name="star" className="text-[18px]" />
                  ))}
                </div>
                <p className="font-body-md text-body-md italic leading-relaxed text-surface-dim">{review.quote}</p>
              </div>

              <div className="flex items-center gap-space-sm border-t border-surface-variant pt-space-md">
                <div className={cx('flex h-10 w-10 items-center justify-center rounded-full font-headline-sm text-headline-sm font-bold', filledTone[review.avatarTone])}>
                  {review.initials}
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm font-bold text-surface">{review.name}</div>
                  <div className="font-mono-sm text-mono-sm text-outline">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
