import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import catitems, {meals} from './catitems';
import {route} from "@react-navigation/native";
import Itemcard from './Itemcard';
import { useLayoutEffect } from 'react';
import {Ionicons} from "@expo/vector-icons";


const Foodlist = ({list,navig})=>{
    const renderitem=(itemdata)=>{
        let dataob = {
            id:itemdata.item.id,
            categoryIds:itemdata.item.categoryIds,
            title:itemdata.item.title,
            affordability:itemdata.item.affordability,
            complexity:itemdata.item.complexity,
            imageUrl:itemdata.item.imageUrl,
            duration:itemdata.item.duration,
            
        }
        // const funn = ()=>{
        //     navig(dataob.id);
        // }
        return <Itemcard {...dataob } onp={navig}/>}
    return(
        <FlatList 
        data={list}
        renderItem={renderitem}
        keyExtractor={(key)=>{
            return Math.random()*100000;
        }}
        />
    )
}
export default Foodlist