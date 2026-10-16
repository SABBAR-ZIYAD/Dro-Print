# DroPrint API and admin

Laravel 12 API and Filament admin for the DroPrint React customer site. The main [README](../README.md) documents setup, Docker, the customer journey, and CI.

API routes are in `routes/api.php`. Product, category, search, and quote-request controllers are in `app/Http/Controllers`. Catalog and announcement management are in `app/Filament/Resources`.

Run `php artisan test` for the customer journey and validation tests. Quote emails use `QUOTE_RECIPIENT` and the configured Laravel mail transport. Demo data is opt-in outside the Docker example (`php artisan db:seed`).
