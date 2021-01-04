import * as React from 'react';
import {View,Button,SafeAreaView,Text} from 'react-native';

const Explore = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text>Explore</Text>
                {/* <Button
                    title="Cart"
                    onPress={
                        () => navigation.navigate('Cart')
                    } 
                /> */}
            </View>
        </SafeAreaView>
    );
}

export default Explore;