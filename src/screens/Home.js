import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Image, Pressable, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../state/slices/productSlices';
import ScreenView from '../components/ScreenView';
import { ROUTES, BANNER_DATA } from '../utils/constants';
import Header from '../components/Header';
const { width } = Dimensions.get('window');
const Banner = () => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNER_DATA.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
        }
    }, [currentIndex]);
    return (
        <FlatList
            ref={flatListRef}
            data={BANNER_DATA}
            pagingEnabled={true}
            renderItem={({ item }) => (
                <View style={{ width, height: 200 }}>
                    <Image source={item.image} style={{ width: '100%', height: 200 }} />
                </View>

            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    );
};
const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const renderItem = ({ item }) => {
        return (
            <Pressable style={styles.productItem}
                onPress={() => navigation.navigate(ROUTES.PRODUCT_DETAILS, { product: item })}
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
    };

    return (
        <ScreenView isLoading={loading} error={error}>
            <Header isSearch={true} isLeft={false} navigation={navigation} title="Home" isRight={true} handleRightPress={() => navigation.navigate(ROUTES.CART)} />
            <ScrollView nestedScrollEnabled={true}>
                <Banner />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <FlatList
                        numColumns={2}
                        data={products}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        style={{ width: '100%' }}
                        contentContainerStyle={{ padding: 10 }}
                    />
                </View>
            </ScrollView>
        </ScreenView>
    );
};

const styles = StyleSheet.create({
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
});
export default Home;
