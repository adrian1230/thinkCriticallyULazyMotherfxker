import * as React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    ScrollView,
    Image,
    Button
} from 'react-native';
import {stats} from '../../../constants/index';

const Product = ({ route }) => {
    const [count, setCount] = React.useState(0);
 
    const handleIncrease = () => {
      setCount(count + 1);
    };
   
    const handleDecrease = () => {
        if (count == 0) {
            return null;
        }
        else {
            setCount(count - 1);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                {/* <Text>{route.params.itemId}</Text> */}
                <View style={{
                    marginTop: 15,
                }}>
                    <Image
                        style={{
                            alignSelf: 'center',
                        }}
                        source={
                            stats.data_[
                                route.params.itemId
                            ].img
                        } 
                    />
                    <Text style={{marginTop:10,fontSize:17,fontWeight:'700',alignSelf:'center'}}>
                        {stats.data_[route.params.itemId].name}
                    </Text>
                    <Text style={{marginTop:2,fontSize:14,alignSelf:'center'}}>
                        {stats.data_[route.params.itemId].description}
                    </Text>
                    <View style={{marginLeft:25,marginTop:5,flexDirection:'row'}}>
                        <Text style={{fontWeight:'700',fontSize:29}}>Price:</Text>
                        <Text style={{fontSize:29,marginLeft:15,fontWeight:'700',alignSelf:'center'}}>
                            {stats.data_[route.params.itemId].price}
                        </Text>
                    </View>
                    <View style={{marginLeft:25,marginTop:5,flexDirection:'row'}}>
                        <Text style={{fontWeight:'700',fontSize:29}}>Quantity:</Text>
                        <View style={{marginLeft:15,flexDirection: 'row',alignSelf:'center'}}>
                            <Button title="+" onPress={handleIncrease} />
                            <Text style={{marginLeft:20,fontSize:25}}>
                                {count}
                            </Text>
                            <View style={{marginLeft:20}}>
                                <Button title="-" onPress={handleDecrease} />
                            </View>
                        </View>
                    </View>
                    <View style={{marginLeft:25,marginTop:5,flexDirection:'row'}}>
                        <Text style={{fontWeight:'700',fontSize:29}}>Final Price:</Text>
                        <Text style={{fontSize:29,marginLeft:15,fontWeight:'700',alignSelf:'center'}}>
                            {stats.data_[route.params.itemId].price * count}
                        </Text>
                    </View>
                    <View 
                        style={{
                            width:'50%',
                            marginLeft:25,
                            marginTop:10,
                        }}
                    >
                        <Button 
                            color="red"
                            title="Add to Cart"
                            onPress={()=>{}}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Product;
