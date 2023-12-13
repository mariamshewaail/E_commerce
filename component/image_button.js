
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const img_button = (name,left=16) => {
  return (
<TouchableOpacity style={{width:92,height:64,backgroundColor:'#Fff',borderRadius:24
,marginTop:10,marginLeft:left,alignItems:'center',justifyContent:'center'}}>
   
   <Image style={{width:23.5,height:24}}  source={{uri:name}}/>
  
</TouchableOpacity>
  );};
  export default img_button;