import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Explore from '../screens/explore/index';
import Chat from "../screens/message/index";
import Profile from '../screens/profile/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image, Text, View, Button} from "react-native";
import {icons} from '../../constants/index';

const Stack = createStackNavigator();

const Tabs = createBottomTabNavigator();

// const screenOptionStyle = {
//     headerStyle: {
//       backgroundColor: "red",
//     },
//     headerTintColor: "white",
//     headerBackTitle: "Back",
// };

function ExploreTitle() {
    return (
        <Image 
            style={{width:120,height:50,alignSelf:'flex-start'}}
            source={icons.explore}
        />
    )
}

function ChatTitle() {
    return (
        <Image 
            style={{width:50,height:50}}
            source={icons.chat}
        />
    )
}

function ProfileTitle() {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}

const ExploreStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerTitle: props => <ExploreTitle /> }}>
            <Stack.Screen name="Explore" component={Explore} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
        </Stack.Navigator>
    )
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerTitle: props => <ProfileTitle /> }}>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

const ChatStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerTitle: props => <ChatTitle /> }}>
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