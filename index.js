//Paso 1 - Triturar los granos con el molino cónico integrado. La función de Presionar y Mantener ofrece café recién molido para cada taza EN ESTE CASO LO REQUERIDO ES 22gr.
let molino={

btn_moler:function(){

  if(cantidad_cafe > 22){
    console.log("error mucho cafe")
  }else{
  console.log("Moliendo Cafesito");
  }
},

btn_encender_cafetera:function(){
 alert("Encendida")
}
}


let entradas1 = Object.entries(molino);
console.log(entradas1)
  
//LLENAR EL TANQUE DE AGUA HASTA QUE ESTE  LLENO POR ENCIMA DEL NIVEL MINIMO
let tanque_de_agua ={

  llenar_tanque:function(){
    //1 litro
    var  llenito =  1;
    if (tanque_agua === llenito){
       console.log("Listo")
    }else{
      alert("Necesitamos agua hey");
    }
  },
}
let ent_agua = Object.entries(tanque_de_agua);
console.log(ent_agua)
  

//console.log("hi")
//Paso 3: Extraer un espresso corto. La función automática garantiza que la cantidad precisa de café se vierta con solo tocar un botón. 
let filtros = {
extraer_cafésito:function(){
alert("Bien echo ")
}
}
let fil = Object.entries(filtros);
console.log(fil)
  


let Cafetera = {

 molino:molino,


Material:	"Acero inoxidable",
Marca:	"Oster®",
Color:	"Brusched Steel",
Capacidad:	"1 Tazas",
Comando_de_voz: 	"Pantalla táctil"




}
let entradas = Object.entries(Cafetera);
console.log(entradas)
  




























/*let Cafetera={
//PROPIEDADES 

Material:	"Acero inoxidable",
Marca:	"Sage Appliances",
Color:	"Brusched Steel",
Capacidad:	"1 Tazas",
Comando_de_voz: 	"Pantalla táctil",

molino:molino,

}
*/
/*
for(let i  in Cafetera){
console.log(Cafetera[i])
  }


/*

btn_encender:function(){
 alert("Cafetera encendida")
  
}

*/

let molinoo={

}


/*

let molino ={
  cafe: "granos",
  function:moler(fn) {
    setTimeout(()=>{
      fn(error)}, 2000)
  }
}
//OBTENIENDO PROPIEDADES



*/


