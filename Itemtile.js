// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import { FlatList } from 'react-native';
import catitems from './catitems';
import Comps from './Comps.js';
import {useFonts} from "expo-font";
import Theme from './Theme';

const Itemtile=({title,color,onp})=>{
    const [fonts] = useFonts(
        {"mons":require("./Montserrat-Medium.ttf")},
        {"comf":require("./Comfortaa-SemiBold.ttf")},
        {"cookie":require("./Cookie-Regular.ttf")}
    );
    return(
        <Pressable android_ripple={{color:Theme.lightgrey}} onPress={onp} style={
            ({pressed})=>{
                return (pressed)?[styles.cattile,{backgroundColor:color,opacity:0.5}]:[styles.cattile,{backgroundColor:color}]
            }
        //    [styles.cattile,{backgroundColor:element.item.color}]
        }
            >
            <Text style={styles.cattext}>
                {title}
            </Text>
        </Pressable>
    )
}

export default Itemtile

const styles = StyleSheet.create({
    
   
    cattext:{
        fontSize:20,
        textTransform:"capitalize",
        letterSpacing:-0.5,
        fontFamily:"mons",
    },
    cattile:{
        flex:1,
        margin:"3%",
        padding:"1%",
        alignItems:"center",
        elevation:4,
        borderRadius:15,
        height:100,
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden"
    },
    
})