// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCrPxv2ArhYi9l8UMi1-lM8Rzi14PB9Yas",
    authDomain: "wikierick-7ae5f.firebaseapp.com",
    projectId: "wikierick-7ae5f",
    storageBucket: "wikierick-7ae5f.appspot.com",
    messagingSenderId: "728354338830",
    appId: "1:728354338830:web:34ba76b2db2cc7b961645f",
    measurementId: "G-G3G8ZF409J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function registrar() {
    let email, pw1, pw2;
    email = document.getElementById("email_registro").value;
    expresion = /\w+@\w+\.+[a-z]/; //Expresion para la validacion del email
    pw1 = document.getElementById("pw1").value;
    pw2 = document.getElementById("pw2").value;
    nombre_reg = document.getElementById("nombre_reg").value;


    if (email === "" || pw1 === "" || pw2 === "" || nombre_reg === "") {
        document.getElementById("msj").innerHTML = ('<div class="alert alert-danger" role="alert"> No se pueden dejar campos vacíos </div>');
        return false;
    } else if (pw1.length > 10) {
        document.getElementById("msj").innerHTML = ('<div class="alert alert-warning" role="alert">La contraseña no debe ser mayor a 10 caracteres</div>');
        return false;
    } else if (pw1 != pw2) {
        document.getElementById("msj").innerHTML = ('<div class="alert alert-warning" role="alert">Las contraseñas no coinciden, inténtelo de nuevo</div>');
        return false;
    } else if (email.length > 100) {
        document.getElementById("msj").innerHTML = ('<div class="alert alert-warning" role="alert">El email es demasiado largo');
        return false;
    } else if (!expresion.test(email)) {
        document.getElementById("msj").innerHTML = ('<div class="alert alert-warning" role="alert">El correo no es válido</div>');
        return false;
    } else if (nombre_reg.length > 20) {
        document.getElementById("msj").innerHTML = ('<div class="alert alert-warning" role="alert">El nombre de usuario es muy largo</div>');
        return false;
    } else if (pw1.length <= 6 || pw2.length <= 6) {
        document.getElementById("msj").innerHTML = ('<div class="alert alert-warning" role="alert">La contraseña debe ser mayor a 6 caracteres</div>');
        return false;
    }

    //da un alerta y muestra un boton para ir al login
    document.getElementById("msj").innerHTML = ('<div class="alert alert-success d-flex align-items-center" role="alert"> <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg> <div> Te registraste correctamente </div></div>');

    document.getElementById("btn_reg").innerHTML = ('<div class="col auto"> <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Iniciar sesión</button></div>');


    //Agrega al usuario
    firebase.auth().createUserWithEmailAndPassword(email, pw1)
        .then((userCredential) => {
            //Verifiacion en consola, para ver si está enviando los datos 
            console.log("agregando" + userCredential);

        }) //Si no es asi, lanzara un error
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error" + errorCode);
            console.log(errorMessage);
        });

}
//Observador permite que no se pueda relogear a menos que cierrre sesion.  

//validacion del login, si los campos no estan vacios, procede a ejecutarse el codigo
function iniciar() {
    var email = document.getElementById("email").value;
    var clave = document.getElementById("clave").value;

    firebase.auth().signInWithEmailAndPassword(email, clave)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            //Ejecuta la funcion de observador
            observador();

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            alert(errorMessage);

        });
}


//Funcion que se ejectuta cuando hay un usuario registrado listo para acceder
function observador() {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            const email = user.email;
            console.log(email);
            location.href = "./php/principal.php";
        } else {
            // User is signed out
            location.href = "../index.php";
        }
    });

}
//cerrar sesion

function salir() {
    firebase.auth().signOut().
    then(() => {
        location.href = "../index.php";
    })

    .catch((error) => {
        alert(error);
    });
}


// #########################################Consultas-firebase########################################################
//Lectura de datos desde firestore, pero unicamente de un documento Snapshot es para ver el cambio en tiempo real
var db = firebase.firestore();

////seccion progamacion
function tema1() {
    var docRef = db.collection("Publicaciones").doc("YarBbvY5fjAuqVGXZv0B"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {
            // console.log(doc.id);
            // console.log(doc.data().titulo);
            // console.log(doc.data().contenido);
            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        console.log("Error al obtener el  documento:", error);
    });
}


///Tema2 prog-
function tema2() {
    var docRef = db.collection("Publicaciones").doc("meILnmmHQl0MFzeLm1te"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}
// Fin secccion prog

/////////////////////////tema3 Desarrollo
function tema3() {
    var docRef = db.collection("Publicaciones").doc("GGYpUxWz4k0kz0JkxjxR"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {
            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}


function tema4() {
    var docRef = db.collection("Publicaciones").doc("HGcJF1HMScRK4AvzRy0n"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}


function tema5() {
    var docRef = db.collection("Publicaciones").doc("aKO8CpYU3BRTVSJFKiFE"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}

///////////////////////////Fin tema de desarollo/////////////////////////

///////////////////////////////Seccion lenguajes/////////////

function tema6() {
    var docRef = db.collection("Publicaciones").doc("deR5WTKvzUoTgSpUSy1w"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}

function tema7() {
    var docRef = db.collection("Publicaciones").doc("C"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}


function tema8() {
    var docRef = db.collection("Publicaciones").doc("C#"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}


function tema9() {
    var docRef = db.collection("Publicaciones").doc("C++"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}




function tema10() {
    var docRef = db.collection("Publicaciones").doc("PHP"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}



function tema11() {
    var docRef = db.collection("Publicaciones").doc("python"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}
///////////////////////Fin seccion lenguajes///////////////////


//////////////////Seccion modelos y sostemas////////////////


function tema12() {
    var docRef = db.collection("Publicaciones").doc("iDw2hrNAcabC1GaAuIfN"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}



function tema13() {
    var docRef = db.collection("Publicaciones").doc("TfsBEAv3El8w2vdNGEWn"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}



function tema14() {
    var docRef = db.collection("Publicaciones").doc("84MH07LVyd3eqy6TwByb"); //.doc(aca va el link del documento)

    docRef.get().then((doc) => {
        if (doc.exists) {

            document.getElementById("id_doc").innerHTML = doc.id;
            document.getElementById("titulo").innerHTML = doc.data().titulo;
            document.getElementById("descripcion").innerHTML = doc.data().contenido;

            //Boton de editar, donde toma los paramatros de la base mostrados en la linea de arriba, para poder mostrarlos en un input, y editarlos desde ahi 
            document.getElementById("edit").innerHTML =
                (`<a id="boton" onclick="editar('${doc.id}','${doc.data().titulo}','${doc.data().contenido}')"><img src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"/>
            Editar </a>`);
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado información. inténtelo de nuevo");
        }
    }).catch((error) => {
        alert("Error al obtener el  documento:", error);
    });
}



/////////////////Fin seccion modelos y sistemas//////////////////

////Mensajes del nav principal:
function bienvenida() {
    document.getElementById("titulo").innerHTML = `"Wiki-Erick"`;
    document.getElementById("descripcion").innerHTML = `Una "wiki" casera, para aplicar conocimientos, aprender, y aportar al sitio, los fines con la que se desarolló son educativos, por ende todo aporte que sea incluido en la pagina deben ser con dichos fines. Por otro lado, el resto son muy bienvenidos`;
}

function tec() {
    document.getElementById("titulo").innerHTML = `Técnologias empledas para llegar a lo que estás viendo`;
    document.getElementById("descripcion").innerHTML =
        `Para comenzar, por la estructura y diseño: 
        <ul>
            <li><b>HTML + Bootstrap v5</b></li>
            </ul>
        Luego para el host, almacenamiento de cuentas e información: <b>Firebase</b>.
        <ul>
            <li><b>Firebase Authentication</b></li>
            <li><b>Firestore Database</b></li>
            <li><b>Firebase Hosting</b></li>
        </ul>
        Finalmente, los lenguajes empleados ya sea para registrar, validar datos de sesión, claves, etc son:
        <ul>
            <li><b>JS (JavaScript)</b></li>
            <li><b>PHP</b></li>
        </ul>`
}

///////Fin mensajes ///////////











































//Funcion que se ejectuta cuando hay un usuario registrado listo para acceder
function validaruser() {

    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            alert("Inicia sesion primero");
            location.reload();
        }
    });

}
////

// Editar registros: las variables dentro de la funcion, son las que toma del evento onclick por ende tienen cargados los datos que estaban en pantalla anteriormente
function editar(id, titulo, contenido) {
    validaruser();
    //Datos mostrados en un textarea para editarlos
    document.getElementById("titulo").innerHTML = ('<textarea type="text" id="titulo2">' + titulo + ' </textarea>');
    document.getElementById("descripcion").innerHTML = ('<textarea type="text" id="descripcion2" >' + contenido + ' </textarea>');

    ///////////////////
    var boton = document.getElementById("boton");
    boton.innerHTML = 'Guardar';
    //la siguiente funcion se dispara cuando se toca el boton de editar

    boton.onclick = () => {

        var documentRef = db.collection("Publicaciones").doc(id);
        //Estableces las variables nuevamente, pero estos valores, son los nuevos valores que se han escrito
        var ntitulo = document.getElementById("titulo2").value;
        var ncontenido = document.getElementById("descripcion2").value;
        return documentRef.update({
                titulo: ntitulo,
                contenido: ncontenido
            })
            .then(() => {
                alert("Se editó correctamente");
                //se oculta el boton para que no se mpueda volver a editar
                boton.innerHTML = `<input type="hidden">`;
                console.log("Document successfully updated!");
                // window.history.go(-1); Se vuelve a mostrar los divs
                document.getElementById("titulo2").innerHTML = document.getElementById("titulo").innerHTML = ntitulo;
                document.getElementById("descripcion2").innerHTML = document.getElementById("descripcion").innerHTML = ncontenido;
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }
}
// Fin editar registros







//Funcion que trae todos los datos de la misma base.
// db.collection("Publicaciones").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data().Titulo);
//         console.log(doc.data().Descrpcion);
//         console.log(doc.data().id);


//     });
// });