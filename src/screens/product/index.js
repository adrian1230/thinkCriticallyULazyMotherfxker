import * as React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    ScrollView
} from 'react-native';
import {stats} from '../../../constants/index';

const Product = ({ route }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Product</Text>
                <Text>{route.params.itemId}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Product;
