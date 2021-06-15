const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // Serving html
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), function(error, content){
            if (error) {
                console.log('I found an error!');
                throw error;
            } else {
                res.writeHead(200, { 'Content-Type' : 'text/html' });
                res.write(content);
                res.end();
            }
        })
    }

    if (req.url === "/about") {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), function(error, content){
            if (error) {
                console.log('I found an error!');
                throw error;
            } else {
                res.writeHead(200, { 'Content-Type' : 'text/html' });
                res.write(content);
                res.end();
            }
        })
    }

    // Serving JSON
    if (req.url === '/json') {
        const users = [
            { name :  "Bob Smith", age : 40 },
            { name :  "John Doe", age : 30 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(users));
        res.end();
    };
});

const fromMyServer = 'Xadai o Barbaro'; // just for the kicks, not really useful

const hostname = '127.0.0.1';
const port = 5000;

server.listen(port, hostname, () => {
    console.log(`${fromMyServer}'s server has started on port ${port}`);
});

// That's a node server. To run it, go to the cmd and type "node app.js"
// Just like in python. The next step is express.
// to make the server restart after saving, install nodemon as a dev dependency.
// npm run dev to run the server with nodemon on.
//
// To install a module, npm install module_name
// Or npm install to install only what is in the dependencies of package.json