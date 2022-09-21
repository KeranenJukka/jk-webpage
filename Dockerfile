FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM node:18-alpine as app
WORKDIR /app
COPY --from=build /app/build /app/build
COPY --from=build /app/app.js /app
RUN npm i express dotenv
CMD ["node", "app.js"]