import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import { BANNER_DATA } from '../utils/constants';

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

export default Banner;