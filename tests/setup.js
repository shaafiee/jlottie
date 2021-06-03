const fastify = require('fastify')();
const path = require('path');
const fs = require('fs');
const os = require('os');

async function globalSetup() {
  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
  });

  // Start server.
  await fastify.listen();

  // Write port to temp file to share with test spec.
  fs.writeFileSync(path.resolve(os.tmpdir(), 'visual-comparison-test'), String(fastify.server.address().port), {
    encoding: 'ascii',
  });

  console.log(`Started test server on port ${fastify.server.address().port}`);

  // Return the global teardown function.
  return async () => {
    await new Promise((done) => fastify.close(done));
  };
}

module.exports = globalSetup;
