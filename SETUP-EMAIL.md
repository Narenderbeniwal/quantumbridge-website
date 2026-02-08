# Contact form email – step-by-step setup

Follow these steps so contact form messages are sent to **narenderbeniwal1234@gmail.com**.

---

## Step 1: Turn on 2-Step Verification (Google)

1. Open this link in your browser: **https://myaccount.google.com/security**
2. Sign in with **narenderbeniwal1234@gmail.com** if asked.
3. On the Security page, find the section **"How you sign in to Google"**.
4. Click **"2-Step Verification"**.
5. If it says **Off**, click **"Get started"** and follow the steps (phone number, code).
6. When it says **On**, you’re done. Go to Step 2.

---

## Step 2: Create a Gmail App Password

1. Open this link: **https://myaccount.google.com/apppasswords**
2. Sign in with **narenderbeniwal1234@gmail.com** if asked.
3. If you see “App passwords”, continue.  
   If you don’t see it, 2-Step Verification might not be on — go back to Step 1.
4. Where it says **“Select app”**, choose **“Mail”**.
5. Where it says **“Select device”**, choose **“Other (Custom name)”**.
6. Type: **QuantumBridge Innovations** (or any name you like).
7. Click **“Generate”**.
8. Google will show a **16-character password** like: `abcd efgh ijkl mnop`.
9. **Copy this password** (you’ll use it in Step 3).  
   - You can write it down temporarily.  
   - Remove all spaces when you paste it (e.g. use `abcdefghijklmnop`).

---

## Step 3: Create `.env.local` in the web folder

1. On your Mac, open **Finder**.
2. Go to: **Desktop → Talent Arabia → web** (or your project folder).
3. In the **web** folder you should see files like `package.json`, `app`, etc.
4. Create a **new file** in this folder named exactly: **`.env.local`**  
   - The name starts with a dot (`.`).  
   - In Finder: right‑click → New File, or use Cursor/VS Code: right‑click in the **web** folder in the sidebar → New File → name it `.env.local`.
5. Open **`.env.local`** in Cursor (or any text editor).
6. Paste these **two lines** (replace the second line with your real app password, **no spaces**):

```env
GMAIL_USER=narenderbeniwal1234@gmail.com
GMAIL_APP_PASSWORD=paste_your_16_char_app_password_here_no_spaces
```

**Example:** If your app password was `abcd efgh ijkl mnop`, you’d write:

```env
GMAIL_USER=narenderbeniwal1234@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

7. Save the file (Cmd + S).
8. **Important:** Do not share this file or commit it to Git. It contains a secret password.

---

## Step 4: Run the site and test

1. Open **Terminal** (or the terminal in Cursor).
2. Run:

```bash
cd "/Users/narender/Desktop/Talent Arabia/web"
npm install
npm run dev
```

3. In your browser open: **http://localhost:3000**
4. Go to **Contact** (or **http://localhost:3000/contact**).
5. Fill the form and click **“Send message”**.
6. Check the inbox of **narenderbeniwal1234@gmail.com** — you should see the message.

If you don’t get the email, check that:
- `.env.local` is in the **web** folder (same folder as `package.json`).
- The app password has **no spaces**.
- You ran `npm run dev` **after** creating or editing `.env.local` (restart the server if you changed the file).

---

## Quick checklist

- [ ] 2-Step Verification is **On** for narenderbeniwal1234@gmail.com  
- [ ] App password created at https://myaccount.google.com/apppasswords  
- [ ] File **.env.local** created inside the **web** folder  
- [ ] Two lines in .env.local: `GMAIL_USER=...` and `GMAIL_APP_PASSWORD=...` (no spaces in password)  
- [ ] Saved .env.local and restarted `npm run dev`  
- [ ] Tested the contact form and received the email
