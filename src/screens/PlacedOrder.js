import { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import { removeAllCartItems } from '../state/slices/cartSlices';
import { COLORS, Images, ROUTES, STRINGS } from '../utils/constants';

export default function PlacedOrderScreen({ navigation }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(removeAllCartItems())
    }, [])
    return (
        <View style={styles.container}>
            <LottieView
                source={Images.CHECK}
                autoPlay
                style={styles.check}
            />
            <Text style={styles.text}>{STRINGS.ORDER_PLACED_SUCCESSFULLY}</Text>
            <Pressable style={styles.button} onPress={() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: ROUTES.ROOT }],
                  });
            }}>
                <Text style={styles.buttonText}>{STRINGS.RETURN_TO_HOME}</Text>
            </Pressable>
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
    },
    check: {
        width: 200,
        height: 200,
    },
    button: {
        borderWidth: 1,
        borderColor: COLORS.BLACK,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});