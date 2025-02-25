import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../utils/constants';
const ProductCard = ({ item,handleProductPress}) => {
    return (
        <Pressable style={styles.productItem}
            onPress={() => handleProductPress(item)}
        >
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 10 }} />
            <Text>{item.title}</Text>
            <View style={styles.productItemPriceContainer}>
                <Text>{`AED ${item.price}`}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>{`★${item.rating.rate}`}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    productItem: {
        flex: 1,
        borderWidth: 1,
        borderColor: COLORS.GRAY,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.LIGHT_GRAY
    },
    productItemPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%'
    }
})


export default ProductCard;