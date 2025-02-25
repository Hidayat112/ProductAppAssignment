import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';
import { Images, STRINGS } from '../utils/constants';

const ErrorView = ({ refetch = () => { } }) => {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LottieView source={Images.ERROR} autoPlay loop style={styles.errorAnimation} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{STRINGS.SOMETHING_WENT_WRONG}</Text>
        <Pressable onPress={() => {
            refetch();
        }}
            style={styles.tryAgainButton}
        >
            <Text style={styles.tryAgainButtonText}>{STRINGS.TRY_AGAIN}</Text>
        </Pressable>
    </View>;
}

const ScreenView = ({ isLoading, error, children, refetch = () => { } }) => {
    if (isLoading) {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator size="large" color="#0000ff" /></View>;
    }
    if (error) {
        return <ErrorView refetch={refetch} />;
    }
    return <View style={{ flex: 1 }}>{children}</View>;
};

const styles = StyleSheet.create({
    tryAgainButtonText: {
        color: '#0000ff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tryAgainButton: {
        borderWidth: 1,
        borderColor: '#0000ff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    errorAnimation: {
        width: 200,
        height: 200,
    }
});
export default ScreenView;