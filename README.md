## Cloudflare example application

### Install

```sh
bun install
```

### Run

The `dev` command has a `predev` command that copies static files into the `assets/_static` directory (see [syncStaticAssets.js](/scripts/syncStaticAssets.js)). This is necessary for the example application to work. Please make sure you build the static assets before running the application (see above).

```sh
bun run dev
```

To use a different project, replace the json file in the `__project__` folder.

### Deploy

The Cloudflare deploy button below doesn't work atm. You can still use it to easily set up your Cloudflare worker + Github repository though.

To deploy:

- Create a new API key in your [Cloudflare account](https://dash.cloudflare.com/profile/api-tokens) - you could for instance use the `Edit Cloudflare Workers` template
- Copy the API key and add it to your Github repository secrets as `CLOUDFLARE_API_TOKEN`. You will do this under: Settings > Secrets and variables > Actions > New repository secret
- Create a commit on the `main` branch
- Potentially add your account_id to the wrangler.toml file (you can find it in your Cloudflare dashboard)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/nordcraftengine/cloudflare-example)
