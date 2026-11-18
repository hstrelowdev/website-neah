import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the five sections with truthful copy', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Ingeniería de software que escala sin límites.',
    );
    expect(screen.getByRole('heading', { name: /Creado para el rendimiento moderno/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Entrega automatizada simulada/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Nuestra entrega en tres pasos/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Construyámoslo juntos/ })).toBeInTheDocument();

    expect(screen.getAllByRole('contentinfo')).toHaveLength(1);
    expect(screen.queryByText(/99\.999/)).not.toBeInTheDocument();
    expect(screen.queryByText(/5\.0 en Google/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Kickoff en 72 horas/)).not.toBeInTheDocument();
  });

  it('opens and closes the contact dialog from the CTA', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: /Enviar mensaje/ })[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Cerrar' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
