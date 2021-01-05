import React from 'react';
import {View,useWindowDimensions, Text} from 'react-native';

const About = () => {
    const wW = useWindowDimensions().width;
    const h = wW * 0.18;
    const padding = wW * 0.08;

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                height: h,
                opacity: 0.6,
                alignItems: 'center',
                paddingHorizontal: padding
            }}
        >
            <Text>About</Text>
        </View>
    )
}

export default About;