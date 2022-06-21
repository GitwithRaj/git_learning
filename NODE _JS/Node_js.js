// console.log("Hello World");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World Raj here hi Nigam');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Box model</title>
      <style>
          .container{
              background-color: #a1a1a5;
              border:5px solid#328b00;
              padding: 10px;
              border-radius: 10px;
              /* all side padding can be possible */
              /* padding-left:3px;
              padding-top: 3px;
              padding-bottom: 10px;
              padding-right: 5px; */
              margin: 30px;
              /* all side margin can also be possible */
               margin-top: 20px;
              margin-left: 10px;
              margin-bottom: 30px;
              margin-right: 25px; 
              width: 1600px;
          }
              
      </style>
  </head>
  <body>
          <div class="container">
          <h2>first para</h2>
          <h3 id="firstpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium assumenda nesciunt obcaecati cumque dolorem. Labore animi vel voluptatem unde?</h3>
      </div>
      <div class="container">  <h2>second para</h2>
          <h3 id="secondpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium assumenda nesciunt obcaecati cumque dolorem. Labore animi vel voluptatem unde?</h3>
      </div>
      <div class="container">  <h2>third para</h2>
          <h3 id="thirdpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium assumenda nesciunt obcaecati cumque dolorem. Labore animi vel voluptatem unde?</h3>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
