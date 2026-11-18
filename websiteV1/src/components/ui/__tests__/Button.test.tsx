import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders a button with an accessible label and handles clicks', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Deploy Your Vision</Button>);

    const button = screen.getByRole('button', { name: 'Deploy Your Vision' });
    button.click();

    expect(button).toBeInTheDocument();
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('renders an anchor when an href is provided', () => {
    render(<Button href="#contact">Let&apos;s Talk Projects</Button>);

    expect(screen.getByRole('link', { name: "Let's Talk Projects" })).toHaveAttribute('href', '#contact');
  });
});
