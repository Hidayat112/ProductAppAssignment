import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, TextInput } from 'react-native';
import { ROUTES, Images, STRINGS } from '../utils/constants';

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
                <Image source={Images.BACK} style={{
                    width: 30,
                    height: 30
                }} />
                </Pressable>}
                {title && <Text style={styles.title}>{title}</Text>}
                {isSearch && <Pressable style={styles.searchView} onPress={() => navigation.navigate(ROUTES.SEARCH)}>
                    <Image source={Images.SEARCH} style={{
                        width: 20,
                        height: 20
                    }} />
                    <Text>{STRINGS.SEARCH}</Text></Pressable>}
            </View>

            {isRight &&
                <Pressable
                    onPress={() => handleRightPress()}

                >
                <Image source={Images.CART} style={{
                    width: 30,
                    height: 30
                }} />
            </Pressable>}
        </View>
    );
}

const styles = StyleSheet.create({
    searchView: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        width:100,
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
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    }
})
export default Header;