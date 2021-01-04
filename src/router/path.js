import * as React from 'react';
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Explore from '../screens/explore/index';
import Profile from '../screens/profile/index';
import {icons} from '../../constants/index';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RollerDraw = (props) => {
    const toggle = () => {
        props.navigationProps.toggle();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={()=> toggle()} 
                style={{height:'100%'}}
            >
                <Image 
                    source={icons.orezaar} 
                    resizeMode="cover"
                    style={{
                        width: 50,
                        height: 50,
                        marginTop: 3,
                        marginLeft: 5
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

function ExploreScreenStack({navigation}) {
    return (
        <Stack.Navigator initialRouteName="Explore">
            <Stack.Screen
                name="Explore"
                component={Explore}
                options={{
                    title: 'Explore',
                    headerLeft: () => 
                        <RollerDraw
                            navigationProps={navigation}
                        />
                    ,
                    headerStyle: {
                        backgroundColor: "grey"
                    },
                    headerTintColor: 'orange',
                    headerTitleStyle: {
                        fontWeight: '600'
                    }
                }} 
            />
        </Stack.Navigator>
    );
}

function ProfileScreenStack({navigation}) {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile',
                    headerLeft: () => 
                        <RollerDraw
                            navigationProps={navigation}
                        />
                    ,
                    headerStyle: {
                        backgroundColor: "grey"
                    },
                    headerTintColor: 'orange',
                    headerTitleStyle: {
                        fontWeight: '600'
                    }
                }} 
            />
        </Stack.Navigator>
    );
}

function Path() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: 'red',
                    itemStyle: {marginVertical:7}
                }}
            >
                <Drawer.Screen
                    name="Explore"
                    options={{drawerLabel: 'Explorer'}}
                    component={ExploreScreenStack} 
                />
                <Drawer.Screen
                    name="Profile"
                    options={{drawerLabel: 'Profile'}}
                    component={ProfileScreenStack} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Path;

