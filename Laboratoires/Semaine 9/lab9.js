
// On INITIALISE une nouvelle carte MapLibre
// La fonction new maplibregl.Map() prend en argument un objet {} ...
// ...qui premet de configurer la carte a notre volonte
// container = ID de la <div> qui contiendra la carte
// style = le fond de carte
// center = le point central de depart de la carte
// zoom le zoom de depart
// il y a beaucoup d'autres options possibles de proprietes de configuration
// Voir la documentation : https://maplibre.org/maplibre-gl-js-docs/api/map/

var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj',
    center: [12.338, 45.4385],
    zoom: 17.4
});

// On declare une variable pour contenir notre GeoJSON mais on ne l'initialise pas tout de suite
// On la met ici car on veut que son SCOPE soit global c'est a dire visible et accessible par toutes les fonctions du script
var geoJSONcontent


// Ici on declare notre fonction qui va charger le geojson en memoire vive pour le metre sur la carte 
// Pour declarer et initialiser une fonction il suffit d'ecrire le mot fonction et lui donner un nom
// ex : function maFonction(){}
// La fonction sera initialisee par le navigateur mais elle ne sera pas executee
// tant qu'un evenement n'y fera pas appel.
// @evt : notre fonction a besoin d'un objet qui va stocker le fichier envoye de notre ordinateur vers le navigateur
// on pourra utiliser cet objet pour le traiter dans la fonction ensuite

function handleFileSelect(evt) {
    // On declare la variable qui contiendra le fichier
    var file = evt.target.files[0]; 

    // On declare la fonction native FileReader() ...
    // ... NATIVE car elle est inclue dans tous les navigateurs il n'est donc pas necessaire d'utiliser une api particuliere
    var reader = new FileReader(); 

    // la fonction reader expose plusieurs evenements qu'on peut ecouter
    // ScreenShot 

    // Debut de la fonction reader.onload
    reader.onload = function (theFile) {

        // On unitialise notre variable globable avec notre geojson
        // On parse (definition de parser ici) 
        // Le fichier
        geoJSONcontent = JSON.parse(theFile.target.result);


        // Maintenant que nous avons notre GeoJSON en memoire on va pouvoir l'ajouter a notre "map" configuree plus haut
        // On profite d'une des fonction mise a notre disposition par l'API via la map 
        // Ici .addSource(id:string, source: object)
        // Documentation : https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addsource
        // Il existe plusieurs sorte de source: geojson, wfs, vector tiles, wms etc... (voir la doc)
        map.addSource('geojson-source', {
            'type': 'geojson',
            'data': geoJSONcontent
        });

        // Maintenant que nous avons ajouter une source de donnees on va pouvoir ajouter une couche (layer)
        // On profite d'une des fonction mise a notre disposition pour l'API via la map
        // ici .addLayer(layer:object)
        // L'objet layer est notre objet de configuration de notre couche, cet objet peut contenir toutes sortes d'information que nous aimerions declarer
        // sont type de geometrie, sa source (obligatoire), son id (obligatoire), sa couleur, un filtre, un zoom etc...
        // L'objet layer peut etre vraiment tres extensif, ici concentrons nous juste sur un layer simple
        // https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addlayer

        map.addLayer({
            'id': 'geojson',
            'type': 'fill',
            'source': 'geojson-source'
        });
    };
    // FIN DE LA FONCTION reader.onload

    // La fonction reader expose une methode pour lire le fichier uploade en tant que texte (un fichier pourrait etre autre chose que du texte)
    // Cette fonction permet de mettre le futur geojson en memoire en tant que texte
    reader.readAsText(file, 'UTF-8');
}
// Ici on initialise la fonction qui va nous permettre de zoomer sur notre geojson
function zoomToGeoJSON () {
    // L'objet map expose une methode qui permet de zoomer sur une entite geographique
    // fitbounds : https://docs.mapbox.com/mapbox-gl-js/api/map/#map#fitbounds
    // fitbounds prend en parametre un bbox 2 coordonnes pour fomer un bbox rectangle
    // Pour calculer le bbox de tous les polygones du geojson on va utiliser une librairie externe qui va nous faciliter la tache
    // Voir insertion du script dans la page html ligne 27
    // Les types de bbox attendu est de type [sw, ne] order, or an array of numbers in [west, south, east, north] order.
    // eX : map.fitBounds([[-73.9876, 40.7661], [-73.9397, 40.8002]]) 
    // eX : map.fitBounds([[-73.9876, 40.7661], [-73.9397, 40.8002],[-73.9876, 40.7661], [-73.9397, 40.8002]]) 
        map.fitBounds(geojsonExtent(geoJSONcontent));
}

// Ici on initialise la fonction qui va nous permettre de colorier notre geojson
function colorPolygons () {
    // L'objet map expose une methode qui permet de changer les proprietes esthetiques d'un layer
    // setPaintProperty(identifiant du layer, propriete a changer, valeur de la propriete que vous voulez donner)
    // Documentation : https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setpaintproperty
    map.setPaintProperty("geojson", "fill-color", "red")
}

// Ici on va initialiser l'evenement qui se passe lorsqu'on clique sur un bouton
// document : fait reference a la page html qui appel ce script (lab6.html)
// .getElementById() prend en parametre l'identifiant de l'element html
// .addEventListener() prend en parametre l'evenement qu'on veut ecouter 
// change est l'evenement de changement d'etat du chargeur de fichier
// Lorsqu'on ajoute un fichier l'evenement CHANGE est declanche et va executer la 
// fonction handleFileSelect qui est notre fonction declaree plus haut
document
    .getElementById('file')
    .addEventListener('change', handleFileSelect);


// Ici on va initialiser l'evenement qui se passe lorsqu'on clique sur un bouton
// Bouton de zoom (id zoom)
// Evenement a ecouter le CLICK
// Fonction a declencher sur l'evenement pour zoomer sur le polygone
document
    .getElementById('zoomto')
    .addEventListener('click', zoomToGeoJSON);

// Ici on va initialiser l'evenement qui se passe lorsqu'on clique sur un bouton
// Bouton de zoom (id colorier)
// Evenement a ecouter le CLICK
// Fonction a declencher sur l'evenement pour colorier le geojson
document
    .getElementById('colorier')
    .addEventListener('click', colorPolygons);