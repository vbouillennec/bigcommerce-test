# Guide d'installation du projet

Pour installer le projet il faut utiliser le terminal WSL2 (ubuntu) disponible sous windows : 
https://docs.microsoft.com/fr-fr/windows/wsl/install

Il est également nécessaire d'avoir docker desktop d'installé et de lancé.
Il faut ensuite ouvrir un terminal WSL et taper les commandes suivantes:

`git clone git@github.com:vbouillennec/bigcommerce-test.git`

`cd bigcommerce-test`

Il faut ajouter le fichier .env à la racine de ce repertoire (bigcommerce-test)

```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

`alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'`

`sail up -d`

`sail npm install`

`sail npm run dev`

Et voilà, il ne vous reste plus qu'à ouvrir votre navigateur pour vous rendre sur la page : http://localhost

Le "preview code" pour accéder au store front est : `vbzx1tqmel`
