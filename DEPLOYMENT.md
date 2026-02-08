# Deploy QuantumBridge Innovations to AWS (Free)

Use **AWS Amplify Hosting** for free-tier hosting and a shareable link. You can add your own domain later.

---

## Why Amplify?

- **Free tier:** 1,000 build minutes/month, 15 GB served/month (enough for a small site)
- **Shareable link:** e.g. `https://main.xxxxx.amplifyapp.com`
- **Next.js support:** SSR, API routes (e.g. contact form), `next/image`
- **Custom domain later:** Add your domain in Amplify with SSL

---

## Option A: Deploy from GitHub (recommended)

### 1. Put your code on GitHub

If the project is not in Git yet:

```bash
cd "/Users/narender/Desktop/Talent Arabia/web"
git init
git add .
git commit -m "Initial commit"
```

Create a new repo on [GitHub](https://github.com/new) (e.g. `quantumbridge-website`). Then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/quantumbridge-website.git
git branch -M main
git push -u origin main
```

**If your repo root is the parent folder** (e.g. "Talent Arabia" with a `web` folder inside):

- Push the whole folder and in Amplify you’ll set the **app root** to `web` (see step 3).

**If you want only the app in the repo:**

- Create the repo and push only the contents of the `web` folder (so the repo root is the Next.js app). Then you don’t need to set an app root in Amplify.

### 2. Open AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/).
2. Sign in (create an AWS account if needed – free tier does not require a credit card for Amplify’s free tier in many regions, but check [AWS Free Tier](https://aws.amazon.com/free/)).
3. Click **“New app”** → **“Host web app”**.

### 3. Connect the repo

1. Choose **GitHub** (or GitLab/Bitbucket).
2. Authorize AWS to access your GitHub if asked.
3. Select the **repository** and **branch** (e.g. `main`).
4. If your app is in a subfolder (e.g. `web`), set **“Monorepo” / “Root directory”** to `web`. If the repo root is the Next.js app, leave it blank.
5. Amplify will detect **Next.js** and set the build. You can leave the default build settings (they run `npm ci` and `npm run build`). The `amplify.yml` in the repo is used if present.
6. Click **Next**.

### 4. Environment variables (for contact form)

Add these so the contact form works in production:

- **Key:** `GMAIL_USER`  
  **Value:** your Gmail (e.g. `narenderbeniwal1234@gmail.com`)
- **Key:** `GMAIL_APP_PASSWORD`  
  **Value:** your Gmail App Password (same as in `.env.local`)

Click **Next**, then **Save and deploy**.

### 5. Get your link

- Wait for the build to finish (usually a few minutes).
- Your site will be at: **`https://main.xxxxx.amplifyapp.com`** (or the branch name you use). You can share this link.

---

## Option B: Deploy without Git (manual upload)

1. Build locally:

   ```bash
   cd "/Users/narender/Desktop/Talent Arabia/web"
   npm ci
   npm run build
   ```

2. In [Amplify Console](https://console.aws.amazon.com/amplify/), choose **“New app”** → **“Deploy without Git”**.
3. Upload the built app (Amplify will ask for a zip; check Amplify docs for “Deploy without Git” for the exact steps and what to zip – usually the whole app including `.next` and `node_modules` or the structure they require).

This is more manual and not ideal for updates; prefer Option A when you can.

---

## Adding your own domain later

1. In Amplify Console, open your app → **Hosting** → **Domain management**.
2. Click **Add domain** and enter your domain (e.g. `www.yourdomain.com`).
3. Follow the steps to verify the domain and update DNS (Amplify will show the CNAME or A record to add at your registrar).
4. Amplify will issue an SSL certificate (HTTPS) for the domain.

Your existing Amplify URL will keep working; the custom domain will point to the same app.

---

## Summary

| Step | Action |
|------|--------|
| 1 | Put the `web` app in a GitHub repo (repo root = `web` or set app root to `web` in Amplify). |
| 2 | In AWS Amplify: New app → Host web app → Connect GitHub → Select repo and branch. |
| 3 | Set app root to `web` if the repo contains a parent folder. |
| 4 | Add env vars: `GMAIL_USER`, `GMAIL_APP_PASSWORD`. |
| 5 | Save and deploy; use the `https://....amplifyapp.com` link. |
| Later | Add your domain in Amplify → Domain management. |

If you tell me whether the repo root is the `web` folder or the parent folder, I can give you the exact Amplify “Root directory” value and a one-line `git` sequence to push.
