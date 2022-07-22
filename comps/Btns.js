import {View,Text,Pressable,StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons"


const Btn=({children,onp,mv,mh,pv,ph,fz})=>{
    return(
       <Pressable onPress={onp}>
           {children}
        </Pressable>
        
    )
}
export const Icbtn = ({onp,name,color,bgcol,mv,mh,pv,ph})=>{
    return(
        <Pressable onPress={onp} style={[styles.icbtn,{backgroundColor:bgcol,marginVertical:mv,marginHorizontal:mh}]}>
            <Ionicons name={name} size={30} color={color} style={[styles.icbtn,{backgroundColor:bgcol,paddingVertical:pv,paddingHorizontal:ph}]} />
        </Pressable>
    )
}

export default Btn;

const styles = StyleSheet.create({
    icbtn:{
        borderRadius:15,
        
    }
})