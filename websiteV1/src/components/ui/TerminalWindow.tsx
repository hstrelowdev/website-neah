import type { CodeLine, CodeTone } from '../../data/site';
import { cx } from './tone';
import { Icon } from './Icon';

type TerminalWindowProps = {
  filename: string;
  status: string;
  lines: CodeLine[];
  testsPassed: string;
  latency: string;
};

const tokenTone: Record<CodeTone, string> = {
  attribute: 'text-secondary',
  keyword: 'text-primary-fixed-dim',
  function: 'text-tertiary',
  method: 'text-secondary',
  comment: 'text-on-surface-variant',
  string: 'text-secondary-fixed',
  muted: 'text-outline',
};

/** Frosted IDE pane with numbered, syntax-highlighted code. */
export function TerminalWindow({ filename, status, lines, testsPassed, latency }: TerminalWindowProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-surface-container-high/90 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between bg-surface-container-lowest/80 px-space-md py-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="h-2.5 w-2.5 rounded-full bg-error" />
          <span className="h-2.5 w-2.5 rounded-full bg-secondary-container" />
          <span className="h-2.5 w-2.5 rounded-full bg-tertiary" />
          <span className="ml-space-sm font-mono-sm text-mono-sm text-on-surface-variant">{filename}</span>
        </div>
        <div className="flex items-center gap-space-xs rounded bg-surface-container px-space-sm py-space-xs font-mono-sm text-mono-sm text-tertiary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-tertiary" />
          <span>{status}</span>
        </div>
      </div>

      <div className="space-y-1 overflow-x-auto bg-surface-container-lowest p-space-md font-mono-md text-mono-md text-on-surface">
        {lines.map((line) => (
          <div key={line.number} className="flex gap-space-md whitespace-pre">
            <span className="select-none text-outline-variant">{line.number}</span>
            <span>
              {line.tokens.map((token, index) => (
                <span key={`${line.number}-${index}`} className={token.tone ? tokenTone[token.tone] : undefined}>
                  {token.text}
                </span>
              ))}
              {line.cursor && <span className="terminal-cursor" />}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-surface-container-high px-space-md py-space-xs font-mono-sm text-mono-sm text-on-surface-variant">
        <div className={cx('flex items-center gap-space-xs text-tertiary')}>
          <Icon name="check_circle" className="text-[16px]" />
          <span>{testsPassed}</span>
        </div>
        <span className="text-outline">{latency}</span>
      </div>
    </div>
  );
}
