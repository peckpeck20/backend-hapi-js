// 'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:5555
});

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
});

//take url parameter
server.route({
    method: 'GET',
    path: '/getName/{name}',
    handler: (request, h) => {
        console.log(request)
        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
});

server.route({
    method:'POST',
    path:'/submit',
    handler: (request,h) => {
        console.log(request);
    
        return encodeURIComponent(request)
    }
})



// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();