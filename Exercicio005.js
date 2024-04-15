
//Kauan Lima De Paula RGM: 33259631
var http = require("http");
var request = require('request');
http.createServer(function (req, res) { // Cria o servidor http
 acionaApi(function (data) {
 res.writeHead(200, {'Content-Type': 'application/json'});
 res.end(data);
 });
}).listen(8080);
function acionaApi(callback) { // Chama a API
 request('https://ipinfo.io/161.185.160.93/geo', function (error, response, body) {
 if (!error && response.statusCode === 200) {
 console.log(body);
 callback(body);
 }
 });
}