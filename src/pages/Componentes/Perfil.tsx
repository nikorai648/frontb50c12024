import React from 'react'

interface Props{
    <nombre:string
    apellido:string
    Edad:number
}

export const Perfil = (props:any) => {
    return (
        <div>
        Nombre:{props.nombre}
        Apellido:{props.apellido}
        Edad:{props.edad}
    {props.edad>18 && <p>Eres mayor de edad</p>}
    </div>
    )
}