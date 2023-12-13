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
import { initialWindowMetrics } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo'
export default class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
           ind:'',
           arr:[]
           
          }}
    componentDidMount(){
        this.setState({ind:this.props.route.params.obj})
        console.log('https://student.valuxapps.com/api/categories/ '+this.props.route.params.obj+'')
        axios.get('https://student.valuxapps.com/api/categories/ '+this.props.route.params.obj+'').then((res)=>{
            console.log(res.data.data.data)
            this.setState({arr:res.data.data.data})})
    }
   
    render() {
       
        return (<View style={{flex:1,backgroundColor:'#F9F9F9'}}>
           <Header3 name='left' title='Cart'name2='search1'
            onPress={()=>{this.setState({show:true})}}
            />
           
            
        <ScrollView style={{marginTop:50}}>
        {this.state.arr.map((item,index)=><>
            <TouchableOpacity
onPress={()=>{
    this.props.navigation.navigate("Profile4",{obj:item}
  )

}}>
    <View style={{width:'100%',alignSelf:'center',height:140,marginTop:20,marginLeft:16,flexDirection:'row',backgroundColor:'#fff',}}>
    <Image style={{width:140,height:140,borderRadius:8,alignSelf:'center'}}
                
                source={{uri:item.image}}/>
                <View style={{width:190,height:90,marginLeft:20,alignSelf:'center'}}>

                    <Text style={{fontSize:18,color:'#000',fontWeight:'bold'}}>{item.name}</Text>

                    <View style={{width:75,height:14,marginTop:2,flexDirection:'row',justifyContent:'space-between'}}
       
       >
           <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
           <Entypo name='star' size={14} color='#FFBA49'/>
       </View>
       <Text style={{fontSize:18,color:'#000',fontWeight:'bold'}}>{item.price}</Text>
                </View>
                
            </View>
            </TouchableOpacity>
        </>)}
        </ScrollView>
                  
<View style={{width:'95%',alignSelf:'center',backgroundColor:'#F9F9F9',flexDirection:'row',height:60,justifyContent:'space-between',position:'absolute',marginTop:730,alignItems:'center'}}>
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
<TouchableOpacity>
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
            
        )}}
