import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';


describe('button',() => {
    it('render a button', () => {
        render(<Button label={'Home'}/>)
        const btn = screen.getByRole('button', {name: 'Home'})
        expect(btn).toBeInTheDocument()
    })
} )