# 📚 GEO 7630 - TP3 : Développement d’une application web et diffusion des données (Open Source)

## 🗓️ Date de remise
- **À préciser**

## 🎯 Objectif du TP3
L’objectif de ce travail est de **développer une application web cartographique** interactive qui diffuse et visualise des données géospatiales tout en respectant les bonnes pratiques d’UI/UX et de sémiologie.

Vous devrez :
1. Développer et documenter une application web interactive.
2. Intégrer plusieurs types de couches géospatiales (WFS, VTS, WMS/WMTS, etc.).
3. Créer une visualisation dynamique incluant des **couches extrudées**, des **3D Tiles**, et des indicateurs dynamiques.

---

## 📝 Prérequis pour le TP3
- **Compte GitHub** : Dépôt obligatoire.
- **Maîtrise des notions vues dans la deuxième moitié de session**.
- Connaissance de **JavaScript**, **MapLibre GL** ou autres librairies open source.

---

## 📝 Consignes générales

### **1. Architecture du dépôt GitHub**
Le TP3 doit être organisé comme suit :
```plaintext
Atlas/app/equipe-X/
├── README.md          # Présentation de l'application
├── main.js        # Script principal
├── layers.js      # Gestion des couches
├── styles.css     # Styles UI/UX
└── images/            # Captures d'écran et autres visuels
```

### **2. Développement de l'application**
#### **Fonctionnalités obligatoires**
Votre application doit inclure :
1. **Menu de navigation** : Présentation générale et descriptive de votre projet.
2. **Légende interactive** : Pour chaque couche affichée.
3. **Couches géospatiales** :
   - **1 à N couches WFS** (Web Feature Service).
   - **1 à N couches VTS** (Vector Tile Service).
   - **1 à N couches WMS/WMTS** (Web Map Service).
   - **1 à N couches extrudées** (2.5D).
   - **1 à N couches Lidar 3D Tiles**.
4. **Indicateurs dynamiques (KPIs)** : Intégration d’un ou plusieurs KPIs interactifs.
5. **Animation des données** : Dynamisation des couches (ex. évolution temporelle).
6. **Utilisation de librairies externes** : Par exemple, **Turf.js** pour les analyses spatiales.

---

### **3. Présentation**
Votre présentation doit inclure :
1. **Vulgarisation du traitement des données** :
   - Explication simple et accessible de vos processus de traitement.
2. **Présentation interactive de l’application** :
   - Démonstration des fonctionnalités principales et de l’interface.
   - Option : Une **vidéo pré-enregistrée** peut être soumise.

---

### **4. Documentation du projet**
Un fichier **README.md** dans votre répertoire **TP3/** doit contenir :
1. **Description du projet** :
   - Objectif de l’application.
   - Fonctionnalités incluses.
2. **Architecture du code** :
   - Explication haut niveau des fichiers JavaScript.
5. **Schéma explicatif** des traitements réalisés.
6. **Captures d’écran** de l’application.

---

## 🧾 Grille d’évaluation
### **Développement de l’application**
| Critère                                      | Pondération   |
|--------------------------------------------|--------------:|
| **Respect des consignes**                   | 10%          |
| **Menu descriptif et navigation**           | 10%          |
| **Légende interactive**                     | 10%          |
| **1 à N couches WFS**                       | 10%          |
| **1 à N couches VTS**                       | 10%          |
| **1 à N couches WMS ou WMTS**               | 10%          |
| **1 à N couches extrudées (2.5D)**          | 10%          |
| **1 à N couches Lidar 3D Tiles**            | 10%          |
| **1 à N KPIs dynamiques**                   | 10%          |
| **Animation des données**                   | 10%          |
| **Librairie externe utilisée (ex: Turf.js)**| 10%          |
| **UI/UX et sémiologie**                     | 10%          |
| **Pertinence de l’application**             | 10%          |
| **Documentation du code**                   | 10%          |

---

## 🚀 Conseils pour réussir
1. **Planifiez vos étapes** :
   - Débuter par l’intégration des couches simples, puis ajouter progressivement les fonctionnalités avancées.
2. **Assurez-vous que votre code fonctionne** : Testez régulièrement votre application.
3. **Documentez votre travail** : Utilisez des commentaires dans le code et décrivez clairement chaque fonctionnalité dans le **README.md**.
4. **Optimisez l’interface utilisateur** : Respectez les bonnes pratiques d’UI/UX et de sémiologie.
5. **Soyez créatifs** : Intégrez des animations et des KPIs pertinents pour rendre l’application dynamique.

---

## 📂 Ressources utiles
- **MapLibre GL** : [Documentation](https://maplibre.org/maplibre-gl-js-docs/)
- **Turf.js** : [Turf.js Docs](https://turfjs.org/)
- **GeoServer WFS/WMS** : [GeoServer Docs](https://docs.geoserver.org/)
- **3D Tiles** : [Cesium 3D Tiles](https://cesium.com/docs/)
- **UI/UX Design** : [Laws of UX](https://lawsofux.com/)
- **Markdown Guide** : [Markdown Reference](https://www.markdownguide.org/)

---

**Bonne chance pour ce troisième travail pratique !** 🚀
