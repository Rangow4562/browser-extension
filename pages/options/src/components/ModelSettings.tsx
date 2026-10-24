import { useEffect, useState } from 'react';
import {
  llmProviderStore,
  agentModelStore,
  ProviderTypeEnum,
} from '@extension/storage';

interface ModelSettingsProps {
  isDarkMode?: boolean;
}

export const ModelSettings = ({ isDarkMode = false }: ModelSettingsProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize providers and agent models on mount
  useEffect(() => {
    const initializeProviders = async () => {
      try {
        // Get providers with default configuration
        await llmProviderStore.getAllProviders();

        // Get agent models with default configuration
        await agentModelStore.getAllAgentModels();

        // Set initialization status
        setIsInitialized(true);
      } catch (error) {
        console.error('Error initializing providers and models:', error);
      }
    };

    initializeProviders();
  }, []);

  return (
    <section className="space-y-8 max-w-4xl mx-auto">
      {/* Header with logo and title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            ather AI Configuration
          </h1>
          <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Advanced AI capabilities powered by Azure OpenAI
          </p>
        </div>
        <div className="flex items-center">
          <div className={`flex items-center ${isInitialized ? 'text-green-500' : 'text-amber-500'}`}>
            <div className="relative mr-2">
              <div className={`w-3 h-3 rounded-full ${isInitialized ? 'bg-green-500' : 'bg-amber-500'}`}></div>
              <div className={`absolute top-0 left-0 w-3 h-3 rounded-full ${isInitialized ? 'bg-green-500' : 'bg-amber-500'} animate-ping opacity-75`}></div>
            </div>
            <span className="text-sm font-medium">{isInitialized ? 'Connected' : 'Connecting...'}</span>
          </div>
        </div>
      </div>

      {/* Main configuration card */}
      <div
        className={`rounded-xl border ${isDarkMode ? 'border-slate-700 bg-slate-800/70' : 'border-blue-100 bg-white'} p-6 shadow-lg transition-all duration-200 hover:shadow-xl`}>
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} mr-3`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Azure OpenAI Integration
          </h2>
        </div>

        <div className="space-y-6">
          {/* Configuration details */}
          <div className={`rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'} p-5 border ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
            <div className="flex items-center mb-3">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} mr-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Configuration Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
                <p className={`text-xs uppercase font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Provider</p>
                <p className={`mt-1 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Azure OpenAI</p>
              </div>

              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
                <p className={`text-xs uppercase font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Model</p>
                <p className={`mt-1 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>GPT-4o</p>
              </div>

              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
                <p className={`text-xs uppercase font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Resource Name</p>
                <p className={`mt-1 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>oai-ather-dev</p>
              </div>

              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
                <p className={`text-xs uppercase font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Deployment Name</p>
                <p className={`mt-1 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>gpt-4o</p>
              </div>

              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border md:col-span-2`}>
                <p className={`text-xs uppercase font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>API Version</p>
                <p className={`mt-1 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>2025-01-01-preview</p>
              </div>
            </div>
          </div>

          {/* Information note */}
          <div className={`flex p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 text-blue-300' : 'bg-blue-50 text-blue-700'} border ${isDarkMode ? 'border-blue-900/30' : 'border-blue-200'}`}>
            <div className="flex-shrink-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">These settings are hardcoded in the application and cannot be changed through the UI.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Status card */}
      <div className={`rounded-xl border ${isDarkMode ? 'border-slate-700 bg-slate-800/70' : 'border-blue-100 bg-white'} p-6 shadow-lg`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'} mr-3`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              System Status
            </h2>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${isInitialized ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
            {isInitialized ? 'Ready' : 'Initializing'}
          </span>
        </div>

        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          ather AI is {isInitialized ? 'ready to use' : 'initializing'}. The system is configured to use Azure OpenAI's GPT-4o model for optimal performance and accuracy.
        </p>
      </div>
    </section>
  );
};
