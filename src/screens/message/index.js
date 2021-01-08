import * as React from 'react';
import {
    View,
    SafeAreaView,
    TextInput,
    ScrollView,
    Image,
    TouchableOpacity,
    Text
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
                <ScrollView
                    style={{
                        marginTop: 20
                    }}
                >
                    {
                        contact.ppl.map(
                            (val,ind) =>
                                <TouchableOpacity 
                                    key={ind} 
                                    onPress={
                                        ()=> 
                                        navigation.navigate(
                                            'Chatroom',
                                            {
                                                itemId: val.id,
                                                otherParam: 'anything you want love'
                                            }
                                        )
                                    }
                                    style={{marginBottom:10}}
                                >
                                    <View
                                        style={{
                                            padding: 5,
                                            borderRadius: 20,
                                            borderColor: 'gray',
                                            borderWidth: 3,
                                            backgroundColor: 'lightgray',
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <View style={{flexDirection: 'row'}}>
                                            <Image
                                                style={{
                                                    width: 65,
                                                    height: 65,
                                                    borderRadius: 50
                                                }}
                                                source={val.icon} 
                                            />
                                            <Text 
                                                style={{
                                                    fontSize:20,
                                                    marginTop: 15,
                                                    marginLeft: 5,
                                                }}
                                            >
                                                {val.name}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                        )
                    }
                    <View style={{height:130}}></View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default Chat;

