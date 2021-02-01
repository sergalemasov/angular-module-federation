FROM nginx:latest as base
FROM node:12 as build

WORKDIR /src

COPY package.json .
COPY yarn.lock .
COPY decorate-angular-cli.js .

RUN yarn install

COPY . .

RUN yarn run nx build shared-mf --prod

# заново идет FROM для того, чтобы базовым образом для деплоя была nginx-среда
FROM base AS production

COPY --from=build /src/dist/apps/shared-mf /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
