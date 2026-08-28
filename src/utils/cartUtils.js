export function addItemUtil(id, quantity, cart) {
    const sameItemInCart = cart.find( (item)=> item.id === id )
    let itemToCart = {id, quantity}
    if (sameItemInCart) {
        itemToCart = {id , quantity: quantity + sameItemInCart.quantity }
        const otherItems = cart.filter( (item)=> item.id !== id )
        return [...otherItems, itemToCart]
    }
    return [...cart, itemToCart]
  }

export function removeItemUtil(id, cart, all=false) {
    let sameItemInCart = cart.find( (item)=> item.id === id )
    if (!sameItemInCart) {
        return
    }
    const otherItems = cart.filter( (item)=> item.id !== id )
    if (all) {
        return [...otherItems]
    }
    sameItemInCart = {id , quantity: sameItemInCart.quantity - 1 }
    return sameItemInCart.quantity === 0 ?  [...otherItems] : [...otherItems, sameItemInCart]
}
