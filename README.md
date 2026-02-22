# License Data Viewer

A lightweight web application that reads license data from an Excel spreadsheet and displays it in a searchable, sortable, paginated table — built with **TypeScript** and **Vite**.

---

## Features

- 📊 **Excel to JSON conversion** — converts `.xlsx` data into JSON with a single command
- 🔍 **Search** — filter records by a specific column or across all columns
- ↕️ **Sort** — sort by Name, Expiration Date, or License No (ascending/descending)
- 📄 **Pagination** — displays 50 rows per page with Previous/Next navigation
- ⚡ **Fast dev server** — powered by Vite with hot-reload

---

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- npm (comes bundled with Node.js)

You can check your versions by running:

```bash
node -v
npm -v
```

---

## Getting Started (Local Development)

### 1. Install dependencies

Open a terminal in the project root directory and run:

```bash
npm install
```

This installs all required packages (`xlsx`, `vite`, `typescript`).

### 2. Place your Excel file

Make sure your Excel data file is named **`data.xlsx`** and is located in the **project root directory** (same level as `package.json`).

### 3. Convert Excel to JSON

Run the conversion script to transform the Excel data into a JSON file:

```bash
npm run convert
```

This reads `data.xlsx`, converts the first sheet to JSON, and saves it as `public/data.json`.

> **Note:** You need to re-run this command whenever you update `data.xlsx`.

### 4. Start the development server

```bash
npm run dev
```

The app will start at **http://localhost:3000** and automatically open in your browser.

---

## Deploying to GitHub Pages

Follow these steps to host your app on GitHub Pages for free:

### 1. Create a GitHub repository

Go to [github.com/new](https://github.com/new) and create a new repository (e.g., `license-data-viewer`).

### 2. Update the base path

Open `vite.config.ts` and change the `base` option to match your repository name:

```ts
base: '/your-repo-name/',
```

For example, if your repo is called `license-data-viewer`:

```ts
base: '/license-data-viewer/',
```

### 3. Convert and build

Make sure the JSON data is generated and then build the production bundle:

```bash
npm run convert
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### 4. Push your code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 5. Deploy the `dist/` folder

You can deploy using the `gh-pages` npm package:

```bash
npx gh-pages -d dist
```

This creates a `gh-pages` branch and pushes the contents of `dist/` to it.

### 6. Enable GitHub Pages

- Go to your repository on GitHub → **Settings** → **Pages**
- Under **Build and deployment > Source**, select **Deploy from a branch**
- Under **Branch**, select `gh-pages` and `/ (root)`
- Click **Save**

### 7. Visit your site

After a minute or two, your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

> **Tip:** Whenever you update your data or code, repeat steps 3 and 5 to redeploy.

---

## Project Structure

```
license-data-viewer/
├── convert.js              # Script to convert Excel (.xlsx) → JSON
├── data.xlsx               # Your source Excel data file
├── index.html              # Main HTML page (entry point for Vite)
├── package.json            # Project config and scripts
├── vite.config.ts          # Vite configuration (dev server, build, base path)
├── public/
│   └── data.json           # Generated JSON data (created by `npm run convert`)
└── src/
    ├── main.ts             # Application logic (fetch, search, sort, pagination)
    └── style.css           # All styles for the application
```

---

## Available Scripts

| Command            | Description                                      |
|--------------------|--------------------------------------------------|
| `npm run dev`      | Start the Vite development server (port 3000)    |
| `npm run build`    | Compile TypeScript and build for production      |
| `npm run preview`  | Preview the production build locally             |
| `npm run convert`  | Convert `data.xlsx` → `public/data.json`         |

---

## Troubleshooting

| Problem                          | Solution                                                            |
|----------------------------------|---------------------------------------------------------------------|
| Table shows no data              | Make sure you ran `npm run convert` first                           |
| `data.xlsx` not found error      | Ensure the file is in the project root, not inside `src/`           |
| Port 3000 already in use         | Change the port in `vite.config.ts` under `server.port`             |
| Styles not loading               | Make sure `index.html` links to `/src/style.css`                    |
| GitHub Pages shows blank page    | Check that `base` in `vite.config.ts` matches your repo name       |
| 404 on GitHub Pages              | Make sure you deployed with `npx gh-pages -d dist`                  |
