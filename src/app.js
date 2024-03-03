window.onload = () => {
  let personaje = ["El gato", "El perro", "El carnicero"];
  let accion = ["enterro mi tarea", "rompio mi cuaderno", "orino mi lapiz"];
  let tiempo = ["luego de la clase", "justo ahora", "hace un rato"];

  var person = (document.querySelector("#mensaje1").innerHTML =
    personaje[Math.floor(Math.random() * personaje.length)]);

  var accion1 = (document.querySelector("#mensaje2").innerHTML =
    accion[Math.floor(Math.random() * accion.length)]);

  var tiempo1 = (document.querySelector("#mensaje3").innerHTML =
    tiempo[Math.floor(Math.random() * tiempo.length)]);

  console.log(person);
  console.log(accion1);
  console.log(tiempo1);
};
