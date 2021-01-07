import * as React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    ScrollView,
    Image
} from 'react-native';
import {stats} from '../../../constants/index';

const Product = ({ route }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                {/* <Text>{route.params.itemId}</Text> */}
                <View style={{
                    marginTop: 15,
                }}>
                    <Image
                        style={{
                            alignSelf: 'center',
                        }}
                        source={
                            stats.data_[
                                route.params.itemId
                            ].img
                        } 
                    />
                    <Text style={{marginTop:10,fontSize:17,fontWeight:'700',alignSelf:'center'}}>
                        {stats.data_[route.params.itemId].name}
                    </Text>
                    <Text style={{marginTop:2,fontSize:14,alignSelf:'center'}}>
                        {stats.data_[route.params.itemId].description}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Product;
