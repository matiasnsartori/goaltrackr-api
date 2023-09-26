SELECT 'CREATE DATABASE goaltrackrdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'goaltrackrdb')\gexec