import { Perfil } from "./Componentes/Perfil";
import Link from 'next/link';
import React, {useState} from 'react'
// import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <nav>
        {/* 
          busque: useEffect, useState 
          crear formulario
        */}
        <Link href="/About">
          About
        </Link>
        <Link href="/Pagina1">
          Pagina1
        </Link>
        <Link href="/Pagina2">
         Pagina2
        </Link>
        <Link href="/Pagina3">
         Pagina3
        </Link>
        <Link href="/Pagina4">
         Pagina4
        </Link>
      </nav>
      <p>hola</p>
      <Perfil nombre="Luciano" apellido="Carrizo" edad={17} />
      <Perfil nombre="Diego" apellido="Castro" edad={25} />
    </>
  );
}
