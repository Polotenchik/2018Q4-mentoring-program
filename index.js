const container = require('./backend/container');

const app = container.resolve('app');

app.start().catch(() => process.exit());