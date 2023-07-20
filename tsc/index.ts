let mensaje: string = "Hola mundo";
let ejecutar: boolean = true;

if (ejecutar){
    mensaje = "Hola diego"; 
}


console.log(mensaje);

let nombre: string = "Diego Fernando"
let apellidos: string = "Velasco Noguera"
let edad: number = 32
let telefono: number = 3105678934



let datos: { nombre: string, apellido: string }[] = [
    { nombre: "Diego Fernando", apellido: "Velasco" }
  ];
  
  console.log(datos[0].nombre); 
  console.log(datos[0].apellido); 

  /* Tipos de datos */
  let modelo: number = 2023
  let marca: string = "Mazda"
  let esNuevo: boolean = true

  function saludo (saludar: string){
    return saludar
  }

  function metodito():number{
    return 10

  }

  let animales = ["perro", "gato", "Aguila"] /*inferido*/ 
  let personas: string[] = ["carlos", "Andres", "pedro"]
  let numeros: number[] = [1,2,3]
  numeros.push(4)
  let boleano: boolean[] = []
  let numeros2: Array<number> = []

  //tuplas
  let tupla: [string, number[]] = ["Fernando", [2,4,5,6]]

  //enums



  const pequeña = "s"
  const mediana = "m"
  const grande = "l"
  const extraGrannde = "xl"
  
  enum Talla { Pequeña = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl"}
  const variable1 = Talla.Mediana
  console.log(variable1);
  
// objetos

const objeto: {
    id: number
    nombre?: string  // el ? indica que el dato nombre es opcional
} = {id: 23, nombre: "Diego"}

const resta = (num1:number, num2:number) => {
  console.log(num1 - num2);
  
}
resta(50,20)