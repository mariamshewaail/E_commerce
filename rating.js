import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity, Alert,ActivityIndicator, ScrollView} from 'react-native'
import headerShown from './component/header';
import Header2 from './component/list';
import Item from './component/item';
import header3 from './component/shopheader';
import rate from './component/rate';
import COMMENT from './component/comment';
import { usePreventRemoveContext } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'

import Feather from 'react-native-vector-icons/Feather'
import CheckBox from 'react-native-check-box'
export default class App extends React.Component {
    render() {
        return (<View style={{flex:1,backgroundColor:'#F9F9F9'}}>
           { headerShown('Rating & Reviews')}
           {rate()}
          <View style={{width:327,height:723,marginTop:20,marginLeft:16}}>
            <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:109,height:25,marginLeft:1}}>
                    <Text style={{fontSize:22,color:'#222222',fontWeight:'bold'}}>8 reviews</Text>
                </View>
                <View style={{width:115,height:21,flexDirection:'row',justifyContent:'space-between',marginTop:7}}>
                <CheckBox
 style={{width:21,height:21,}}
 
  onClick={()=>{
  
  }}
  isChecked={false}
 
/>
<Text style={{fontSize:14,color:"#22222"}}> with photo</Text>
                </View>
            </View>
            {COMMENT('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            'Helene Moore',
            'June 5, 2019',"The dress is great! Very classy and comfortable. It fit perfectly! Im 57 and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well")}
           
           
           {COMMENT('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            'Helene Moore',
            'June 5, 2019',"The dress is great! Very classy and comfortable. It fit perfectly! Im 57 and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well")}


{COMMENT('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            'Helene Moore',
            'June 5, 2019',"The dress is great! Very classy and comfortable. It fit perfectly! Im 57 and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well")}
            
           
            </ScrollView>
          </View>
        </View>);}}