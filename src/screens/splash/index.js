import React from 'react';
import {Text, View, Image} from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Icon from 'react-native-vector-icons/FontAwesome';
import {icons} from '../../../constants/index';

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
                        <Image
                            source={icons.orezaar} 
                            resizeMode="cover"
                            style={{
                                width: 175,
                                height: 175,
                                borderRadius: 15
                            }}
                        />
                        <View style={{ marginTop: 16 }}>
                            <Text
                                style={{ fontSize: 24, fontWeight: 'bold', color: 'brown' }}
                            >
                                MotherFuxker
                            </Text>
                        </View>
                    </View>
                </View>
            </ViewPager>
        </View>
    );
}

export default Splash;