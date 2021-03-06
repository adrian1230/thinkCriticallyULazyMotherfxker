

// const RollerDraw = (props) => {
//     const toggle = () => {
//         props.navigationProps.toggle();
//     };

//     return (
//         <View style={{ flexDirection: 'row' }}>
//             <TouchableOpacity
//                 onPress={()=> toggle()} 
//                 style={{height:'100%'}}
//             >
//                 <Image 
//                     source={icons.orezaar} 
//                     resizeMode="cover"
//                     style={{
//                         width: 50,
//                         height: 50,
//                         marginTop: 3,
//                         marginLeft: 5
//                     }}
//                 />
//             </TouchableOpacity>
//         </View>
//     );
// }

// function ExploreScreenStack({navigation}) {
//     return (
//         <Stack.Navigator initialRouteName="Explore">
//             <Stack.Screen
//                 name="Explore"
//                 component={Explore}
//                 options={{
//                     title: 'Explore',
//                     headerLeft: () => 
//                         <RollerDraw
//                             navigationProps={navigation}
//                         />
//                     ,
//                     headerStyle: {
//                         backgroundColor: "grey"
//                     },
//                     headerTintColor: 'orange',
//                     headerTitleStyle: {
//                         fontWeight: '600'
//                     }
//                 }} 
//             />
//         </Stack.Navigator>
//     );
// }

// function ProfileScreenStack({navigation}) {
//     return (
//         <Stack.Navigator initialRouteName="Profile">
//             <Stack.Screen
//                 name="Profile"
//                 component={Profile}
//                 options={{
//                     title: 'Profile',
//                     headerLeft: () => 
//                         <RollerDraw
//                             navigationProps={navigation}
//                         />
//                     ,
//                     headerStyle: {
//                         backgroundColor: "grey"
//                     },
//                     headerTintColor: 'orange',
//                     headerTitleStyle: {
//                         fontWeight: '600'
//                     }
//                 }} 
//             />
//         </Stack.Navigator>
//     );
// }

// function Path() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator
//                 drawerContentOptions={{
//                     activeTintColor: 'red',
//                     itemStyle: {marginVertical:7}
//                 }}
//             >
//                 <Drawer.Screen
//                     name="Explore"
//                     options={{drawerLabel: 'Explorer'}}
//                     component={ExploreScreenStack} 
//                 />
//                 <Drawer.Screen
//                     name="Profile"
//                     options={{drawerLabel: 'Profile'}}
//                     component={ProfileScreenStack} 
//                 />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }

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


