const http = require('http');

const server = http.createServer((req, res) => {
    // res.write("Hello, World!");
    console.log(req.url);
    console.log(req.method);
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Hello, World!");
        res.end();
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("About Page");
        res.end();
    } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Contact Page");
        res.end();
    } else if (req.url === "/Help") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("HELP Page");
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 Page Not Found");
        res.end();
    }
    res.end();
});
server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});