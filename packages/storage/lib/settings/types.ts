// Agent name, used to identify the agent in the settings
export enum AgentNameEnum {
  Planner = 'planner',
  Navigator = 'navigator',
  Validator = 'validator',
}

// Provider type - only Azure OpenAI is supported for ather
export enum ProviderTypeEnum {
  AzureOpenAI = 'azure_openai'
}

// Default supported models for Azure OpenAI
export const llmProviderModelNames = {
  [ProviderTypeEnum.AzureOpenAI]: ['gpt-4o'] // Azure OpenAI deployment name
};

// Default parameters for Azure OpenAI
export const llmProviderParameters = {
  [ProviderTypeEnum.AzureOpenAI]: {
    [AgentNameEnum.Planner]: {
      temperature: 0.01,
      topP: 0.001,
    },
    [AgentNameEnum.Navigator]: {
      temperature: 0,
      topP: 0.001,
    },
    [AgentNameEnum.Validator]: {
      temperature: 0,
      topP: 0.001,
    },
  }
};
