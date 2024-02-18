const http=require('http');
const fs=require('fs');
const url=require('url');




const server =http.createServer((req,res)=>{
const pathName=req.url;
if(pathName==='/'|| pathName===''){
     fs.readFile('./index.html', 'utf-8',(err,data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('Internal Server Error');
        }
        else{
            res.writeHead(200,{'content-type' : 'text/html'});
            res.end(data);
        }
     });
  
}
else if(pathName==='/about'){
 fs.readFile('./about.html', 'utf-8',(err,data)=>{
    if(err){
        res.writeHead(500, {'Content-Type': 'text/html'});
            res.end('Internal Server Error');
    }
    else{
        res.writeHead(200,{'content-type' : 'text/html'});
        res.end(data);}
 });
    
}
else if(pathName==='/contact-me'){
 fs.readFile('./contact-me.html', 'utf-8',(err,data)=>{
    if(err){
        res.writeHead(500, {'Content-Type': 'text/html'});
            res.end('Internal Server Error');
    }
    else{
        res.writeHead(200,{'content-type' : 'text/html'});
        res.end(data);}
    });
}
 else{
 fs.readFile('./404.html', 'utf-8',(err,data)=>{
    if (err) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('Internal Server Error');
    }else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end(data);
    } 
 });
  
 }
});
server.listen(8000,()=>{
    console.log('server is now working');
})
