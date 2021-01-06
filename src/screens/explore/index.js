import * as React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    TextInput,
    Image,
    ScrollView
} from 'react-native';
import {images} from '../../../constants/index';
 
const Explore = ({ navigation,props }) => {
    const state = {
        search: '',
    }

    const data_ = [
        {
            "id": 0,
            "name": "Backpack",
            "img": images._1,
            "height": Image.resolveAssetSource(images._1).height + 100,
            "width": Image.resolveAssetSource(images._1).width
        },
    ];

    return (
        <SafeAreaView>
            <View>
                <TextInput
                    style={{
                        backgroundColor:'#c4c3c2',
                        width: '70%',
                        alignSelf: 'center',
                        borderRadius: 15,
                        marginTop: 15,
                        paddingLeft: 20,
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 15
                    }}
                    placeholder="Search"
                    // onChangeText={(search)=>this.setState({search})} 
                />
                <View 
                    style={{
                        width:'75%',
                        marginTop: 15,
                        alignSelf:'center',
                        height:'1%',
                        backgroundColor:'lightgrey'
                    }}
                >
                </View>
                <ScrollView style={{
                    marginTop: 15,
                    alignSelf:'center'
                    }}
                >
                    <View style={{
                        borderRadius: 20,
                        padding: 25,
                        marginBottom: 20,
                        height: 295+100,
                        backgroundColor: '#e6e8e6',
                    }}>
                        <Text
                            style={{
                                fontWeight: '700',
                                fontSize: 25
                            }}
                        >
                            BackPack
                        </Text>
                        <Image 
                            source={images._2} 
                            style={{
                                position: 'relative',
                                left: 35,
                                width: 240,
                                height: 240,
                                zIndex: 2,
                                top: 35,
                            }}
                            resizeMode="stretch" 
                        />
                        <View style={styles.Trapezoid}>
                        </View>
                    </View>
                </ScrollView>
                {/* <Text>Explore</Text>
                <View style={styles.btn}>
                    <Button
                        title="Profile"
                        onPress={
                            () => navigation.navigate('Profile')
                        } 
                    />
                </View> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Trapezoid: {
        width: 250,
        borderBottomColor: "lightgray",
        borderBottomWidth: 140,
        borderLeftWidth: 0,
        borderRightWidth: 180,
        borderRadius: 20,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        position: 'relative',
        bottom: 120,
        zIndex: 1
    },
    // btn: {
    //     width: '50%',
    //     alignSelf: 'center',
    //     marginTop: 15,
    //     borderRadius: 25
    // },
})

export default Explore;