# Harshal Bachhav – Portfolio

A responsive, static portfolio (HTML, CSS, JavaScript). No build step, no dependencies.

```
portfolio/
├── index.html
├── css/style.css
├── js/main.js
├── assets/
│   ├── profile.jpg
│   └── Harshal_Resume.pdf   <- the Download Resume button points here
└── README.md
```

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Deploy to GitHub Pages
1. Create a new repository on GitHub (for a root URL, name it `<your-username>.github.io`).
2. Upload the **contents** of this folder so `index.html` sits at the repository root. With Git:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. In the repository go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose branch `main` and folder `/ (root)`, then **Save**.
5. Wait a minute or two. Your site appears at `https://<your-username>.github.io/` (or `.../<repo>/` for other repository names).

## Edit your details
- **GitHub link**: search `github.com/` in `index.html` (2 places) and replace with your profile URL.
- **Resume**: replace `assets/Harshal_Resume.pdf` with a new file of the same name.
- **Photo**: replace `assets/profile.jpg` (square image works best).
- **Content**: all text lives in `index.html`; colors are CSS variables at the top of `css/style.css`.
- The contact form opens the visitor's email app via `mailto:`, so it needs no server.
