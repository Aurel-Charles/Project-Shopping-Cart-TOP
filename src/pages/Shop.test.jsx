import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Shop from './Shop';


vi.mock('react-router', async (importOriginal) => {
    const actual = await importOriginal()
    return {
      ...actual,
      useOutletContext: () => ({
        cart: [],
        addItem: vi.fn(),
        removeItem: vi.fn()
      })
    }
  })

  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ products: [{ id: 1, title: 'Test Product' }] })
  })

describe('Shop', () => {
  it('render the shop', () => {
    render(<Shop/>)
    expect(screen.getByRole('heading', {name : 'Shop page'})).toBeInTheDocument();
  });
  it('render the Products', async () => {
    render(<Shop/>)
    await waitFor( () => {
        expect(screen.getByText('Test Product')).toBeInTheDocument();
    } )
  });

});