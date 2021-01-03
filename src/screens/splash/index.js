import React from 'react';
import {Text, View} from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const Splash = () => {
    return (
        <View style={{flex:1}}>
            <ViewPager style={{flex:1}}>
                <View key="1">
                    <View                  
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Icon 
                            name="shopping-cart"
                            size={155}
                            color="brown" 
                        />
                        <View style={{ marginTop: 16 }}>
                            <Text
                                style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}
                            >
                                Ore Zaar
                            </Text>
                        </View>
                    </View>
                </View>
            </ViewPager>
        </View>
    );
}

export default Splash;