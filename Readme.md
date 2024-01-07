# Quai Antique

Ce site est un site vitrine pour le restaurant Quai Antique

## Installation

Pour installer Bootstrap, cliquer sur 'view''affichage', puis 'terminal'.

Taper 'npm install bootstrap'.

Pour ignorer le dossier 'node_modules', créer un fichier '.gitignore' et écrire dedans 'node_modules' cela aura pour effet d'ignorer le dossier node_modules'.

## Utiliser bootstrap

```html
<!-- Mettre le lien dans index.html, pour lier bootstrap -->
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```

Rafraichir la page pour vérifier que booststrap est bien lié, puis tester en mettant un bouton dans la page 'home.html'.

```html
<button class="btn btn-primary">Coucou</button>
```

inclure le JavaScript de bootstrap:

```html
<script type="module" src="Router/router.js"></script>
<!-- Inclure le JavaScript de bootstrap -->
<script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
```

## Installer le bootstrap Icons

```terminal
npm i bootstrap-icons
```

Aller sur le site : <https://icons.getbootstrap.com/icons/airplane/>

Copier l'Icon font.

```html
<i class="bi bi-airplane"></i>
```

Installer dans le fichier 'index.html', le lien pour utiliser les icons.

```html
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
<!-- Mettre le lien pour utiliser les Icons de bootstrap -->
<link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">
```

## Customiser bootstrap avec Sass

Installer l'extension 'live Sass Compiler de Glenn Marks' sur VSCode.

Créer un dossier nommé 'scss', puis à l'intérieur de ce dossier créer un fichier 'main.scss'.

écrire ceci dans le fichier 'main.scss'

```scss
html {
    color: red;
}
```

Puis lancer 'Watch Sass' sur le bas de la fenêtre de VSCode.

Rajouter un lien dans le fichier 'index.html'.

```html
<link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">
<!-- Ajout du lien pour le css, générer par Watch Sass -->
<link rel="stylesheet" href="assets/css/main.css">
```

A l'intérieur du dossier 'scss', créer un fichier nommé '_custom.scss'.

Puis écrire dans le fichier 'main.scss'.

```scss
// fichier main.scss
@import 'custom';
```

Ici le fichier 'main.scss' appelle le fichier '_custom.scss'.

Dans le fichier '_custom.scss', écrire ceci, venu du site bootstrap/Customize/Sass.

```scss
// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here
```

Ensuite suprimer les liens du fichier 'index.html'.

```html
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">
```

Ajouter pour modifier les variables dans le fichier '_custom.scss'.

```scss
// Ajouter pour modifier la couleur des variables bootstrap.
$primary: #906427;
$secondary: #86AC97;
$dark: #392C1E;
$black: #292222;

// Ajouter pour modifier la police des variables bootstrap.
$font-family-sans-serif: "Montserrat", sans-serif !default;
$font-family-serif: "Hind Madurai", serif !default;

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here
```

Inclure le bootstrap-Icons dans le fichier 'main.scss'.

```scss
@import url("/node_modules/bootstrap-icons/font/bootstrap-icons.css");
@import 'custom';
```

Ajout des liens vers google fonts dans le fichier 'index.html.

```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/main.css"/>
    <title>Document</title>
```
