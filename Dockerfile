FROM nginx:alpine
COPY /dist/first-spa /usr/share/nginx/html
EXPOSE 80
