///// Evita que un usuario sin logear, pueda acceder a la pagina principal
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        const email = user.email;
        document.getElementById("usuario").innerHTML = email;
        document.getElementById("c_usuario").innerHTML = email;
    }
    if (!user) {
        // User is signed out
        location.href = "../index.php";

    }
});