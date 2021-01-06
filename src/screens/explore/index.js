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
 
const Explore = ({ navigation }) => {
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
        {
            "id": 1,
            "name": "G-String",
            "img": images._2,
            "height": Image.resolveAssetSource(images._2).height + 100,
            "width": Image.resolveAssetSource(images._2).width
        },
        {
            "id": 2,
            "name": "Backpack",
            "img": images._3,
            "height": Image.resolveAssetSource(images._3).height + 100,
            "width": Image.resolveAssetSource(images._3).width
        },
        {
            "id": 3,
            "name": "Backpack",
            "img": images._4,
            "height": Image.resolveAssetSource(images._4).height + 100,
            "width": Image.resolveAssetSource(images._4).width
        },
        {
            "id": 4,
            "name": "Backpack",
            "img": images._5,
            "height": Image.resolveAssetSource(images._5).height + 100,
            "width": Image.resolveAssetSource(images._5).width
        },
        {
            "id": 5,
            "name": "Backpack",
            "img": images._6,
            "height": Image.resolveAssetSource(images._6).height + 100,
            "width": Image.resolveAssetSource(images._6).width
        },
        {
            "id": 6,
            "name": "Backpack",
            "img": images._7,
            "height": Image.resolveAssetSource(images._7).height + 100,
            "width": Image.resolveAssetSource(images._7).width
        },
        {
            "id": 7,
            "name": "Backpack",
            "img": images._8,
            "height": Image.resolveAssetSource(images._8).height + 100,
            "width": Image.resolveAssetSource(images._8).width
        },
        {
            "id": 8,
            "name": "Backpack",
            "img": images._9,
            "height": Image.resolveAssetSource(images._9).height + 100,
            "width": Image.resolveAssetSource(images._9).width
        },
        {
            "id": 9,
            "name": "Backpack",
            "img": images._10,
            "height": Image.resolveAssetSource(images._10).height + 100,
            "width": Image.resolveAssetSource(images._10).width
        },
        {
            "id": 10,
            "name": "Backpack",
            "img": images._11,
            "height": Image.resolveAssetSource(images._11).height + 100,
            "width": Image.resolveAssetSource(images._11).width
        },
        {
            "id": 11,
            "name": "Backpack",
            "img": images._12,
            "height": Image.resolveAssetSource(images._12).height + 100,
            "width": Image.resolveAssetSource(images._12).width
        },
        {
            "id": 12,
            "name": "Backpack",
            "img": images._13,
            "height": Image.resolveAssetSource(images._13).height + 100,
            "width": Image.resolveAssetSource(images._13).width
        },
        {
            "id": 13,
            "name": "Backpack",
            "img": images._14,
            "height": Image.resolveAssetSource(images._14).height + 100,
            "width": Image.resolveAssetSource(images._14).width
        },
        {
            "id": 14,
            "name": "Backpack",
            "img": images._15,
            "height": Image.resolveAssetSource(images._15).height + 100,
            "width": Image.resolveAssetSource(images._15).width
        },
        {
            "id": 15,
            "name": "Backpack",
            "img": images._16,
            "height": Image.resolveAssetSource(images._16).height + 100,
            "width": Image.resolveAssetSource(images._16).width
        },
        {
            "id": 16,
            "name": "Backpack",
            "img": images._17,
            "height": Image.resolveAssetSource(images._17).height + 100,
            "width": Image.resolveAssetSource(images._17).width
        },
        {
            "id": 17,
            "name": "Backpack",
            "img": images._18,
            "height": Image.resolveAssetSource(images._18).height + 100,
            "width": Image.resolveAssetSource(images._18).width
        },
        {
            "id": 18,
            "name": "Backpack",
            "img": images._19,
            "height": Image.resolveAssetSource(images._19).height + 100,
            "width": Image.resolveAssetSource(images._19).width
        },
        {
            "id": 19,
            "name": "Backpack",
            "img": images._20,
            "height": Image.resolveAssetSource(images._20).height + 100,
            "width": Image.resolveAssetSource(images._20).width
        },
        {
            "id": 20,
            "name": "Backpack",
            "img": images._21,
            "height": Image.resolveAssetSource(images._21).height + 100,
            "width": Image.resolveAssetSource(images._21).width
        },
        {
            "id": 21,
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