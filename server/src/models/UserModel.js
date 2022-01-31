import { Schema, model } from 'mongoose';
import { LogPlugin } from './plugins/log.plugin';

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    image: String
  },
  {
    timestamps: true
  }
);

schema.name = 'User';

const plugin = new LogPlugin();

schema.plugin((s) => plugin.init(s, { name: schema.name }));

export default model(schema.name, schema);
