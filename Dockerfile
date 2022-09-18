FROM nginx:alpine

WORKDIR /var/www/html

COPY ./Frontend/dist/Angular6 .

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 1000