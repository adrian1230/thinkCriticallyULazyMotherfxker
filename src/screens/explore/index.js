import * as React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    TextInput,
    Image
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
                    // onChangeText={(search)=>this.setState({search})} 
                />
                <View 
                    style={{
                        width:'75%',
                        marginTop: 15,
                        alignSelf:'center',
                        height:'3%',
                        backgroundColor:'lightgrey'
                    }}
                >
                </View>
                <View style={{marginTop: 15,alignSelf:'center'}}>
                    <Text>{width} {height}</Text>
                    <View style={styles.TrapezoidStyle} />
                </View>
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
    btn: {
        width: '50%',
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 25
    },
    TrapezoidStyle: {
        width: 250,
        height: 0,
        marginTop: 10,
        borderBottomColor: "red",
        borderBottomWidth: 100,
        borderLeftWidth: 0,
        borderRightWidth: 190,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
    }
})

export default Explore;