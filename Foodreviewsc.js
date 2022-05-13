import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import catitems, {meals} from './catitems';
import {route} from "@react-navigation/native";
import Itemcard from './Itemcard';
import { useLayoutEffect } from 'react';
import {Ionicons} from "@expo/vector-icons";
import Foodlist from './Foodlist';

const Foodreviewsc=({route,navigation})=>{
    const catid = route.params.cateid;
    
    
    useLayoutEffect(() => {
        const catidname = catitems.find((data)=>{ return data.id===catid}).name;
    console.log(catidname);
      navigation.setOptions(
          {
            title:catidname,
          }
      )
    
      
    }, [catid,navigation])

    const fdata = meals.filter((mealdata)=>{
        return mealdata.categoryIds.indexOf(catid)>=0;
    })
    const gotoitem=(id)=>{
        // console.log(id);
        navigation.navigate("itempage",{
            idname:id
        });
    }
    
    
    return(
        <Foodlist list = {fdata} navig={gotoitem}
        />
        // <Text>{catid}</Text>
    )
}

export default Foodreviewsc

const styles = StyleSheet.create({
    mainscreen:{
        flex:1,
    },
    headr:{
        backgroundColor:"red",
    }
})