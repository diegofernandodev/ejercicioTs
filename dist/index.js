"use strict";
let mensaje = "Hola mundo";
let ejecutar = true;
if (ejecutar) {
    mensaje = "Hola diego";
}
console.log(mensaje);
let nombre = "Diego Fernando";
let apellidos = "Velasco Noguera";
let edad = 32;
let telefono = 3105678934;
console.log(`Hola mi nombre es, ${nombre} ${apellidos}, tengo ${edad}, mi numero telefonico es ${telefono}`);
let datos = [
    { nombre: "Diego Fernando", apellido: "Velasco" }
];
console.log(datos[0].nombre);
console.log(datos[0].apellido);
let modelo = 2023;
let marca = "Mazda";
let esNuevo = true;
function saludo(saludar) {
    return saludar;
}
let animales = ["perro", "gato", "Aguila"];
let personas = ["carlos", "Andres", "pedro"];
let numeros = [1, 2, 3];
let boleano = [];
let numeros2 = [];
let tupla = ["Fernando", [2, 4, 5, 6]];
const pequeña = "s";
const mediana = "m";
const grande = "l";
const extraGrannde = "xl";
var Talla;
(function (Talla) {
    Talla["Peque\u00F1a"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Mediana;
console.log(variable1);
//# sourceMappingURL=index.js.map