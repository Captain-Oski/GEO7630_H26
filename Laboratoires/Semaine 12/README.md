# Laboratoire cours 11-12

[**Laboratoire cours 11-12 ****1**](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.6xp8lo9ezpif)

[**Prérequis : ****1**](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.ow87l5ef1vz6)

[Objectif du laboratoire 6](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.s1d1cfdc34oi)

[**Créer et styliser des clusters ****7**](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.86zhcmbby4fa)

[**Créer et styliser une carte de chaleur (heatmap) ****9**](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.t1qmum80efu0)

[Créer et visualiser une couche de polygones extrudées 10](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.jpcosgmr1kuw)


##

## Prérequis : 

- Ouvrir github

- Ouvrir codespace 

- Faire un git pull

![](https://lh7-us.googleusercontent.com/9hrK7pezwX-pzGLmZk1KeKrhZUb_SgBHdQHds4rMzoltbJVQ6efTsd_e2F9sfO2lJfS7KWsU0oe3WQMkTM81GydJ7ptuw4tGbQ24uHfYUjF-SErZkCS6DURfQLVDUGoRqSZ4yxyCnfj-yNXoDthbCY4)

- Placez vous sur la branche “lab11”

Pour vérifier sur quelle branche vous êtes : 

![](https://lh7-us.googleusercontent.com/08sW5PuM3f5kprK6BiJSZK8a7cTKtTNjUDMfit4DM0xV_ZEyGtPS-ejtglOs_mKIPYoVTktMOWSmzThTsstVz5Y8-XX-oyjagnwO4z9cxx9Ji68Y4xA87-5PKcKbgIlBXKD9EHhHawFoHNPlSK-UTA4)

Pour changer de branche : 

![](https://lh7-us.googleusercontent.com/b44W6QobKZpsRNZgY-VKnrzFMCFiLiWPboughrE1N03HxcTdjZ6j_94EWv4t2IzQlSwl66oUuUl9Tuw4D5jpIzQw1gB5ORJQ7KN2GJZhb3InBVBJJYiP_C7YChv3uAW_qHBmRcNj2IUGQoD1hZivhPQ)

![](https://lh7-us.googleusercontent.com/ufoUaqK-MNtMK5CgtznmJF5gRDprdICFWjA95PAhAh74dF_2M5kED0IrbHHCEyDm_TgrsQACM1294Ql96j3Q51Jva4uR4DtUaybkw7hpJNcX2dcRI_Sld6lWC4MMuso7Qr-SdvSHCU7Vw5GTBPN8Hdg)

Une fois que vous avez basculé il est simple de le savoir

![](https://lh7-us.googleusercontent.com/Y8tcMADTDgOKYIyNZseMH4D63QoIntdU579-jLTRDQ5u5pmmUvZ_d8oNFyvLPkn4EEnNw_3Lq2FGXySJkQHyTwQuo5Tw1tdSysi9-qAlNBp2xJTkLL01Zm7xDp-R9nLmW0nsxA_e50W7q4aHSBwK0n4)

Si ce n’est pas déjà fait installer l’extension DOCKER (ctrl+shift+x) ou simplement sur l’icône de blocks sur le côté gauche

Chercher Docker et installer l’extension

![](https://lh7-us.googleusercontent.com/N9yCDW-jAUv0lDcWewiyzcHvlchxCYlRSE5kD1kLb85wJuaBumvlTSI5WkAxmE6hOLTNxXuwOw6D-rkeVLW_3NdPlTR8h1_enu0Mw3CAv8jIFWdIGrairejSznLbfH5m2EY79vWzFinH0csbwvv9meY)

!! Avant de lancer les containers applicatifs, assurez vous d’avoir copier coller le fichier .env.example , de remplir les variables d’environnement et de renommer le fichier en .env

![](https://lh7-us.googleusercontent.com/d880WbvMICx_3se8ET9EqyUCQhPJgDdbqDjNn-d6_QORpA3YhbS6VJeSlooBEeRnWQq1BeqpGLhMpIyWH5lx0JoJJarvl0tIvmYOkwBeyLe_CGa4--jKSd4RSOmvyxU2YaqY7EkpqqskPwOxBYrLIoU)

Monter les containers avec Docker compose up

Faites un clic droit sur le ficher .yaml et choisissez compose up

![](https://lh7-us.googleusercontent.com/_fyTBG6ks_M5d7seP2WWhqMSXSY-3yv_U67Zw7NGG7r8nrs_rahGDdPE-de3yG7yzee8VLR4DfpSIgdAe_1XoUR3263whXdf1P2bEhFMVhpM7z1THu1HAT8V-jVEVxFcsVKFAbiAtSqTPeEAO4nIk-8)

Vérifier que vous avez accès à la page web de l’Atlas en vous assurant que les containers soit tous au vert (sinon relancer les avec un clic droit Start ou Restart)

![](https://lh7-us.googleusercontent.com/fGO5_ORaqjd96iJFvVko84v1lilw1mpu7LJnpTNGzAZnD8CK-hNdlauUVen5X_7hYi89zuYYI7aTbzoMzw1l6h5ce9Akgh4xlZKvseVjyfSvKmt4YAlpwcXXy-LYhMVdvQ3LVaC8-X5NZUwbVHfvNSM)

Cela devrait ouvrir un nouvel onglet avec l’atlas


## ![](https://lh7-us.googleusercontent.com/lU4mGX-EZ3Y-9pULQMf-X5i5GjRkPtD2JyYSagmeedqAPhLPNOqms6lRCpuCI_nt6zT5T7MOudo6hc7imIeteGkP0ye2uDKoTnqRMW4S5IAtV2Zg0Q23O-7LcfUecJTatwPiwvZfcJFkVMZZx256ENQ)

### Objectif du laboratoire

Ici le but du laboratoire est de vous familiariser avec les outils de développement (VS Code) et l’API Maplibre pour injecter des modules javascript de visualisation et de contrôle avancés de cartographie web. Avec les 2 derniers laboratoires vous avez donc pris en main ces outils, ici je ne fournirais pas de tutoriel exhaustif mais plutôt les grandes lignes des choses à faire pour que vous puissiez tester vous même votre montée en compétence.


###

## Créer et styliser des clusters

Documentation : [Create and style clusters](https://maplibre.org/maplibre-gl-js/docs/examples/cluster/)

1. Créez un nouveau module javascript \`renderClusters.js\` à la racine du dossier lab 11 

2. Dans ce module ajoutez une nouvelle fonction :

   1.  **\`function generateClusters() {}\`**

3. Dans la fonction commencez par nettoyer les layers existants avec la fonctionnalité vu en classe : 

   1. **\`removeAllLayersAndSources()\`**

4. Dans le module renderClusters.js  ajoutez une nouvelle source geojson qui comprend la propriété **\`CLUSTER:TRUE\`** comme dans la documentation maplibre ci haut.

5. La propriété **\`data\`** dans la configuration **addLayer** doit référer à la variable **\`randomPoints\`** du module javascript **\`randomPoints.js\`**

   1. ****![](https://lh7-us.googleusercontent.com/FC-rGQJjcQTuyxNlZmdXhpUqpdoLo4-trMKfNU-6y1unzoOjY1T_9UsLFaNmft5SJce5W4mkhk_KdR8s0OKIqyOVR1I09NWJQqj5XCz3uUteLEao2UpPtty1TxhAYhpMUEKEFSYTZk-HZDh9ROSsZfo)****

6. Une fois terminé, ajoutez l’écouteur d'événement pour exécuter cette fonction lors du clic sur le bouton comme vu en classe

   1. document

   2.   .getElementById('generateClusters') // id unique du bouton

   3.   .addEventListener('click', generateClusters); // ajoute un event de type click qui lance la fonction generateClusters()

   4.

7. Le **\<button>** id du bouton se nomme : **\`'generateClusters'\`**

8. N’oubliez pas d’ajouter la source du module javascript dans le fichier html **index.html**
   9. Emplacement du module à mettre dans le fichier html : ./modules/lab11/renderClusters.js

![](https://lh7-us.googleusercontent.com/XOeK_u2rykBVa4gQSGvliXKpbRWz695z-T81T2FgvRd9qV_Rkc7wajqH_yx5h3qHEvhbMsLqY0rIylA00AjZ8T4UnUh1CwechKCDL1w5YMgkAJQczrGkNkw9PXAkiy01MdF__LukvHv9uQFhGQyB-_g)


##

## Créer et styliser une carte de chaleur (heatmap)

Documentation : [Create a heatmap layer - MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/examples/heatmap-layer/)

1. Créez un nouveau module javascript **\`renderHeatmap.js\`**

2. Ajoutez une source et un layer de type **heatmap**, suivez l’exemple Maplibre

3. La propriété **\`data\`** dans la configuration **addLayer** doit référer à la variable **\`randomPoints\`** du module javascript **\`randomPoints.js\`**

4. N’oubliez pas d’ajouter la **source du module** dans le index.html

![](https://lh7-us.googleusercontent.com/XA4o1TyKks1QbXwoQP6pu8suTiNjoY5Edqy5YqcnU5b30xp4XALceX1mkAvn1C5XILda1TqzzCWEtg3g6OmaMuWADm_eizsM1cajhFLsvshLtPGG4wNlB7SZYPdOU9QusLvOUGsJKtCH9-nL5oss4Yk)


## Créer et visualiser une couche de polygones extrudées

Documentation : [Display buildings in 3D - MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/examples/3d-buildings/)

1. Créez un nouveau module javascript **\`render3D.js\`**

2. Créez une fonction **\`function generate3D()\`**

3. Ajoutez y une variable pour fabriquer un grid hexagonal : 

   1. **var grid = makeGrid();** 

   2. Cette **variable** appelle une fonction du module javascript dans le fichier **\`createGrid.js\`** vous pouvez aller la voir si vous êtes curieux

4. Ajoutez une source de type geojson dont le data est **\`grid\`** 

   1. (qui réfère à la variable précédente)

5.  Maintenant ajouter un layer de type **\`fill-extrusion\`**

   1. Inspirez vous de l’exemple Maplibre ci-haut

6. La propriété **\`fill-extrusion-color\`** et **\`fill-extrusion-height\`** que vous devez utiliser est “randomValue” (qui est générée par le module createGrid.js)

7. N’oubliez pas d’ajouter la **source du module** dans index.html

![](https://lh7-us.googleusercontent.com/C2eWrfMpdF6d0-NZFXOPLMzonCksaDJy3-FQE21wR14rxzSbCyyybBimODm_ISDtt0wIpZA-6juKeFkt-47rQ9eWZ3t6fIagy2z3mQDH_StZdunzA7uqAANUiFaCeha_xS661JxWlokuGNclTItnfl4)

Beau travail ! Vous venez de réaliser votre première application d’analyse spatiale sur le Web ! 💪
