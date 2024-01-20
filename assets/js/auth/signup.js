// implémenter le JS de ma page.

const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
// Récupérer le bouton de validation 'Inscription'.
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

function validateForm() {
    // Vérifier si le Nom est bien saisie et mettre dans une variable la valeur de 'return' de cette fonction, afin de récupérer la valeur booléenne.
    const nomOk = validateRequired(inputNom);
    // Vérifier si le Prénom est bien saisie. et mettre dans une variable la valeur de 'return' de cette fonction, afin de récupérer la valeur booléenne.
    const prenomOk = validateRequired(inputPreNom);
    // Appeler la méthode 'validateMail', pour vérifier si le mail à le bon format et mettre dans une variable la valeur de 'return' de cette fonction, afin de récupérer la valeur booléenne.
    const mailOk = validateMail(inputMail);

    // Si tout les champs sont rempli, le bouton de validation est Ok.
    if(nomOk && prenomOk && mailOk) {
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

// Vérifier le format du Email
function validateMail(input) {
    // Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Récupérer le mail de l'utilisateur dans l'input.
    const mailUser = input.value;
    // Vérifier que le regex est présent dans le mail de l'utilisateur.
    if(mailUser.match(emailRegex)) {
        // Si c'est ok, ajouter une class 'is-valid' et supprimer la class 'is-invalid
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;// retour de la valeur booléenne.
    }
    else{
        // C'est pas ok, supprimer la class 'is-valid' et ajouter la class 'is-invalid'
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;// retour de la valeur booléenne.
    }
}

function validateRequired(input) {
    if(input.value != ''){
        // Si c'est ok, ajouter une class 'is-valid' et supprimer la class 'is-invalid
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;// retour de la valeur booléenne.
    }
    else{
        // C'est pas ok, supprimer la class 'is-valid' et ajouter la class 'is-invalid'
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;// retour de la valeur booléenne.
    }
}