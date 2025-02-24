const API_URL = 'https://fakestoreapi.com';

const API_ENDPOINTS = {
    PRODUCTS: '/products',
}
const ROUTES = {
    ROOT: 'Root',
    HOME: 'Home',
    HOME_STACK: 'HomeStack',
    PRODUCT_DETAILS: 'ProductDetails',
    SEARCH: 'Search',
    CART: 'Cart',
    CART_STACK: 'CartStack',
    CART_DETAILS: 'CartDetails',
    PLACED_ORDER: 'PlacedOrder',
}


export const BANNER_DATA = [
    {
        id: 0,
        image: require('../assets/banner/first.jpg'),
    },
    {
        id: 1,
        image: require('../assets/banner/second.jpg'),
    },
    {
        id: 2,
        image: require('../assets/banner/third.jpg'),
    },
    {
        id: 3,
        image: require('../assets/banner/fourth.jpg'),
    },
]
const Images = {
    BACK: require('../assets/back/back.png'),
    CART: require('../assets/cart/cart.png'),
    SEARCH: require('../assets/search/search.png'),
    CHECK: require('../assets/lottie/success.json'),
    HOME: require('../assets/home/home.png'),
}

const STRINGS = {
    HOME: 'Home',
    CART: 'Cart',
    SEARCH: 'Search',
    PRODUCT_DETAILS: 'Product Details',
    ADD_TO_CART: 'Add to Cart',
    REMOVE_FROM_CART: 'Remove from Cart',
    PLACE_ORDER: 'Place Order',
    ORDER_PLACED: 'Order Placed',
    ORDER_DETAILS: 'Order Details',
    NO_ITEMS_IN_CART: 'No items in cart',
    TOTAL: 'Total',
    CHECKOUT: 'Checkout',
    CART_DETAILS: 'Cart Details',
    PRICE: 'Price',
    QUANTITY: 'Quantity',
    SUBTOTAL: 'Subtotal',
    CASH_ON_DELIVERY: 'Cash on Delivery',
    CARD: 'Card',
    UPI: 'UPI',
    ORDER_PLACED_SUCCESSFULLY: 'Order Placed Successfully',
    RETURN_TO_HOME: 'Return to Home',
}

export const PAYMENT_METHODS = [
    {
        id: 0,
        title: STRINGS.CASH_ON_DELIVERY,
    },
    {
        id: 1,
        title: STRINGS.CARD,
    },
    {
        id: 2,
        title: STRINGS.UPI,
    },
]
export { API_URL, API_ENDPOINTS, ROUTES, Images, STRINGS };