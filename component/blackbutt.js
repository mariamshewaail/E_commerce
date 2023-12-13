
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import CheckBox from 'react-native-check-box'

const blackk = (name) => {
    return (
    <View style={{width:100,height:30,borderRadius:29,backgroundColor:'#000',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:14,color:'#fff',fontWeight:'bold'}}>{name}</Text>
    </View>
  );
};
export default blackk;