import * as React from 'react';
import {
    View,
    SafeAreaView,
    TextInput,
    ScrollView,
    Image
} from 'react-native';
import {contact} from '../../../constants/index'; 

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
                <ScrollView>
                    <View
                        style={{
                            height: '15%',
                            borderRadius: 20,
                            borderColor: 'gray',
                            borderWidth: 3,
                            backgroundColor: 'lightgray'
                        }}
                    >
                        <Image
                            style={{
                                width: 50,
                                height: 50
                            }}
                            source={require('../../../assets/chats/abc.jpg')} 
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default Chat;

