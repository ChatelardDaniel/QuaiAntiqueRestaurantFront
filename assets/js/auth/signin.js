const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Ici, il faudra appeler l'Api pour vérifier les credentials en BDD.
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123") {
        alert("Vous êtes connecté");

        // il faudra récupérer le vrai token.
        const token = "dfghjklmxcvbnoiuytrezdfghj";
        setToken(token);

        // Créer le cookie 'RoleCookieName' 'admin' 7 jours.
        setCookie(RoleCookieName, "client", 7);

        // rediriger vers la page d'accueil.
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}