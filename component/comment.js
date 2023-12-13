
import React from 'react';
import {Image, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const comment = (img,name,date,disc) => {
  return ( 
    <View style={{width
    :311,height:297,marginTop:10,marginLeft:16,backgroundColor:'#fff'}}>
        <Image style={{width:32,height:32,borderRadius:16}} source={{uri:img}}/>
        <View style={{width:311,height:297,marginTop:16}}>
            <View style={{width:96,height:19,marginTop:5,marginLeft:16}}>
                <Text style={{fontSize:14,color:'#22222'}}>{name}</Text>
                <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row',marginTop:5}}>
        <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
          
        </View>
        <View style={{width:90,height:19,marginLeft:180,}}>
            <Text style={{fontSize:10,color:'#9B9B9B'}}>{date}</Text>
        </View>
                </View>

                <View style={{width:267,height:199,marginTop:20,marginLeft:16}}>
                    <Text style={{fontSize:14,color:'#22222'}}>
                        {disc}
                    </Text>
                </View>
            </View>
        </View>
    </View>
   );
};
export default comment;