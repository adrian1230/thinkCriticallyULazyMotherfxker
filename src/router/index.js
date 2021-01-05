import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './btabs';
import * as React from 'react';

const Navigation = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    )
}

export default Navigation;

