import * as React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {stats} from '../../../constants/index';
 
const Explore = ({ navigation }) => {
    const state = {
        search: '',
    }

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
                <ScrollView style={{
                    marginTop: 15,
                    alignSelf:'center'
                    }}
                >
                    {
                        stats.data_.map(
                            (val,ind) =>
                                <TouchableOpacity key={ind}>
                                    <View 
                                        style={{
                                            borderRadius: 20,
                                            padding: 25,
                                            marginBottom: 20,
                                            height: 395,
                                            backgroundColor: '#e6e8e6',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: '600',
                                                fontSize: 23
                                            }}
                                        >
                                            {val.name}
                                        </Text>
                                        <Image
                                            source={val.img}
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
                                        <View style={styles.Trapezoid}></View>
                                    </View>
                                </TouchableOpacity>
                        )
                    }
                    <View style={{height:180}}></View>
                </ScrollView>
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
})

export default Explore;