import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { getItemPrice } from '../utils/commonFunctions';
import Quantity from './Quantity';
import { STRINGS, COLORS } from '../utils/constants';
const Card = ({
    title,
    description,
    image,
    handleRemoveFromCart = () => { },
    quantity,
    handleDecrementQuantity = () => { },
    handleIncrementQuantity = () => { },
    price
}) => {
return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={{ width: '70%' }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.cardFooter}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Pressable
                        style={[styles.button]}
                        onPress={handleRemoveFromCart}
                    >
                        <Text style={[styles.textStyle(16, true, COLORS.WHITE)]}>{STRINGS.REMOVE_FROM_CART}</Text>
                    </Pressable>
                <Quantity
                    quantity={quantity}
                    onDecrement={handleDecrementQuantity}
                    onIncrement={handleIncrementQuantity} />
                </View>
                <View>
                    <Text style={styles.textStyle(16, true, COLORS.BLACK)}>{`AED ${getItemPrice(price, quantity)}`}</Text>
                </View>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    textStyle: (fontSize, fontWeight, color = COLORS.BLACK  ) => ({
        color,
        fontSize,
        fontWeight,
    }),
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.GRAY,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: COLORS.WHITE,
        justifyContent: 'space-between',
    },
    card: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
    },
    image: {
        width: 100,
        height: 100,
    },
    button: {
        backgroundColor: COLORS.SECONDARY,
        padding: 10,
        borderRadius: 5,
    },
});
export default Card;