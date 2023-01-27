let access_name = document.getElementById('name');
let access_pass = document.getElementById('password');
let ingreso = document.getElementById('ingreso');
let check = document.getElementById('check_atc')


ingreso.addEventListener('click', (event) => {
    if (check.checked == true){ 
            if (access_name.value == "bit" && access_pass.value == "2023"){
                        respuesta = "Acceso concedido";
                        window.location.assign("./exercises.html")
                        } else {
                            respuesta = "Acceso denegado";
                            alert("Usuario / contraseña son incorrectos");
                        }
                    } else{
                        alert("Debe aceptar los terminos y condiciones");
                    }
 }) 