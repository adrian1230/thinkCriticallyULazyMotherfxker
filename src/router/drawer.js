import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Explore from '../screens/explore/index';
import Profile from '../screens/profile/index';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

function Path() {
    return(
        <Drawer.Navigator initialRouteName="Explore">
            <Drawer.Screen name="Explore" component={Explore} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator> 
    );
}

export default Path;

