# Configuration Docker Compose pour pg_tileserv et pg_featureserv

Cette configuration Docker Compose met en place deux services, `pg_tileserv` et `pg_featureserv`, ainsi qu'un serveur web basé sur Nginx (`server-web`).

## Services

### pg_tileserv

- **Image** : pramsey/pg_tileserv:latest
- **Ports** : 
  - Hôte : 8801
  - Conteneur : 7800
- **Variables d'environnement** :
  - `DATABASE_URL` : Chaîne de connexion pour la base de données PostgreSQL au format `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
- **Politique de redémarrage** : Toujours
- **Notes** : 
  - Actuellement, la configuration est définie pour utiliser une variable d'environnement pour la connexion à la base de données. Si nécessaire, vous pouvez également décommenter le mapping de volume pour utiliser un fichier de configuration `pg_tileserv.toml` local.

### pg_featureserv

- **Image** : pramsey/pg_featureserv:latest
- **Ports** : 
  - Hôte : 9000
  - Conteneur : 9000
- **Variables d'environnement** :
  - `DATABASE_URL` : Chaîne de connexion pour la base de données PostgreSQL au format `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
- **Politique de redémarrage** : Toujours
- **Notes** : 
  - La chaîne de connexion à la base de données est récupérée depuis le fichier `.env`.

### server-web

- **Image** : nginx
- **Ports** :
  - Hôte : 8000
  - Conteneur : 80
- **Volumes** : 
  - Mappe le répertoire local `./app/` vers `/usr/share/nginx/html` dans le conteneur
- **Notes** : 
  - Ce service configure un serveur web Nginx et sert le contenu du répertoire `./app/` sur la machine hôte.

## Utilisation

1. Assurez-vous d'avoir Docker et Docker Compose installés sur votre machine.
2. Créez un fichier `.env` avec les variables suivantes :
    ```
    DB_USER=votre_utilisateur_db
    DB_PASSWORD=votre_mot_de_passe_db
    DB_HOST=votre_hôte_db
    DB_NAME=votre_nom_db
    ```
3. Exécutez la commande suivante pour démarrer les services :
    ```
    docker-compose up -d
    ```
4. Accédez aux services :
    - `pg_tileserv` : `http://localhost:8801`
    - `pg_featureserv` : `http://localhost:9000`
    - `server-web` (Nginx) : `http://localhost:8000`

## Personnalisation

- Si vous avez besoin de personnaliser les configurations pour `pg_tileserv` ou `pg_featureserv`, vous pouvez décommenter les mappages de volumes respectifs et fournir vos fichiers de configuration.
- Pour le serveur Nginx dans `server-web`, vous pouvez placer votre contenu web à l'intérieur du répertoire `./app/` sur la machine hôte.