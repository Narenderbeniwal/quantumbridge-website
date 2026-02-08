# Deploy QuantumBridge Innovations to Azure (Free Tier)

Use **Azure App Service** on the **Free (F1)** tier to get a shareable link (e.g. `https://quantumbridge-website.azurewebsites.net`).

**If you already have an Azure account** (e.g. Azure for Students), sign in and start from Step 2.

**Note:** Azure has disabled basic authentication (publish profile) in many cases. This guide uses a **service principal** (App registration) instead, so you do not need to download or use a publish profile.

---

## What’s already in the repo

- **Next.js** is set to `output: 'standalone'` in `next.config.js` for Azure.
- **GitHub Actions** workflow (`.github/workflows/azure-deploy.yml`) builds and deploys on every push to `main`.

---

## Step 1: Sign in to Azure

1. Go to [Azure Portal](https://portal.azure.com).
2. Sign in with your **existing Azure account** (e.g. your **Azure for Students** / student account).
3. No new sign-up needed—your student subscription works with the Free F1 tier.

---

## Step 2: Create a Web App (Free tier)

1. Open [Azure Portal](https://portal.azure.com).
2. Search for **App Services** and open it.
3. Click **+ Create** → **Web App**.

Fill in:

| Field | Value |
|--------|--------|
| **Subscription** | Your subscription (e.g. Azure for Students) |
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
4. In **Startup Command**, enter only:
   ```
   node server.js
   ```
   (Do not add `bash` or backticks—just the line above.)
5. Click **Save** at the top.

---

## Step 4: Add environment variables (contact form)

1. In your Web App, go to **Environment variables** (or **Configuration** → **Application settings** in the left menu).
2. Click **+ Add** / **+ New application setting** and add these two (required for the contact form; otherwise you’ll see “Email is not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD”):

| Name | Value |
|------|--------|
| `GMAIL_USER` | Your Gmail address (e.g. `narenderbeniwal1234@gmail.com`) |
| `GMAIL_APP_PASSWORD` | Your 16-character Gmail [App Password](https://myaccount.google.com/apppasswords) (not your normal password) |

3. **Save** at the top. The app will restart and the contact form will work.

**Alternative (CI/CD):** Add the same two as **GitHub repo Secrets** (`GMAIL_USER`, `GMAIL_APP_PASSWORD`). The workflow will set them on the Web App on each deploy.

---

## Step 5: Create a service principal (for GitHub Actions – no publish profile)

Because **basic authentication is disabled** in Azure, we use a **service principal** instead of the publish profile.

1. In Azure Portal, search for **Microsoft Entra ID** (or **Azure Active Directory**) and open it.
2. Go to **App registrations** → **+ New registration**.
3. **Name:** e.g. `github-quantumbridge-deploy`. **Supported account types:** leave default. Click **Register**.
4. On the app page, note:
   - **Application (client) ID** → used as `clientId` in the `AZURE_CREDENTIALS` JSON (Step 6).
   - **Directory (tenant) ID** → used as `tenantId` in the `AZURE_CREDENTIALS` JSON (Step 6).
5. Go to **Certificates & secrets** → **+ New client secret** → add a description, choose expiry (e.g. 24 months) → **Add**. Copy the **Value** once (used as `clientSecret` in the JSON; it won’t be shown again).
6. Go to **Subscriptions** (search in the top bar), open your subscription, and copy the **Subscription ID** → used as `subscriptionId` in the `AZURE_CREDENTIALS` JSON (Step 6).
7. Grant the app access to your Web App:
   - Go to your **Web App** in the portal.
   - Open **Access control (IAM)** → **+ Add** → **Add role assignment**.
   - **Role:** **Website Contributor** (or **Contributor**).
   - **Members:** select the app you created (e.g. `github-quantumbridge-deploy`). Save.

---

## Step 6: Add one secret in GitHub

The Azure Login action needs a **single JSON secret** (not four separate ones).

1. Open **Settings** → **Secrets and variables** → **Actions** in your repo.  
   **Direct link:** [quantumbridge-website → Secrets/Actions](https://github.com/Narenderbeniwal/quantumbridge-website/settings/secrets/actions)
2. Click **New repository secret**.
3. **Name:** `AZURE_CREDENTIALS`
4. **Value:** one JSON object (use your real values from Step 5; put everything on one line, no extra spaces):

   ```json
   {"clientId":"<Application (client) ID>","clientSecret":"<your client secret value>","subscriptionId":"<Subscription ID>","tenantId":"<Directory (tenant) ID>"}
   ```

   Example (fake values):
   ```json
   {"clientId":"12345678-abcd-1234-abcd-123456789012","clientSecret":"abc123~YourSecretHere","subscriptionId":"87654321-dcba-4321-dcba-210987654321","tenantId":"11111111-2222-3333-4444-555555555555"}
   ```

5. Click **Add secret**.

If you already added the four separate secrets (`AZURE_CLIENT_ID`, etc.), you can leave them; the workflow now uses only `AZURE_CREDENTIALS`. You can remove the old ones later if you want.

---

## Step 7: Match app name and resource group in the workflow (if needed)

If your Web App name or resource group is different:

1. In the repo, open **`.github/workflows/azure-deploy.yml`**.
2. At the top under `env:`, set:
   - `AZURE_WEBAPP_NAME` to your Web App name (e.g. `quantumbridge-website`).
   - `AZURE_RESOURCE_GROUP` to your resource group name (e.g. `rg-quantumbridge`).
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

- [ ] Signed in to Azure (student account)
- [ ] Web App created (Runtime: Node 20, Linux, **Free F1** plan)
- [ ] Startup command set to `node server.js`
- [ ] `GMAIL_USER` and `GMAIL_APP_PASSWORD` added in Environment variables
- [ ] App registration created; client secret created; **Website Contributor** (or Contributor) assigned to the Web App
- [ ] GitHub secret added: `AZURE_CREDENTIALS` (JSON with clientId, clientSecret, subscriptionId, tenantId)
- [ ] `AZURE_WEBAPP_NAME` and `AZURE_RESOURCE_GROUP` in the workflow match your app and resource group
- [ ] Pushed to `main` and Actions run succeeded

---

## Adding your own domain later

1. In Azure Portal, open your Web App → **Settings** → **Custom domains**.
2. Add your domain and follow the DNS steps (CNAME or A record).
3. Azure will provide free HTTPS (managed certificate) for the custom domain.
