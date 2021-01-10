import * as React from 'react';
import {View,SafeAreaView,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../signup/index';

const Signin = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text>Signin</Text>
            </View>
        </SafeAreaView>
    );
}

export default Signin;