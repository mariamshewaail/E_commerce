import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity, Alert,ActivityIndicator, ScrollView} from 'react-native'
import headerShown from './component/header';
import Header2 from './component/list';
import Item from './component/item';
import axios from "react-native-axios";
import { usePreventRemoveContext } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import item from './component/item';
export default class App extends React.Component {
    
  constructor(props) {
    super(props)

    this.state = {
        arr:[],
        arr2:[],
        baner:[],
        baner2:[],arr3:[]
      }}
    componentDidMount(){
        
        axios.get('https://student.valuxapps.com/api/home').then((res)=>{
            console.log(res.data)
            this.setState({arr:res.data.data.products})
            var arr = this.state.arr
        var arr2=arr.slice(11,20)
      var arr3= arr.slice(5,11)
      this.setState({arr2:arr2})
        this.setState({arr3:arr3})
        this.setState({baner:res.data.data.banners.splice(1,1)})
        this.setState({baner2:res.data.data.banners.splice(4,1)})
            console.log(this.state.arr[0].name)
        })
        
    }
  
    
    render() {
        return (
            <View style={{width:'100%',backgroundColor:'#F9F9F9',height:730}}>
                <ScrollView>
                  {this.state.baner.map((item,index)=><>
                    <Image style={{width:376,height:196}}
       source={{uri:item.image}}></Image></>)}
       
       <View style={{width:238,height:334,position:'absolute',marginTop:136,marginLeft:16}}>
        <Text style={{fontSize:34,color:'#fff'}}> street clothe</Text>

       </View>
       {Header2('Sale','Super summer sale','view all')}
       <ScrollView horizontal={true} style={{width:481}}>
{this.state.arr.map((item,index)=><>
 <Item img={item.image} title='ansjdj' name={item.name} preprice={item.old_price} price={item.price}
 onPress={()=>{
  
  this.props.navigation.navigate("Profile2",{obj:this.state.arr[index]}
  )
 }}/>
 </>
 )}


</ScrollView>
{Header2('New','Super summer sale','view all')}
       <ScrollView horizontal={true} style={{width:481}}>
       {this.state.arr2.map((item,index)=><>
        <Item img={item.image} title='ansjdj' name={item.name} preprice={item.old_price} price={item.price}
 onPress={()=>{
  
  this.props.navigation.navigate("Profile2",{obj:this.state.arr2[index]}
  )
 }}/>
</>
 )}

</ScrollView>
{this.state.baner2.map((item,index)=><>
                    <Image style={{width:376,height:196}}
       source={{uri:item.image}}></Image></>)}
       {Header2('other','Super summer sale','view all')}
       <ScrollView horizontal={true} style={{width:481}}>
       {this.state.arr3.map((item,index)=><>
        <Item img={item.image} title='ansjdj' name={item.name} preprice={item.old_price} price={item.price}
 onPress={()=>{
  
  this.props.navigation.navigate("Profile2",{obj:this.state.arr3[index]}
  )
 }}/>
</>
 )}

</ScrollView>
</ScrollView>
<View style={{width:'95%',alignSelf:'center',backgroundColor:'#F9F9F9',flexDirection:'row',height:60,
justifyContent:'space-between',position:'absolute',marginTop:730,alignItems:'center'}}>
<TouchableOpacity>
<AntDesign name='home' size={24} color='#F00'/>
</TouchableOpacity>
<TouchableOpacity
onPress={()=>{
  this.props.navigation.navigate("Profile5"
  )
}}>
<AntDesign name='shoppingcart' size={24} color='#CCC'/>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{
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
        )}}