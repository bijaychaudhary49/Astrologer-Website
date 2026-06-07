# Astrologer Website

Professional astrologer service website built with React, Vite, and Tailwind CSS.

## Overview

This repository contains a modern single-page application designed to showcase astrology services, products, and insights. It includes responsive navigation, service and product catalogs, detailed content pages, booking/order modals, and a theme switcher for dark/light mode.

## Key Features

- Responsive React SPA powered by Vite
- Client-side routing using `react-router-dom`
- Service, product, and article catalog pages
- Dedicated detail pages for services, products, and insights
- Booking and order modal workflows
- Theme toggle for dark and light mode
- WhatsApp contact button for fast communication
- Tailwind CSS for scalable and maintainable styling

## Technology Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router DOM 7
- React Icons
- ESLint

## Repository Structure

- `src/`
  - `components/` — reusable interface elements and widgets
  - `data/` — static page content for articles, products, and services
  - `pages/` — route-level screens including home, shop, services, insight, and details
  - `utils/` — helper utilities, theme context, and scrolling behavior
  - `App.jsx` — application router and top-level layout
  - `main.jsx` — application entry point

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the website.

## Production Build

Generate a production-ready bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Code Quality

Lint the project with ESLint:

```bash
npm run lint
```

## Customization

- Update static content in `src/data/`
- Modify presentation logic in `src/components/`
- Extend the routing and pages in `src/pages/`

## Notes

This project is configured as a private Vite application and is structured for maintainability, rapid iteration, and responsive design.
