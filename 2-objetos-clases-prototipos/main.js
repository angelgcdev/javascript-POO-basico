//Creando nuestro primer objeto literal
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};

//hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");

/**Creando nuestro primer prototipo  */
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function () {
  //   this.cursosAprobados.push(nuevoCursito);
  // };
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
};

const juanita = new Student("Juanita Alejandra", 15, [
  "Curso de Introducción a la producción de Videojuegos",
  "Curso de Creación de Personajes",
]);
