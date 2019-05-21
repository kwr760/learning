const fs = require('fs');
const server = require('6.2/task1/files/https')
  .createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
  });

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello world\n');
});

server.listen(443);
const fs = require('fs');
const server = require('6.2/task1/files/https')
  .createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
  });

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello world\n');
});

server.listen(443);
