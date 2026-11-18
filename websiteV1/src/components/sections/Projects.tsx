import type { site } from '../../data/site';
import { Section } from '../layout/Section';
import { Icon } from '../ui/Icon';
import { SectionTag } from '../ui/SectionTag';
import { cx, textTone } from '../ui/tone';

type ProjectsProps = {
  content: typeof site.projects;
};

const hoverShadow = {
  primary: 'hover:shadow-[0_0_24px_rgba(47,107,255,0.25)]',
  secondary: 'hover:shadow-[0_0_24px_rgba(81,218,212,0.25)]',
  tertiary: 'hover:shadow-[0_0_24px_rgba(73,223,162,0.25)]',
  inverse: 'hover:shadow-[0_0_24px_rgba(0,81,224,0.25)]',
  outline: 'hover:shadow-[0_0_24px_rgba(141,144,161,0.25)]',
};

const hoverText = {
  primary: 'group-hover:text-primary',
  secondary: 'group-hover:text-secondary',
  tertiary: 'group-hover:text-tertiary',
  inverse: 'group-hover:text-inverse-primary',
  outline: 'group-hover:text-outline',
};

export function Projects({ content }: ProjectsProps) {
  return (
    <Section id={content.id}>
      <SectionTag {...content.tag} className="mb-space-lg" />

      <div className="mb-space-xl flex items-end justify-between">
        <div>
          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
            {content.titleLead}
            <span className="bg-linear-to-r from-primary-container via-secondary-container to-tertiary bg-clip-text text-transparent">
              {content.titleAccent}
            </span>
            {content.titleTail}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{content.description}</p>
        </div>
        <a href="#contact" className="hidden items-center gap-space-xs font-mono-md text-mono-md text-secondary hover:underline sm:inline-flex">
          <span>{content.link}</span>
          <Icon name="arrow_forward" className="text-[16px]" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-gutter-lg lg:grid-cols-3">
        {content.items.map((project) => (
          <div
            key={project.title}
            className={cx(
              'group flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container shadow-xl transition-all',
              hoverShadow[project.accentTone],
            )}
          >
            <div className="flex flex-col gap-space-sm p-space-lg">
              <div className="flex items-center justify-between">
                <span className={cx('rounded bg-surface-container-high px-space-sm py-space-xs font-mono-sm text-mono-sm font-semibold', textTone[project.categoryTone])}>
                  {project.category}
                </span>
                <span className="font-mono-sm text-mono-sm font-bold text-tertiary">{project.metric}</span>
              </div>

              <h3 className={cx('font-headline-md text-headline-md font-bold transition-colors', textTone[project.accentTone], hoverText[project.accentTone])}>
                {project.title}
              </h3>

              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">{project.description}</p>

              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                {project.stack.map((item) => (
                  <span key={item} className="rounded bg-surface-container-lowest px-space-xs py-0.5 font-mono-sm text-mono-sm text-outline">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-space-lg pt-0">
              <a href="#contact" className="inline-flex items-center gap-space-xs font-headline-sm text-headline-sm text-secondary transition-colors hover:text-tertiary">
                <span>Read case study</span>
                <Icon name="arrow_forward" className="text-[16px]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
