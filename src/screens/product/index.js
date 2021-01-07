import * as React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    ScrollView,
    Image,
    Button
} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {stats} from '../../../constants/index';
import InputSpinner from "react-native-input-spinner";

const Product = ({ route }) => {
    const state = {
        quan: 0,
    }
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
                    <View style={{marginLeft:25,marginTop:5,flexDirection:'row'}}>
                        <Text style={{fontWeight:'700',fontSize:29}}>Price:</Text>
                        <Text style={{fontSize:29,marginLeft:15,fontWeight:'700',alignSelf:'center'}}>
                            {stats.data_[route.params.itemId].price}
                        </Text>
                    </View>
                    <View style={{marginLeft:25,marginTop:5,flexDirection:'row'}}>
                        <Text style={{fontWeight:'700',fontSize:29}}>Quantity:</Text>
                        <View style={{marginLeft:15,alignSelf:'center'}}>
                            <InputSpinner 
                                min={0}
                                step={1}
                                colorMax={"#f04048"}
                                colorMin={"#40c5f4"}
                                value={state.quan}
                                onChange={() => {
                                    state.quan = state.quan + 1
                                }}
                            />
                            <Text>{state.quan}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Product;
