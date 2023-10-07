import React from "react";
import {UserContext} from "./Context";

export const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(1)
   
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

