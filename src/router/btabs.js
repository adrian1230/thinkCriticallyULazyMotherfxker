import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Explore from '../screens/explore/index';
import Chat from "../screens/message/index";
import Profile from '../screens/profile/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const Tabs = createBottomTabNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "red",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const ExploreStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

const ChatStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    )
}

const BottomTabNavigator = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                labelStyle: {fontSize:25},
                activeTintColor: 'red',
                inactiveTintColor: 'black',
            }}
        >
            <Tabs.Screen 
                name="Explore" 
                component={ExploreStackNavigator}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="crosshairs"
                        />
                    )
                }} 
            />
            <Tabs.Screen name="Chat" component={ChatStackNavigator} />
            <Tabs.Screen name="Profile" component={ProfileStackNavigator} />
        </Tabs.Navigator>
    )
}

export default BottomTabNavigator;