
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const button = ({name,onPress}) => {
  return (
<TouchableOpacity
 style={{width:343,height:48,borderRadius:25,backgroundColor:'#DB3022'
,alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:28}}
onPress={onPress}
>
    <View style={{width:98,height:20}}>
        <Text style={{fontSize:14,color:'#fff'}}>{name}</Text>
    </View>
</TouchableOpacity>
  );};
  export default button;