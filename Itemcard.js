import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Pressable } from 'react-native';
import { FlatList } from 'react-native';
import {meals} from './catitems';
import {route} from "@react-navigation/native";
import {useFonts} from "expo-font";
import Theme from './Theme';

const Itemcard=({id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,onp})=>{
    const [fonts] = useFonts(
        {"mons":require("./Montserrat-Medium.ttf")},
    );
    const gotoitem=(id)=>{
        // console.log(id);
        onp(id);
    }
    return(
        <View style={[styles.maincard]}>
            <Pressable onPress={gotoitem.bind(this,id)} android_ripple={{color:"red"}} style={({pressed})=>{
        return (pressed)?{opacity:0.5}:null
    }}>
        <Image style={styles.cardimage} source={{uri:imageUrl}} />
       
        <View style={styles.detaildiv}>
            <Text style={styles.cardtitle}>
            {title}
        </Text>
       
       
        <View style={styles.otherdeatildiv}>
        <Text style={styles.otherdeatil}>
            {affordability}
        </Text><Text style={{fontWeight:"bold"}}>|</Text>
        <Text style={styles.otherdeatil}>
            {complexity}
        </Text><Text style={{fontWeight:"bold"}}>|</Text>
        <Text style={styles.otherdeatil}>
            {duration} min
        </Text></View>
        </View>
        
    </Pressable>
        </View>
   )
}
export default Itemcard

const styles=StyleSheet.create({
    maincard:{
        // flex:1,
        marginVertical:"2%",
        marginHorizontal:"5%",
        // borderRadius:20,
        elevation:4,
        backgroundColor:"white",
        overflow:"hidden",
        borderRadius:20,
        borderColor:"white",
        borderWidth:2,
        borderTopWidth:3,
        borderColor:"white"
    },
    detaildiv:{
        padding:"2%",
        alignItems:"center",
    },
    cardtitle:{
        fontFamily:"mons",
        fontSize:20,
        // backgroundColor:"lightcoral",
        marginVertical:"2%",
        padding:"1%",
    },
    cardimage:{
        height:200,
        width:"100%",
        // borderRadius:20,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
    },
    otherdeatildiv:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        width:"65%",
        borderRadius:20
    },
    otherdeatil:{
        fontFamily:"mons",
        fontSize:15,
        letterSpacing:-0.5,
        marginHorizontal:1,
        borderRadius:20
        // paddingHorizontal:"1%",
    }
})