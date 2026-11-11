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

// Helper to find the main HTML file (supports index.html or index guest report.html)
function getMainHtmlFile() {
  const candidates = [
    path.join(PUBLIC_DIR, 'index.html'),
    path.join(PUBLIC_DIR, 'index guest report.html')
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      return c;
    }
  }
  // If none match, find any .html file in PUBLIC_DIR
  try {
    const files = fs.readdirSync(PUBLIC_DIR);
    const htmlFile = files.find(f => f.endsWith('.html'));
    if (htmlFile) return path.join(PUBLIC_DIR, htmlFile);
  } catch (e) {}

  return candidates[0];
}

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    const mainHtml = getMainHtmlFile();
    fs.readFile(mainHtml, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
    return;
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fallback to main HTML
      const mainHtml = getMainHtmlFile();
      fs.readFile(mainHtml, (e, fallbackData) => {
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
  console.log(`📱 [PHONE ACCESS]:`);
  console.log(`   👉 http://${localIP}:${PORT}\n`);
  console.log(`💻 [LOCAL ACCESS]:`);
  console.log(`   👉 http://localhost:${PORT}\n`);
  console.log('Server is running and listening on port ' + PORT);
});
