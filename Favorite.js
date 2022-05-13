import { StyleSheet, Text, View } from 'react-native'
import { FavFoods } from './Favfoods';
import {useContext} from "react";
import {useFonts} from "expo-font";
import AppLoading, {AppLoadingProps} from "expo-app-loading";
import {Ionicons} from "@expo/vector-icons";

import Foodlist from './Foodlist';
import { meals } from './catitems';

const Favorite=({navigation})=>{
    
    const gotoitem=(id)=>{
        console.log(id);
        navigation.navigate("itempage",{
            idname:id
        });
    }
    const favfdlist = useContext(FavFoods);
    const flist = meals.filter(meals=>favfdlist.ids.includes(meals.id));
    console.log(flist);
      
    const [fonts] = useFonts(
        {"mons":require("./Montserrat-Medium.ttf")},
        {"comf":require("./Comfortaa-SemiBold.ttf")},
        {"cookie":require("./Cookie-Regular.ttf")}
    );
    if (!fonts) {
        return <AppLoading />
      }else{

    if(favfdlist.ids.length==0){
        return <View style={styles.mainscreen}>
            <Text style={styles.alerttext}>
                no items yet
            </Text>
        </View>
    }else{
        return (
            <Foodlist list={flist} navig={gotoitem} />
        )
    }
}
}
export default Favorite;

const styles= StyleSheet.create({
    mainscreen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    alerttext:{
        fontSize:20,
        fontFamily:"mons",
        letterSpacing:10,
        textTransform:"uppercase",
        opacity:0.2,
        // textShadowOffset:"a",
    }
})