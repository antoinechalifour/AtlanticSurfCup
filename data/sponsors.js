// La liste des sponsors pour l'année courrante.
// C'est la liste qui est récupérée par le site et affichée dans 
// la section sponsors.
// 
// Pour la mettre à jour il suffit d'ajout / supprimer / modifier l'array suivant.
// Pour chaque sponsors il faut fournir :
// {
//    name: // le nom
//    logo: // l'image avec ratio 4/3 (genre 800/600)
//    url: //un lien vers leur site
// }
module.exports = [{
    name: 'La Gachère',
    logo: 'assets/img/gachere/logo.png',
    url: 'http://www.camping-gachere.com/'
}, {
    name: 'Atlantic Lezard',
    logo: 'assets/img/al/logo.png',
    url: 'http://lezardsurfschool.com/'
}, {
    name: 'BNP Paribas',
    logo: 'assets/img/bnp/logo.png',
    url: 'https://www.secure.bnpparibas.net/'
}, {
    name: 'Red Bull',
    logo: 'assets/img/rb/logo.png',
    url: 'http://www.redbull.com/fr/fr'
}];