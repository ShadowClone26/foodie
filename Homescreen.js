// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import { FlatList } from 'react-native';
import catitems from './catitems';
import Comps from './Comps.js';
import {useFonts} from "expo-font";
import Theme from './Theme';
import Itemtile from './Itemtile';
import AppLoading, {AppLoadingProps} from "expo-app-loading";
// import AppLoading from 'expo-app-loading';

const Homescreen=({navigation})=>{

    const renderitems=(itemdata)=>{
        const navigatetoreview=()=>{
            
            navigation.navigate("foodreview",{
                cateid:itemdata.item.id,
            });
        }
            return <Itemtile
            onp={navigatetoreview}
            color={itemdata.item.color}
            title={itemdata.item.name}
           />
        
    }

    const [fonts] = useFonts(
        {"mons":require("./Montserrat-Medium.ttf")},
        {"comf":require("./Comfortaa-SemiBold.ttf")},
        {"cookie":require("./Cookie-Regular.ttf")}
    );
    if (!fonts) {
        return <AppLoading />
      }else{

    return(
        <View style={styles.mainscreen}>
            <FlatList 
                data={catitems}
                keyExtractor={(key)=>{
                    return key.id
                }}
                renderItem={renderitems}
                numColumns={2}
            />
            
        </View>
    )}
}

export default Homescreen

const styles = StyleSheet.create({
    mainscreen:{
        // flex:1,
    },
    menudiv:{
        width:"100%",
        alignItems:"center",
        // backgroundColor:"lightcoral",
        paddingVertical:"2%",
        marginVertical:"1%",
    },
    tittletext:{
        fontFamily:"mons",
        backgroundColor:"red",
    },
    cattext:{
        fontSize:20,
        textTransform:"capitalize",
        letterSpacing:-0.5,
        fontFamily:"mons",
    },
    cattile:{
        flex:1,
        margin:"3%",
        padding:"1%",
        alignItems:"center",
        elevation:4,
        borderRadius:15,
        height:100,
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden"
    },
    list:{
        // justifyContent:'space-between' ,
    }
})