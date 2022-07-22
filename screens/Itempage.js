import React, { useContext, useEffect, useLayoutEffect } from "react";
import { View,Button,StyleSheet,Alert,Text, Pressable,Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { favmeals, MEALS } from "../data/Meals";
import Btn, {Icbtn} from "../comps/Btns";
import { mealctxx } from "../comps/Mealctx";
import { colors } from "../Theme";

const Itempage = ({navigation,route}) => {

    const mealctxxx = useContext(mealctxx);
    // console.log("mealctxx");
    // console.log(mealctxx);


    const opfav=()=>{
        
        if (mealctxxx.favmeals.includes(mid)) {
            mealctxxx.removemeal(mid);
        }else{
            mealctxxx.addmeal(mid);
        }
        
    }

    // const gotofav=()=>{
    //     navigation.navigate("favmeals");
    // }

    
    const mid = route.params.mid;
    const mname = route.params.mname;

    useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerRight:()=>{return <Icbtn name={(mealctxxx.favmeals.includes(mid))?"heart":"heart-outline"} color={colors.dark} onp={opfav} />},
                headerLeft:()=>{
                  return <View style={styles.headerdiv}>
                    <Icbtn onp={()=>navigation.goBack()} name={"arrow-back"} color={colors.dother} ph={10} mh={5} />
                    <Text style={styles.pagename}>{mname}</Text>
                  </View>
                },
                title:"",
                headerShown:true
            }
            
        );
    }, [favmeals,mealctxxx])
    let meal = MEALS.filter((item)=>{
        return (item.id===mid)&&item;
    })[0];
    const renderit=({item})=>{
        return(
            <View>
                <Text>
                    {item}
                    
                </Text>
            </View>
        )
    }
return (
    <ScrollView style={styles.mainscreen} showsVerticalScrollIndicator={false} >
        {/* <Btn onp={gotofav}><Text>goto fav</Text></Btn> */}
        <View style={styles.imagediv}>
                <Image source={{uri:meal.imageUrl}} style={styles.itemimage} />
                </View>
                <Text style={styles.itemname}>
                    {meal.title}
                </Text>
                <View style={styles.detailsdiv}>
                <View style={styles.minidiv}>
                <View style={styles.minisubdiv}>
                    <Text style={styles.miniheadi}>duration</Text>
                    <Text style={styles.minidetails}>{meal.duration} m</Text>
                </View><View>
                    <Text style={{fontSize:25,color:colors.medium}}> | </Text>
                </View>
                <View style={styles.minisubdiv}>
                    <Text style={styles.miniheadi}>complexity</Text>
                    <Text style={styles.minidetails}>{meal.complexity}</Text>
                </View><View>
                    <Text style={{fontSize:25,color:colors.medium}}> | </Text>
                </View>
                <View style={styles.minisubdiv}>
                    <Text style={styles.miniheadi}>affordability</Text>
                    <Text style={styles.minidetails}>{meal.affordability}</Text>
                </View>
                </View>
                
                <View style={styles.stepdiv}>
                    <Text style={styles.miniheadi}>
                        Ingredients
                    </Text>
                    <View style={styles.listdiv}>
                    {meal.ingredients.map((item,index)=>{
                        return(<Text style={[styles.minidetails]} key={item}>{item}</Text>)
                    })}
                    </View>
                </View>
                <View style={styles.stepdiv}>
                    <Text style={styles.miniheadi}>
                    Steps
                    </Text>
                    <View style={styles.listdiv}>
                    {meal.steps.map((item,index)=>{
                        return(<Text style={styles.minidetails} key={item}>{item}</Text>)
                    })}
                    </View>
                </View>
                </View>
      

    </ScrollView>
  );
};
export default Itempage;

const styles= StyleSheet.create({
  mainscreen:{
    flex:1,
    marginTop:140,
    // backgroundColor:"#A5FFE7",
    // alignItems:"center",
    // justifyContent:"center",
    // A5FFE7 lightcyan D5FCA1 lightyellowgreen 797275 darkgrey 4C5AAC darkblue
  },imagediv:{
    height:250,
    width:"100%",
    borderRadius:10,
    overflow:"hidden",
    paddingHorizontal:10,
    padding:2,
   
    // marginHorizontal:10,
  },itemimage:{
    height:"100%",
    width:"100%",
    borderRadius:10, 
    borderColor:colors.dark,
    borderWidth:1,
  },detailsdiv:{
    // backgroundColor:colors.dother,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    marginTop:10,
    marginHorizontal:20,
    flex:1,
  },minidiv:{
    display:"flex",
    flexDirection:"row",
    // flex:1,
    alignItems:"center",
    // backgroundColor:"red",
    justifyContent:"center",
    marginVertical:10,
    // paddingHorizontal:20,
    borderRadius:5,
    paddingVertical:5,
  },itemname:{
    fontSize:18,
    // backgroundColor:"red",
    textAlign:"center",
    color:colors.vdark,
    letterSpacing:1,
    paddingHorizontal:10,
    paddingVertical:5,
    fontFamily:"ralemid"
    // flex:1,
  },miniheadi:{
    fontSize:16,
    color:colors.dother,
    paddingHorizontal:5,
    borderRadius:5,
    paddingVertical:2,
    letterSpacing:1,
    textTransform:"capitalize",
    fontFamily:"ralebo"
    // borderBottomWidth:1,
    // borderBottomColor:colors.lother
    // textAlign:"center",
    // alignItems:"center",
  },minisubdiv:{
    alignItems:"center",
    // color:colors.dark
  },minidetails:{
    letterSpacing:1,
    textAlign:"center",
    marginVertical:2,
    color:colors.dark,
    fontFamily:"ralemid"
  },
  listdiv:{
    // backgroundColor:"red",
    flex:1,
    // height:"70%",
    marginVertical:7,
  },stepdiv:{
    flex:1,
    alignItems:"center",
    marginVertical:7,
  },headerdiv:{
    // backgroundColor:"red",
    flexDirection:"row",
    // paddingVertical:5,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:"-10%",
    // paddingVertical:10,
    height:110,
  },pagename:{
    // backgroundColor:"blue",
    marginHorizontal:10,
    paddingHorizontal:10,
    alignItems:"center",
    justifyContent:"center",
    fontSize:22,
    width:"70%",
    fontFamily:"ralebo",
    color:colors.dark,
  }
})