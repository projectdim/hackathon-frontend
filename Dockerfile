FROM node:18 as dev

WORKDIR app

COPY package.json package-lock.json ./


RUN npm install

COPY . .

EXPOSE 4200

CMD npm start

FROM dev as build
RUN npm run build:prod

FROM nginx:latest as prod

COPY --from=build /app/dist/ng-template /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
