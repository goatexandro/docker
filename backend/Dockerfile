# Usamos la última versión estable de PHP con FPM (sin Alpine)
FROM php:latest

# Instalamos las dependencias necesarias para Laravel
RUN apt-get update && apt-get install -y \
    bash \
    git \
    zip \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libxml2-dev \
    && echo "Dependencies installed!"

# Instalamos las extensiones de PHP
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql xml \
    && echo "PHP extensions installed!" \
    && php -m  # Verificamos las extensiones de PHP instaladas

# Instalamos Composer (gestor de dependencias PHP)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /var/www/html

# Copiamos el código del backend (Laravel) al contenedor
COPY . .

# Instalamos las dependencias de Laravel usando Composer
RUN composer install --no-interaction --prefer-dist

# Exponemos el puerto 8000 para el backend
EXPOSE 8000

# Comando para ejecutar el servidor de desarrollo de Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
