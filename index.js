const container = require('./backend/container.js');

const app = container.resolve('app');

app.start().catch(() => process.exit());