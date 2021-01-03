import React from 'react';
import {Text,TouchableOpacity,View} from 'react-native';

const RoundedBtn = ({label, onPress}) => {
    return (
        <View>
            <TouchableOpacity
                style={{alignItems:'center',justifyContent:'center'}}
                onPress={onPress}
            >
                <Text 
                    style={{
                        fontSize:25,
                        color:'blue',
                        fontWeight: 'bold'
                    }}
                >
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default RoundedBtn;