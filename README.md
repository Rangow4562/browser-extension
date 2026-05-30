<<<<<<< HEAD
# Ather Browser Extension
=======
# Browser Extension
>>>>>>> origin/main

A multi-agent AI-powered web automation Chrome/Firefox extension that collaborates to plan, navigate, and validate complex browser tasks.

---

## 📊 Key Features

- **Multi-agent System**: Specialized AI agents collaborate to accomplish complex web workflows.
- **Interactive Side Panel**: Intuitive chat interface with real-time status updates.
- **Task Automation**: Seamlessly automate repetitive web automation tasks across websites.
- **Follow-up Questions**: Ask contextual follow-up questions about completed tasks.
- **Conversation History**: Easily access and manage your AI agent interaction history.
- **Multiple LLM Support**: Connect your preferred LLM providers and assign different models to different agents.

---

## 🔧 Manually Install Latest Version

To get the most recent version with all the latest features:

1. **Download**
<<<<<<< HEAD
    * Download the latest release `.zip` file from the official repository release page.

2. **Install**:
    * Unzip the downloaded file.
    * Open `chrome://extensions/` in Chrome.
    * Enable **Developer mode** (top right toggle).
    * Click **Load unpacked** (top left button).
    * Select the unzipped folder.

3. **Configure Agent Models**
    * Click the **Ather** icon in your toolbar to open the sidebar.
    * Click the **Settings** icon (top right).
    * Add your LLM API keys.
    * Choose which model to use for different agents (Navigator, Planner, Validator).

4. **Upgrading**:
    * Download the latest release `.zip` file.
    * Unzip and replace your existing Ather files with the new ones.
    * Go to `chrome://extensions/` in Chrome and click the refresh icon on the Ather card.
=======

   * Download the latest release `.zip` file from the official repository release page.
2. **Install**:

   * Unzip the downloaded file.
   * Open `chrome://extensions/` in Chrome.
   * Enable **Developer mode** (top right toggle).
   * Click **Load unpacked** (top left button).
   * Select the unzipped folder.
3. **Configure Agent Models**

   * Click the **Ather** icon in your toolbar to open the sidebar.
   * Click the **Settings** icon (top right).
   * Add your LLM API keys.
   * Choose which model to use for different agents (Navigator, Planner, Validator).
4. **Upgrading**:

   * Download the latest release `.zip` file.
   * Unzip and replace your existing Ather files with the new ones.
   * Go to `chrome://extensions/` in Chrome and click the refresh icon on the Ather card.
>>>>>>> origin/main

---

## 🛠️ Build from Source

If you prefer to build the extension yourself, follow these steps:

1. **Prerequisites**:
<<<<<<< HEAD
   * [Node.js](https://nodejs.org/) (v22.12.0 or higher)
   * [pnpm](https://pnpm.io/installation) (v9.15.1 or higher)

2. **Clone the Repository**:
=======

   * [Node.js](https://nodejs.org/) (v22.12.0 or higher)
   * [pnpm](https://pnpm.io/installation) (v9.15.1 or higher)
2. **Clone the Repository**:

>>>>>>> origin/main
   ```bash
   git clone https://github.com/bemsystems/atherBrowserExtension.git
   cd atherBrowserExtension
   ```
<<<<<<< HEAD

3. **Install Dependencies**:
   ```bash
   pnpm install
   ```

4. **Build the Extension**:
   ```bash
   pnpm build
   ```

5. **Load the Extension**:
   * The built extension will be in the `dist` directory.
   * Follow the installation steps from the Manually Install section to load the extension (`dist` folder) into your browser.

6. **Development Mode** (optional):
   ```bash
   pnpm dev
   ```

7. **Clean & Build Troubleshooting**:
   If you run into build/dependency issues:
=======
3. **Install Dependencies**:

   ```bash
   pnpm install
   ```
4. **Build the Extension**:

   ```bash
   pnpm build
   ```
5. **Load the Extension**:

   * The built extension will be in the `dist` directory.
   * Follow the installation steps from the Manually Install section to load the extension (`dist` folder) into your browser.
6. **Development Mode** (optional):

   ```bash
   pnpm dev
   ```
7. **Clean & Build Troubleshooting**:
   If you run into build/dependency issues:

>>>>>>> origin/main
   ```bash
   pnpm clean:install
   pnpm build
   ```

---

## 🤖 Choosing Your Models

Ather allows you to configure different LLM models for each agent to balance performance and cost. Here are recommended configurations:

### Better Performance
<<<<<<< HEAD
=======

>>>>>>> origin/main
- **Planner & Validator**: GPT-4 or Claude 3.5 Sonnet
  - Better reasoning and planning capabilities.
  - More reliable task validation.
- **Navigator**: GPT-4o-mini / Claude 3.5 Haiku
  - Efficient for web navigation tasks.
  - Good balance of performance and cost.

### Cost-Effective Configuration
<<<<<<< HEAD
=======

>>>>>>> origin/main
- **Planner & Validator**: GPT-4o
  - Reasonable performance at lower cost.
  - May require more iterations for complex tasks.
- **Navigator**: GPT-4o-mini
  - Lightweight and cost-efficient.
  - Suitable for basic navigation tasks.

### Local Models
<<<<<<< HEAD
=======

>>>>>>> origin/main
- **Setup Options**:
  - Use Ollama or other custom Azure OpenAI-compatible providers to run models locally.
  - Zero API costs and complete privacy with no data leaving your machine.

> [!NOTE]
> The cost-effective configuration may produce less stable outputs and require more iterations for complex tasks.

---

## 👏 Acknowledgments

Ather Browser Extension builds on top of or references other awesome open-source projects:

- [Browser Use](https://github.com/browser-use/browser-use)
- [Puppeteer](https://github.com/EmergenceAI/Agent-E)
- [Chrome Extension Boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)
- [LangChain](https://github.com/langchain-ai/langchainjs)
