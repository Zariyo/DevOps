FROM node AS frontendBuilder
WORKDIR /home/node/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN yarn install
COPY . .
RUN yarn build
FROM nginx
COPY --from=frontendBuilder /home/node/app/build /usr/share/nginx/html
