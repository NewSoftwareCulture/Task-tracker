import { Schema, model } from 'mongoose';
import { LogPlugin } from './plugins/log.plugin';

const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    refreshToken: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

schema.name = 'Token';

const plugin = new LogPlugin();

schema.plugin((s) => plugin.init(s, { name: schema.name }));

export default model(schema.name, schema);
