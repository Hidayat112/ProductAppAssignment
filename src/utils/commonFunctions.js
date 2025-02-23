
const getItemPrice = (price, quantity) => { 
    return price * quantity;
}

const getTotalPrice = (cartItems) => {
    const totalPrice = cartItems.reduce((total, item) => total + getItemPrice(item.price, item.quantity), 0);
    return totalPrice.toFixed(2);
}


export { getItemPrice, getTotalPrice };