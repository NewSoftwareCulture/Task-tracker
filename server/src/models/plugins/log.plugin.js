import chalk from 'chalk';

export class LogPlugin {
  methods = [
    'count',
    'countDocuments',
    'distinct',
    'estimatedDocumentCount',
    'find',
    'findOne',
    'findOneAndReplace',
    'findOneAndUpdate',
    'replaceOne',
    'update',
    'updateMany',
    'updateOne',
    'deleteMany',
    'deleteOne',
    'findOneAndDelete',
    'findOneAndRemove',
    'remove',
    'validate',
    'save',
    'init'
  ];

  createMessage(method, document, name) {
    const prettyPrefix = chalk.green('[mongoose]');
    const prettyName = chalk.yellow(`${name}Model`);
    const prettyMethod = chalk.yellow(method);
    const prettyDoc = chalk.gray(JSON.stringify(document));
    const message = `${prettyPrefix} ${prettyName}.${prettyMethod} ${prettyDoc}`;
    return message;
  }

  init(schema, options) {
    this.methods.forEach((method) =>
      schema.post(method, (document, next) => {
        if (!options.log && !process.env.db.log) return next && next();

        const message = this.createMessage(method, document, schema.name);

        console.log(message);
        return next && next();
      })
    );
  }
}

export default LogPlugin;
