import { useContext } from "react"
import {Auth} from '../contexts/auth-context'

export const useAuth= ()=>{
    return useContext(Auth)
}