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

export const PAYMENT_METHODS = [
    {
        id: 0,
        title: 'Cash on Delivery',
    },
    {
        id: 1,
        title: 'Card',
    },
    {
        id: 2,
        title: 'UPI',
    },
]
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

export { API_URL, API_ENDPOINTS, ROUTES, Images };