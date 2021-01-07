import * as React from 'react';
import {
    View,
    SafeAreaView,
    TextInput
} from 'react-native';

const Chat = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View 
                style={{
                    marginHorizontal: 25,
                    marginTop: 10
                }}
            >
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
                    placeholder="Search Chat" 
                />
            </View>
        </SafeAreaView>
    );
}

export default Chat;

