import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { site } from '../../../data/site';
import { TerminalWindow } from '../TerminalWindow';

describe('TerminalWindow', () => {
  it('renders the IDE header, numbered code and test status', () => {
    const { ide } = site.hero;
    render(
      <TerminalWindow
        filename={ide.filename}
        status={ide.status}
        lines={ide.lines}
        testsPassed={ide.testsPassed}
        latency={ide.latency}
      />,
    );

    expect(screen.getByText(ide.filename)).toBeInTheDocument();
    expect(screen.getByText(ide.status)).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText(ide.testsPassed)).toBeInTheDocument();
  });
});
