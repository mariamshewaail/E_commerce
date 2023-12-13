import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity, Alert,ActivityIndicator, ScrollView} from 'react-native'
import headerShown from './component/header';
import Header2 from './component/list';
import Item from './component/item';
import Header3 from './component/shopheader';
import Promo from './component/promo';
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
           show:false
           
          }}





          handleSendData = async (index) => {


            const headers = {
              'lang': 'ar',
              'Content-Type': 'application/json',
              'Authorization': 'SVk8BlicmHkYsIhAufzQ5wAkuPpsCwKY7t9ZMC7gYdALRkaaIktgietFl16TjcuCVNnuYK'
            };
        
            const data = {
              product_id: this.state.arr[index].product.id
            };
        
            try {
              const response = await axios.post('https://student.valuxapps.com/api/carts', data, { headers });
              console.log(response.data); // Handle the response data as needed
            } catch (error) {
              console.error('Error making Axios request:', error);
            }
        
          };
          update= async (index) =>{


            
            const headers = {
                'lang': 'ar',
                'Content-Type': 'application/json',
                'Authorization': 'SVk8BlicmHkYsIhAufzQ5wAkuPpsCwKY7t9ZMC7gYdALRkaaIktgietFl16TjcuCVNnuYK'
              };
          
              
              const data2 = {
                quantity: this.state.arr[index].quantity
              };
          
              try {
                const response = await axios.put('https://student.valuxapps.com/api/carts/'+this.state.arr[index].id+'', data2, { headers });
                console.log(response.data); // Handle the response data as needed
              } catch (error) {
                console.error('Error making Axios request:', error);
              }
          

          }

          diff(index){
          
            var arr=this.state.arr
            if(arr[index].quantity>1){
            arr[index].quantity=arr[index].quantity-1
            this.setState({arr})
            this.update(index)
        }else{
            
            var arr=this.state.arr
            arr.splice(index,1)
            this.setState({arr})
    this.handleSendData(index)
        }
        
          }
     add(index){
        var arr=this.state.arr
        arr[index].quantity=arr[index].quantity+1
        this.setState({arr})
        this.update(index)
    
     }
    total(){
        var arr=this.state.arr
        var sum=0
        for(let i=0;i<arr.length;i++){
    if(arr[i].avaliable){
        
        var sum=sum+(arr[i].count*arr[i].price)
    }
    
        }
        return sum
    }



    componentDidMount(){
        
    const headers = {
        'lang': 'ar',
        'Content-Type': 'application/json',
        'Authorization': 'SVk8BlicmHkYsIhAufzQ5wAkuPpsCwKY7t9ZMC7gYdALRkaaIktgietFl16TjcuCVNnuYK'
      };
        axios.get('https://student.valuxapps.com/api/carts',{headers}).then((res)=>{
            console.log(res.data.data)
            this.setState({arr:res.data.data.cart_items})
        })
    }
    render() {
        return (
            <View style={{backgroundColor:'#F9F9F9',width:'100%',height:730}} >
            { headerShown('My bag')}
{this.state.arr.map((item,index)=><>

    <View style={{width:343,height:104,marginTop:10,marginLeft:16
                ,flexDirection:'row',backgroundColor:'#fff',borderRadius:20}}>
                <View style={{flex:1}}>
                <Image style={{width:104,height:104}}
                source={{uri:item.product.image}}></Image>
                </View>
                <View>
                    <View style={{width:120,height:30,alignSelf:'flex-start'}}>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#000',marginTop:11,marginLeft:10}}>{item.product.name}</Text>
                    </View>
              <View style={{flexDirection:'row'}}>
              <View style={{width:63,headerShown:11,marginLeft:10,flexDirection:'row'}}>
               <Text style={{fontSize:11,color:'#9b9b9b'}}>color:</Text>
               <Text style={{fontSize:11,color:'#000'}}>black</Text>

               </View>
               <View style={{width:36,height:14,marginLeft:30,flexDirection:'row'}}>
               <Text style={{fontSize:11,color:'#9b9b9b'}}>size:</Text>
               <Text style={{fontSize:11,color:'#000'}}>{item.product.quantity}</Text>
               </View>
               </View>

<View style={{flexDirection:'row'}}>
            <View style={{width:109,height:36,marginTop:10,marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity
                 style={{width:36,height:36,borderRadius:18,backgroundColor:'#FFFFFF',borderWidth:.2,borderColor:'#ccc',alignItems:'center',justifyContent:'center'}}
                 onPress={()=>
                 {
                    this.diff(index)
                   
                 }}>
                    <Text style={{fontSize:22,color:'#9B9B9B'}}>-</Text>
                </TouchableOpacity>
                <Text style={{fontSize:18,color:'#000',marginTop:5}}>{item.quantity}</Text>
                <TouchableOpacity style={{width:36,height:36,borderRadius:18,backgroundColor:'#fff',borderWidth:.2,borderColor:'#ccc',alignItems:'center',justifyContent:'center'}}
                onPress={()=>{
                    this.add(index)
                    
                }}>
                    <Text style={{fontSize:18,color:'#9B9B9B'}}>+</Text>
                </TouchableOpacity>


            </View>
                </View>


            </View>
            <View style={{width:40,height:20,marginLeft:60,marginTop:65}}>
                <Text style={{fontWeight:'bold',fontSize:14,color:'#000'}}>{item.product.price}</Text>
            </View>
            </View>
</>)}

<View style={{width:343,backgroundColor:'#fff',height:36,marginLeft:16,marginTop:20,
flexDirection:'row',alignSelf:'center',borderTopLeftRadius:8,borderBottomLeftRadius:8,borderTopRightRadius:36,borderBottomRightRadius:36}}>

    <TextInput
    placeholder='enter your promo code'>
      
    </TextInput>
    <TouchableOpacity style={{width:36,height:36,marginLeft:160,borderRadius:18,backgroundColor:'#000',alignItems:'center',justifyContent:'center'}}>
        <AntDesign name='arrowright' size={24} color='#fff'/>
        </TouchableOpacity>
</View>
{ this.state.show?<Promo onPress={()=>{this.setState({show:false})}}/>:null}
{
    this.state.show==false?<>
<View style={{width:'95%',alignSelf:'center',backgroundColor:'#ffff',flexDirection:'row'
,height:60,justifyContent:'space-between',position:'absolute',marginTop:730,alignItems:'center'}}>
<TouchableOpacity onPress={()=>{
    this.props.navigation.navigate("Profile1"
  )
}}>
<AntDesign name='home' size={24} color='#CCC'/>
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
<Feather name='shopping-bag' size={24} color='#F00'/>
</TouchableOpacity>
<TouchableOpacity>
<MaterialIcons name='favorite-border' size={24} color='#CCC'/>
</TouchableOpacity>
<TouchableOpacity>
<AntDesign name='user' size={24} color='#CCC'/>
</TouchableOpacity>

</View>
<TouchableOpacity style={{width:375,backgroundColor:'#ffff',height:34,
alignItems:'center',justifyContent:'center',position:'absolute',marginTop:710}}
onPress={()=>{
    this.setState({show:true})
}}>
    <View style={{width:134,height:5,backgroundColor:'#000'}}></View>
</TouchableOpacity></>:null}
            
            </View>
        )}












}