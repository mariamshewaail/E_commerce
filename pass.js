
import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity, Alert,ActivityIndicator} from 'react-native'
import headerShown from './component/header';
import { usePreventRemoveContext } from '@react-navigation/native';
import textinp from './component/textinput';
import button from './component/button';
import img_button from './component/image_button';
import Feather from 'react-native-vector-icons/Feather'
export default class App extends React.Component {
    render() {

        return ( <View style={{backgroundColor:'#F9F9F9'}} >
        { headerShown('Forget password')}
        <View style={{width:343,height:40,marginTop:87,marginLeft:35}}
        >
            <Text style={{fontSize:14}}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
        </View>
        { textinp('Email',33)
            }
           
             <View style={{flexDirection:'row',marginTop:16,marginLeft:195}}>
            <View style={{width:156,height:20}}>

                <Text style={{fontSize:14,alignSelf:'flex-start',color:'#000'}}>Forget your password?</Text>
                </View>
                <View style={{width:24,height:24,alignItems:'center'}}>
<Feather name='arrow-right' color={'#f00'} size={20}/>
               
                </View>
                
            </View>
            {button('Send')}
         
           
        </View>);}}