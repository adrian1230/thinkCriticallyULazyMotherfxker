import * as React from 'react';
import {
    View,
    Button,
    StyleSheet,
    SafeAreaView,
    Text,
    TextInput
} from 'react-native';
console.disableYellowBox = true;

const Explore = ({ navigation,props }) => {
    const state = {
        search: '',
    }

    return (
        <SafeAreaView>
            <View>
                <TextInput
                    style={{
                        backgroundColor:'grey',
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
                <Text>asd</Text>
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
    }
})

export default Explore;