import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home';


describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});




describe('App', () => {
  it('renders Navbar', () => {
    render(<Navbar/>);
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    screen.debug();
  });
  it('renders Home', () => {
    render(<Home/>);
    const home = screen.getByText(`Let's do shoppping`)
    expect(home).toBeInTheDocument()
    screen.debug();
  });
});