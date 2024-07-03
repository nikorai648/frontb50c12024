import { obtenerPersonas } from "../Firebase/Promesas"
import React, { useEffect }  from "react"

export const Pagina4 =()=>{
    const traerDatos = ()=>{
        obtenerPersonas().then((personas)=>{
            console.log(personas)
        })
        useEffect(()=>{
            traerDatos()
        },[])
    
    return(
        <>


        </>
    )
}}
export default Pagina4