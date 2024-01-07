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
