import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { registrarPersona } from '../Firebase/Promesas'
import { Persona } from '../Interfaces/Interfaces'


  const initialStatePersona:Persona = {
    nombre:"",
    apellido:"",
    edad:0,
    rut:"",
    fechaNacimiento:"",
    correo:""
    
  }

const Pagina3 =()=> {
    const [persona, setPersona] = useState<Persona>(initialStatePersona)

    const validarLargoMinimo =(name:string,value:string)=>{
        setPersona({...persona,[name]:value})
    }

    const registrar =()=>{
        registrarPersona(persona).then(()=>{
            alert("Se registra con exito")
        }).catch((e)=>{
            alert("Algo ocurrio")
            console.log(e)
        }
    )}
    return (
        <>
       <p>
        {persona.nombre}
        {persona.apellido}
        {persona.correo}
        {persona.edad}
        {persona.rut}
        {persona.fechaNacimiento}
       </p>
        <Form>
          <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type='text' placeholder="Ingrese su nombre"
            name='nombre'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido:</Form.Label>
            <Form.Control type='text' placeholder="Ingrese su apellido"
             name='apellido'
             onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rut:</Form.Label>
            <Form.Control type='text' placeholder="Ingrese su rut"
            name='rut'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Correo:</Form.Label>
            <Form.Control type='text'placeholder="Ingrese su correo"
            name='correo'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Edad:</Form.Label>
            <Form.Control type='number' placeholder="Ingrese su edad"
             name='edad'
             onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>fecha Nacimiento:</Form.Label>
            <Form.Control type='text' placeholder="Ingrese su fecha de nacimiento"
                name='fechaNacimiento'
                onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
            </Form.Group>
        <Button variant="success" type="button"onClick={registrar}>Registrar</Button>
        </Form>
        </>
    )
}