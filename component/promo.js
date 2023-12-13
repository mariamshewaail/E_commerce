
import React from 'react';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const promo = ({onPress}) => {
  return (
<View style={{width:375,height:464,position:'absolute',marginTop:348,borderTopLeftRadius:34,
borderTopRightRadius:34,backgroundColor:'#f9f9f9',alignSelf:'center'}}>
   
  <TouchableOpacity style={{width:375,backgroundColor:'#f9f9f9',height:34,borderTopLeftRadius:34,
borderTopRightRadius:34,
alignItems:'center',justifyContent:'center'}}
onPress={onPress}>
    <View style={{width:134,height:5,backgroundColor:'#000'}}></View>
</TouchableOpacity>




<View style={{width:343,backgroundColor:'#fff',height:36,marginLeft:16,marginTop:10,
flexDirection:'row',alignSelf:'center',borderTopLeftRadius:8,borderBottomLeftRadius:8,borderTopRightRadius:36,borderBottomRightRadius:36}}>

    <TextInput
    placeholder='enter your promo code'>
      
    </TextInput>
    <TouchableOpacity style={{width:36,height:36,marginLeft:160,borderRadius:18,backgroundColor:'#000',alignItems:'center',justifyContent:'center'}}>
        <AntDesign name='arrowright' size={24} color='#fff'/>
        </TouchableOpacity>
        </View>
        
        <View style={{width:164,height:22,marginLeft:16,marginTop:20}}>
            <Text style={{fontSize:18,color:'#000',fontWeight:'bold'}}>Your Promo Codes</Text>
        </View>
        <ScrollView>
        <View style={{width:343,height:80,marginTop:20,marginLeft:16,flexDirection:'row'}}>
            <Image style={{width:80,height:80}}
            source={{uri:'https://th.bing.com/th/id/OIP.BIDXokPLHQ1HUftdetj8kQHaFj?w=257&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7'}}>

            </Image>
            <View>
                <Text style={{fontSize:14,color:'#000',marginLeft:16,marginTop:22}}>personal offer</Text>
                <Text style={{fontSize:11,color:'#000',marginLeft:16}}>mypromocode2020</Text>
            </View>
            <View>
               <Text style={{fontSize:11,color:'#9b9b9b',marginTop:12,marginLeft:50,marginBottom:5}}>
               6 days remaining
               </Text>
               <TouchableOpacity style={{width:93,height:36,borderBlockColor:25
                ,backgroundColor:'#DB3022',alignItems:'center',justifyContent:'center',borderRadius:20,marginLeft:50}}>
                <View>
                    <Text style={{fontSize:14,color:'#fff'}}>Apply</Text>
                </View>
               </TouchableOpacity>
            </View>
            
        </View>
        <View style={{width:343,height:80,marginTop:20,marginLeft:16,flexDirection:'row'}}>
            <Image style={{width:80,height:80}}
            source={{uri:'https://th.bing.com/th/id/OIP.6KzsY8xPPvCvflfa6S6nFgHaHZ?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'}}>

            </Image>
            <View>
                <Text style={{fontSize:14,color:'#000',marginLeft:16,marginTop:22}}>personal offer</Text>
                <Text style={{fontSize:11,color:'#000',marginLeft:16}}>mypromocode2020</Text>
            </View>
            <View>
               <Text style={{fontSize:11,color:'#9b9b9b',marginTop:12,marginLeft:50,marginBottom:5}}>
               6 days remaining
               </Text>
               <TouchableOpacity style={{width:93,height:36,borderBlockColor:25
                ,backgroundColor:'#DB3022',alignItems:'center',justifyContent:'center',borderRadius:20,marginLeft:50}}>
                <View>
                    <Text style={{fontSize:14,color:'#fff'}}>Apply</Text>
                </View>
               </TouchableOpacity>
            </View>
            
        </View>
        <View style={{width:343,height:80,marginTop:20,marginLeft:16,flexDirection:'row'}}>
            <Image style={{width:80,height:80}}
            source={{uri:'https://th.bing.com/th/id/OIP.HT5tVS1ZCgqZszfDHwvGewHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7'}}>

            </Image>
            <View>
                <Text style={{fontSize:14,color:'#000',marginLeft:16,marginTop:22}}>personal offer</Text>
                <Text style={{fontSize:11,color:'#000',marginLeft:16}}>mypromocode2020</Text>
            </View>
            <View>
               <Text style={{fontSize:11,color:'#9b9b9b',marginTop:12,marginLeft:50,marginBottom:5}}>
               6 days remaining
               </Text>
               <TouchableOpacity style={{width:93,height:36,borderBlockColor:25
                ,backgroundColor:'#DB3022',alignItems:'center',justifyContent:'center',borderRadius:20,marginLeft:50}}>
                <View>
                    <Text style={{fontSize:14,color:'#fff'}}>Apply</Text>
                </View>
               </TouchableOpacity>
            </View>
            
        </View>
        <View style={{width:343,height:80,marginTop:20,marginLeft:16,flexDirection:'row'}}>
            <Image style={{width:80,height:80}}
            source={{uri:'https://th.bing.com/th/id/OIP.HT5tVS1ZCgqZszfDHwvGewHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7'}}>

            </Image>
            <View>
                <Text style={{fontSize:14,color:'#000',marginLeft:16,marginTop:22}}>personal offer</Text>
                <Text style={{fontSize:11,color:'#000',marginLeft:16}}>mypromocode2020</Text>
            </View>
            <View>
               <Text style={{fontSize:11,color:'#9b9b9b',marginTop:12,marginLeft:50,marginBottom:5}}>
               6 days remaining
               </Text>
               <TouchableOpacity style={{width:93,height:36,borderBlockColor:25
                ,backgroundColor:'#DB3022',alignItems:'center',justifyContent:'center',borderRadius:20,marginLeft:50}}>
                <View>
                    <Text style={{fontSize:14,color:'#fff'}}>Apply</Text>
                </View>
               </TouchableOpacity>
            </View>
            
        </View>
        </ScrollView>
        

</View>
  );};
  export default promo;