
import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const rate = () => {
  return (
<View style={{width:330,height:95,marginTop:10,marginLeft:15,flexDirection:'row'}}>
<View>
    <View style={{width:66,height:50}}>
        <Text style={{fontSize:44,fontWeight:'bold',color:'#222222'}}>4.3</Text>
    </View>
    <View style={{width:66,height:16,marginLeft:1,marginTop:4}}>
        <Text style={{fontSize:14,color:'#9B9B9B'}}>23 ratings</Text>
    </View>

</View>
<View>
<View style={{width:236,height:95,marginLeft:28,marginTop:20}}>
    <View style={{width:236,height:16,borderRadius:4,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
        </View>
        <View style={{width:114,height:8,marginTop:5,borderRadius:4,backgroundColor:'#DB3022'}}></View>
        <Text style={{fontSize:14,color:'#22222'}}>12</Text>
    </View>
    
    <View style={{width:236,height:16,borderRadius:4,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
           
        </View>
        <View style={{width:95,height:8,marginTop:5,borderRadius:4,backgroundColor:'#DB3022'}}></View>
        <Text style={{fontSize:14,color:'#22222'}}>5</Text>
    </View>
    <View style={{width:236,height:16,borderRadius:4,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
          
        </View>
        <View style={{width:75,height:8,marginTop:5,borderRadius:4,backgroundColor:'#DB3022'}}></View>
        <Text style={{fontSize:14,color:'#22222'}}>4</Text>
    </View>

    <View style={{width:236,height:16,borderRadius:4,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <Entypo name='star' size={14} color='#FFBA49'/>
       
          
        </View>
        <View style={{width:55,height:8,marginTop:5,borderRadius:4,backgroundColor:'#DB3022'}}></View>
        <Text style={{fontSize:14,color:'#22222'}}>1</Text>
    </View>
    </View>
</View>
           </View>
            );
        };
        export default rate;