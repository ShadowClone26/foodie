import React from "react";
import { View,Button,StyleSheet,Alert,Text } from "react-native";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import Btn, { Icbtn } from "../comps/Btns";
// import { Icbtn } from "../comps/Btns";

const Choosenum = ({onp}) => {
    return (
        <View style={styles.mainscreen}>
            <View style={styles.inpbardiv}>
            <Text style={styles.mediumtext}>
                Choose number
            </Text>
            <TextInput maxLength={2} keyboardType="number-pad" style={styles.ipbar} />
            </View>
            <Btn onp={onp}>
            <View style={styles.ictextbtn}>
            <Icbtn name={"checkmark"} color={"black"}/>
                <Text style={styles.mediumtext}>
                    ok
                </Text>
            </View>
            </Btn>
        </View>
    );
    };
export default Choosenum;

const styles= StyleSheet.create({
    mainscreen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },ipbar:{
        fontSize:30,
        letterSpacing:1,
        borderBottomWidth:2,
        marginHorizontal:2,
        paddingHorizontal:13,
        // alignItems:"center",
    },inpbardiv:{
        alignItems:"center",
        // marginTop:20,
    },mediumtext:{
        fontSize:20,
        letterSpacing:2,
    },ictextbtn:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"lightblue",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:10,
        marginVertical:35,
        borderRadius:50,
        elevation:8,
    }
    })