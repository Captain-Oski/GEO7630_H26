Intégration et visualisation de données 3D Lidar et tuiles 3D Vectorielles

Laboratoire 3

****

[**Étape 1 Importation et nettoyage des nuages de points ****2**](https://docs.google.com/document/d/1v81pjhVysjacqn6m2l1XIWvUth7V6NP-aAYUAcyTJhI/edit#heading=h.ec8u3bf6aztu)

[**Étape 2 Importation des limites terrestres et découpage du nuage de points ****5**](https://docs.google.com/document/d/1v81pjhVysjacqn6m2l1XIWvUth7V6NP-aAYUAcyTJhI/edit#heading=h.fvbp9sj6bfxr)

[**Étape 3 Simplification du nuage de points ****7**](https://docs.google.com/document/d/1v81pjhVysjacqn6m2l1XIWvUth7V6NP-aAYUAcyTJhI/edit#heading=h.7ijt6xek4lo)

[**Étape 4 Ajout de rasters géoréférencés ****8**](https://docs.google.com/document/d/1v81pjhVysjacqn6m2l1XIWvUth7V6NP-aAYUAcyTJhI/edit#heading=h.23l8rlxg5p8f)

[**Étape 7 Ajout des empruntes et details de bâtiments ****12**](https://docs.google.com/document/d/1v81pjhVysjacqn6m2l1XIWvUth7V6NP-aAYUAcyTJhI/edit#heading=h.mtbwt3oe7v)

[**Étape 8 Jointure des propriétés du nuage de points dans les polygones ****14**](https://docs.google.com/document/d/1v81pjhVysjacqn6m2l1XIWvUth7V6NP-aAYUAcyTJhI/edit#heading=h.vj3u30n7iutj)

[**Étape 9 Visualisation du résultat dans MaplibreGL ****18**](https://docs.google.com/document/d/1v81pjhVysjacqn6m2l1XIWvUth7V6NP-aAYUAcyTJhI/edit#heading=h.hctb93vskptd)

****


# Étape préliminaire

****

Télécharger les données 

****

[Lab3 data.zip](https://drive.google.com/file/d/1GNEDPSGwSdACGDY3BhyQMRrtKXjtsQb2/view?usp=drive_link)

****


# Étape 1 Importation et nettoyage des nuages de points

****

- Ajouter les 6 nuages de points suivante avec un **_LAS READER_**

****

<http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/301-5041_2015.laz>

<http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/301-5040_2015.laz>

<http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/301-5039_2015.laz>

<http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/300-5041_2015.laz>

<http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/300-5040_2015.laz>

<http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/300-5039_2015.laz>

****

![](https://lh7-us.googleusercontent.com/66ouBHxSYE_PTv5WKyORHmg0Nys_Be5EIXgqOsHaVVE3QqjthaVocqrPDkV4FHH-1DxR4qM96qgzbKGCjYeZW9OZqYHTR7TqwmfPZkoL-SA-lIMR1c8CaW6usu6aiPYAmnP1KepHwTcC5H2XlAG6OUc)

****

- Ajoutez sur chacun des reader un **_Thinner_** avec un filtre de 30

****

![](https://lh7-us.googleusercontent.com/uPxJD93bMx_fgIh885Nv5KNKEtKuht0Ps44bYujG1_oD_Y15ez3WUUIPlo7qQNXNLhZNWQW3FZmlr1erYb8y1iJTSpow0ORxmBGfG1nRKKuQ8AsPi9VRyItNQFnGJexV1JyPCdOkx8A33o1YjzdE0Rs)

****

- Ensuite ajoutez y un **_pointcloudcombiner_** pour combiner les 6 nuages de points en 1 seul

****

![](https://lh7-us.googleusercontent.com/dFGgWLowyBsxyJ2iXsDWvpMhdlEaNLhAsq6042M19VYcfpDUsS9bwYhl2prkkqvyzbPR_6XYeezNuH1MQxSIhAi9VEJ90HAl6cBid_qJnggya2y51Zv1MTrjL76ZT1iK0J4uDJuOs-GJX5-gTwIs2PU)

****

- Puis un **_EsriReprojector (2950 to 3857)_**

****

![](https://lh7-us.googleusercontent.com/HxBbiP7aCiqwFWur3T0tGanpRMua7-aT0nWLqakoet0R4XbSlNo2bShR8oqnLBSr9DCMIbw6GftNPEQ6itebl6teUItEOoLBH3CnjSejsrkiWft-khYCHBC-Bpmxi3W9U4jElvRmbNACwV_BTWXXS-g)

****

- La première étape devrait ressembler à ca

****

![](https://lh7-us.googleusercontent.com/yg066t3u4So_8TyXSTCVBHc2qRrYy937-S_wip9q2_GEtg1qdu8iMy0Ca-AIZEvFlzVkyqEOgVRqbBhKoexd7ed6NzzzcgFxQDlFqTEmbI96oP4LlFKfgqKEXGAsgrgcIJLYWUQduq_5gU4paNZ6zy0)

![](https://lh7-us.googleusercontent.com/GhmM_A88n-cRnqInpRhcVM2m_pO8tI6uTu7QSZuYbaWUs1TF0-rEaWKEY2FaRor4RmqLOePh1AVnTDOs3Jw_iSmeCHQaXbWqUpa0BNyrSvQLKzMHNIH9phpVPlEiUf3b4h73Ujt5f0PkdVruFSuHsv0)

****


# Étape 2 Importation des limites terrestres et découpage du nuage de points

****

- Ajoutez un **_GeoJSONReader (URL)_** puis un **_Reprojector 4326 vers 3857_** 

****

Datasource: 

****

<https://data.montreal.ca/dataset/b628f1da-9dc3-4bb1-9875-1470f891afb1/resource/92cb062a-11be-4222-9ea5-867e7e64c5ff/download/limites-terrestres.geojson>

****

![](https://lh7-us.googleusercontent.com/IPNdPRfDGknF1S-Lhgn59ouBnxR8LB_s-aQWFsz5xFyiwU0G4n9HZPaWRstBYk5m1jShhWRwa9-4wrTkS-ysGNejOyMnWlrGCIYTgNgKd1G3DPfSjpOk4iEUpd_deKKPVSQuqGuBdnBDhrDWfr8fMEs)

****

Ajoutez un **_Clipper_** pour découper le nuage de puis avec la limites terrestres pour enlever les points superflus qui dépasse de notre zone de travail

****

![](https://lh7-us.googleusercontent.com/-sm6WVWrxln3Pt3JiZ7epnFUHwFsd2RDpn43bWL0vm8pPPNKs-lYCTSuJPN2mN712oGVJMGfT0wzvbQHkhHAR9xtWIkuJIcWogD0epaHgqLC0N-hBHZbwyMgtwd5B1ckHmniJpZ-qOHQVrqxxFHcox4)

****

Cela devrait ressembler à ca

****

![](https://lh7-us.googleusercontent.com/MZaeZyFpEVmZ4yy2ZTxOZ4OQ4uQKTr_rpBzVX3QeqWVIu9EMNz0tyyHBZeR_gsXATW-1Pp2hawRGvR0GP6wc9FTFL4ZQOY6jiX9haFQGPYJzo8RMlhO-bnVJXnwj_JNX7Vwyhftf7IM0VNOhRjw_4vE)

****

Connectez le nuage de points combiné comme **_Clippee_** et les limites terrestres comme **_Clipper_**

****


# Étape 3 Simplification du nuage de points

Ensuite refaite un point **_thinner_** interval de 5 pour encore simplifier le nuage de points, normalement nous devrions effectuer un **_PointCloudSimplifier_** qui rend le nuage plus léger mais conserve sa forme, néanmoins ce processus est très gourmand en processing power, nous allons donc utiliser un thinner pour les biens de l’exercice

****

![](https://lh7-us.googleusercontent.com/8cQECWVO1TNpBxQOEsQE9ma6C8-IySSWWYz6_au56SR5Q3wekwsFc5FnOw0dabduroL-X9GMIIgGNVx51tYfAK5ftpk6W9rOtgIDvSQTQW1z2SxYI0ypALAZOxRZpUh4zVENYxPCRa01OrizvWi6wes)

****

![](https://lh7-us.googleusercontent.com/0FW3mNs_vIZGtbIKKSx28GJDv7dtzV3jhshTwGRn9w3ovOlFwnjDNQk0brMtqH8W6UBT2P5YJ9ABH2WaiwPab096YcywXbx9Ea_TuwrZMB-RY_mZj4wMr6LHEQF2gxeuCOEjCDW4xFmk4UB1VhM7YKg)

****


# Étape 4 Ajout de rasters géoréférencés 

****

Cet ajout nous permettra d’ajouter la couleur du raster à notre nuage de points

****

- Ajouter les 4 rasters d’un seul coup en sélectionnant les 4 et en faisant un drag and drop

****

![](https://lh7-us.googleusercontent.com/HTSW57OgRWy9GOKRyjdg7hu6TWMF2LQNTLbuPK1PJdeIplzIRnR_Bt84-2jDMlr_xd67kFjPm2l6XyQjGM2Knvgxfnz2mua9wRS5t2iGb5X3oIMWV6YQvuPbbarDT3BqBmpYv9WXpuq-qWQL3dVQHYI)

****

- Ajoutez un **_reprojector_** 3857 vers 32188 (équivalent au 2950 mais au standard de reprojection FME)

****

![](https://lh7-us.googleusercontent.com/T_XPW-r7g1bUtI10NwgUU8PwTF-uQbu4AKCEE-QFmCMiEpKOVGdzdCffQiQ17Pj8-EghCF7T1ZL3fu2B11dE3AU3Bi9OSh-bgzQB1T1_8Dd6rcVmVr1E_rWnmEC2NIF0G2hewR92cJwev7ATgKWfMS8)

****

- Ajouter un **_rasterMosaicker_**

![](https://lh7-us.googleusercontent.com/CPZILLgAC38pJU5MeZP40n8MIzzCb0b6uVFKB21r0hSYe6dVprqT8bKo672u27MMxeP6RwCLR4Gkuk0o6qFZIXge22iOJvsKlQBJ4kual4A0gL5ochyuWnmm4mnHNWUow-LGtJRWFXKz1_e7tfElYe8)

****

- Puis ajouter un **_RasterSelector_** pour choisir les 3 bandes RGB et supprimer la bande alpha

****

- Pour connaître sur quelle bande se situe quelle couleur vous pouvez ajouter un **_rasterPropertyExtractor_** et collez y un **_listExploder_** sur la propriété BAND

****

![](https://lh7-us.googleusercontent.com/4r23dFIHL_5dOnv7mGaMeuhtkdBjOzvswBWLmHszyi0j03XjJCht-u4JoQcpKxcMfQZ7yz_9gHLFpzdsPRcCmVhkk0Oru2_3vjKXPXeV3k4zrQHKqQZyI2sV8INRqrvMoElsD3SmTNdrvgTkSAL4ji0)

****

- Maintenant paramétrer le **_RasterSelector_** pour ne pas sélectionner la bande alpha

****

![](https://lh7-us.googleusercontent.com/-QKH3JugKwp_mB2nsplElpVWJKJZGpzbPyQ8yKEbOT5TLL221e2BthY1BBaKFpHEAakSJh-U33UijSiWjW3cll95XETgAzbl16sOPI1cfaE6Ea6P2fWT2USdY-PcNm_DTWid7djn7c8sSir42oTtGGI)

****

- Ajouter un **_EsriReprojector (2950 to 3857)_** avec les mêmes paramètres que celui de la première étape

****

Étape 6 Jointure raster et nuage de points

- Ajoutez la couleur dans votre nuage de point en ajoutant les valeur du raster avec un **_PointCloudOnRasterComponentSetter_**

****

![](https://lh7-us.googleusercontent.com/dY5JIHwi1UcLAuXYLbpn4alqUpEUiTt3aE6AUo1YxCSbqz5BZGTsyqg9RpeEiP9m6GS-sh1_V97KA1WvxPrfSb99y_2nln2OpK08hVS9hGy7IxothGPjo5Z0SwJs3qQnQq4xElvs32XAO-Bpkpd300o)

****

- Ensuite on va combiner le résultat en 1 seul nuage avec un **_PointCloudCombiner_**

****

![](https://lh7-us.googleusercontent.com/ssQblD32O8prpS71bphTf0P213rN1n8TyCaFOkrBEGCabU-zvm2qHUif2MWvlv6kQ2K1AUjfTyzeThR3Y_XOWY0FrdLza-xhWVVWHFD2BM1EjR5_fWnR_N2k6C09eksLJbu6rCwUmQ7NB7aw-9NRYg0)

- Ensuite on va filtrer les valeurs du nuage de points dont le raster n’a pas donné de valeur avec un **_pointCloudFilter_**

****

![](https://lh7-us.googleusercontent.com/7nzoKWPp2C2YA8CMAM7loWax6oBex6rxHpP_QHH46DawIJL67kpLHjIn8drdNBsWqujQSbIbcwle4ZbgEwr7wphRs6_GjkdAho0dmPAaiI-XJCEbJRCXeqMzp9tIiML-GW46JHPG8vb441H6tAHg1H4)

****

Pour filtrer on va choisir les valeurs RGB qui sont toutes à 0 avec l’expression suivante :

****

_@Component(color\_red)!=0&&@Component(color\_blue)!=0&&@Component(color\_green)_ 

****

- Puis pour terminer nous allons transformer le nuage de points en couche de vecteurs ponctuels simple avec un **_PointCloudCoercer_**, en s’assurant de garder les composantes nécessaires pour la suite

****

__![](https://lh7-us.googleusercontent.com/gXoXzzjs3Xec8DlKjAYbpmKdQ89hN70P7B5pd-byRRcjq4qC9fHf5SBMDuBXGO0mBoHc2JXR9MYV6m76ElEal871acKt3K96dOrh09t0P-Ebda6sk1TvqCzBLWtr1u1yImcr8pe3ld2o1qE2LVVPuoY)__


# Étape 7 Ajout des empruntes et details de bâtiments

****

Maintenant que le nuage de point est nettoyé et préparé, nous allons assigner le Z et la couleur aux polygones de bâtiments

****

- Ajoutez 2 **_sources shapefiles_** pour les empreintes de toits  (polygones) et les détails des toits (lignes)

****

- Reprojetez 2950 en 3857 avec un **_EsriReprojector_**

****

![](https://lh7-us.googleusercontent.com/tbGFMnju_4meRi0rIcXORKSCvnPk61TPP-lN4z1am2Hcv02h6jUI3ngG4nWik-A9pScoffFYjg8sf7PpOrhYpOZYZkYq8pf8gXndIrehKBHgJ6aXl4PeDxmsxg3kVEjhc3OXV3crGuXK8hrXwJysHgM)

- Calculez le bounding box du nuage de points avec un **_BoundingBoxAccumulator_**

****

![](https://lh7-us.googleusercontent.com/Lwj4XiibgY6n1KKC5WoinqhOR6L4x5KuZYRhXoeDlZgxfr0XpZuUCf-cln_Lc3pGSg6wgnNP9150sY5L3C63Om-4tS0ETlCesdtRU7J2EUJVPbRMxyqW6Xlzb626KqwqoDD1SIhLSs-wSvyMku1qzY4)

****

- Ensuite on découpe avec un Clipper les polygones et les lignes

****

![](https://lh7-us.googleusercontent.com/l0mLLFfaY4OgeydT79M2fw8X6sQyRuncaRiPYybGVCMFeM4btoKma-93Js501WAIhC7oCE-ZRTBIrK3FFrvFte8gMA8VQ94xmscT5Oy1UPue3QarQwSJgk-kRyk3Ig6gyxJtTGFyr0N-d1aFOCH3Buk)

****

- Et on découpe les empreintes de toits avec les détails avec un **_PolygonCutter_** issue du **_FMEHub_**

****

![](https://lh7-us.googleusercontent.com/JXIDSTYuqF8FWJjShtxP8P5FrgTc0j00tBp4tLdW9mRYiqBR_A7BA4fSnVMpy34lEK6unrrqAAc7k9AUIIOiz12DVtXPFzYIKgWW7yUGhftmFwGZuxektR3__FebfhDpzeV6de_lN9p2MeWB_MR9cz0)

****


# Étape 8 Jointure des propriétés du nuage de points dans les polygones

****

- Puis on vient joindre les polygones détaillés avec les points du nuages de points pour y injecter les valeurs de Z et de couleur du batiments avec un **_PointOnAreaOverlayer_**

****

![](https://lh7-us.googleusercontent.com/L3wJJlMpCKsN00qPn145q-32yL5CDj1LDRM6597u9TRDGGh7yg-BI5mZHb_lsy5W0uh38eeyDKgev_OFx6Fhh_wg1pMIVol_W6PzI2OmcL4EzhUagpBkWiULS4ai1fM3gjPM-GbvSYO2Rr4Wb3zShhE)

****

! Attention ! ici on va accumuler les informations de Z et de couleurs pour ensuite calculer les moyennes qui nous permettront d’attribuer à chaque “bâtiments” une hauteur moyenne et une couleur

****

![](https://lh7-us.googleusercontent.com/CHrUVIyQiJ4RQsXYnmV44_ZXHH04Vz9aOL5e8ANcIf4K7RkfrImGwhs8GDzHlWO-x0WDGT5kTmHUrQQt-_gZOglQJKeVSH6DPe-fY5vf2cVhCacRN7RUK5D6ReeIMBJ6XR3Be1zA5_3kg5Znle5jzRU)

****

- On ajoute un **_ListSummer_** 

![](https://lh7-us.googleusercontent.com/_CWB0XRv0pAGYY61VkwLLCbvCRBm__TvLDdwEZpKcL9V2RrxnPl5rgT7cZCtrIht0-OGcdCEF8NZeKvnYQhIAEvXM8ZwddYvy3AvqXuCBOxKeNKa1by5rL1aoXb5WSlpEjx5M4lV0lzLrrJIPr9qMFs)

****

- Ensuite on va créer un attribut pour calculer la moyenne **_AttributeCreator_**

****

_@Evaluate(@round(@Value(\_sum)/@Value(\_overlaps),4))_

****

![](https://lh7-us.googleusercontent.com/Gi5WueaqKExbrubiyFnXUQWjV-0T34DTgLW_3FZx5htw_t1zY1fkXj2xIm8s3V5biMKsKbEfYIrbo1f0PSxl3MFezCQ8Toln3m7wm_5ZV_zNN1el2rAJfO6z9J0ZMkq_b4-pAuZSSn9kzTzatZqukew)

****

- Ensuite on fait un peu de ménage pour garder seulement les 2 propriétés qui nous intéressent avec un **_AttributeManager_**

****

![](https://lh7-us.googleusercontent.com/orxTHrgymT1A0Cclwm2thQu2bPg1IT9kGtIwgIcj9Dc20uq5dJtAn8HrPLMfUmuhkP2vD7jhDaRfL6ZLEXZlEx4Pe22eYJ4Idh4ZdCVeNIjSol1G-r1yBlfXnLxlgEAiGhImb0i6PyBOtNlScEgvXJ0)

****

- Ensuite on transforme le FME color en RGB ou WebRGB  avec un **_ColorConverter_** (FME Hub)

![](https://lh7-us.googleusercontent.com/3VkoCVpup8vkkWzsLU8Jpn494jQvJqRP1RXmnekJrS0042TAO8JCKJBi-_Wn57Y2i_iH64jDLFC6brQT2C6yPiZ0v4Og5Bv1bJx0D3ztHFX-Do8nG2dtL7G2IQVUdoJzdFXYbDCftnMy0x91Nracsao)

****

- Puis on exporte notre résultat avec **_GeoJSONWriter_** dans le répertoire : 

****

- _…/Lab3/results/bati3d.json_

****


# Étape 9 Visualisation du résultat dans MaplibreGL

- Ouvrez un navigateur de fichiers et allez dans le dossier Lab3

****

![](https://lh7-us.googleusercontent.com/JxIYzt5TN3UjtUMvA7IRAJMpV1nVFtXdisooujNIkqRPptpH6sfMHKF_gC6TQNo-ZxONr3BzImH_6WrrSCo7ECjpEKCsAHiKS_i8FLEzUdCx7sQ-GM8tF5vNZ7wDSVHq9JWPT2gpau4Bb66NMFClEIs)

****

- On ouvre le fichier MaplibreGL.html en double cliquant dessus dans le répertoire /Lab3/results/MaplibreGL.html

****

- Cliquez sur le bouton importer en haut à gauche et choisissez le bati3d.json, cela vous permettra de naviguer et visualiser les bâtiments à votre guise.

![](https://lh7-us.googleusercontent.com/s1UkxWdJdUFiHNL-LoGJpg41PGyKRZRfxw8hyvnpT_t6A6jSDJy1dI6zvEge5imZCjWLaOVXyY2OLx6A151Dv0xbxHrK5RjZRBk4JZBjee4SgSNiMjiB0DLeDPrucKKNA-7FTn19d7OjT0-5oT5hVwo)
