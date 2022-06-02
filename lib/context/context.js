import { useState } from "react-native";
import {createContext} from 'react'

const initialValue = {
    cabelereiros:{},
    setCabelereiros:()=>{}
}

export const UserContext = createContext(initialValue);

export const ContextProvider = ({children}) =>{   

    const [cabelereiros, setCabelereiros] = useState({});    
    
    return(
        <UserContext.Provider value={{ cabelereiros, setCabelereiros}}>
            {children}
        </UserContext.Provider>
    )
}