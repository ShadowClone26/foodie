// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,Image,ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import catitems from './catitems';
import Comps from './Comps.js';
import {useFonts} from "expo-font";
import Theme from './Theme';
// import AppLoading from 'expo-app-loading';
import {meals} from './catitems';
import {NavigationContainer, route} from "@react-navigation/native";
import { useLayoutEffect } from 'react';
import {Ionicons} from "@expo/vector-icons";
import { useContext } from 'react';
import { FavFoods } from './Favfoods'; 

const Item=({route,navigation})=>{
    const favfoods = useContext(FavFoods);
    const idname = route.params.idname;
    console.log(idname);
    const mealfav = favfoods.ids.includes(idname);
    const fdata2 = meals.find((data)=>{return data.id===idname});
    // const fdata2 = fdata[0];
    const likechange=()=>{
        if (mealfav) {
            favfoods.removefav(idname);
        }else{
            favfoods.addfav(idname);
            console.log("added");
        }
    }
useLayoutEffect(() => {
    const dishname = fdata2.title;
    navigation.setOptions({
        title:dishname,
        headerRight:()=>{return <Comps.iconbtn name={mealfav?"heart":"heart-outline"} size={30} color={"black"} onp={likechange} />}
})
}, [fdata2,likechange])

    return(
        <ScrollView>
            <View style={styles.mainscreen}>
           <View style={styles.carddiv}>
           <Image style={styles.imagestyle} source={{uri:fdata2.imageUrl}} />
           <Text style={styles.title}>{ fdata2.title }</Text>
           </View>
           <View style={styles.detaildiv}>
               <Text style={[styles.detail]}>
               <Text style={[styles.minititle]}>affordability</Text> | {fdata2.affordability}
               </Text>
               <Text style={styles.detail}>
               <Text style={styles.minititle}>complexity</Text> | {fdata2.complexity}
               </Text>
               
             <View style={styles.inglist}>
               <Text style={styles.detail}>
               <Text style={[styles.minititle]}>Ingredients</Text> 
               </Text>
             {fdata2.ingredients.map((data,index)=>{
                  return <Text style={[styles.detail]} key={data}>{data}</Text>
              })}
             </View>
             <View style={styles.steplist}>
               <Text style={styles.detail}>
               <Text style={[styles.minititle]}>Steps</Text> 
               </Text>
             {fdata2.steps.map((data,index)=>{
                  return <Text style={[styles.detail]} key={data}>{data}</Text>
              })}
             </View>
              
               
           </View>
       </View>
        </ScrollView>
    )
}

export default Item

const styles = StyleSheet.create({
    mainscreen:{
        flex:1,
        alignItems:"center",
        // backgroundColor:"white",
        
    },
    imagestyle:{
        width:"100%",
        height:350,
        // position:"relative",
        alignItems:"center",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        
    },
    carddiv:{
        width:"100%",
        paddingHorizontal:"1%",
        position:"relative",
        alignItems:"center",
    },
    title:{
        fontSize:25,
        fontFamily:"mons",
        // fontWeight:"900"
        letterSpacing:-1,
        backgroundColor:"white",
        opacity:0.9,
        position:"absolute",
        paddingHorizontal:"5%",
        bottom:1,
        textAlign:"center",
        // padding:6,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },minititle:{
        fontWeight:"bold",
        fontSize:17,
        color:"black",
    },
    inglist:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginVertical:"5%",
        backgroundColor:"white",
        borderRadius:20,
        width:"90%",
        elevation:5,
    },steplist:{
        display:"flex",
        width:"100%",
        alignItems:"center",
        width:"90%",
        backgroundColor:"white",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        elevation:5,
    },
    detaildiv:{
        // backgroundColor:"white",
        width:"100%",
        padding:"2%",
        alignItems:"center",
    },
    detail:{
        // backgroundColor:"white",
        paddingHorizontal:"2%",
        paddingVertical:"1%",
        marginVertical:"0.5%",
        fontSize:15,
        fontFamily:"mons",
        letterSpacing:1,
        width:"90%",
        alignItems:"center",
        textAlign:"center",
        borderRadius:50,
        paddingHorizontal:"5%",
        color:Theme.darktheme
    }
})