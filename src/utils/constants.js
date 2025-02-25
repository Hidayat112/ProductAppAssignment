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
const Images = {
    BACK: require('../assets/back/back.png'),
    CART: require('../assets/cart/cart.png'),
    SEARCH: require('../assets/search/search.png'),
    CHECK: require('../assets/lottie/success.json'),
    ERROR: require('../assets/lottie/error.json'),
    HOME: require('../assets/home/home.png'),
    BANNER1: require('../assets/banner/first.jpg'),
    BANNER2: require('../assets/banner/second.jpg'),
    BANNER3: require('../assets/banner/third.jpg'),
    BANNER4: require('../assets/banner/fourth.jpg'),
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
    NO_PRODUCTS_FOUND: 'No products found',
    ERROR: 'Error',
    SOMETHING_WENT_WRONG: 'Something went wrong!',
    TRY_AGAIN: 'Try Again',
}

const COLORS = {
    PRIMARY: '#0000ff',
    BLACK: '#000000',
    GRAY: '#808080',
    SECONDARY: '#5160D2',
    WHITE: '#ffffff',
    LIGHT_GRAY: '#f0f0f0',
    LIGHT_GRAY_2: '#f5f5f5',
    LIGHT_GRAY_3: '#f9f9f9',
    LIGHT_GRAY_4: '#fafafa',
    LIGHT_GRAY_5: '#fbfbfb',
    LIGHT_GRAY_6: '#fcfcfc',
    LIGHT_GRAY_7: '#fdfdfd',
    LIGHT_GRAY_8: '#fefefe',
    LIGHT_GRAY_9: '#f0f0f0',
    GREEN: 'green',
    RED: 'red',
}

export const BANNER_DATA = [
    {
        id: 0,
        image: Images.BANNER1,
    },
    {
        id: 1,
        image: Images.BANNER2,
    },
    {
        id: 2,
        image: Images.BANNER3,
    },
    {
        id: 3,
        image: Images.BANNER4,
    },
]

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



export { API_URL, API_ENDPOINTS, ROUTES, Images, STRINGS, COLORS };