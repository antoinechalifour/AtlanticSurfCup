// La liste des sponsors pour l'année courrante.
// C'est la liste qui est récupérée par le site et affichée dans 
// la section sponsors.
// 
// Pour la mettre à jour il suffit d'ajout / supprimer / modifier l'array suivant.
// Pour chaque sponsors il faut fournir :
// {
//    name: //le nom
//    logo: //l'image
//    url: //un lien vers leur site
// }
module.exports = [{
    name: 'La Gachère',
    logo: 'sponsors/img/gachere/logo.png',
    description: 'Hôtes depuis <année>.',
    img: '',
    url: 'http://www.camping-gachere.com/'
}, {
    name: 'Atlantic Lezard',
    logo: 'sponsors/img/al/logo.png',
    description: 'Cours de surf, depuis <année>',
    img: '',
    url: 'http://atlantic-lezard.com/'
}, {
    name: 'BNP Paribas',
    logo: 'sponsors/img/bnp/logo.png',
    description: 'Partenaires depuis <année>',
    img: '',
    url: 'https://www.secure.bnpparibas.net/'
}, {
    name: 'Red Bull',
    logo: 'sponsors/img/rb/logo.png',
    description: 'Partenaires depuis <année>',
    img: '',
    url: 'http://www.redbull.com/fr/fr'
}];