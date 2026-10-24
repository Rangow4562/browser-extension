import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';
import { type AgentNameEnum, llmProviderModelNames, llmProviderParameters, ProviderTypeEnum } from './types';

// Interface for a single provider configuration
export interface ProviderConfig {
  name?: string; // Display name in the options
  type?: ProviderTypeEnum; // Help to decide which LangChain ChatModel package to use
  apiKey: string; // Must be provided, but may be empty for local models
  baseUrl?: string; // Optional base URL if provided
  modelNames?: string[]; // Chosen model names, if not provided use hardcoded names from llmProviderModelNames
  createdAt?: number; // Timestamp in milliseconds when the provider was created
  // Azure OpenAI specific fields
  azureOpenAIApiInstanceName?: string; // Azure OpenAI API instance name
  azureOpenAIApiDeploymentName?: string; // Azure OpenAI API deployment name
  azureOpenAIApiVersion?: string; // Azure OpenAI API version
}

// Interface for storing multiple LLM provider configurations
// The key is the provider id, which is the same as the provider type for built-in providers, but is custom for custom providers
export interface LLMKeyRecord {
  providers: Record<string, ProviderConfig>;
}

export type LLMProviderStorage = BaseStorage<LLMKeyRecord> & {
  setProvider: (providerId: string, config: ProviderConfig) => Promise<void>;
  getProvider: (providerId: string) => Promise<ProviderConfig | undefined>;
  removeProvider: (providerId: string) => Promise<void>;
  hasProvider: (providerId: string) => Promise<boolean>;
  getAllProviders: () => Promise<Record<string, ProviderConfig>>;
};

// Get default Azure OpenAI configuration
const defaultAzureConfig = {
  apiKey: '',
  name: 'ather AI',
  type: ProviderTypeEnum.AzureOpenAI,
  modelNames: [...(llmProviderModelNames[ProviderTypeEnum.AzureOpenAI] || [])],
  azureOpenAIApiInstanceName: 'oai-ather-dev',
  azureOpenAIApiDeploymentName: 'gpt-4o',
  azureOpenAIApiVersion: '2025-01-01-preview',
  createdAt: Date.now(),
};

// Storage for LLM provider configurations
// use "llm-api-keys" as the key for the storage, for backward compatibility
// Initialize with the default Azure OpenAI configuration
const storage = createStorage<LLMKeyRecord>(
  'llm-api-keys',
  { providers: { [ProviderTypeEnum.AzureOpenAI]: defaultAzureConfig } },
  {
    storageEnum: StorageEnum.Local,
    liveUpdate: true,
  },
);

// Helper function to determine provider type from provider name
export function getProviderTypeByProviderId(_providerId: string): ProviderTypeEnum {
  // Only Azure OpenAI is supported
  return ProviderTypeEnum.AzureOpenAI;
}

// Helper function to get display name from provider id
export function getDefaultDisplayNameFromProviderId(_providerId: string): string {
  // Only Azure OpenAI is supported
  return 'ather AI';
}

// Get default configuration for Azure OpenAI
export function getDefaultProviderConfig(_providerId: string): ProviderConfig {
  // Always return the hardcoded Azure OpenAI configuration
  return defaultAzureConfig;
}

export function getDefaultAgentModelParams(providerId: string, agentName: AgentNameEnum): Record<string, number> {
  const newParameters = llmProviderParameters[providerId as keyof typeof llmProviderParameters]?.[agentName] || {
    temperature: 0.1,
    topP: 0.1,
  };
  return newParameters;
}

// Helper function to ensure backward compatibility for provider configs
function ensureBackwardCompatibility(providerId: string, config: ProviderConfig): ProviderConfig {
  const updatedConfig = { ...config };
  if (!updatedConfig.name) {
    updatedConfig.name = getDefaultDisplayNameFromProviderId(providerId);
  }
  if (!updatedConfig.type) {
    updatedConfig.type = getProviderTypeByProviderId(providerId);
  }
  if (!updatedConfig.modelNames) {
    updatedConfig.modelNames = llmProviderModelNames[providerId as keyof typeof llmProviderModelNames] || [];
  }
  if (!updatedConfig.createdAt) {
    // if createdAt is not set, set it to "03/04/2025" for backward compatibility
    updatedConfig.createdAt = new Date('03/04/2025').getTime();
  }
  return updatedConfig;
}

export const llmProviderStore: LLMProviderStorage = {
  ...storage,
  async setProvider(providerId: string, config: ProviderConfig) {
    if (!providerId) {
      throw new Error('Provider id cannot be empty');
    }

    if (config.apiKey === undefined) {
      throw new Error('API key must be provided (can be empty for local models)');
    }

    if (!config.modelNames) {
      throw new Error('Model names must be provided');
    }

    // Ensure backward compatibility by filling in missing fields
    const completeConfig: ProviderConfig = {
      ...config,
      name: config.name || getDefaultDisplayNameFromProviderId(providerId),
      type: config.type || getProviderTypeByProviderId(providerId),
      modelNames: config.modelNames,
      createdAt: config.createdAt || Date.now(),
    };

    const current = (await storage.get()) || { providers: {} };
    await storage.set({
      providers: {
        ...current.providers,
        [providerId]: completeConfig,
      },
    });
  },
  async getProvider(providerId: string) {
    const data = (await storage.get()) || { providers: {} };
    const config = data.providers[providerId];
    return config ? ensureBackwardCompatibility(providerId, config) : undefined;
  },
  async removeProvider(providerId: string) {
    const current = (await storage.get()) || { providers: {} };
    const newProviders = { ...current.providers };
    delete newProviders[providerId];
    await storage.set({ providers: newProviders });
  },
  async hasProvider(providerId: string) {
    const data = (await storage.get()) || { providers: {} };
    return providerId in data.providers;
  },

  async getAllProviders() {
    const data = await storage.get();
    let providers = { ...data.providers };

    // If no providers exist, add the default Azure OpenAI provider
    if (Object.keys(providers).length === 0) {
      providers = { [ProviderTypeEnum.AzureOpenAI]: defaultAzureConfig };
      // Save the default provider to storage
      await storage.set({ providers });
    }

    // Add backward compatibility for all providers
    for (const [providerId, config] of Object.entries(providers)) {
      providers[providerId] = ensureBackwardCompatibility(providerId, config);
    }

    return providers;
  },
};
