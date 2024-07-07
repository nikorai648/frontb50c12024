import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const Pagina2=()=>{
    const [n1,setN1] = useState(0)
    const [n2,setN2] = useState(0)
    const [resultado, setResultado] =useState(0)

    const actualizarN1 = (valor:number)=>{
        setN1(valor)
        sumar()
    }
    const actualizarN2 =(valor:number)=>{
        setN2(valor)
        sumar()
    }
    const sumar =()=>{
        const t = n1 +n2
        setResultado
    }
    useEffect(()=>{
        sumar()
    },[n1,n2])

    return(
        <>
        <Form>
        <Form.Group>
        <Form.Label>N1:</Form.Label>
        <Form.Control type='text' placeholder='Ingresaun numero'
        onChange={(e) =>{setN1(parseInt(e.currentTarget.value))}}/>   
        </Form.Group>
        <Form.Group>
        <Form.Label>N2</Form.Label>
        <Form.Control type='text' placeholder='Ingresar un numero'
        onChange={(e) =>{setN2(parseInt(e.currentTarget.value))}}/>  
        </Form.Group>
        <Form.Label>Resultado</Form.Label>
        </Form>

        </>
    )
}