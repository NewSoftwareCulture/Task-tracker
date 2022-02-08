FROM node:15.8.0

WORKDIR /app

COPY . /app

RUN npm install

ENV PORT 80
ENV STAGE production

EXPOSE 80

CMD ["npm", "start"]