import * as React from 'react';
import {View,SafeAreaView,Text,ScrollView, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {chat,contact} from '../../../constants/index';

const Chatroom = ({ route }) => {
    return (
        <SafeAreaView>
            <View style={{flexDirection:'row',backgroundColor:'lightgrey',padding:5,marginTop:5}}>
                <Image
                    style={{marginLeft: 10,borderRadius:50,width:50,height:50}} 
                    source={contact.ppl[route.params.itemId].icon}
                />
                <Text style={{marginTop:5,marginLeft:15,fontSize:25}}>
                    {contact.ppl[route.params.itemId].name}
                </Text>
            </View>
            <ScrollView
                style={{height:'75%'}}
            >
                {/* {
                    chat.chathistory[route.params.itemId].id
                    )
                } */}
            </ScrollView>
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
                />
            </View>
        </SafeAreaView>
    );
}

export default Chatroom;