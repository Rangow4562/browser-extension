# Security Policy

## Supported Versions

Currently, security updates and patches are provided for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1.x | :x:                |

## Reporting a Vulnerability

We take the security of this project seriously. If you find a security vulnerability, please report it responsibly:

1. **Do not open a public issue** on GitHub/GitLab.
2. Email your findings to the maintainer's security email address (e.g., `security@bemsys.com` or your organization's security contact).
3. Provide a detailed description of the vulnerability, including:
   - Steps to reproduce the issue.
   - Potential impact.
   - Any suggested remediations or patches.

We will acknowledge receipt of your report within 48 hours and provide a timeline for addressing the issue.

## Security Best Practices

To keep the extension secure:
- **API Keys Management**: Never expose or hardcode your LLM API keys inside the code. Keys should only be configured via the secure Settings UI panel, which stores them locally inside the browser's extension storage.
- **Dependency Auditing**: Keep dependencies updated by running `pnpm update` regularly to pull down security patches.
