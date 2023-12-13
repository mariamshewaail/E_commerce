import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity, Alert,ActivityIndicator, ScrollView} from 'react-native'
import headerShown from './component/header';
import Header2 from './component/list';
import Item from './component/item';
import Header3 from './component/shopheader';
import { usePreventRemoveContext } from '@react-navigation/native';
import axios from "react-native-axios";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
           arr:[]
           ,inp:''
           ,show:false,
           arr2:[],
           animate:true
          }}
    componentDidMount(){
        
        axios.get('https://student.valuxapps.com/api/categories').then((res)=>{
            // console.log(res.data.data.data)
            this.setState({arr:res.data.data.data})})
           
    }
   
    search(val){
      this.setState({animate:true})
        const tex={
            "text": this.state.inp
        }
        const headers = {
            'lang': 'ar',
            'Content-Type': 'application/json',
            'Authorization': 'SVk8BlicmHkYsIhAufzQ5wAkuPpsCwKY7t9ZMC7gYdALRkaaIktgietFl16TjcuCVNnuYK'
          };
          try{ axios.post('https://student.valuxapps.com/api/products/search',tex,{headers}).then((res)=>{
            console.log(res.data.data.data)
            this.setState({arr2:res.data.data.data})})}
            catch(error){
                console.error('Error making Axios request:', error);
            }
            this.setState({animate:false})

    }
    render() {
       
        return (<View style={{width:'100%',backgroundColor:'#F9F9F9',height:730}}>
            <Header3 name='left' title='categories'name2='search1'
            onPress={()=>{this.setState({show:true})}}
            />
           {this.state.show? 
           (<TextInput
             style={{width:'80%',height:40,marginTop:10,borderWidth:1,
           borderColor:'#ccc',borderRadius:10,backgroundColor:'#F9F9F9',alignSelf:'center'}}
            value={this.state.inp}
            onChangeText={(val)=>{   this.setState({inp:val})
        this.search(val)
    }
             
                
            }
            placeholder='SEARCH Q'
            textAlign="right"
            textAlignVertical="center"
>
               
            </TextInput>):null}
            {this.state.inp.length!=0?(<>
            <View style={{backgroundColor:'#F9F9F9',height:'100%',width:'90%',alignSelf:'center'}}>
            <ScrollView>
                {this.state.animate?( <ActivityIndicator
               animating = {this.state.animate}
               color = '#bc2b78'
               size = {35}
               
               style = {{flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 80}}/>):null}
                {this.state.arr2.map((item,index)=>
                
                    <TouchableOpacity>
                    <View style={{width:'100%',height:40,borderBottomWidth:.5,borderColor:'#CCC'}}>
                        <Text style={{fontSize:10,color:'#000',fontWeight:'bold'}}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
              
                )}
                  </ScrollView>
                

                </View></>):null

            }
<ScrollView>
            <View style={{width:343,height:100,marginTop:30,backgroundColor:'#DB3022',borderRadius:8,alignSelf:'center'}}>

                <View style={{width:190,height:29,marginTop:28,marginLeft:92,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:22
                    ,fontWeight:'bold',color:'#fff'}}>SUMMER SALES</Text>
                </View>
                <View style={{width:95,height:20,marginTop:5,marginLeft:140,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:14
                    ,color:'#fff'}}>Up to 50% off</Text>
                    

                </View>
            </View>
{this.state.arr.map((item,index)=><>
<TouchableOpacity
onPress={()=>{
    this.props.navigation.navigate("Profile3",{obj:item.id}
  )

}}>
    <View style={{width:'90%',alignSelf:'center',height:130,marginTop:30,marginLeft:16,flexDirection:'row',backgroundColor:'#fff',justifyContent:'space-between',alignItems:'center'}}>
    <Image style={{width:171,height:130,borderRadius:8}}
                
                source={{uri:item.image}}/>
                <View style={{width:90,height:22}}>
                    <Text style={{fontSize:18,color:'#000',fontWeight:'bold'}}>{item.name}</Text>
                </View>
                
            </View>
            </TouchableOpacity></>)}
            </ScrollView>
            
<View style={{width:'95%',alignSelf:'center',backgroundColor:'#F9F9F9',flexDirection:'row',height:60
,justifyContent:'space-between',position:'absolute',marginTop:730,alignItems:'center'}}>
<TouchableOpacity
onPress={()=>{
    this.props.navigation.navigate("Profile1"
  )
}}>
<AntDesign name='home' size={24} color='#CCC'/>
</TouchableOpacity>
<TouchableOpacity>
<AntDesign name='shoppingcart' size={24} color='#F00'/>
</TouchableOpacity>
<TouchableOpacity
onPress={()=>{
    this.props.navigation.navigate("Profile6"
  )
}}>
<Feather name='shopping-bag' size={24} color='#CCC'/>
</TouchableOpacity>
<TouchableOpacity>
<MaterialIcons name='favorite-border' size={24} color='#CCC'/>
</TouchableOpacity>
<TouchableOpacity>
<AntDesign name='user' size={24} color='#CCC'/>
</TouchableOpacity>

</View>
            </View>
            

        );}}