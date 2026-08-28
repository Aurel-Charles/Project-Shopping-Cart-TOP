import { describe, it, expect } from 'vitest';
import { addItemUtil, removeItemUtil } from '../utils/cartUtils';

describe('addItem', () => {
    
    it('add a new item to cart', () => {
    const cart = []
    const newCart = addItemUtil('2', 3, cart)

    expect(newCart).toEqual([{ id: '2', quantity: 3 }])
  });

  it('increase quantity if item already in cart', () => {
    const cartWithItem = [{ id: '1', quantity: 2 }]
    const newCart = addItemUtil('1', 3, cartWithItem)

    expect(newCart).toEqual([{ id: '1', quantity: 5 }])
  });
});

describe('removeItem', () => {
    
    it('remove a partial quantity of item from cart', () => {
    const cart = [{ id: '2', quantity: 3 }]
    const newCart = removeItemUtil('2',cart )

    expect(newCart).toEqual([{ id: '2', quantity: 2 }])
  });
    
    it('remove a  quantity of item to equal 0 from cart', () => {
    const cart = [{ id: '2', quantity: 1 }]
    const newCart = removeItemUtil('2',cart )

    expect(newCart).toEqual([])
  });
    
    it('remove a total quantity of item  from cart', () => {
    const cart = [{ id: '1', quantity: 5 },{ id: '2', quantity: 5 }]
    const newCart = removeItemUtil('2',cart , true)

    expect(newCart).toEqual([{ id: '1', quantity: 5 }])
  });


});