FROM node:6.2.2

RUN mkdir -p /usr/src/nodejs-ldap-auth
COPY app/ /usr/src/nodejs-ldap-auth/

WORKDIR /usr/src/nodejs-ldap-auth
RUN npm install
RUN npm install -g bower
RUN bower install

EXPOSE 8080

CMD node server.js
