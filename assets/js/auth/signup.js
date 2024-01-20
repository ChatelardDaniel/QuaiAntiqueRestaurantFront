// implémenter le JS de ma page.

const inputNom = document.getElementById("NomInput");
inputNom.addEventListener("keyup", validateForm);

function validateForm() {
    validateRequired(inputNom);
}

function validateRequired(input) {
    if(input.value != ''){
        // Si c'est ok, ajouter une class 'is-valid' et supprimer la class 'is-invalid
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
    else{
        // C'est pas ok, supprimer la class 'is-valid' et ajouter la class 'is-invalid'
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}