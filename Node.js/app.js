const http = require('http');

require('./node_mopdules')

const server = http.createServer(...);

server.listen(3000, () => {
    console.log('Server listening to port 3000.');
});

