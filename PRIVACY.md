# Privacy Policy

**Effective Date:** May 30, 2026

At Ather, we are committed to protecting your privacy. This Privacy Policy explains how the **Ather Browser Extension** ("Extension") handles your data.

## 1. Summary of Core Principles
- **Local Control**: Your credentials, settings, API keys, and conversational history are stored locally on your device. We do not run proprietary tracking or analytics servers.
- **No Third-Party Selling**: We never sell or rent your personal data or browsing information.
- **Direct LLM Communication**: The Extension communicates directly from your browser to your self-configured Large Language Model (LLM) API providers (e.g., OpenAI, Anthropic, or local endpoints like Ollama).

---

## 2. Information We Collect and Process

### A. API Keys and Credentials
- **What**: To use the Extension, you must provide your own API keys for LLM providers.
- **Where**: These keys are stored locally in your browser's secure extension storage. They are never sent to BEMSystems or any other third party, except as part of authenticated headers in direct requests to your configured LLM endpoints.

### B. Browsing and Interaction Data
- **What**: When you instruct the Extension to automate browser tasks, it reads the active tab's HTML structure, takes screenshots of the page, and executes standard actions (clicks, keypresses, forms filling).
- **Where**: This data is parsed in memory on your local machine to formulate planning prompts. It is only transmitted to your configured LLM endpoint during active task runs. No history of your automated workflows is sent to us.

### C. Prompt and Conversational History
- **What**: Chat history and system instructions.
- **Where**: Stored locally on your machine and sent directly to your chosen LLM endpoint to generate agent responses.

---

## 3. Third-Party Data Processing
Since the Extension connects directly to third-party LLM APIs, any data transmitted (prompts, page content, screenshots) is subject to the terms and privacy policy of your configured LLM provider:
- **OpenAI**: [OpenAI Privacy Policy](https://openai.com/policies/privacy-policy)
- **Anthropic**: [Anthropic Privacy Policy](https://www.anthropic.com/privacy)
- **Ollama / Local Endpoints**: Data does not leave your local network/machine.

Please review your LLM provider's data retention policies, especially concerning API endpoints (which typically do not use customer data for model training).

---

## 4. Permissions Required and Why
To function as a web automation assistant, the Extension requires specific browser permissions:
- `activeTab` / `tabs`: To read web page structures and interact with elements on your behalf.
- `storage`: To save your configured API keys and preference settings locally.
- `sidePanel`: To display the agent interface inside your browser side panel.

---

## 5. Your Rights and Data Deletion
Since all data is stored locally, you have full control over it:
- You can clear your API keys, preferences, and session history at any time by opening the Extension's **Settings** panel and clicking "Clear Settings".
- Uninstalling the Extension will automatically purge all locally stored configurations and data.

---

## 6. Changes to This Policy
We may update this Privacy Policy from time to time. Any changes will be reflected in this file and updated with a new "Effective Date".

---

## 7. Contact Us
If you have any questions or feedback about our privacy practices, please contact us at:
- **Email**: `privacy@bemsys.com`
- **Website**: [https://bemsys.com/](https://bemsys.com/)
