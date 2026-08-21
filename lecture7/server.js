const http = require('http');

const server = http.createServer((req, res) => {
    // res.write("Hello, World!");
    console.log(req.url);
    console.log(req.method);
    const users = [
        {id: 1, name: "John", email:"john@example.com"},
        {id: 2, name: "Jane", email:"jane@example.com"},
        {id: 3, name: "Bob", email:"bob@example.com"}
    ]
        
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
    } else if (req.url === "/users" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url === "/users" && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk
        });
        req.on("end", () => {
            const userData = JSON.parse(body);
            users.push(userData);
            console.log(users);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.write(JSON.stringify(userData));
            res.end();
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 Page Not Found");
        res.end();
    }

});
server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});