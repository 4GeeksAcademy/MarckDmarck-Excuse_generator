window.onload = () =>
  //cuando termina de cargar la pag carga una funcion anonima ()
  {
    let personaje = new Array(); //primer Array con A mayuscula sino ERROR
    personaje[0] = "El gato";
    personaje[1] = "El chiguire";
    personaje[2] = "El chivo";

    let accion = new Array();
    accion[0] = "enterro mi tarea";
    accion[1] = "rompio mi cuaderno";
    accion[2] = "orino mi lapiz";

    let tiempo = new Array();
    tiempo[0] = "luego de la clase";
    tiempo[1] = "justo ahora";
    tiempo[2] = "hace un rato";
    {
      document.querySelector("#mensaje1").innerHTML =
        personaje[Math.floor(Math.random() * personaje.length)];
      document.querySelector("#mensaje2").innerHTML =
        accion[Math.floor(Math.random() * accion.length)];
      document.querySelector("#mensaje3").innerHTML =
        tiempo[Math.floor(Math.random() * tiempo.length)];
    }
    var person = (document.querySelector("#mensaje1").innerHTML =
      personaje[Math.floor(Math.random() * personaje.length)]);
    var accion1 = (document.querySelector("#mensaje2").innerHTML =
      accion[Math.floor(Math.random() * accion.length)]);
    var tiempo1 = (document.querySelector("#mensaje3").innerHTML =
      tiempo[Math.floor(Math.random() * tiempo.length)]);
    console.log(person);
    console.log(accion1);
    console.log(tiempo1);
  }; //Math random para elegir un numero aleatorio en el array,
//Math Floor para que sea un numero entero,
//length para tomar la longitud completa q esta adentro de nuestros arrays..
//innerHTML establece el contenido del html..
