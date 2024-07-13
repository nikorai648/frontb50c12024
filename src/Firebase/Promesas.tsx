import { addDoc, collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { Persona } from "../Interfaces/Interfaces";

export const registrarPersona = async (persona: Persona) => {
    const docRef = await addDoc(collection(db, "personas"), persona);
};

export const obtenerPersonas = async () => {
    const colRef = collection(db, "personas");
    const querySnapshot = await getDocs(colRef);
    let personas: Persona[] = [];
    querySnapshot.forEach((doc) => {
        let persona: Persona = {
            nombre: doc.data().nombre,
            apellido: doc.data().apellido,
            rut: doc.data().rut,
            correo: doc.data().correo,
            edad: doc.data().edad,
            fechaNacimiento: doc.data().fechaNacimiento,
            key: doc.id
        }
        personas.push(persona);
    });
    return personas;
}

export const obtenerPersona = async (key: string): Promise<Persona | undefined> => {
    const docRef = doc(db, "personas", key!);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            nombre: docSnap.data().nombre,
            apellido: docSnap.data().apellido,
            edad: docSnap.data().edad,
            rut: docSnap.data().rut,
            correo: docSnap.data().correo,
            fechaNacimiento: docSnap.data().fechaNacimiento,
            key: docSnap.id
        };
    } else {
        return undefined;
    }
}

export const modificarPersona = async (p: Persona) => {
    const ref = doc(db, "personas", p.key!);
    await updateDoc(ref, { 
        nombre: p.nombre,
        apellido: p.apellido,
        rut: p.rut,
        edad: p.edad,
        fechaNacimiento: p.fechaNacimiento,
        correo: p.correo
    });
};

export const eliminarPersona = async (key: string) => {
    const ref = doc(db, "personas", key!);
    await deleteDoc(ref);
};
