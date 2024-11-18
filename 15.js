function filtrarMayorEdad(arregloPersonas) {
    return arregloPersonas.filter(persona => persona.edad > 18);
}

const personas = [
    { nombre: "luis", edad: 25 },
    { nombre: "camilo", edad: 17 },
    { nombre: "laura", edad: 22 },
    { nombre: "luciana", edad: 16 }
];

console.log(filtrarMayorEdad(personas));