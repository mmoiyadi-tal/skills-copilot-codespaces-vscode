// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

// The file comments.html is located in the same directory as the comments.js file.

// The file comments.html:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Comments</title>
// </head>
// <body>
//     <h1>Comments</h1>
//     <p>Comments will be here!</p>
// </body>
// </html>
// Make sure to handle the errors that may occur when reading the file.

// Your solution should be in a file comments.js

// Run the server using the command:

// node comments.js
// Verify the server is working by visiting http://localhost:3000 in your browser.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});