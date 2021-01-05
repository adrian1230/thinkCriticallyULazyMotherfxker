import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './btabs';
import * as React from 'react';
import Path from './drawer';

const Navigation = () => {
    return (
        <NavigationContainer>
            {/* <BottomTabNavigator /> */}
            <Path />
        </NavigationContainer>
    )
}

export default Navigation;

