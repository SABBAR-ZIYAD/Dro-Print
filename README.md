# DroPrint

A printing-services catalog and custom-quote platform built during a two-month internship in 2025, then modernized into a React customer site and Laravel API. Customers can browse categories, inspect product specifications and related items, search the catalog, and request a tailored quote with an artwork attachment. Staff manage the catalog and banners in Filament.

The original internship implementation used Laravel Blade and Alpine.js. This repository contains its customer journey and business logic in the modern React + Laravel structure. It is a quote-led service site; it does not claim checkout, online payment, or order fulfillment.

## Stack

- React 19, React Router 7, Tailwind CSS 4, Vite 8
- Laravel 12, PHP 8.3, Filament 3, MySQL 8
- Docker Compose and Nginx; GitHub Actions for build, lint, tests, and a container smoke test

## Run locally

Install Docker Desktop. In the repository root:

```bash
cp .env.example .env
```

Set a unique `APP_KEY` in `.env` with the value of:

```bash
printf 'base64:%s\n' "$(openssl rand -base64 32)"
```

On Windows PowerShell, generate the value with:

```powershell
$bytes = New-Object byte[] 32
$rng = [Security.Cryptography.RandomNumberGenerator]::Create()
$rng.GetBytes($bytes)
$rng.Dispose()
'base64:' + [Convert]::ToBase64String($bytes)
```

Then launch:

```bash
docker compose up --build -d
```

- Customer site: <http://localhost:5173>
- API: <http://localhost:5173/api/home>
- Filament admin: <http://localhost:8000/admin>

The backend waits for MySQL, runs migrations, and (with `SEED_DEMO=true`) loads a repeatable sample catalog and banners. Images in `DroPrintBackend/database/demo-assets` are demo assets. To create an admin login:

```bash
docker compose exec backend php artisan make:filament-user
```

The default mail transport logs quote emails inside the backend container. Set `MAIL_MAILER`, SMTP settings, `MAIL_FROM_ADDRESS`, and `QUOTE_RECIPIENT` in your deployment before accepting real requests. `SEED_DEMO=false` disables sample data. Docker uses named volumes for the database and uploaded media.

## Customer journey

1. Open a featured product or browse categories from the header.
2. Read its description, specifications, and related products.
3. Search product and category names when needed.
4. Select **Demander un devis**. The product is preselected in the form.
5. Enter contact and print requirements, optionally attach an artwork file, and submit. Laravel validates the request and emails the configured recipient.

The API provides `/api/home`, `/api/search?q=...`, `/api/categories`, `/api/categories/{slug}`, `/api/products/{slug}`, and `POST /api/devis-request`. Filament provides content management at `/admin`.

## Development and checks

For frontend development, run `npm ci` and `npm run dev` in `DroPrintFront`. Vite proxies `/api` and `/storage` to the backend on port 8000. The backend can also run with `php artisan serve` after `composer install`, environment setup, and migrations.

```bash
cd DroPrintFront && npm ci && npm run lint && npm run build
cd ../DroPrintBackend && composer install && php artisan test
```

GitHub Actions runs those checks on each pull request and push to `main`, then builds and starts the Docker stack and checks the catalog, search, and React route fallback.

## Repository layout

```text
DroPrintFront/       React customer site and Nginx image
DroPrintBackend/     Laravel API, Filament admin, migrations, mail
.github/workflows/   Continuous integration
docker-compose.yml   MySQL, backend, frontend
```

The older Blade implementation was used as the migration reference and is not part of the modern application.
