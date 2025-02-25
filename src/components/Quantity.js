import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';    
const Quantity = ({ quantity, onIncrement = () => { }, onDecrement = () => { } }) => {
    return (
        <View style={styles.quantityContainer}>
            <Pressable onPress={() => {
            if (quantity > 0) {
                onDecrement()
            }
        }}
            disabled={quantity === 1}
        >
            <Text style={styles.textStyle(true, 30, true, COLORS.BLACK)}>-</Text>
        </Pressable>
        <Text style={styles.textStyle(true, 17, true, COLORS.BLACK)}>{quantity}</Text>
        <Pressable onPress={onIncrement}>
            <Text style={styles.textStyle(true, 18, true, COLORS.BLACK)}>+</Text>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    quantityContainer: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.GRAY,
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:10,
        gap: 10
    },
    textStyle: (isBold, fontSize, isCenter, color = COLORS.BLACK) => ({
        fontSize: fontSize,
        fontWeight: isBold ? 'bold' : 'normal',
        textAlign: isCenter ? 'center' : 'left',
        color
    }),
})
export default Quantity;
