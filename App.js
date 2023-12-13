
import React from 'react'
import { Text, View ,TextInput} from 'react-native'
// // import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import First1 from './store/Firsrt1'


// import Page2 from './daily/page2'
// import Page3 from './daily/page3'
// import Page6 from './daily/page6'
// import Page5 from './daily/page5'
// import Page7 from './daily/page7'
// import Page4 from './daily/page4'
// import Home from './daily/home-3'
// import Setting from './daily/setting'

import  Log from './ecommerce/login'

import Log2 from'./ecommerce/login2'
import Pass from'./ecommerce/pass'
import Home from'./ecommerce/home'
import Shop from './ecommerce/shop'
import Select from './ecommerce/selctitem'
import Rating from './ecommerce/rating'
import Fav from './ecommerce/fav'
import Cat from './ecommerce/cat_item'
import Cart from './ecommerce/cart'
// import Page4 from './daily/page4'

// import { Picker } from "@react-native-picker/picker";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default class App extends React.Component {


    render() {

  return (
  
      <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen
      
        name="Home"
        component={Log}
        
      />
      <Stack.Screen name="Profile" component={Log2} />
       <Stack.Screen name="Profile1" component={Home} />
      <Stack.Screen name="Profile2" component={Select} /> 
   <Stack.Screen name="Profile3" component={Cat} /> 
   <Stack.Screen name="Profile4" component={Select} /> 
<Stack.Screen name="Profile5" component={Shop} /> 
<Stack.Screen name="Profile6" component={Cart} /> 
  </Stack.Navigator> 
   </NavigationContainer>
 


  );

}}






 //   <NavigationContainer>
  //   <Stack.Navigator screenOptions={{
  //   headerShown: false
  // }}>
  //     <Stack.Screen
      
  //       name="Home"
  //       component={Page4}
        
  //     />
  //     <Stack.Screen name="Profile" component={Page3} />
  //     <Stack.Screen name="Profile1" component={Page5} />
  //     <Stack.Screen name="Profile2" component={Page4} /> 
  //  <Stack.Screen name="Profile3" component={Page7} /> 
  //  <Stack.Screen name="Profile4" component={Page6} /> 
  // </Stack.Navigator>
  //  </NavigationContainer>