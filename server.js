const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

const localIP = getLocalIP();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fallback to index.html for SPA/PWA routing
      fs.readFile(path.join(PUBLIC_DIR, 'index.html'), (e, fallbackData) => {
        if (e) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(fallbackData);
      });
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('========================================================');
  console.log('   🏨 SENASUMA INN - DAILY POLICE GUEST REPORTER');
  console.log('========================================================\n');
  console.log(`📱 [IPHONE ACCESS - Same Wi-Fi]:`);
  console.log(`   👉 http://${localIP}:${PORT}\n`);
  console.log(`💻 [COMPUTER ACCESS]:`);
  console.log(`   👉 http://localhost:${PORT}\n`);
  console.log('1. Open http://' + localIP + ':' + PORT + ' in Safari or Chrome on your iPhone');
  console.log('2. Tap Share button -> "Add to Home Screen"');
  console.log('3. Now it works 100% OFFLINE on your iPhone!\n');
  console.log('Press Ctrl + C to stop the server.\n');

  exec(`start http://localhost:${PORT}`);
});
