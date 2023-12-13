
import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity, Alert,ActivityIndicator} from 'react-native'
import headerShown from './component/header';
import { usePreventRemoveContext } from '@react-navigation/native';
import Textinp from './component/textinput';
import Button1 from './component/button';
import img_button from './component/image_button';
import Feather from 'react-native-vector-icons/Feather'
import axios from "react-native-axios";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          email:'',
          pass:'',obj:{},
          name_show:false,
         email_show:false,
          pass_show:false
      
        };
      }
      
   handleSendData = async () => {

    var obj =this.state.obj
    obj={name:this.state.name,
      phone:'',
    email:this.state.email,

  password:this.state.pass,
image:''}
  this.setState({obj:obj})
  console.log(obj)
    const headers = {
      'lang': 'ar',
      'Content-Type': 'application/json',
      'Authorization': 'SVk8BlicmHkYsIhAufzQ5wAkuPpsCwKY7t9ZMC7gYdALRkaaIktgietFl16TjcuCVNnuYK'
    };
    try {
      const response = await axios.post('https://student.valuxapps.com/api/register', this.state.obj,{headers});

      console.log('Response:', response.data);
      // Alert.alert('Data sent successfully');
    } catch (error) {
    
      console.error('Error sending data:', error.message);
      Alert.alert('Error sending data');
    }
  };

  sow(){
    if (this.state.name.length<5){
      this.setState({name_show:true})
    }
    else{ this.setState({name_show:false})}
     if (this.state.email .includes('@','.')==false){
      this.setState({email_show:true})
    }
    else{ this.setState({email_show:false})}
     if (this.state.pass.length<8){
      this.setState({pass_show:true})
    }
    else{ this.setState({pass_show:false})}
    
  }
  leave(){
    if(this.state.name.length>4&&this.state.email.includes('@','.')==true&&this
      .state.pass.length>8){ this.handleSendData(),
        this.props.navigation.navigate("Profile"
    )}
  }
    render() {

        return (
            <View style={{backgroundColor:'#F9F9F9',flex:1}} >
           { headerShown('sign up')}
           <Textinp
           top={50}
            placeholder="NAME"
            onChangeText={(val)=> this.setState({name:val})}
            value={this.state.name}
          />
         {this.state.name_show? (<Text style={{fontSize:9,color:'#f00',marginLeft:50,marginTop:10}}>name must be at least 5 letters</Text>):null}
            <Textinp
            placeholder="Email"
            onChangeText={(val)=> this.setState({email:val})}
            value={this.state.email}
          />
           {this.state.email_show? (<Text style={{fontSize:9,color:'#f00',marginLeft:50,marginTop:10}}>email must be as form '---@---.com'</Text>):null}
           <Textinp
            placeholder="Password"
            onChangeText={(val)=> this.setState({pass:val})}
            value={this.state.pass}
          />
           {this.state.pass_show? (<Text style={{fontSize:9,color:'#f00',marginLeft:50,marginTop:10}}>password must be at least 8 digits</Text>):null}
            <View style={{flexDirection:'row',marginTop:16,marginLeft:195}}>
            <View style={{width:166,height:20}}>

                <Text style={{fontSize:14,alignSelf:'flex-start',color:'#000'}}>already have an account?</Text>
                </View>
                <View style={{width:24,height:24,alignItems:'center'}}>
<Feather name='arrow-right' color={'#f00'} size={20}/>
               
                </View>
            </View>
           <Button1 
           name='sign up'
           onPress={()=>{
            this.sow()
        
          this.leave()

           }}/>
            <View style={{width:204,height:20,marginLeft:86,marginTop:80}}>
                <Text style={{fontSize:14}}>Or sign up with social account </Text>
            </View>
            <View style={{flexDirection:'row'}}> 
      {img_button('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7',88)}
      {img_button('https://th.bing.com/th/id/OIP.hGaetDAQWapgIJbIOhPhXwHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7')}
      </View>
            </View>

        );}}
    