import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs/promises';
import path from 'path';
import cors from 'cors';

import routes from './routes';
import { log, error } from './middleware';

export class App {
  async initConfig() {
    const configName = `.env.${process.env.NODE_ENV}.json`;
    const configPath = path.resolve(__dirname, '..', configName);
    const configFile = await fs.readFile(configPath, 'utf-8').catch(() => {
      throw new Error(`!${configName}`);
    });
    const config = JSON.parse(configFile);
    process.env = { ...process.env, ...config };
  }

  async initRoutes() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(log);
    this.app.use('/', routes);
    this.app.use(error);
  }

  async initDb() {
    await mongoose
      .connect(process.env.db.URI)
      .then(() => console.log('Mongo connected!'));
  }

  async init() {
    await this.initConfig();

    this.port = process.env.PORT || 3000;
    this.app = express();

    await this.initRoutes();
    await this.initDb();
  }

  async run() {
    this.app.listen(this.port, () => {
      console.log(
        `Example app listening on port ${this.port}!\n ________________________\n|                        |\n| http://localhost:${this.port}/ |\n|________________________|\n`
      );
    });
  }
}

export default async () => {
  const app = new App();
  await app.init();
  await app.run();
};
