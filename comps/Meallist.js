import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { View,Button,StyleSheet,Alert,Text, Pressable,Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../Theme";




const Meallist = ({list}) => {

   let navigation = useNavigation();
   
    const gotoitem=(id,mname)=>{
        // console.log(maname);
        navigation.navigate("itempage",{
            mid:id,
            mname:mname
        });

    }
    const renderit=({item})=>{

        return(
            <Pressable onPress={gotoitem.bind(this,item.id,item.title)} style={({pressed})=>{return pressed?[styles.listitemdiv,{opacity:0.5}]:[styles.listitemdiv]}}>
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
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={renderit}
        keyExtractor={(item)=>{
            return item.id;
            
        }}
        />
        </View>
    </View>
  );
};
export default Meallist;

const styles= StyleSheet.create({
  mainscreen:{
    flex:1,
    // backgroundColor:"red"
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
    // backgroundColor:colors.medium
  },listdiv:{
    // backgroundColor:"red",
    paddingVertical:5,
    marginHorizontal:5,
  },listitemdiv:{
    backgroundColor:colors.vlight,
    borderRadius:10,
    overflow:"hidden",
    marginHorizontal:5,
    marginVertical:7,
    alignItems:"center",
    elevation:2,
  },itemname:{
    fontSize:18,
    letterSpacing:0.5,
    textAlign:"center",
    paddingHorizontal:10,
    // paddingVertical:10,
    // color:"white",
    // backgroundColor:"red",
    paddingVertical:5,
    color:colors.dark,
    fontFamily:"ralemid"
  }
})