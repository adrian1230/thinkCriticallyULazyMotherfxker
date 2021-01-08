import * as React from 'react';
import {View,SafeAreaView,Text,ScrollView, Image} from 'react-native';
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
            <ScrollView>
                {/* {
                    chat.chathistory[route.params.itemId].id
                    )
                } */}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Chatroom;