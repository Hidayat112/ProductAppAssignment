import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const ScreenView = ({isLoading, error, children }) => {
    if (isLoading) {
        return<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff" /></View>;
    }
    if (error) {
        return <Text>Error: {error}</Text>;
    }
    return <View style={{ flex: 1}}>{children}</View>;
};
export default ScreenView;