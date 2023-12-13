

import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const headerShown = (name) => {
  return (
    <View
      style={{
        width:375,
        height:140
      }}>
      <View style={{
    width:375,
    height:44
}}>
    <View style={{width:24,height:24,marginTop:8,marginLeft:8}}>
  <AntDesign name='left'   size={25} color={'#000'} />
  </View>

</View>
<View style={{width:287,height:45,marginTop:18,marginLeft:14}}>
    <Text style={{fontSize:34,color:'#000',fontWeight:'bold'}}> {name}</Text>
</View>
    </View>
  );
};
export default headerShown;