import { createContext,useState} from "react";
 
export const AuthContext= createContext(null);


export default function Context({children}){
    const [users,setuser]=useState('hiii')


    return(
        <AuthContext.Provider value={{users,setuser}}>
            {children}

        </AuthContext.Provider>
    )
}
