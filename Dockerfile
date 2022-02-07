FROM node:15.8.0 as client

WORKDIR /app/client

COPY client/package.json /app/client

RUN npm install

COPY client/ /app/client

RUN npm run build

FROM node:15.8.0

WORKDIR /app

COPY server/package.json /app

RUN npm install

COPY server /app

COPY --from=client /app/client/build /app/client

ENV PORT 3000
ENV STAGE production

EXPOSE 3000

CMD ["npm", "start"]