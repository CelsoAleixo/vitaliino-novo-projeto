

# Plan: Deploy React Build (HTML/JS/CSS) to Locaweb

## Current Problem
The workflow currently uploads raw PHP files from `public_html/` to Locaweb. You want the **React site from Lovable** (the Vite build) deployed as static HTML/JS/CSS instead.

## Approach
Rewrite the GitHub Actions workflow to **build the React app** (`npm run build`) and upload the resulting `dist/` folder to Locaweb's `public_html/`. Add an `.htaccess` for SPA routing so all React Router paths work.

## Changes

### 1. Rewrite `.github/workflows/main.yml`
- Add Node.js setup + `npm ci` + `npm run build` steps
- Upload `dist/` contents (not `public_html/`) to `./public_html/` on FTP
- Trigger on `src/**`, `public/**`, `index.html`, `vite.config.ts`, `package.json` changes

### 2. Create `public/.htaccess` for SPA routing on Locaweb
This file will be included in the Vite build output automatically (files in `public/` are copied to `dist/`).

```text
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # If it's a real file or directory, serve it
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Otherwise, serve index.html (SPA fallback)
  RewriteRule ^ index.html [L]
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

### 3. Keep `public_html/` PHP files (no deletion)
They stay in the repo but are no longer deployed. The workflow ignores them.

## Technical Flow

```text
Before (broken):
  public_html/*.php  -->  FTP ./public_html/  -->  PHP site (incomplete)

After (correct):
  src/ + public/  -->  npm run build  -->  dist/  -->  FTP ./public_html/
  Locaweb serves index.html + JS/CSS bundles = exact Lovable React site
  .htaccess handles SPA routing for /atuacao, /escritorio, etc.
```

## Result
The site at rvitalinoadvogados.com.br will be identical to the Lovable preview — same React app, same routes, same assets. Every push to `main` triggers an automatic rebuild and deploy.

