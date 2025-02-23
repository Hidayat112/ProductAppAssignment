import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { Images, ROUTES } from '../utils/constants';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
function SearchScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const allProducts = useSelector((state) => state.product.products);
    const [filteredProducts, setFilteredProducts] = useState([]);



    const handleSearch = (text) => {
        setSearchText(text);
        setFilteredProducts(allProducts.filter(product => product.title.toLowerCase().includes(text.toLowerCase())));
    }
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={Images.BACK} style={styles.backIcon} />
                </Pressable>
                <View style={styles.textInputContainer}>
                    <Image source={Images.SEARCH} style={styles.searchIcon} />
                    <TextInput placeholder="Search" style={styles.textInput} value={searchText} onChangeText={handleSearch} />
                </View>
            </View>

            {
                ((searchText.length > 0 && filteredProducts.length > 0) || (searchText.length === 0 && allProducts.length > 0)) ? (
                    <FlatList
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        data={filteredProducts.length > 0 ? filteredProducts : allProducts}
                        renderItem={({ item }) => <ProductCard item={item} navigation={navigation} />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                ) : (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>No products found</Text>
                    </View>

                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    textInputContainer: {
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
    },
    textInput: {
        flex: 1,
    },
    searchIcon: {
        width: 20,
        height: 20
    },
    productItem: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0'
    },
    productItemPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%'
    }

})
export default SearchScreen;