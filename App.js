import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import Foodreviewsc from "./Foodreviewsc.js";
import Item from "./Item.js";
import Homescreen from './Homescreen.js';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Stack } from 'react-native-router-flux';
import Comps from './Comps.js';
import {useFonts} from "expo-font";
import AppLoading, {AppLoadingProps} from "expo-app-loading";
import Theme from './Theme.js';
// import {AppLoading} from "expo-app-loading";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {Ionicons} from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorite from './Favorite.js';
import Favfoodprovider from './Favfoods.js';


const st = createNativeStackNavigator();
const drawer = createDrawerNavigator();

export default function App() {
  const [fonts] = useFonts(
    {"mons":require("./Montserrat-Medium.ttf")},
    );

    const Drawermenu=()=>{
      return <drawer.Navigator screenOptions={{
        // headerStyle:{
        //   backgroundColor:Theme.grey,
        // },
        // contentStyle:{
        //   backgroundColor:Theme.lightblue,
        // },
        // headerTintColor:"black",
        headerStyle:{
          backgroundColor:Theme.grey,
        },
        headerTitleContainerStyle:{width:"100%",alignItems:"flex-end"},
        // drawerPosition:"left",
        drawerActiveTintColor:"black",
        drawerActiveBackgroundColor:Theme.lightblue,
        drawerInactiveTintColor:Theme.lightblue,
        drawerStyle:{
          elevation:54,
          // height:"30%",
          margin:"auto",
          // alignItems:"center",
          // justifyContent
        },
        drawerContentStyle:{
          backgroundColor:Theme.grey,
        },
        sceneContainerStyle:{
          backgroundColor:Theme.lightblue,
        },
        
      }}>
      <drawer.Screen name='home' component={Homescreen} options={{
        drawerIcon:({color,size})=>{
         return <Ionicons name='home' color={color} size={size} />
        }
      }}/>
      <drawer.Screen name='favorites' component={Favorite} options={{
        drawerIcon:({color,size})=>{
          return <Ionicons name='heart' color={color} size={size} />
         }
      }}/>
    </drawer.Navigator>
    }
    
  return (
    <>
      <StatusBar style='light' />
      <Favfoodprovider>
      <NavigationContainer>
        <st.Navigator  screenOptions={{
          headerStyle:{
            backgroundColor:Theme.grey,
          },
          contentStyle:{
            backgroundColor:Theme.lightblue,
          },
          headerTintColor:"black",
        }}  initialRouteName="Homescreen">
        <st.Screen name="Homescreen" component={Drawermenu} options={{
          title:"items",
          headerShown:false,
          contentStyle:{backgroundColor:Theme.lightblue}
          }} />
        <st.Screen name="foodreview" component={Foodreviewsc} options={{
          title:"items",
          
          }} />
          <st.Screen name="itempage" component={Item} options={{
          title:"item",
          }} />
        </st.Navigator>
      </NavigationContainer>
      </Favfoodprovider>
      {/* <View>
          <Homescreen />
      </View>       */}
    </>
  );
}

const styles = StyleSheet.create({
  mainscreen: {
    fontFamily:"mons",
  },
});
