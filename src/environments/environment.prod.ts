import { KeycloakConfig } from "keycloak-js";
const keycloakConfig:KeycloakConfig={
  url: 'http://localhost:8080/auth/',
  realm: 'google',
  clientId: 'Spotify'
};
export const environment = {
  production: true,
  keycloakConfig
};
