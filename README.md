# DraftlyAI – Chrome Extension (Manifest V3)

DraftlyAi is an AI-powered Chrome extension that helps you write better comments without overthinking. It automatically detects comment boxes, understands the surrounding context, and generates human-like comment drafts you can use or edit instantly.


---

## Features

- Popup-based Chrome extension UI
- Detects the last active comment box on a webpage
- Inserts text directly into focused comment inputs
- Works with both textarea and contenteditable elements
- Designed to work on platforms like blogs and social media sites(X,LinkedIn,Theards etc)
- Built with modern tooling (Vite, React, TypeScript)

---

## How It Works

- A content script runs on webpages and tracks the last focused comment box
- When the extension popup button is clicked, it sends a message to the content script
- The content script inserts text into the detected comment box
- The logic is designed to handle real-world editors that rely on user input events

---

## What Problem Does It Solve?

-Staring at a comment box and not knowing what to write

-Rewriting the same comment multiple times

-Skipping replies even when you want to engage

DraftlyAi removes this friction by giving you a solid starting draft in seconds.

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

---
## Privacy & Security

DraftlyAi does NOT store comments

No data is saved locally

Context is processed only for generating drafts

API keys are never exposed in the extension

---


## Common Errors & Fixes
❌ Extension Not Detecting Comment Box

Possible reasons:

>Site uses a custom editor (shadow DOM)

>Input loads dynamically after page load

Fix:

>Refresh the page

>Click inside the comment box once

>Reload the extension from chrome://extensions

❌ Nothing Happens on Click

Possible reasons:

>Content script not injected

>Script blocked by site CSP

Fix:

>Reload the tab

>Make sure the site is not chrome:// or edge://

>Check Console for errors

❌ Backend / API Error

Possible reasons:

>Backend not live yet

>Network error

>API rate limit

Fix:

>Wait for backend deployment update

>Check console logs

>Retry after some time

❌ Changes Not Reflecting

Fix:

>Go to chrome://extensions

>Click Reload on DraftlyAi

>Refresh the webpage

## Debugging Tips

Open DevTools → Console on the webpage

Check logs from content-script.js

Inspect injected DOM elements

Use console.log for tracing detection logic

---

## Planned Features

Change comment mood (funny, casual, professional)

Improve or rewrite user-written comments

Faster responses

Better context handling



