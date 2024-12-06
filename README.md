# Real-Time Markdown Editor: Setup Guide

Follow these steps to run the Markdown editor locally:

## Prerequisites
- Install [Node.js](https://nodejs.org/) (v14+), npm, and [Git](https://git-scm.com/).

## Folder Structure
- **Frontend**: Vite + React (root folder)
- **Backend**: Node.js for Markdown conversion (in `backend/`)

## Setup Steps

### Backend
1. Open the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
   Backend runs at `http://localhost:3001`.

### Frontend
1. Go back to the root folder:
   ```bash
   cd ..
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```
   Frontend runs at `http://localhost:5173`.

### Connect Frontend to Backend
1. Update `vite.config.js`:
   ```javascript
   export default {
     server: {
       proxy: {
         '/convert-markdown': 'http://localhost:3001',
       },
     },
   };
   ```

## Testing
1. Open `http://localhost:5173` in your browser.
2. Type Markdown in the editor and see the HTML preview update live.

---

Enjoy your Real-Time Markdown Editor!

