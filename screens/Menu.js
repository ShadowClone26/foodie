import React, { useEffect } from "react";
import { View,Button,StyleSheet,Alert,Text, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Btn, { Icbtn } from "../comps/Btns";
import { CATEGORIES, MEALS } from "../data/Meals";
import { colors } from "../Theme";


// import Btn from "./comps/Btns";
// import {Ionicons} from "@expo/vector-icons"
// import { Icbtn } from "./comps/Btns";
const Menu = ({navigation}) => {

  const gotofav=()=>{
    navigation.navigate("favmeals");
}


   useEffect(() => {
    navigation.setOptions({
      title:"",
      headerRight:()=>{return(
        <Btn onp={gotofav}><View style={styles.iconbtn}><Icbtn name={"fast-food"} color={colors.dark} onp={gotofav}/>
      <Text style={styles.iconname}>Favorites</Text></View></Btn>
      ) 
      },
      headerLeft:()=>{return(
        <Text style={styles.pagename}>Menu</Text>
      ) 
      }
    });
   }, [])
   

    const gotoitem=(id,catname)=>{
        // console.log("id = "+id);
        navigation.navigate("catitems",{
            id:id,
            catname:catname
        })
    }

  const renderit=({item})=>{
    return(
        <Pressable onPress={gotoitem.bind(this,item.id,item.name)} style={({pressed})=>{return pressed?[styles.gridtile,{backgroundColor:item.color,opacity:0.5}]:[styles.gridtile,{backgroundColor:item.color}]}}>
            <Text style={styles.itemtitle}>
                {item.name}
            </Text>
        </Pressable>
    )
  }

  return (
    <View style={styles.mainscreen}>
        <View style={styles.listdiv}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={CATEGORIES}
        renderItem={renderit}
        keyExtractor={(item)=>{
            return item.id;
        }}
        numColumns="2"
        />
        </View>
    </View>
  );
};

export default Menu;

const styles= StyleSheet.create({
  mainscreen:{
    flex:1,
    // backgroundColor:"#A5FFE7",
    // alignItems:"center",
    justifyContent:"center",
    // A5FFE7 lightcyan D5FCA1 lightyellowgreen 797275 darkgrey 4C5AAC darkblue
  },
  gridtile:{
    flex:1,
    // width:10,
    height:90,
    margin:5,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    elevation:3,
    // paddingHorizontal:10,
  },listdiv:{
    marginTop:100,
    flex:1,
    paddingHorizontal:15,
    // backgroundColor:"red",
  },itemtitle:{
    fontSize:20,
    // letterSpacing:-1,
    // fontFamily:"ralemid",
    textAlign:"center",
  },
  iconname:{
    fontSize:12,
    color:colors.dark,
    // letterSpacing:-0.5,
    fontFamily:"rale"
  },iconbtn:{
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"red",
    marginTop:5,
  },pagename:{
    // backgroundColor:"red",
    fontSize:26,
    marginLeft:20,
    letterSpacing:1,
    color:colors.vdark,
    marginTop:10,
    // fontFamily:"ralebo",

  }
})
