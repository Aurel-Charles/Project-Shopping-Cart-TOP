export function addItemUtil(id, quantity, cart) {
    const sameItemInCart = cart.find( (item)=> item.id === id )
    let itemToCart = {id, quantity}
    if (sameItemInCart) {
        return cart.map((item) => 
            item.id === id 
                ? { ...item, quantity: item.quantity + quantity }
                : item
        )
    }
    return [...cart, itemToCart]
  }

  export function removeItemUtil(id, cart, all=false) {
    if (all) return cart.filter((item) => item.id !== id)
    
    return cart
        .map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter((item) => item.quantity > 0)
}