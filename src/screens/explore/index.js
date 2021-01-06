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
console.disableYellowBox = true;
import {images} from '../../../constants/index';
 
const Explore = ({ navigation,props }) => {
    const state = {
        search: '',
    }

    const {width,height} = Image.resolveAssetSource(images._2);

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
                        height: '75%',
                        backgroundColor: 'lightgray',
                    }}>
                        <Text
                            style={{
                                fontWeight: '700',
                                fontSize: 25
                            }}
                        >
                            BackPack
                        </Text>
                        <Image source={images._1} style={styles.image_} />
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
    // btn: {
    //     width: '50%',
    //     alignSelf: 'center',
    //     marginTop: 15,
    //     borderRadius: 25
    // },
    Trapezoid: {
        width: 250,
        borderBottomColor: "gray",
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
    image_: {
        position: 'relative',
        left: 35,
        zIndex: 2,
        top: 35,
    }
})

export default Explore;