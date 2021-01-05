import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Explore from '../screens/explore/index';
import Profile from '../screens/profile/index';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function Path() {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Explore">
                <Drawer.Screen name="Explore" component={Explore} />
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator> 
        </NavigationContainer>
    );
}

export default Path;

