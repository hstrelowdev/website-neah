import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the full landing page with main sections', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Building the next generation of software.');
    expect(screen.getByRole('heading', { name: /Three pillars of/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'The High-Throughput Matrix' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Let's evolve your business together/ })).toBeInTheDocument();
  });

  it('keeps a single footer, unlike the original HTML export', () => {
    render(<App />);

    expect(screen.getAllByRole('contentinfo')).toHaveLength(1);
  });
});
