
import React from 'react';
import {ScrollView, Text, View,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const header3= ({name,title,name2,onPress}) => {
  return (
    <View
      style={{
        width:375,
        height:47,
        backgroundColor:'#fff'
      }}>
       <View style={{width:375,height:44,marginTop:8,marginLeft:8,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
       >
         <View style={{width:24,height:24,marginTop:11,}}
         >
        <AntDesign name={name} size={24}  color='#000'/>
        </View>
        <View style={{width:96,height:22,marginTop:11,}}>
            <Text style={{fontSize:18,color:'#000',fontWeight:'bold'}}>{title}</Text>
        </View>
        <TouchableOpacity style={{width:24,height:24,marginTop:11,}}
        onPress={onPress}>
        <AntDesign name={name2} size={24}  color='#000'/>
        </TouchableOpacity>
       </View>
    </View>
  );
};
export default header3;