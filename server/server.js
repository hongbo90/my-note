const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname,'db.json'));
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache) 
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/echo',(req,res)=>{
	// res.jsonp({name:'hello'});
	// console.log(req.query.name)
})

server.post('/login',(req,res,next)=>{
	// console.log(req.headers);
	// res.header('abcdefg','token');
	let token = generateToken();
	res.json({"token":token});
})

// To handle POST, PUT and PATCH you need to use a body-parser 
// You can use the one used by JSON Server 
server.use(jsonServer.bodyParser);
server.use((req,res,next)=>{
	if(req.method === 'POST'){
		req.body.createAt = Date.now();
	}
	// Continue to JSON Server router
	next();
});

server.use(router);
server.listen(9000,()=>{
	console.log('JSON Server is Running on 9000');
})

function generateToken(){
	return (new Date).getTime() + (Math.ceil(Math.random()*10000)).toString();
}


