// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

function loadTeam(teamName) {
    // Vider toutes les divs
    ['Equipe1', 'Equipe2', 'Equipe3', 'Equipe4', 'Equipe5'].forEach(id => {
      document.getElementById(id).innerHTML = '';
    });
  
    const path = teamName === 'Accueil'
      ? './index.html'
      : `./equipes/${teamName}/index.html`;
  
    fetch(path)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(data => {
        document.getElementById(teamName).innerHTML = data;
  
        // Charger le JS uniquement si le fichier existe (ex: pour Équipe1 seulement)
        if (teamName === 'Equipe1') {
          const script = document.createElement('script');
          script.src = `./equipes/${teamName}/app.js`;
          script.type = 'text/javascript';
          script.defer = true;
          document.body.appendChild(script);
        }
      })
      .catch(error => {
        console.error('Erreur lors du chargement :', error);
      });
  }
  