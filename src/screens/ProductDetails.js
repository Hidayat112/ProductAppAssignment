import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../state/slices/cartSlices';
import { ROUTES } from '../utils/constants';
import Quantity from '../components/Quantity';
function ProductDetailsScreen({ navigation, route }) {
    const dispatch = useDispatch();
    const { product } = route.params;
    const cartItems = useSelector((state) => state.cart.cartItems);
    const isInCart = cartItems.some(item => item.id === product.id);
    const quantity = cartItems.find(item => item.id === product.id)?.quantity || 0;
    return (
        <View style={{ flex: 1 }}>
            <Header navigation={navigation} title="" handleRightPress={() => navigation.navigate(ROUTES.CART)} />
            <ScrollView>
                <Image
                    source={{ uri: product.image }}
                    style={{ width: "100%", height: 300 }}
                    resizeMode="cover"
                />
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.textStyle(true, 20, true)}>{product.title}</Text>
                        <Text style={styles.textStyle(false, 16, false)}>{product.description}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.textStyle(false, 16, false)}>{`AED${product.price}`}</Text>
                            <Text style={styles.textStyle(false, 16, false)}>{`★${product.rating.rate}`}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={[styles.button, !isInCart && { backgroundColor: 'lightgray' }]}
                                disabled={!isInCart}
                                onPress={() => dispatch(removeFromCart(product))}
                            >
                                <Text style={[styles.textStyle(true, 16, true, 'white')]}>Remove to cart</Text>
                            </Pressable>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                {
                                    quantity === 0 ? (
                                        <Pressable style={[styles.button]} onPress={() => dispatch(addToCart(product))}>
                                            <Text style={styles.textStyle(true, 16, true, 'white')}>Add to Cart</Text>
                                        </Pressable>
                                    ) : (
                                            <Quantity
                                                quantity={quantity}
                                                onDecrement={() => dispatch(decrementQuantity(product))}
                                                onIncrement={() => dispatch(incrementQuantity(product))}
                                            />
                                    )
                                }
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
   
    textStyle: (isBold, fontSize, isCenter, color = 'black') => ({
        fontSize: fontSize,
        fontWeight: isBold ? 'bold' : 'normal',
        textAlign: isCenter ? 'center' : 'left',
        color
    }),
    priceContainer: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5160D2',
        padding: 10,
        borderRadius: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        gap: 10
    }
})
export default ProductDetailsScreen;