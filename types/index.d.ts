declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'develop' | 'prod';
    DB_USER: string;
    DB_PORT: number;
    DB_HOST: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    PORT: number;
  }
}
