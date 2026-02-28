import type { ClientConfig } from './clients/ditanna-cairo';

// Import client configs
import { clientConfig as ditannoCairoConfig } from './clients/ditanna-cairo';
import { clientConfig as nuzzoliZacchinoConfig } from './clients/nuzzoli-zacchino';

// Map of available clients
const clients = {
  'ditanna-cairo': ditannoCairoConfig,
  'nuzzoli-zacchino': nuzzoliZacchinoConfig,
} as const;

export type ClientId = keyof typeof clients;

/**
 * Get the active client configuration based on environment variable
 * Default: ditanna-cairo
 */
export function getClientConfig(): ClientConfig {
  const clientId = (process.env.NEXT_PUBLIC_CLIENT_ID || 'ditanna-cairo') as ClientId;
  
  if (!clients[clientId]) {
    console.warn(`Client "${clientId}" not found, falling back to danese-mazzotta`);
    return clients['ditanna-cairo'];
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
