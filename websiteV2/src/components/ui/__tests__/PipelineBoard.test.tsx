import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { site } from '../../../data/site';
import { PipelineBoard } from '../PipelineBoard';

describe('PipelineBoard', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('replays the simulated deployment step by step', () => {
    render(<PipelineBoard content={site.telemetry.board} />);
    const board = site.telemetry.board;
    const replay = screen.getByRole('button', { name: board.replayLabel });

    expect(screen.getByText(board.finalStatus)).toBeInTheDocument();

    fireEvent.click(replay);
    expect(screen.getByText(board.runningStatus)).toBeInTheDocument();
    expect(replay).toBeDisabled();

    act(() => vi.advanceTimersByTime(450));
    expect(screen.getByText(board.stepStatuses[0])).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(450));
    expect(screen.getByText(board.stepStatuses[1])).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(500));
    expect(screen.getByText(board.finalStatus)).toBeInTheDocument();
    expect(replay).not.toBeDisabled();
  });
});
