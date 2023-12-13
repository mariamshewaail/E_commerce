
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const header2= (title,subtitle,disc) => {
  return (
    <View
      style={{
        width:376,
        height:60,marginTop:27,marginLeft:16
      }}>
        <View style={{flexDirection:'row'}}>
        <View>
       <View style={{width:100,height:40,marginLeft:2}}>
        <Text style={{fontSize:34,fontWeight:'bold',color:'#222222'}}>{title}</Text>

       </View>
       <View style={{width:101,height:20,marginLeft:2,marginTop:4}}>
        <Text style={{fontSize:11,color:'#9B9B9B'}}>{subtitle}</Text>

       </View>
       </View>
       <View style={{width:41,height:20,marginTop:28,marginLeft:231}}>
        <Text style={{fontSize:11,color:'#222222'}}>{disc}</Text>
       </View>
       </View>
    </View>
  );
};
export default header2;