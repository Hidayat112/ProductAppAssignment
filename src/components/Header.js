import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, TextInput } from 'react-native';
import { ROUTES, Images, STRINGS, COLORS } from '../utils/constants';

const Header = ({
    navigation,
    title,
    isLeft = true,
    isRight = true,
    handleRightPress = () => { },
    isSearch = false
}) => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                {isLeft && <Pressable
                    onPress={() => navigation.goBack()}
                >
                    <Image source={Images.BACK} style={styles.icon} />
                </Pressable>}
                {title && <Text style={styles.title}>{title}</Text>}
                {isSearch && <Pressable style={styles.searchView} onPress={() => navigation.navigate(ROUTES.SEARCH)}>
                    <Image source={Images.SEARCH} style={styles.icon} />
                    <Text>{STRINGS.SEARCH}</Text></Pressable>}
            </View>

            {isRight &&
                <Pressable
                    onPress={() => handleRightPress()}
                >
                    <Image source={Images.CART} style={styles.icon} />
                </Pressable>}
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    },
    searchView: {
        borderWidth: 1,
        borderColor: COLORS.GRAY,
        borderRadius: 20,
        width: 100,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: COLORS.WHITE,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.GRAY
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    }
})
export default Header;