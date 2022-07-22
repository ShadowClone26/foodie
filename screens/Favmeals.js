import React, { useContext, useEffect, useLayoutEffect } from "react";
import { View,Button,StyleSheet,Alert,Text, Pressable,Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Btn, { Icbtn } from "../comps/Btns";
import { mealctxx } from "../comps/Mealctx";
import Meallist from "../comps/Meallist";
import { MEALS } from "../data/Meals";
import { colors } from "../Theme";
// import { MEALS } from "../data/Meals";

// let array=[1,2];
let  newarr;
let dataforcat;
const Favmeals = ({navigation}) => {

 

  const gotomenu=()=>{
    navigation.goBack();
  }
  useEffect(() => {
    navigation.setOptions({
      headerLeft:()=>{
        return <View style={styles.headerdiv}>
          <Icbtn onp={()=>navigation.goBack()} name={"arrow-back"} ph={10} mh={5} color={colors.dother} />
          <Text style={styles.pagename}>Favorite Meals</Text>
        </View>
      },
      title:"",
      headerShown:true
    })
  }, [])

    const mealctxxx = useContext(mealctxx);
    
  
     newarr =  MEALS.filter((item)=>{
        return mealctxxx.favmeals.includes(item.id);
    });

    console.log("newarr");
    console.log(newarr);

    const gotoitem=(id)=>{
        // console.log("id = "+id);
        navigation.navigate("itempage",{
            mid:id
        });

    }
    
    if (mealctxxx.favmeals.length===0) {
      return(
        <View style={[styles.mainscreen,styles.nomeals]}>
          <Text style={styles.notification}>
            no favorites yet,
          </Text>
          <Btn onp={gotomenu}>
              <Text style={styles.btn}>try new</Text>
            </Btn>
        </View>
      )
    }

  return (
    <View style={styles.mainscreen}>
        <Meallist list={newarr} />
    </View>
  );
};
export default Favmeals;

const styles= StyleSheet.create({
  mainscreen:{
    flex:1,
    paddingTop:80,
    // backgroundColor:"#A5FFE7",
    // alignItems:"center",
    // justifyContent:"center",
    // A5FFE7 lightcyan D5FCA1 lightyellowgreen 797275 darkgrey 4C5AAC darkblue
  },
  nomeals:{
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
  },notification:{
    letterSpacing:1,
    textTransform:"capitalize",
    color:colors.vdark,
    fontSize:17,
    opacity:0.7,
  },btn:{
    color:colors.vlight,
    textTransform:"uppercase",
    letterSpacing:3,
    marginVertical:10,
    elevation:4,
    backgroundColor:colors.dark,
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:10,
    // borderWidth:1,
    // borderColor:"darkblue",
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
    color:colors.dark,
  }
})