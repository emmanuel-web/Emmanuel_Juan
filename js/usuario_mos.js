miStorage=window.localStorage;
var usuario_acti=miStorage.getItem('user_sel');
document.getElementById('usuario').innerHTML='<b>Bienvenido :'+usuario_acti+'</b>';