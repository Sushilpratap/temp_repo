const http=require('http');

const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.end("welcome to our home page");
}
if (req.url==='/about')
    res.end("Here is our brief History");

   res.end(`
   <h1>Oops!</h1>
   <p>The page you are lookig for does not exist</p>
   `);
});
server.listen(3000);