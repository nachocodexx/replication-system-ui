import {useEffect, useState} from 'react'
export const useProvideAuth = ()=>{
    const authServiceURL  = "http://localhost:7500/api/v6"
    // const statsServiceURL = "http://148.247.201.222:3000/api/v6"
    const statsServiceURL = "http://localhost:3000/api/v6"
    const  [user,setUser] = useState(null)

    useEffect(()=>{
     console.log("CHECK IF TOKEN IS VALID")   
    },[])


    const signin = (email:string,password:string)=>
        fetch(`${authServiceURL}/signin`, {
            method: "POST",
            body: JSON.stringify({email,password}),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json =>{
                setUser(json)
                return Promise.resolve(json)
        }
        )
        .catch(e => {
            console.error(`ERROR: ${e}`)
        })
    
    const stats = ()=>
        fetch(`${statsServiceURL}/stats`, {
            method: "GET",
            mode: "cors",
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        }).then(response => response.json())
        .then(json =>{
            return Promise.resolve(json)
        }
        )
        .catch(e => {
            console.error(`ERROR: ${e}`)
        })

    return {
        user,
        signin,
        stats
    }  
}