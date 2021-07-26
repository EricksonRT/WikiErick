<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
</script>
    <title>WikiErick</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  </head>
  <body>
    <!-- Nav banner -->
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="../php/principal.php">
          <img src="../img/lupa.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top">
          WikiErick
        </a>
      </div>
    </nav>

    <!-- Fin banner -->

    <!-- Nav de navegacin -->
            <div class="col">
              <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active disabled" aria-disabled="true">WikiErick</a>
          </li>

         <br><br> <li class="nav-item">
            <a class="nav-link" href="#" onclick="bienvenida();">Sobre ésta wiki</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick="tec();">Técnologias</a>
          </li>
        </ul>
        </div>
<!-- fin del nav navegacion -->
<!-- Comiendo del menú lateral -->

<div class="container-fluid ">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-60">
                <a href="#" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu lateral</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline"></span>Programación</a>
                        <ul class="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#T1bases" onclick="tema1();" class="nav-link px-0"> <span class="d-none d-sm-inline" >1.</span> Bases de la programación</a>
                            </li>
                            <li>
                                <a href="#T1logica" onclick="tema2();" class="nav-link px-0"> <span class="d-none d-sm-inline">2.</span> La lógica</a>
                            </li>
                        </ul>
                    </li>
                        <a href="#submenu2"  data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline"></span>Desarrollo</a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#T2Desarrollo-Web" onclick="tema3();" class="nav-link px-0"> <span class="d-none d-sm-inline">1.</span> Desarrollo Web</a>
                            </li>
                            <li>
                                <a href="#T2-Desarrollo-Software" onclick="tema4();" class="nav-link px-0"> <span class="d-none d-sm-inline">2.</span> Desarrollo de Software</a>
                            </li>
                             <li>
                                <a href="#T2Desarollo-Mobile" onclick="tema5();" class="nav-link px-0"> <span class="d-none d-sm-inline">3.</span> Desarrollo Mobile</a>
                            </li>
                        </ul>
                    </li>
                   <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline"></span>Lenguajes</a>
                        <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" onclick="tema6();" class="nav-link px-0"> <span class="d-none d-sm-inline">1.</span> Lenguajes en general</a>
                            </li>
                            <li>
                                <a href="#" onclick="tema7();" class="nav-link px-0"> <span class="d-none d-sm-inline">2.</span> C</a>
                            </li>
                               <li>
                                <a href="#" onclick="tema8();" class="nav-link px-0"> <span class="d-none d-sm-inline">3.</span> C#</a>
                            </li>
                               <li>
                                <a href="#" onclick="tema9();" class="nav-link px-0"> <span class="d-none d-sm-inline">4.</span> C++</a>
                            </li>
                               <li>
                                <a href="#" onclick="tema10();" class="nav-link px-0"> <span class="d-none d-sm-inline">5.</span> PHP</a>
                            </li>
                               <li>
                                <a href="#" onclick="tema11();" class="nav-link px-0"> <span class="d-none d-sm-inline">6.</span> Python</a>
                            </li>
                        </ul>
                    </li>
                    <a href="#submenu4" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline"></span>Modelos y Sistemas</a>
                        <ul class="collapse nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" onclick="tema12();" class="nav-link px-0"> <span class="d-none d-sm-inline">1.</span> Modelos y Sistemas</a>
                            </li>
                            <li>
                                <a href="#" onclick="tema13();" class="nav-link px-0"> <span class="d-none d-sm-inline">2.</span> Ciclo de vida de un software</a>
                            </li>
                             <li>
                                <a href="#" onclick="tema14();" class="nav-link px-0"> <span class="d-none d-sm-inline">3.</span> Diagramas</a>
                            </li>
                        </ul>
                </ul>
                          <!-- Fin del menu lateral -->
                          <hr><hr>
                        <!-- Comienzo de la seccion del perfil -->
        
           <!-- Comienzo de la seccion del perfil -->
        
            <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1" id="usuario">
                        </span>
                    </a>
                    <ul class="dropdown-menu text-small shadow">
                        <li><a class="dropdown-item" id="c_usuario"></a></li>
                        <li><a class="dropdown-item" href="#">Configuración</a></li>
                        <li><a class="dropdown-item" href="#">Perfil</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" onclick="salir();">Cerrar sesión</a></li>
                    </ul>
                </div>
            </div>
        </div>`
                              <!-- Fin de la seccion del perfil -->

        <!-- Area donde se muestran los contenidos -->
        <div class="col py-3" id="contenido">
        <input type="hidden" id="id_doc"></p>
            <a id="edit" href="#"></a>
                <h1 id="titulo"></h1>   
                <p id="descripcion"></p>
        </div>
    </div>
</div>
<!-- Comienzo del iframe -->
    
<!-- Fin iframe -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>
   <!-- Script que fixea errores de firebase -->
   <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-auth.js"></script>
   <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-firestore.js"></script>

<!-- Script que fixea errores de firebase -->

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>

<script src="../js/app.js"></script>
<script src="../js/principal.js"> </script>
  </body>
</html>
