# Deploying SA Telecoms to Plesk (Node.js)

## Prerequisites
- Plesk with **Node.js extension** installed
- SSH access to the server (recommended)
- Node.js 18+ enabled on the server

---

## Step 1: Build Locally

Run the production build on your local machine:

```bash
npm install
npm run build
```

This creates a `.next/standalone` folder with everything needed to run.

---

## Step 2: Prepare Files to Upload

After building, you need to upload these files/folders to your Plesk domain's document root:

```
├── .next/
│   ├── standalone/        ← Contains bundled server + node_modules
│   └── static/            ← Static assets (CSS, JS chunks)
├── public/                ← Public assets (logo, images, etc.)
├── server.js              ← Entry point for Plesk Node.js
├── package.json
├── package-lock.json
└── next.config.ts
```

### What to upload (minimum):
1. **Entire `.next/` folder** (includes `standalone/` and `static/`)
2. **`public/` folder**
3. **`server.js`** (root level — the Plesk entry point)
4. **`package.json`** and **`package-lock.json`**
5. **`next.config.ts`**

### What NOT to upload:
- `node_modules/` (Plesk will run `npm install`, or you can use the standalone modules)
- `src/` (not needed in production)

---

## Step 3: Configure Plesk Node.js

1. Log in to **Plesk** → select your domain
2. Go to **Node.js** settings
3. Configure:

| Setting              | Value                          |
|----------------------|--------------------------------|
| **Node.js version**  | 18.x or 20.x                  |
| **Document root**    | `/httpdocs` (or your web root) |
| **Application root** | `/httpdocs` (same as above)    |
| **Application startup file** | `server.js`           |

4. Set **Application mode** to `production`

---

## Step 4: Environment Variables

In Plesk Node.js settings, add these environment variables:

| Variable   | Value        |
|------------|--------------|
| `PORT`     | (leave blank — Plesk assigns automatically) |
| `NODE_ENV` | `production` |
| `HOSTNAME` | `0.0.0.0`   |

---

## Step 5: Install Dependencies & Start

In Plesk Node.js panel:

1. Click **"NPM Install"** to install dependencies
2. Click **"Enable Node.js"** or **"Restart App"**

Or via SSH:

```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
npm install --production
```

Plesk will automatically start the app using `server.js`.

---

## Step 6: Copy Static Files (Important!)

The standalone build doesn't include the `public/` and `.next/static/` folders automatically. After uploading, make sure these exist in the right places:

```bash
# If using SSH, from your application root:
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static
```

Or simply ensure the `public/` folder and `.next/static/` folder are uploaded alongside the standalone output.

---

## Troubleshooting

### App won't start
- Check Plesk Node.js logs for errors
- Ensure `server.js` is in the application root
- Verify Node.js version is 18+

### Static assets not loading (CSS/JS missing)
- Make sure `.next/static/` exists inside `.next/standalone/.next/`
- Make sure `public/` exists inside `.next/standalone/`

### Port issues
- Plesk assigns its own port via the `PORT` environment variable
- The `server.js` reads `process.env.PORT` automatically
- Do NOT hardcode a port

### 502 Bad Gateway
- The app may still be starting — wait 10-20 seconds
- Check if `npm install` completed successfully
- Restart the Node.js app in Plesk

---

## Quick Deploy Script (Optional)

Run this locally to prepare a clean deploy folder:

```bash
npm run build
mkdir -p deploy
cp -r .next/standalone/* deploy/
cp -r .next/static deploy/.next/static
cp -r public deploy/public
```

Then upload the entire `deploy/` folder contents to your Plesk document root.
