# DraftlyAI – Chrome Extension (Manifest V3)

DraftlyAI is a Chrome extension built using Manifest V3, React, and TypeScript.  
It helps users draft comments directly inside comment boxes on websites by detecting the active comment input and inserting generated text automatically.

This project focuses on learning and implementing real-world Chrome extension fundamentals such as content scripts, popup UI, and DOM interaction.

---

## Features

- Popup-based Chrome extension UI
- Detects the last active comment box on a webpage
- Inserts text directly into focused comment inputs
- Works with both textarea and contenteditable elements
- Designed to work on platforms like blogs and social media sites
- Built with modern tooling (Vite, React, TypeScript)

---

## How It Works

- A content script runs on webpages and tracks the last focused comment box
- When the extension popup button is clicked, it sends a message to the content script
- The content script inserts text into the detected comment box
- The logic is designed to handle real-world editors that rely on user input events

---

## Tech Stack

- Chrome Extension (Manifest V3)
- React
- TypeScript
- Vite
- Tailwind CSS
- JavaScript DOM APIs

---

```bash
## Project Structure
DraftlyAI-extension/
├── extension/
│ ├── manifest.json
│ ├── popup/
│ │ ├── index.html
│ │ └── assets/
│ └── content/
│ └── index.js
├── src/
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── vite.config.ts
├── package.json
└── .gitignore

```

---

## Development Setup

Install dependencies:

```bash
npm install
npm run build

```

Load the extension in Chrome:

1.Open chrome://extensions

2.Enable Developer mode

3.Click Load unpacked

4.Select the extension folder




Limitations

Content scripts do not run on Chrome internal pages

The extension requires the user to click inside a comment box before using it

Text generation is currently static (AI integration planned)
