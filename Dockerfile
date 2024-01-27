FROM node:16-alpine3.11
RUN npm install -g typescript
WORKDIR /usr/share/app
COPY ./package*.json ./
RUN npm i --no-audit
COPY . .
RUN npm run build
WORKDIR /usr/share/app
ENV PORT 3000
EXPOSE 3000
CMD [ "npm", "start" ]