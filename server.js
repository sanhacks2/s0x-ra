require("http").createServer((q,s)=>s.end("s0x-deploy-v1")).listen(process.env.PORT||5000)
