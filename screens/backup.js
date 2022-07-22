import React, { useEffect, useLayoutEffect } from "react";
import { View,Button,StyleSheet,Alert,Text, Pressable,Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MEALS } from "../data/Meals";

// let array=[1,2];
let dataforcat;
const Catitems = ({navigation,route}) => {

    const catid = route.params.id;
    
    dataforcat = MEALS.filter((item)=>{
        return item.categoryIds.includes(catid);
      })

    const gotoitem=(id)=>{
        // console.log("id = "+id);
        navigation.navigate("itempage",{
            mid:id
        });

    }
    const renderit=({item})=>{

        return(
            <Pressable onPress={gotoitem.bind(this,item.id)} style={({pressed})=>{return pressed?[styles.listitemdiv,{opacity:0.5}]:[styles.listitemdiv]}}>
                <View style={styles.imagediv}>
                <Image source={{uri:item.imageUrl}} style={styles.itemimage} />
                </View>
                <Text style={styles.itemname}>
                    {
                        item.title   
                    }
                </Text>
            </Pressable>
        )
    }

  return (
    <View style={styles.mainscreen}>
        <View style={styles.listdiv}>
        <FlatList
        data={dataforcat}
        renderItem={renderit}
        keyExtractor={(item)=>{
            return item.id;
            
        }}
        />
        </View>
    </View>
  );
};
export default Catitems;

const styles= StyleSheet.create({
  mainscreen:{
    flex:1,
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
  }
})