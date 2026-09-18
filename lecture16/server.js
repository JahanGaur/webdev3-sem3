const express=require('express');
const app=express();
const port=3000;

const logMiddleware = (req, res, next) => {
    req.name="John Doe";
    console.log("req method:", req.method,"req url:", req.url, "Time:", new Date().toLocaleString());
    // res.send("Hello from middleware!");
    next(); //- next is not used if we send response from middleware
}

const apiCheckMiddleware = (req, res, next) => {
    if (req.query.API_KEY === "12345") {
        console.log('Authenticated');
        next();
    } else {
        res.send("Unauthorized");
    }
    
}

app.use(logMiddleware);
app.use(apiCheckMiddleware);

app.get('/', (req, res) => {
    console.log(req.name);
    console.log('Hello, World!');
    res.send('Hello, World!');
});

app.get('/data', (req, res) => {
    res.json({
        city: 'New York',
        country: 'USA',
        temp: 25,
        humidity: 80
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});