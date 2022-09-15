const Aprendiz = require("./Aprendiz");
const Curso = require("./Curso");
let listado = [];

const cdf = new Curso("ADSI", 2515397, listado);
console.log("recien creado....", cdf);
let a1 = new Aprendiz("Miguel Perez", 12345, 2515397);
let a2 = new Aprendiz("Ana Mesa", 121212, 2515397);
let a3 = new Aprendiz("Jorge Pardo", 111111, 2515397);
cdf.agregarAprendiz(a1);
cdf.agregarAprendiz(a2);
cdf.agregarAprendiz(a3);
//console.log(cdf.lista);
//cdf.generarAprendiz();
//console.log(cdf.lista);
//delete cdf;
//console.log('recien eliminado....',cdf);

function listarAprendicesCurso(curso) {
  for (let i = 0; i < curso.lista.length; i++) {
    console.log('***************');
    console.log(curso.lista[i]);
  }
}

listarAprendicesCurso(cdf);
