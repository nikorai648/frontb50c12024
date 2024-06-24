import React from 'react';

interface Props {
  nombre: string;
  apellido: string;
  edad: number;
}

export const Perfil: React.FC<Props> = ({ nombre, apellido, edad }) => {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Edad: {edad}</p>
      {edad > 18 && <p>Eres mayor de edad</p>}
    </div>
  );
};
