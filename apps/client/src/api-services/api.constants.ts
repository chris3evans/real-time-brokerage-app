export const LOCAL_BACKEND = "http://localhost:3001";
export const PROD_BACKEND = "";

export const INTERNAL_API_BASE_URL = import.meta.env.PROD
  ? PROD_BACKEND
  : LOCAL_BACKEND;
