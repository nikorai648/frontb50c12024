import { obtenerPersonas, eliminarPersona } from "../Firebase/Promesas";
import React, { useEffect, useState } from "react";
import { Persona } from "../Interfaces/Interfaces";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from 'next/link';

export const Pagina4 = () => {
    const [personas, setPersonas] = useState<Persona[]>([]);

    const traerDatos = () => {
        obtenerPersonas().then((personas) => {
            console.log(personas);
            setPersonas(personas);
        });
    };

    useEffect(() => {
        traerDatos();
    }, []);

    const eliminar = (key: string) => {
        eliminarPersona(key).then(() => {
            // Filtrar la persona eliminada de la lista
            setPersonas(personas.filter(p => p.key !== key));
            console.log(`Persona con key ${key} eliminada`);
        }).catch((error) => {
            console.error('Error al eliminar la persona:', error);
        });
    };

    return (
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
                        personas.map((p) => {
                            return (
                                <tr key={p.key}>
                                    <td>{p.nombre}</td>
                                    <td>{p.apellido}</td>
                                    <td>{p.rut}</td>
                                    <td>{p.fechaNacimiento}</td>
                                    <td>{p.edad}</td>
                                    <td>{p.correo}</td>
                                    <td>
                                        <Link href={{ pathname: '/Pagina5', query: { key: p.key } }}>
                                            <Button variant='success'><FaEdit /></Button>
                                        </Link>
                                        <Button variant='danger' onClick={() => eliminar(p.key!)}><MdDelete /></Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </>
    );
};

export default Pagina4;
