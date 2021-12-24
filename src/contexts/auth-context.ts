import {createContext} from 'react'

// type AuthContext = {
//     auth:{
//         user:{
//             firstName?:string,
//             lastName?:string
//         }
//     }
// }

export const Auth = createContext<any>({
    auth:{
        user: { 
            firstName: "Ignacio", 
            lastName: "Castillo" 
        }
     }
    } 
)