import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Image, Pressable, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../state/slices/productSlices';
import ScreenView from '../components/ScreenView';
import { ROUTES, BANNER_DATA } from '../utils/constants';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleProductPress = (item) => {
        navigation.navigate(ROUTES.PRODUCT_DETAILS, { product: item });
    }

    return (
        <ScreenView isLoading={loading} error={error}>
            <Header isSearch={true} isLeft={false} navigation={navigation} title="Home" isRight={false} />
            <ScrollView nestedScrollEnabled={true}>
                <Banner />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <FlatList
                        numColumns={2}
                        data={products}
                        renderItem={({ item }) => <ProductCard item={item} handleProductPress={handleProductPress} />}
                        keyExtractor={(item) => item.id.toString()}
                        style={{ width: '100%' }}
                        contentContainerStyle={{ padding: 10 }}
                    />
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default Home;
