FROM node:16 AS frontend
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli
# RUN export NODE_OPTIONS=--openssl-legacy-provider
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
# RUN npm run build --prod
# FROM nginx:alpine
# COPY --from=frontend /app/dist/frontend /usr/share/nginx/html