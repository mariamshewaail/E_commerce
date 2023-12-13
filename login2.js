
import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity, Alert,ActivityIndicator} from 'react-native'
import headerShown from './component/header';
import { usePreventRemoveContext } from '@react-navigation/native';
import thisextinp from './component/textinput';
import Button from './component/button';
import img_button from './component/image_button';
import Feather from 'react-native-vector-icons/Feather'
import TextInpu from './component/textinput';
import axios from "react-native-axios";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
          email:'',
          pass:'',obj:{},
          name_show:false,
         email_show:false,
          pass_show:false
      
        };}


        handleSendData = async () => {
            try {
              const response = await axios.post('https://student.valuxapps.com/api/login', this.state.obj);
        
              console.log('Response:', response.data);
              Alert.alert('Data sent successfully');
              this.props.navigation.navigate("Profile1"
    )
            } catch (error) {
            
              console.error('Error sending data:', error.message);
              Alert.alert('Error sending data');
            }
          };  
set(){
    var obj =this.state.obj
    obj={email:this.state.email,
    password:this.state.pass}
    this.setState({obj})
    this.handleSendData()
    }
    render() {
        return ( <View style={{backgroundColor:'#F9F9F9'}} >
        { headerShown('Log in')}
      <TextInpu   placeholder="Email"
            onChangeText={(val)=> this.setState({email:val})}
            value={this.state.email}/>
            <TextInpu   placeholder="Password"
            onChangeText={(val)=> this.setState({pass:val})}
            value={this.state.passl}/>
             <View style={{flexDirection:'row',marginTop:16,marginLeft:195}}>
            <View style={{width:156,height:20}}>

                <Text style={{fontSize:14,alignSelf:'flex-start',color:'#000'}}>Forget your password?</Text>
                </View>
                <View style={{width:24,height:24,alignItems:'center'}}>
<Feather name='arrow-right' color={'#f00'} size={20}/>
               
                </View>
                
            </View>
     <Button name ='log in'
     onPress={()=>{
        this.set()

     }}/>
            <View style={{width:204,height:20,marginLeft:86,marginTop:190}}>
                <Text style={{fontSize:14}}>Or sign up with social account </Text>
            </View>
            <View style={{flexDirection:'row'}}> 
      {img_button('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7',88)}
      {img_button('https://th.bing.com/th/id/OIP.hGaetDAQWapgIJbIOhPhXwHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7')}
      </View>
        </View>);}}