import type { ClientConfig } from './clients/mario-giugno';

// Import client configs
import { clientConfig as marioGiugnoConfig } from './clients/mario-giugno';
import { clientConfig as nuzzoliZacchinoConfig } from './clients/nuzzoli-zacchino';

// Map of available clients
const clients = {
  'mario-giugno': marioGiugnoConfig,
  'nuzzoli-zacchino': nuzzoliZacchinoConfig,
} as const;

export type ClientId = keyof typeof clients;

/**
 * Get the active client configuration based on environment variable
 * Default: mario-giugno
 */
export function getClientConfig(): ClientConfig {
  const clientId = (process.env.NEXT_PUBLIC_CLIENT_ID || 'mario-giugno') as ClientId;
  
  if (!clients[clientId]) {
    console.warn(`Client "${clientId}" not found, falling back to mario-giugno`);
    return clients['mario-giugno'];
  }
  
  return clients[clientId];
}

// Export the active config
export const config = getClientConfig();

// Export helper functions
export function getStudioInfo() {
  return config.studio;
}

export function getContatti() {
  return config.contatti;
}

export function getOrari() {
  return config.orari;
}

export function getHeroData() {
  return config.hero;
}

export function getStats() {
  return config.stats;
}

export function getSeo() {
  return config.seo;
}

export function getSocial() {
  return config.social;
}

export function getImages() {
  return config.images;
}

export function getBranding() {
  return config.branding;
}

// Export all for convenience
export default config;
