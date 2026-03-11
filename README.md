# VoltSafe Ltd - Official Website

A high-performance, responsive web application for **VoltSafe Ltd**, an electrical services provider based in Galway, Ireland. This project has been optimised for speed, professional branding, and zero-maintenance reliability.

## Tech Stack

### Frontend
- **Framework:** React (built with **Vite** for lightning-fast bundling).
- **Styling:** **Tailwind CSS**
- **Icons:** Lucide-React / Heroicons.

### "Serverless" Form Logic
- **Provider:** [Web3Forms](https://web3forms.com/)
- **Workflow:** To minimise server maintenance, the Node.js backend has been replaced with a direct-to-email integration.
- **Functionality:** The `QuoteForm` validates user data locally before sending a secure POST request to Web3Forms, which instantly delivers lead details to the business inbox.

---

## Hosting & Deployment

### Web Hosting
- **Platform:** [Vercel](https://vercel.com)
- **CI/CD:** Automatic deployments triggered on every `git push` to the `main` branch.
- **Configuration:** Root directory set to `/client`.
