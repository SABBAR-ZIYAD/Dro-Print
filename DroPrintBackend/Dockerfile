FROM php:8.3-cli-bookworm
RUN apt-get update && apt-get install -y --no-install-recommends git unzip libicu-dev libonig-dev libzip-dev libpng-dev libsqlite3-dev && docker-php-ext-install -j4 pdo_mysql pdo_sqlite mbstring intl bcmath zip gd && rm -rf /var/lib/apt/lists/*
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
WORKDIR /var/www/html
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --prefer-dist --no-progress --no-scripts
COPY . .
RUN php artisan package:discover --ansi && mkdir -p storage/app/public storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs bootstrap/cache && chmod -R 777 storage bootstrap/cache
COPY docker-entrypoint.sh /usr/local/bin/droprint-entrypoint
RUN chmod +x /usr/local/bin/droprint-entrypoint
EXPOSE 8000
CMD ["droprint-entrypoint"]
