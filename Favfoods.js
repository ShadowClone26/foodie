import { useState } from "react";
import { createContext } from "react";
import { StyleSheet, Text, View } from 'react-native'


export const FavFoods = createContext({
    ids: [],
    addfav: (id) => {},
    removefav: (id) => {}
});

export default function Favfoodprovider({children}){
    const [favfoodlist, setfavfoodlist] = useState([]);
    const addfav = (id) => {
        setfavfoodlist((cur) => [...cur, id]);
    }
    const removefav = (id) => { 
        setfavfoodlist((cur) => cur.filter(fds => fds !== id));
    }

    const value = {
        ids: favfoodlist,
        addfav: addfav,
        removefav: removefav,
    }

    return (<FavFoods.Provider value = {value} >{children}</FavFoods.Provider>);
    
}
