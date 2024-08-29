export const API_ENDPOINT = process.env.NODE_ENV === "production"
  ? process.env.API_ENDPOINT_PROD
  : process.env.API_ENDPOINT_DEV;