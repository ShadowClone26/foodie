import { createContext, useState } from "react";

export const mealctxx = createContext({
    favmeals: [],
    addmeal: (id) => {},
    removemeal: (id) => {}
})

export const Mealctxp = ({children})=>{
    
    const [favmeals, setfavmeals] = useState([]);

        const addmeal=(id)=>{
            setfavmeals([...favmeals,id]);
        }

        const removemeal=(id)=>{
            let arr =  favmeals.filter((item)=>{
                return item!==id;
            })
            setfavmeals(arr);
        }

    let value = {
        favmeals:favmeals,
        addmeal:addmeal,
        removemeal:removemeal
    }

    return <mealctxx.Provider value={value}>{children}</mealctxx.Provider>
}