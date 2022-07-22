import React, { useEffect } from "react";
import { View,Button,StyleSheet,Alert,Text, ActivityIndicator, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Modal } from "react-native";
import { useState } from "react";
import Menu from "./screens/Menu";
import Catitems from "./screens/Catitems";
import Itempage from "./screens/Itempage";
import { Mealctxp } from "./comps/Mealctx";
import Favmeals from "./screens/Favmeals";
import { colors } from "./Theme";
import { useFonts } from "expo-font";

// import Btn from "./comps/Btns";
// import {Ionicons} from "@expo/vector-icons"
// import { Icbtn } from "./comps/Btns";

const st = createNativeStackNavigator();

const App = () => {



    let fonts = useFonts({
      comf:require("./Comfortaa-SemiBold.ttf"),
      mons:require("./constants/mons.ttf"),
      monsbo:require("./constants/monsbo.ttf"),
      monsmid:require("./constants/monsmid.ttf"),
      rale:require("./constants/rale.ttf"),
      ralebo:require("./constants/ralebo.ttf"),
      ralemid:require("./constants/ralemid.ttf"),
      ro:require("./constants/ro.ttf"),
      robo:require("./constants/robo.ttf"),
      romid:require("./constants/Roboto-Medium.ttf")
    })
  

    if (!fonts) {
      return(
        <>
        <StatusBar backgroundColor={colors.lother} barStyle={"dark-content"} />
        <View style={styles.mainscreen}>
          <View style={styles.lspindiv}>
          <ActivityIndicator color={colors.dother} size={70} style={styles.lspin} />
          <Text style={[styles.lspintext]}>Loading tests... 😋</Text>
          </View>
        </View>
        </>
      )
    }else{
      return (
        <>
        <StatusBar backgroundColor={colors.lother} barStyle={"dark-content"} />
        <Mealctxp>
        <NavigationContainer>
          <st.Navigator screenOptions={{
            // headerShown:false,
            headerStyle:{
              // backgroundColor:colors.dother,
              
            },
            headerTitleStyle:{
              fontSize:20,
            },
            headerTransparent:true,
           contentStyle:{
            backgroundColor:colors.lother,
           },
          }}>
            
            <st.Screen name="menu" component={Menu} option={{headerShown:false}} />
            <st.Screen name="catitems" component={Catitems} options={{headerShown:false}} />
            <st.Screen name="itempage" component={Itempage} />
            <st.Screen name="favmeals" component={Favmeals} />
          </st.Navigator>
        </NavigationContainer>
        </Mealctxp>
        </>
      );
    }

  
};

export default App;

const styles= StyleSheet.create({
  mainscreen:{
    flex:1,
    backgroundColor:colors.lother,
    // A5FFE7 lightcyan D5FCA1 lightyellowgreen 797275 darkgrey 4C5AAC darkblue
  },lspindiv:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },lspin:{
    opacity:0.3,
  },lspintext:{
    // backgroundColor:"red",
    fontSize:25,
    letterSpacing:0.5,
    opacity:0.6,
    color:colors.dother,
    // fontFamily:"rale"
  }

})
