import React from 'react';
import {View,useWindowDimensions} from 'react-native';
import RoundedBtn from './RoundedButton';

const Footer = ({RBtnLabel = false,RBtnPress = false}) => {
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
            <RoundedBtn
                label={RBtnLabel}
                onPress={RBtnPress}
            />
        </View>
    )
}

export default Footer;