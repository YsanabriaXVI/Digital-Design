
/* Ejercicio 1

  Genere una lista que contenga solo los autores de dicha lista en una variable
  llamada: autores.
*/
const libros = [ { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año:
    1967 }, { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 }, {
    titulo: "1984", autor: "George Orwell", año: 1949 } ]
    

    let autores = libros.map((element)=> element['autor'] )

    console.log(autores)

 


   // Ejercicio 2. Dado el siguiente objeto:

   /**
    * Modifique el valor del salario, siempre y cuando la antigüedad sea mayor a 5 años, el
      aumento será del 10%. Imprima los nuevos valores.

      */
    
const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };

const {antiguedad} = empleado // Usando desestructuracion

//Usando el operador ternario podemos validar la propiedad antiguedad para asignar el nuevo salario del empleado
empleado.salario = antiguedad > 5 ? empleado.salario = empleado.salario * 1.10 : empleado.salario

function displayInfo(){
    console.log(`Nombre del empleado: ${empleado.nombre}`)
    console.log(`Salario: $${empleado.salario.toFixed(2)}`)
    console.log(`Antigüedad: ${antiguedad}`)
}

displayInfo()

//Ejercicio 3

/**
 * Dado el siguiente listado:
   const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]
   imprima el número mayor de la lista (sin ordenarla)
 
**/
   const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]

   //Usado el operador spread,  toma cada elemento y lo convierte en un elemento individual para que se pueda usar max()
   Math.max(...numeros)
   console.log(`El mayor numero de la lista es: ${Math.max(...numeros)}`)

   

   //Ejercicio 4

   // Con el listado anterior, calcule el promedio de todos los números impares
  

    let = sum = 0;

    //Filtramos cada elemento para obtener solo impares de la lista original numeros
    const oddNumbers = numeros.filter((nextNumber) => nextNumber %2==1)

    for (const oddNumber of oddNumbers) {
        sum += oddNumber;
    }

    const AverageOdds = sum / oddNumbers.length;

    console.log(`El promedio de los numeros impares es: ${AverageOdds}`)
    

    //Ejercicio 5

    /** Dado el siguiente objeto:
     
       const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
       Desestructure el objeto para extraer los valores en 3 variables diferentes y mostrarlas
       en consola.
     */

       const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
       
       // Desestructurando la lista

       const {nombre, edad, ciudad} = persona

       console.log(`Nombre: ${nombre}, Edad: ${edad} años, Ciudad: ${ciudad}`)