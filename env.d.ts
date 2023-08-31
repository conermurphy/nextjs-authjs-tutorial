declare namespace NodeJS {
  export interface ProcessEnv {
    GITHUB_APP_CLIENT_ID: string;
    GITHUB_APP_CLIENT_SECRET: string;
    NEXTAUTH_SECRET: string;
  }
}
