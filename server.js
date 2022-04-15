const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    if (request.url === '/product') {
        response.end(JSON.stringify({
            message: 'Product Route'
        }));
    };

    if (request.url === '/users') {
        response.end(JSON.stringify({
            message: 'Users Route'
        }));
    };

    response.end(JSON.stringify({
        message: 'Any other route'
    }));

}).listen(4001, () => console.log("Server is running in port 4001"));