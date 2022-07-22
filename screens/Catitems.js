import React, { useEffect, useLayoutEffect } from "react";
import { View,Button,StyleSheet,Alert,Text, Pressable,Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Icbtn } from "../comps/Btns";
import Meallist from "../comps/Meallist";
import { CATEGORIES, MEALS } from "../data/Meals";
import { colors } from "../Theme";

// let array=[1,2];
let dataforcat;
const Catitems = ({navigation,route}) => {

  
  const catid = route.params.id;
  const catname = route.params.catname;
  useEffect(() => {
    navigation.setOptions({
      headerLeft:()=>{
        return <View style={styles.headerdiv}>
          <Icbtn onp={()=>navigation.goBack()} name={"arrow-back"} ph={10} mh={5} color={colors.dother} />
          <Text style={styles.pagename}>{catname}</Text>
        </View>
      },
      title:"",
      headerShown:true
    })
  }, [])
  
    dataforcat = MEALS.filter((item)=>{
        return item.categoryIds.includes(catid);
      })

    // const gotoitem=(id)=>{
    //     // console.log("id = "+id);
    //     navigation.navigate("itempage",{
    //         mid:id,
    //     });

    // }


  return (
    <View style={styles.mainscreen}>
        <Meallist list={dataforcat} />
    </View>
  );
};
export default Catitems;

const styles= StyleSheet.create({
  mainscreen:{
    flex:1,
    paddingTop:80,
    // backgroundColor:"#A5FFE7",
    // alignItems:"center",
    // justifyContent:"center",
    // A5FFE7 lightcyan D5FCA1 lightyellowgreen 797275 darkgrey 4C5AAC darkblue
  },
  itemimage:{
    height:"100%",
    width:"100%",
    borderRadius:10,
  },imagediv:{
    height:200,
    width:"100%",
    borderRadius:10,
    overflow:"hidden",
    padding:2,
  },listdiv:{
    // backgroundColor:"red",
    paddingVertical:5,
    marginHorizontal:5,
  }
  ,listitemdiv:{
    backgroundColor:"white",
    borderRadius:10,
    overflow:"hidden",
    marginHorizontal:5,
    marginVertical:7,
    alignItems:"center",
    elevation:5,
  },itemname:{
    fontSize:18,
    letterSpacing:1,
    textAlign:"center",
    // color:"white",
    paddingVertical:2,
    // fontFamily:"
  },headerdiv:{
    // backgroundColor:"red",
    flexDirection:"row",
    paddingVertical:5,
    justifyContent:"center",
    alignItems:"center",
  },pagename:{
    // backgroundColor:"blue",
    marginHorizontal:10,
    paddingHorizontal:10,
    alignItems:"center",
    justifyContent:"center",
    fontSize:22,
    fontFamily:"ralebo",
    // opacity:0.6,
    color:colors.dark
  }
})