import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    return(
        <UserContext.Provider value={{setUser,user}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
