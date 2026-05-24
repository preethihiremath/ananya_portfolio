# Ananya C G — Portfolio

Personal portfolio site (React + Vite + Tailwind).

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Updating content (no GitHub required)

All text, experience, skills, and projects live in **one file**:

`src/data/portfolioData.ts`

Edit that file in any text editor (Notepad, VS Code, Cursor). Change strings inside the quotes—do not remove commas or curly braces unless you know what you are doing.

### Publish changes without GitHub

1. After saving `portfolioData.ts`, run:
   ```bash
   npm run build
   ```
2. This creates a `dist` folder.
3. Go to [Netlify Drop](https://app.netlify.com/drop) and drag the **entire `dist` folder** onto the page.
4. Netlify gives you a live link. Use the same Netlify account each time to replace the old site with a new drag-and-drop.

**Easier long-term:** Ask a technical friend to deploy once to Netlify or Vercel using *their* GitHub account. You only send them updated text; they edit `portfolioData.ts` and the site updates automatically—you never touch GitHub.

### What to edit for common updates

| Change | Where in `portfolioData.ts` |
|--------|-----------------------------|
| Name, headline, bio | `hero`, `about` |
| Jobs & bullets | `experience.positions` |
| New project + Excel link | `projects.items` |
| Skills | `skills.categories` |
| Email, phone, LinkedIn | `contact.channels` |

## Build for production

```bash
npm run build
```

Output is in `dist/` — host that folder on Netlify, Vercel, Cloudflare Pages, or GitHub Pages.
