import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeAllCartItems } from '../state/slices/cartSlices';
export default function PlacedOrderScreen({ navigation }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(removeAllCartItems())
        setTimeout(() => {
            navigation.popToTop()
        }, 2000)
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Order Placed Successfully</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});