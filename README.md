# Requisitos
- Docker
- PHP
- Composer
- Node
- NPM

# Iniciando o projeto
- `composer install`
- `npm install`
- `php artisan key:generate`
- Copie o env.example para .env
- `docker compose up -d`
- `npm run dev`
- `php artisan serve`
- `php artisan migrate`
- Acesse `localhost:8000/login` ou `localhost:8000/register`

# Outros comandos
- `composer run-script analyse`: procura por erros no código e mostra
- `composer run-script format`: corrige automaticamente problemas de code style
- `php artisan insights`: analisa e mostra qualidade de código e code style
- `npm run test`: testes e2e do front end
