import { Schema, model } from 'mongoose';
import { LogPlugin } from './plugins/log.plugin';

const schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['to-do', 'in-progress', 'done'],
      required: true
    },
    accountable: {
      type: String
    },
    deadline: {
      type: Number
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

schema.name = 'Task';

const plugin = new LogPlugin();

schema.plugin((s) => plugin.init(s, { name: schema.name }));

export default model(schema.name, schema);
