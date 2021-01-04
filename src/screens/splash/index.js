import React, { useRef } from 'react';
import {Text, View, Image} from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Icon from 'react-native-vector-icons/FontAwesome';
import {icons} from '../../../constants/index';
import Footer from '../../components/Footer';
import Explore from '../explore/index';
import Path from '../../router/path';

Icon.loadFont();

const Splash = () => {
    const pagerRef = useRef(null);

    const handlePageChange = pageNumber => {
        pagerRef.current.setPage(pageNumber);
    };

    return (
        <View style={{flex:1}}>
            <ViewPager style={{flex:1}} initialPage={0} ref={pagerRef}>
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
                    <Footer 
                        // @ts-ignore
                        RBtnLabel="Continue"
                        // @ts-ignore
                        RBtnPress={()=>{
                            handlePageChange(1);
                        }}
                    />
                </View>
                <View key="2">
                    <View                  
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={icons.go_shopping} 
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
                                Get Up and Move!
                            </Text>
                        </View>
                    </View>
                    <Footer 
                        // @ts-ignore
                        RBtnLabel="Go!"
                        // @ts-ignore
                        RBtnPress={()=>{
                            handlePageChange(2);
                        }}
                    />
                </View>
                <View key="3">
                    <Path />
                </View>
            </ViewPager>
        </View>
    );
}

export default Splash;