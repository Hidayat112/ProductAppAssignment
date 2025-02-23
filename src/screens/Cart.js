import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../state/slices/cartSlices';
import { getTotalPrice } from '../utils/commonFunctions';
import { ROUTES } from '../utils/constants';

function CartScreen({ navigation }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);
    return (
        <View style={{ flex: 1 }}>
            <Header navigation={navigation} title="Cart" isRight={false} />
            <View style={{ flex: 1, padding: 10 }}>
                {
                    cartItems.length === 0 ? (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>No items in cart</Text>
                            </View>
                        ) : (
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={cartItems}
                                    ListFooterComponent={<View />}
                                    ListFooterComponentStyle={{ height: 60 }}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) => (
                                        <Card
                                            title={item.title}
                                            description={item.description}
                                            image={item.image}
                                            handleRemoveFromCart={() => dispatch(removeFromCart(item))}
                                            handleDecrementQuantity={() => dispatch(decrementQuantity(item))}
                                            handleIncrementQuantity={() => dispatch(incrementQuantity(item))}
                                            quantity={item.quantity}
                                            price={item.price}
                                        />
                                    )}
                                />
                                <View style={styles.totalPriceContainer}>
                                    <Text style={styles.textStyle(16, true, 'black')}>Total</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <Text style={styles.textStyle(16, true, 'black')}>{`AED ${getTotalPrice(cartItems)}`}</Text>
                                        <Pressable style={styles.checkoutButton} onPress={() => navigation.navigate(ROUTES.CART_DETAILS)}>
                                            <Text style={styles.textStyle(16, true, 'white')}>Checkout</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        )
                }
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: (fontSize, fontWeight, color) => ({
        fontSize,
        fontWeight,
        color,
    }),
    checkoutButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    totalPriceContainer: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
}); 
export default CartScreen;