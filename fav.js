
import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity, Alert,ActivityIndicator, ScrollView} from 'react-native'
import headerShown from './component/header';
import { usePreventRemoveContext } from '@react-navigation/native';
import textinp from './component/textinput';
import Item from './component/item';
import button from './component/button';
import img_button from './component/image_button';
import blackk from './component/blackbutt';
import Feather from 'react-native-vector-icons/Feather'
import header3 from './component/shopheader';
export default class App extends React.Component {
    render() {

        return (
            <View style={{backgroundColor:'#F9F9F9'}} >
                {header3('','Favourite','search1')}
                
                <ScrollView horizontal={true}>
                <View style={{backgroundColor:'#fff',width:537,height:30,marginTop:20,marginLeft:16,flexDirection:'row',justifyContent:'space-between'}}>

{blackk('summer')}
{blackk('shirt')}
{blackk('t-shirt')}
{blackk('dress')}
{blackk('summ')}


                </View>
                </ScrollView>
                <ScrollView horizontal={false}>
                <View style={{width:345,height:581,marginTop:10,flexWrap:'wrap',flexDirection:'row',marginLeft:15}}>
                
{Item('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7','ansjdj','dreass','12$','15$')}
{Item('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7','ansjdj','dreass','12$','15$')}
{Item('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7','ansjdj','dreass','12$','15$')}

{Item('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7','ansjdj','dreass','12$','15$')}
{Item('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7','ansjdj','dreass','12$','15$')}
{Item('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7','ansjdj','dreass','12$','15$')}

{Item('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7','ansjdj','dreass','12$','15$')}
{Item('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7','ansjdj','dreass','12$','15$')}
{Item('https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=215&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7','ansjdj','dreass','12$','15$')}

                </View>
                </ScrollView>
            </View>);}}