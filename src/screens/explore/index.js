import * as React from 'react';
import {View,Button,StyleSheet,SafeAreaView,Text} from 'react-native';

const Explore = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text>Explore</Text>
                <View style={styles.btn}>
                    <Button
                        title="Profile"
                        onPress={
                            () => navigation.navigate('Profile')
                        } 
                    />
                </View>
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