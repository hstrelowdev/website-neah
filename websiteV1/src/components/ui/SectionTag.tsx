import type { SectionTagData } from '../../data/site';
import { CommitNode } from './CommitNode';
import { cx, textTone } from './tone';

type SectionTagProps = SectionTagData & {
  className?: string;
};

/** The "01 · hero / HEAD -> main" breadcrumb that precedes every section. */
export function SectionTag({
  index,
  slug,
  meta,
  tone,
  onLight = false,
  className,
}: SectionTagProps) {
  return (
    <div className={cx('flex items-center gap-space-sm', className)}>
      <CommitNode tone={tone} onLight={onLight} glow />
      <div
        className={cx(
          'inline-flex items-center gap-space-xs rounded-lg px-space-sm py-space-xs font-mono-sm text-mono-sm shadow-sm',
          onLight ? 'bg-surface-variant text-on-surface' : 'bg-surface-container text-on-surface-variant',
        )}
      >
        <span className={cx('font-bold', textTone[tone])}>
          {index} · {slug}
        </span>
        {meta && (
          <>
            <span className="text-outline">/</span>
            <span>{meta}</span>
          </>
        )}
      </div>
    </div>
  );
}
