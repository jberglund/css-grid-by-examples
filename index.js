const st = require('st')
const http = require('http')
 
http.createServer(
  st(process.cwd())
).listen(1337)