CREATE DATABASE geo7630;
\c geo7630
CREATE EXTENSION postgis;
CREATE EXTENSION postgis_raster;
CREATE schema geo7630;

-----

CREATE OR REPLACE FUNCTION create_user_and_schema(codes_permanents TEXT[])
RETURNS VOID AS $$
DECLARE
    user_record TEXT;
BEGIN
    -- Boucle sur chaque code permanent
    FOREACH user_record IN ARRAY codes_permanents LOOP
        -- Créer l'utilisateur avec le code permanent comme nom d'utilisateur
        EXECUTE format('CREATE USER %I WITH PASSWORD %L', user_record, user_record);

        -- Créer un schéma avec le même nom que le code permanent, mais l'exécuter en tant qu'utilisateur superadmin
        EXECUTE format('CREATE SCHEMA IF NOT EXISTS %I AUTHORIZATION captain_oski', user_record);

        -- Créer une table dans le schéma avec les informations de l'utilisateur
        EXECUTE format('CREATE TABLE IF NOT EXISTS %I.%I (
            code_permanent VARCHAR(20) PRIMARY KEY,
            nom VARCHAR(255),
            prog INTEGER,
            courriel VARCHAR(255)
        )', user_record, 'user_info');

        -- Insérer des informations fictives pour chaque utilisateur dans sa propre table
        EXECUTE format('INSERT INTO %I.%I (code_permanent, nom, prog, courriel) 
                        VALUES (%L, %L, %L, %L)', 
                        user_record, 'user_info', 
                        user_record, 
                        'Nom ' || user_record, 
                        1800, 
                        user_record || '@courrier.uqam.ca');

        -- Donner des privilèges à l'utilisateur pour accéder et manipuler son schéma
        EXECUTE format('GRANT ALL PRIVILEGES ON SCHEMA %I TO %I', user_record, user_record);
        EXECUTE format('GRANT ALL PRIVILEGES ON TABLE %I.%I TO %I', user_record, 'user_info', user_record);

        -- Révoquer l'accès public pour limiter l'accès uniquement à l'utilisateur
        EXECUTE format('REVOKE ALL ON SCHEMA %I FROM PUBLIC', user_record);
        EXECUTE format('REVOKE ALL ON TABLE %I.%I FROM PUBLIC', user_record, 'user_info');
    END LOOP;
END;
$$ LANGUAGE plpgsql;



SELECT create_user_and_schema(ARRAY[
    'GONT13318905', 
    'MBAI89260004', 
    'MEIB19269006', 
    'NGUR02339009', 
    'RANL13299903', 
    'SIDM93330001', 
    'TARA15359904', 
    'UMBD28348904'
]);