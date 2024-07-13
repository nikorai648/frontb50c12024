import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { initialStatePersona } from '../initialStates/ISPersona';
import { Persona } from '../Interfaces/Interfaces';
import { obtenerPersona, modificarPersona, eliminarPersona } from '../Firebase/Promesas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Pagina5 = () => {
    const params = useRouter();
    const [persona, setPersona] = useState<Persona>(initialStatePersona);

    useEffect(() => {
        console.log(params.query);
        console.log(params.query.key);
        const key = params.query.key;
        if (typeof key === "string") {
            obtenerPersona(key).then((p) => {
                if (p != undefined) {
                    setPersona(p);
                } else {
                    // Redirecciono
                    // Muestro un mensaje
                }
            });
        }
    }, [params.query]);

    const validarLargoMinimo = (name: string, value: string) => {
        setPersona({ ...persona, [name]: value });
    };

    const modificar = () => {
        const key = params.query.key;
        if (typeof key === "string") {
            modificarPersona({ ...persona, key }).then(() => {
                // Maneja la respuesta, redirecciona o muestra un mensaje de éxito
                console.log('Persona modificada');
            }).catch((error) => {
                // Maneja el error
                console.error('Error al modificar la persona:', error);
            });
        }
    };

    const eliminar = () => {
        const key = params.query.key;
        if (typeof key === "string") {
            eliminarPersona(key).then(() => {
                // Maneja la respuesta, redirecciona o muestra un mensaje de éxito
                console.log('Persona eliminada');
            }).catch((error) => {
                // Maneja el error
                console.error('Error al eliminar la persona:', error);
            });
        }
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type='text' placeholder="Ingrese su nombre"
                    value={persona.nombre}
                    name='nombre'
                    onChange={(e) => { validarLargoMinimo(e.currentTarget.name, e.currentTarget.value) }} />
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type='text' placeholder="Ingrese su apellido"
                    value={persona.apellido}
                    name='apellido'
                    onChange={(e) => { validarLargoMinimo(e.currentTarget.name, e.currentTarget.value) }} />
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Rut:</Form.Label>
                <Form.Control type='text' placeholder="Ingrese su rut"
                    value={persona.rut}
                    name='rut'
                    onChange={(e) => { validarLargoMinimo(e.currentTarget.name, e.currentTarget.value) }} />
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo:</Form.Label>
                <Form.Control type='text' placeholder="Ingrese su correo"
                    value={persona.correo}
                    name='correo'
                    onChange={(e) => { validarLargoMinimo(e.currentTarget.name, e.currentTarget.value) }} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Edad:</Form.Label>
                <Form.Control type='number' placeholder="Ingrese su edad"
                    value={persona.edad}
                    name='edad'
                    onChange={(e) => { validarLargoMinimo(e.currentTarget.name, e.currentTarget.value) }} />
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Fecha Nacimiento:</Form.Label>
                <Form.Control type='text' placeholder="Ingrese su fecha de nacimiento"
                    value={persona.fechaNacimiento}
                    name='fechaNacimiento'
                    onChange={(e) => { validarLargoMinimo(e.currentTarget.name, e.currentTarget.value) }} />
                <Form.Text></Form.Text>
            </Form.Group>
            <Button variant="success" type="button" onClick={modificar}>Modificar</Button>
            <Button variant="danger" type="button" onClick={eliminar}>Eliminar</Button>
        </Form>
    );
};

export default Pagina5;
