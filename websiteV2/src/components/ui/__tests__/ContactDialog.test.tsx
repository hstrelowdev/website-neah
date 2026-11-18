import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { site } from '../../../data/site';
import { ContactDialog } from '../ContactDialog';

afterEach(() => vi.unstubAllGlobals());

describe('ContactDialog', () => {
  it('posts the form to Formspree and only shows success on a real ok response', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    vi.stubGlobal('fetch', fetchMock);

    render(<ContactDialog open onClose={vi.fn()} />);

    fireEvent.change(screen.getByLabelText(site.contact.fields.name), { target: { value: 'Ada' } });
    fireEvent.change(screen.getByLabelText(site.contact.fields.email), {
      target: { value: 'ada@empresa.com' },
    });
    fireEvent.change(screen.getByLabelText(site.contact.fields.message), {
      target: { value: 'Quiero hablar de un proyecto.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Enviar mensaje/ }));

    await waitFor(() => expect(screen.getByText(site.contact.success)).toBeInTheDocument());
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe(site.contact.endpoint);
    expect(options.method).toBe('POST');
    expect(JSON.parse(options.body)).toMatchObject({
      name: 'Ada',
      email: 'ada@empresa.com',
      message: 'Quiero hablar de un proyecto.',
      _replyto: 'ada@empresa.com',
    });
  });

  it('shows an error and no success message when the request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network')));

    render(<ContactDialog open onClose={vi.fn()} />);
    fireEvent.change(screen.getByLabelText(site.contact.fields.name), { target: { value: 'Ada' } });
    fireEvent.change(screen.getByLabelText(site.contact.fields.email), {
      target: { value: 'ada@empresa.com' },
    });
    fireEvent.change(screen.getByLabelText(site.contact.fields.message), {
      target: { value: 'Mensaje de prueba.' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensaje/ }));

    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(site.contact.error));
    expect(screen.queryByText(site.contact.success)).not.toBeInTheDocument();
  });

  it('closes when Escape is pressed', () => {
    const onClose = vi.fn();
    render(<ContactDialog open onClose={onClose} />);

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledOnce();
  });
});
