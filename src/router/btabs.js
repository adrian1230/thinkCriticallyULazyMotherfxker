import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Explore from '../screens/explore/index';
import Chat from "../screens/message/index";
import Profile from '../screens/profile/index';

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
        <Tabs.Navigator>
            <Tabs.Screen name="Explore" component={ExploreStackNavigator} />
            <Tabs.Screen name="Chat" component={ChatStackNavigator} />
        </Tabs.Navigator>
    )
}

export default BottomTabNavigator;