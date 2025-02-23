import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import { Provider } from 'react-redux';
import store from './src/state/store';
import ProductDetailsScreen from './src/screens/ProductDetails';
import { ROUTES } from './src/utils/constants';
import CartScreen from './src/screens/Cart';
import CartDetailsScreen from './src/screens/CartDetails';
import PlacedOrderScreen from './src/screens/PlacedOrder';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ROUTES.HOME} component={Home} />
          <Stack.Screen name={ROUTES.SEARCH} component={SearchScreen} />
          <Stack.Screen name={ROUTES.PRODUCT_DETAILS} component={ProductDetailsScreen} />
          <Stack.Screen name={ROUTES.CART} component={CartScreen} />
          <Stack.Screen name={ROUTES.CART_DETAILS} component={CartDetailsScreen} />
          <Stack.Screen name={ROUTES.PLACED_ORDER} component={PlacedOrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



export default App;
