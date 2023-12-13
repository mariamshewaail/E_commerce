
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const button= (name) => {
  return (
    <View
      style={{
        width:138,
        height:40,marginTop:27,marginLeft:16,borderRadius:8,borderWidth:.4,borderColor:'#F01F0E',flexDirection:'row',alignItems:'center',
        justifyContent:'space-around'
      }}>

        <View style={{width:28,height:20,marginRight:20}}>
           <Text style={{fontSize:14,color:'#000'}}>{name}</Text>
        </View>
        <View style={{width:16,height:16}}>
            <AntDesign name='down' size={15} color='#000'/>
        </View>
    </View>
  );
};
export default button;