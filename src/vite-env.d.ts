/// <reference types="vite/client" />

// (optional) make BASE_URL explicit if you like
interface ImportMetaEnv {
  readonly BASE_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
