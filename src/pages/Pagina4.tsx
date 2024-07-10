import { obtenerPersonas } from "../Firebase/Promesas"
import React, { useEffect, useState }  from "react"
import { Persona } from "../Interfaces/Interfaces"
import  Table from "react-bootstrap/Table"
import Button from 'react-bootstrap/Button'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from 'next/link'
export const Pagina4 =()=>{
    const [personas, setpersonas] = useState<Persona[]>([])
    const traerDatos = ()=>{
        obtenerPersonas().then((personas)=>{
            console.log(personas)
            setpersonas(personas)
        })
        useEffect(()=>{
            traerDatos()
        },[])
    
    return(
        <>
       <Table striped bordered hover>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Rut</th>
                <th>Fecha Nacimiento</th>
                <th>Edad</th>
                <th>Correo</th>
                <th>Accion</th>
            </tr>
        </thead>
        <tbody>
            {
            personas.map((p)=>{
                return <tr key={p.key}>
                    <td>{p.nombre}</td>
                    <td>{p.apellido}</td>
                    <td>{p.rut}</td>
                    <td>{p.fechaNacimiento}</td>
                    <td>{p.correo}</td>
                    <td>
                    <Link href={{pathname:'/Pagina5',query:{key:p.key}}}>
                    <Button variant='success'>FaEdit</Button>
                    </Link>
                    <Button variant= 'danger'>MdDelete</Button></td>
                    
                </tr>
            })
            }
        </tbody>
       </Table>
        </>
    )
}}
export default Pagina4