import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionTag } from '../SectionTag';

describe('SectionTag', () => {
  it('shows the section index, slug and git metadata', () => {
    render(<SectionTag index="04" slug="lifecycle" meta="design-build-run" tone="tertiary" />);

    expect(screen.getByText(/04 · lifecycle/)).toBeInTheDocument();
    expect(screen.getByText('design-build-run')).toBeInTheDocument();
  });
});
