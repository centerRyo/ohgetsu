# 使用技術

- docker v20.10.21
- docker-compose v2.12.2
- php v8.2.1
- laravel v8.83.27
- react v18.2.0
- next.js v13.5.4
- node v20.2.0

# 環境構築手順

## backend

### backend コンテナに入る

```
$ docker-compose exec backend sh
```

### composer install

```
composer install
```

### create key

```
php artisan key:generate
```

### アクセス

localhost:4000 にアクセスすると画面が見れる

## frontend

### node のバージョン

.node-version に記載の通り、v20.2.0 が必要になるため、それぞれの node パッケージマネージャーにて v20.2.0 をインストールしておくこと

### yarn install

```
$ yarn install
```

### yarn dev

```
$ yarn dev
```

### アクセス

localhost:3000 にアクセスすると画面が見れる
