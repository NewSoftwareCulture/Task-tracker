FROM node:15.8.0

WORKDIR /app

COPY . /app

RUN npm install

ENV PORT 80
ENV STAGE production

RUN chmod 777 ./scripts/start.sh

CMD ["./scripts/start.sh"]