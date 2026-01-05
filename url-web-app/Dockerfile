FROM node:20-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ARG VITE_AUTH_API_URL
ARG VITE_BUSINESS_API_URL
ARG VITE_WEB_APP_URL

ENV VITE_AUTH_API_URL=$VITE_AUTH_API_URL
ENV VITE_BUSINESS_API_URL=$VITE_BUSINESS_API_URL
ENV VITE_WEB_APP_URL=$VITE_WEB_APP_URL

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]