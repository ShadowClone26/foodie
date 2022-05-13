// import { Component } from "react/cjs/react.production.min"

import { View,StyleSheet,Text } from "react-native";
import {Ionicons} from "@expo/vector-icons";

import {useFonts} from "expo-font";
import {Pressable} from "react-native";

const loadfonts=()=>{
    const [fonts] = useFonts(
        {"mons":require("./Montserrat-Medium.ttf")},
        {"comf":require("./Comfortaa-SemiBold.ttf")},
        {"cookie":require("./Cookie-Regular.ttf")}
    );
    // console.log("running");
}



let Comps = {
   
    titlebtn:({children})=>{
        return <Text style={styles.titlestyle}>{children}</Text>
    },
    iconbtn:({name,size,color,onp})=>{
        return <Pressable style={({pressed})=>{
            return (pressed)?{opacity:0.4}:null
        }} onPress={onp}>
            <Ionicons name={name} size={size} color={color} />
        </Pressable>
    }
}

export default Comps;

const styles = StyleSheet.create({
    titlestyle:{
        fontSize:30,
        fontFamily:"mons",
        // fontWeight:"900"
        letterSpacing:-2
    }
})