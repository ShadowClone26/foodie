import React from "react";
import { View,Button,StyleSheet,Alert,Text } from "react-native";
import { Icbtn } from "../comps/Btns";
// import { Icbtn } from "../comps/Btns";


const Startgame = ({onp}) => {
return (
<View style={styles.startgamesc}>

        <Text style={styles.gamename}>
          Guess it !
        </Text>
        <Icbtn name={"play"} color={"black"} onp={onp} bgcol={"lightblue"}  mv={2} mh={2} pv={10} ph={10}/>
        </View>
 );
};
export default Startgame;
const styles= StyleSheet.create({
startgamesc:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#A5FFE7",
  }, gamename:{
    fontSize:35,
    // letterSpacing:-1,
  }
})