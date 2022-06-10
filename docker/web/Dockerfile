FROM node:16.13 as development
WORKDIR /usr/src/app
COPY . .
RUN yarn
EXPOSE 3000
CMD [ "yarn", "start" ]


FROM development as builder
WORKDIR /usr/src/app
COPY . .
RUN yarn && yarn build


FROM nginx:1.13.12-alpine as production
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY docker/web/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
