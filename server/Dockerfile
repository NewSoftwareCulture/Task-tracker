FROM node:15.8.0

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

ENV PORT 3000
ENV STAGE production

EXPOSE $PORT

CMD ["npm", "start"]