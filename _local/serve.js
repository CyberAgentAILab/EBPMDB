const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  const destUrl = request.url.replace('/EBPMDB', '')
  const slugUrl = destUrl.replace('%5Bslug%5D', '[slug]')
  return handler(request, response, {
    public: "./out/",
    rewrites: [
      { source: "/EBPMDB/_next/static/chunks/pages/doc/**.js", destination: `${slugUrl}`},
      { source: "/EBPMDB/_next/**", destination: `${destUrl}` },
      { source: "/EBPMDB/**.{png,jpg,svg}", destination: `${destUrl}` },
      { source: "/EBPMDB/site.webmanifest", destination: `${destUrl}` },
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