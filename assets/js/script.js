const tokenCookieName = "accesstoken";

// fonction pour placer le token en cookie.
function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

// retourner le cookie du token.
function getToken(){
    return getCookie(tokenCookieName);
}

// créer un cookie.
function setCookie(name,value,days){
    var expires = "";
    if(days){
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Récupérer un cookie.

function getCookie(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' ') c = c.substring(1,c.length);
        if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// supprimer un cookie.
function eraseCookie(name){
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
}