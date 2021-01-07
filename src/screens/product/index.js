import * as React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    ScrollView
} from 'react-native';

const Product = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Product</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Product;