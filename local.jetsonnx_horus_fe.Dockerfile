FROM nginx:stable-alpine
WORKDIR /www

ADD ./misc/default.conf /etc/nginx/conf.d/default.conf
ADD ./misc/nginx.conf /etc/nginx/nginx.conf
ADD ./dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
