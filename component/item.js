
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
const item= ({img,title,name,preprice,price,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}>
    <View
      style={{
        width:150,
        height:290,marginTop:11,marginLeft:16
      }}>
       <Image style={{width:148,height:184,marginLeft:1}}
       source={{uri:img}}></Image>
       <View style={{width:40,height:24,marginTop:11,position:'absolute',marginLeft:10,borderRadius:29,backgroundColor:'#DB3022'}}>
       <View style={{width:29,height:15,alignSelf:'center',marginTop:3}}>
        <Text style={{fontSize:11,color:'#fff',alignSelf:'center'}}>
            -20%
        </Text>
       </View>
       </View>
       <View style={{width:36,height:36,borderRadius:18,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'
    ,position:'absolute',marginTop:164,marginLeft:113}}>
<AntDesign name='hearto' size={14} color='#9B9B9B'/>

       </View>
       <View style={{width:85,height:14,marginTop:7,marginLeft:-1,flexDirection:'row',justifyContent:'space-between'}}
       
    >
        <Entypo name='star' size={14} color='#FFBA49'/>
        <Entypo name='star' size={14} color='#FFBA49'/>
        <Entypo name='star' size={14} color='#FFBA49'/>
        <Entypo name='star' size={14} color='#FFBA49'/>
    </View>
    <View style={{width:85,height:13,marginTop:5,marginLeft:1}}>
        <Text style={{fontSize:11,color:'#9B9B9B'}}>{title}</Text>
    </View>
    <View style={{width:112,height:19,marginTop:5,marginLeft:1}}>
        <Text style={{fontSize:16,color:'#222222',fontWeight:'bold'}}>{name}</Text>
    </View>
    <View style={{flexDirection:'row',marginTop:5,marginLeft:2}}>
    <View style={{height:20}}>
        <Text style={{fontSize:14,color:'#9B9B9B',fontWeight:'bold'}}>{preprice}</Text>
    </View>
    <View style={{marginLeft:5,height:20}}>
        <Text style={{fontSize:14,color:'#DB3022',fontWeight:'bold'}}>{price}</Text>
    </View>
    </View>
    </View>
    </TouchableOpacity>
  );
};
export default item;