miStorage = window.localStorage;
miStorage.setItem('user1', 'admin');
miStorage.setItem('user2', 'Emmanuel');
miStorage.setItem('password1', 'adm');
miStorage.setItem('password2', '1234');


function usuarios() {
    
    var txtuser1validar =miStorage.getItem('user1');
    var txtuser2validar =miStorage.getItem('user2');
    var txtuser=document.getElementById('txtuser').value;
    var txtpassword=document.getElementById('txtpassword').value;
    var txtpassword1validar=miStorage.getItem('password1');
    var txtpassword2validar=miStorage.getItem('password2');
    if(txtuser==txtuser1validar && txtpassword==txtpassword1validar){
        alert("usuario es "+txtuser1validar);
        miStorage.setItem('user_sel', 'admin');
        window.open("../Html/inicio.html","_self")

    } else if(txtuser==txtuser2validar && txtpassword==txtpassword2validar){

        alert("usuario es "+txtuser2validar);
        miStorage.setItem('user_sel', 'Emmanuel');
        window.open("../Html/inicio.html","_self")

    }else{
        alert("usuario y/o contraseña no validos ");


    }


   
}

function invitado() {
    alert("iniciando como usuario  Invitado");
    miStorage.setItem('user_sel', 'invitado');
    window.open("../Html/inicio.html","_self")
}





/*



    
    

    


*/