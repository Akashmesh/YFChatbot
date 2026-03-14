# YF Chatbot

YF Chatbot is a static React + Vite chatbot for the SGBAU Youth Festival 2025. It opens with a predefined menu, accepts simple text inputs such as `hi`, `menu`, or `1` through `8`, and returns festival information, map links, downloadable documents, and feedback links.

## Project Overview

- Frontend-only chatbot with no backend or database
- Rule-based reply flow implemented in React
- Festival content stored in a JSON file for easy updates
- Marathi-first content with simple English triggers
- Animated chat interface built with Framer Motion

## Tech Stack

- React 18
- Vite 5
- Framer Motion
- React Icons

## Repository Structure

```text
YF-Chatbot/
|-- README.md
`-- yf-chatbot/
    |-- package.json
    |-- public/
    |   `-- sgbau.png
    `-- src/
        |-- App.jsx
        |-- style.css
        |-- components/
        |   |-- ChatWindow.jsx
        |   |-- InputBox.jsx
        |   |-- Message.jsx
        |   `-- MessageList.jsx
        `-- data/
            `-- messages.json
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

`bun.lock` is also present, so Bun can be used if preferred.

### Install and Run

From the repository root:

```bash
cd yf-chatbot
npm install
npm run dev
```

Open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

Run these inside `yf-chatbot/`:

- `npm run dev` starts the development server
- `npm run build` creates a production build in `dist/`
- `npm run preview` serves the production build locally

## How the Chatbot Works

- On first load, the app shows the main festival menu
- `hi`, `hello`, `hey`, and `menu` reopen the main menu
- Inputs `1` through `8` return predefined responses from `src/data/messages.json`
- Any unsupported input returns a fallback response

The app is intentionally simple: it does not call an API or generate dynamic responses.

## Customizing the Content

Most content updates can be done without touching the UI code.

### Update menu items and links

Edit `yf-chatbot/src/data/messages.json` to change:

- Welcome text
- Numbered options
- Map links
- Google Drive document links
- Feedback form URLs

### Update chatbot behavior

Edit `yf-chatbot/src/App.jsx` if you want to:

- Add more accepted keywords
- Change fallback behavior
- Support more than options `1` through `8`

If you add new numbered options, also update the input check in the app logic.

### Update branding and styling

- Replace `yf-chatbot/public/sgbau.png` to change the logo
- Edit `yf-chatbot/src/style.css` to change colors, layout, and chat styling

## Important Note

Bot messages are rendered as HTML so the JSON content can include formatting and links. Keep `src/data/messages.json` limited to trusted content only.

## App README

The app folder also contains a short README for local development inside `yf-chatbot/README.md`.

## Images

### SGBAU YF_CHATBOT 2025

<img src="./yf-chatbot/public/img1.png alt="SGBAU Logo" width="220" />
<img src="./yf-chatbot/public/img2.pngalt="SGBAU Logo" width="220" />

