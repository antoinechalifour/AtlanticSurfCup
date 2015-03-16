#Site vitrine de l'Atlantic Surf Cup
Code source du site de présentation de l'association Atlantic Surf Cup.

## Accès au site en ligne
Site temporaire avant la mise en ligne par l'asso :
`Site temporaire avant la mise en ligne par l'asso :
http://antoinechalifour.ovh:8888`
(si bug, contacter antoine.chalifour@gmail.com)


# Lancer le serveur
## En developpement
`npm install & bower install`
Puis
`node server.js` (a la main)

Ou mieux (automatisé)
`grunt serve`
ou
`grunt serve:development`

## En production
(configurer le port dans le gruntfile)
`npm install & bower install`
Puis
`grunt serve:production`

-> build, concat et uglify le site

Astuce : quand ssh, faire
`nohup grunt serve:production &`