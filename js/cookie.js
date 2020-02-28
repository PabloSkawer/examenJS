// Creación de la cookie
function crearCookie(nombre, valor, expira){
    
    var fecha = new Date();
    fecha.setTime(fecha.getTime()+(expira*24*60*60*1000));
    
    var expire = "expires="+fecha.toUTCString();
    
    document.cookie = nombre + "=" + valor + ";" + expire + ";path=/";
}
// Lectura de cookie
function leerCookie(nombre){
    
    var keyValue = document.cookie.match("(^|;) ?" + nombre + "=([^;]*)(;|$)");
    if (keyValue) {
        return keyValue[2];
    } else {
        return null;
    }
}
// Borrar la cookie
function borrarCookie(nombre){
    document.cookie = nombre + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}