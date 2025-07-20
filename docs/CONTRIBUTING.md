# Contributing to ResistWise

Thank you for your interest in contributing to ResistWise! This document provides guidelines and information for contributors.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)

## Code of Conduct

We pledge to make participation in our community a harassment-free experience for everyone. Please be respectful and inclusive.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Fork and Clone
1. Fork the repository
2. Clone your fork
   ```bash
   git clone https://github.com/yourusername/resistwise_landing.git
   cd resistwise_landing
   ```
3. Add upstream remote
   ```bash
   git remote add upstream https://github.com/original-owner/resistwise_landing.git
   ```

## Development Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Set up environment variables
   ```bash
   cp .env.example .env
   # Edit .env with your OpenAI API key
   ```
3. Start development server
   ```bash
   npm run dev
   ```

## Coding Standards
- Use React functional components
- Use PascalCase for components, camelCase for variables
- Write clear, descriptive commit messages
- Use ESLint for code quality

## Testing
- Write unit and integration tests for new features
- Use Jest and React Testing Library
- Run tests with `npm test`

## Pull Request Process
1. Update your fork
2. Create a feature branch
3. Make your changes and write tests
4. Run `npm run lint` and `npm test`
5. Push your branch and open a Pull Request
6. Address review comments and update your PR

## Reporting Bugs
- Use GitHub Issues
- Provide steps to reproduce, expected and actual behavior

## Feature Requests
- Use GitHub Issues
- Describe the problem and your proposed solution

---
Thank you for contributing to ResistWise! 🚀 