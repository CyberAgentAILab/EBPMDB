const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  const destUrl = request.url.replace('/EBPMDB', '')
  return handler(request, response, {
    public: "./out/",
    rewrites: [
      { source: "/EBPMDB/_next/**", destination: `${destUrl}` }
    ],
    redirects: [
      { source: "/EBPMDB", destination: `${destUrl}` },
      { source: "/EBPMDB/doc/**", destination: `${destUrl}` },
      { source: "/EBPMDB/{committee,effectiveness,sms}", destination: `${destUrl}` },
    ]
  });
});

server.listen(8000, () => {
  console.log('Running at http://localhost:8000');
});