# Deployment Guide

## Overview

This guide covers deploying the ResistWise application to production using Netlify, including environment setup, CI/CD configuration, and monitoring.

## Prerequisites
- Netlify account
- OpenAI API key
- Git repository with your code

## Deployment Steps

### 1. Connect Repository
- Login to Netlify
- Click "New site from Git"
- Choose your repository and branch

### 2. Configure Build Settings
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Functions directory:** `netlify/functions`

### 3. Set Environment Variables
- Go to Site Settings > Environment Variables
- Add `OPENAI_API_KEY` with your OpenAI API key

### 4. Deploy
- Push changes to your main branch
- Netlify will automatically build and deploy

### 5. Verify Deployment
- Check deploy logs for errors
- Test the live site and chatbot

## Local Development

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Start local dev server:
   ```bash
   netlify dev
   ```
3. Visit `http://localhost:8888`

## Troubleshooting

- **Function Not Found (404):** Check functions directory in `netlify.toml` and file location
- **API Key Error (502):** Ensure environment variable is set and correct
- **Build Failures:** Check Node.js version, dependencies, and build logs

## Security Best Practices
- Never commit API keys to Git
- Use environment variables for secrets
- Restrict CORS in production if needed

## Monitoring
- Use Netlify deploy logs for build and function errors
- Add Google Analytics for user tracking

---
For advanced deployment (Vercel, CI/CD, custom domains), see the full documentation in `/docs`. 