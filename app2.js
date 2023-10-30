const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Welcome to my server")
    }
    if(req.url === '/about'){
        res.end("We are the best")
    }
    res.end(`
    <h1>Oops page not found</h1>
    <p>check page url</p>
    <a href="/">back home</a> 
    `)
})

server.listen(3000)