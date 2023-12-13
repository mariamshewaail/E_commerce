

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInpu = ({ placeholder, onChangeText, value, secureTextEntry,top=10 }) => {
  return (




<TextInput  style={{
      width:343,
      height:64,
     marginTop:top,
    
      marginLeft:16,backgroundColor:'#FFF',alignSelf:'center'
    }}
placeholder={placeholder}
onChangeText={onChangeText}
value={value}
secureTextEntry={secureTextEntry}
>

</TextInput>
  
  );
};

export default TextInpu;




























// const textinp = (  name,top=8) => {
//    return (

//   );
// };
// export default textinp;