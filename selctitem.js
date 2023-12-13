import React from 'react'
import { Text, View, TextInput, ImageBackground, StyleSheet, Image, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native'
import headerShown from './component/header';
import Header2 from './component/list';
import Item from './component/item';
import Header3 from './component/shopheader';
import button from './component/button2';

import Entypo from 'react-native-vector-icons/Entypo'
import Button2 from './component/button';
import { usePreventRemoveContext } from '@react-navigation/native';
import axios from "react-native-axios";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      obj: {},
      arr: [],
      arr2:[]
    }
  }
  componentDidMount() {
    this.setState({ obj: this.props.route.params.obj })
    console.log(this.props.route.params.obj)
    this.setState({ arr: this.props.route.params.obj.images })
    const headers = {
      'lang': 'ar',
      'Content-Type': 'application/json',
      'Authorization': 'SVk8BlicmHkYsIhAufzQ5wAkuPpsCwKY7t9ZMC7gYdALRkaaIktgietFl16TjcuCVNnuYK'
    };
      axios.get('https://student.valuxapps.com/api/carts',{headers}).then((res)=>{
          console.log(res.data.data)
          this.setState({arr2:res.data.data.cart_items})
      })
  }


  handleSendData = async () => {


    const headers = {
      'lang': 'ar',
      'Content-Type': 'application/json',
      'Authorization': 'SVk8BlicmHkYsIhAufzQ5wAkuPpsCwKY7t9ZMC7gYdALRkaaIktgietFl16TjcuCVNnuYK'
    };

    const data = {
      product_id: this.state.obj.id
    };

    try {
      for(var i=0;i<this.state.arr2.length;i++)
   
     { if(this.state.arr2[i].id!=this.state.obj.id){
      const response = await axios.post('https://student.valuxapps.com/api/carts', data, { headers });
      // console.log(response.data); // Handle the response data as needed}
    
 }
else{
  Alert("added befor")
}}}
  catch (error) {
      console.error('Error making Axios request:', error);
    }

  };
  render() {
    return (

      <View style={{ width:'100%', backgroundColor: '#F9F9F9',height:740 }}>
        <ScrollView>
          <Header3 name='left' title='' name2='sharealt'
            onPress={() => { this.setState({ show: true }) }}
          />

          <View style={{ flexDirection: 'row' }}>
            <ScrollView horizontal={true} style={{ height: 353 }}>
              {this.state.arr.map((item, index) => <>
                <Image style={{ width: 275, height: 473, marginTop: 10 }}
                  source={{ uri: item }} /></>)}



            </ScrollView>
          </View>
          <View style={{ flexDirection: 'row' }}>
            {button('size')}
            {button('black')}
            <View style={{
              width: 36, height: 36, borderRadius: 18, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'
              , marginTop: 27, marginLeft: 20
            }}>
              <AntDesign name='hearto' size={14} color='#9B9B9B' />

            </View>
          </View>


          <View
            style={{
              width: 376,
              height: 60, marginTop: 27, marginLeft: 16
            }}>

            <View style={{ width: '95%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>

              <View style={{ width: 80, height: 40 }}>
                <Text style={{ fontSize: 24, color: '#222222', fontWeight: 'bold' }}>{this.state.obj.price}</Text>
              </View>
              <View>
                <View style={{ width: 259, height: 55 }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#222222' }}>{this.state.obj.name}</Text>

                </View>

              </View>

            </View>
            <View style={{ width: 75, height: 14, marginTop: 2, flexDirection: 'row', justifyContent: 'space-between' }}

            >
              <Entypo name='star' size={14} color='#FFBA49' />
              <Entypo name='star' size={14} color='#FFBA49' />
              <Entypo name='star' size={14} color='#FFBA49' />
              <Entypo name='star' size={14} color='#FFBA49' />
            </View>
          </View>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: 30, marginLeft: 16, marginBottom: 3 }}>
            <Text style={{ fontSize: 14, color: '#000' }}>{this.state.obj.description}</Text>
          </View>
          <Button2 name='Add to cart'
            onPress={() => {
              this.handleSendData()
            }} />
        </ScrollView>
        <View style={{
          width: '95%', alignSelf: 'center', backgroundColor: '#F9F9F9', flexDirection: 'row', height: 60,
          justifyContent: 'space-between', position: 'absolute', marginTop: 740, alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate("Profile1"
            )
          }}>
            <AntDesign name='home' size={24} color='#CCC' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Profile5"
              )
            }}>
            <AntDesign name='shoppingcart' size={24} color='#CCC' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate("Profile6"
            )
          }}>
            <Feather name='shopping-bag' size={24} color='#F00' />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name='favorite-border' size={24} color='#CCC' />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name='user' size={24} color='#CCC' />
          </TouchableOpacity>

        </View>
      </View>

    );
  }
}