import React from 'react';
import {
    Button, 
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Explore from '../screens/explore/index';
import Profile from '../screens/profile/index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

