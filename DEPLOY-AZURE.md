# Deploy QuantumBridge Innovations to Azure (Free Tier)

Use **Azure App Service** on the **Free (F1)** tier to get a shareable link (e.g. `https://quantumbridge-website.azurewebsites.net`).

---

## What’s already in the repo

- **Next.js** is set to `output: 'standalone'` in `next.config.js` for Azure.
- **GitHub Actions** workflow (`.github/workflows/azure-deploy.yml`) builds and deploys on every push to `main`.

---

## Step 1: Create an Azure account

1. Go to [https://azure.microsoft.com/free/](https://azure.microsoft.com/free/).
2. Click **Start free** and sign in with a Microsoft account (or create one).
3. You may need a credit card for verification; the Free tier does not charge if you stay within free limits.

---

## Step 2: Create a Web App (Free tier)

1. Open [Azure Portal](https://portal.azure.com).
2. Search for **App Services** and open it.
3. Click **+ Create** → **Web App**.

Fill in:

| Field | Value |
|--------|--------|
| **Subscription** | Your subscription (e.g. Free Trial) |
| **Resource group** | Create new, e.g. `rg-quantumbridge` |
| **Name** | `quantumbridge-website` (or another unique name; this becomes `https://<name>.azurewebsites.net`) |
| **Publish** | Code |
| **Runtime stack** | Node 20 LTS |
| **Operating System** | Linux |
| **Region** | Choose one close to you |

4. Click **Review + create**.
5. Open **App Service plan** (or the link next to it):
   - Create new or use existing.
   - **Pricing tier:** choose **Free F1** (or **Dev/Test** → **F1**).
6. Back on the Web App form, click **Review + create** → **Create**.

---

## Step 3: Set startup command (Node server)

1. In the portal, open your **Web App** (e.g. `quantumbridge-website`).
2. Go to **Settings** → **Configuration** (or **Configuration** in the left menu).
3. Open the **General settings** tab.
4. Set **Startup Command** to:
   ```bash
   node server.js
   ```
5. Click **Save** at the top.

---

## Step 4: Add environment variables (contact form)

1. In the same **Configuration** page, open the **Application settings** tab.
2. Click **+ New application setting** and add:

| Name | Value |
|------|--------|
| `GMAIL_USER` | `narenderbeniwal1234@gmail.com` |
| `GMAIL_APP_PASSWORD` | Your 16-character Gmail App Password |

3. Click **OK** then **Save** at the top.

---

## Step 5: Get the publish profile

1. In your Web App, go to **Overview** (or **Deployment Center**).
2. Click **Get publish profile** (or **Download publish profile**) to download the `.PublishSettings` file.
3. Open the file in a text editor and copy **all** of its contents (one long block of XML).

---

## Step 6: Add the secret in GitHub

1. Open your repo: **https://github.com/Narenderbeniwal/quantumbridge-website**
2. Go to **Settings** → **Secrets and variables** → **Actions**.
3. Click **New repository secret**.
4. **Name:** `AZURE_WEBAPP_PUBLISH_PROFILE`
5. **Value:** paste the full contents of the publish profile file.
6. Click **Add secret**.

---

## Step 7: Match the app name in the workflow (if needed)

If your Web App name is **not** `quantumbridge-website`:

1. In the repo, open **`.github/workflows/azure-deploy.yml`**.
2. Change the line:
   ```yaml
   AZURE_WEBAPP_NAME: quantumbridge-website
   ```
   to your actual Web App name (e.g. `my-app-name`).
3. Commit and push.

---

## Step 8: Deploy

1. Commit and push the new files (workflow + DEPLOY-AZURE.md) if you haven’t already:
   ```bash
   cd "/Users/narender/Desktop/Talent Arabia/web"
   git add .
   git commit -m "Add Azure deployment"
   git push origin main
   ```
2. On GitHub, go to the **Actions** tab. A workflow run will start.
3. When it turns green, your site is live at:
   **`https://<your-app-name>.azurewebsites.net`**

Share that link. For future updates, push to `main` and the same workflow will deploy again.

---

## Summary checklist

- [ ] Azure account created
- [ ] Web App created (Runtime: Node 20, Linux, **Free F1** plan)
- [ ] Startup command set to `node server.js`
- [ ] `GMAIL_USER` and `GMAIL_APP_PASSWORD` added in Application settings
- [ ] Publish profile downloaded
- [ ] Secret `AZURE_WEBAPP_PUBLISH_PROFILE` added in GitHub with full publish profile content
- [ ] `AZURE_WEBAPP_NAME` in workflow matches your Web App name
- [ ] Pushed to `main` and Actions run succeeded

---

## Adding your own domain later

1. In Azure Portal, open your Web App → **Settings** → **Custom domains**.
2. Add your domain and follow the DNS steps (CNAME or A record).
3. Azure will provide free HTTPS (managed certificate) for the custom domain.
