#!/bin/sh
set -eu
php artisan migrate --force
php artisan storage:link || true
if [ "${SEED_DEMO:-false}" = "true" ]; then
  mkdir -p storage/app/public/demo
  cp -n database/demo-assets/*.jpg storage/app/public/demo/
  php artisan db:seed --force
fi
exec php artisan serve --host=0.0.0.0 --port=8000
