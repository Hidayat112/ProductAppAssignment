import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, ROUTES, STRINGS } from '../utils/constants';
import Home from '../screens/Home';
import CartScreen from '../screens/Cart';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Images } from '../utils/constants';
import ProductDetailsScreen from '../screens/ProductDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.HOME} component={Home} />
            <Stack.Screen name={ROUTES.PRODUCT_DETAILS} component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}
const CartStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.CART} component={CartScreen} />
        </Stack.Navigator>
    )
}
const BottomTab = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ROUTES.HOME_STACK}
        >
            <Tab.Screen name={ROUTES.HOME_STACK} component={HomeStackNavigator} options={{
                tabBarIcon: ({ focused, color }) => (
                    <Image source={Images.HOME} style={[styles.tabBarItemImage, { ...(focused ? { tintColor: color } : {}) }]} />
                ),
                tabBarLabel: STRINGS.HOME,
            }} />
            <Tab.Screen
                name={ROUTES.CART_STACK}
                component={CartStackNavigator}
                options={{
                    tabBarLabel: STRINGS.CART,
                    tabBarIcon: ({ focused, color }) => (
                        <Image source={Images.CART} style={[styles.tabBarItemImage, { ...(focused ? { tintColor: color } : {}) }]} />
                    ),  
                    ...(cartItems && cartItems.length > 0 ? {
                        tabBarBadge: cartItems && cartItems.length,
                        tabBarBadgeStyle: {
                            backgroundColor: COLORS.RED,
                            color: COLORS.WHITE,
                            fontSize: 10,
                            fontWeight: 'bold',
                        }
                    } : {})
                }}
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.WHITE,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    tabBarItem: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarItemImage: {
        width: 25,
        height: 25,
    },
    tabBarItemText: {
        fontSize: 12,
        fontWeight: 'bold',
    }
})

export default BottomTab;