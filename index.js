// 1. import json-server
const jsonServer=require('json-server')

//  2. create a server using jsonServer
const eplannerServer=jsonServer.create()

//  3. creation of middleware
const middleware=jsonServer.defaults()

//  4. router setup
const router=jsonServer.router('db.json')

// 5. implementing use
eplannerServer.use(middleware)
eplannerServer.use(router)

//  6. port creation
const port=3000 || process.env.port

//  7. start server
eplannerServer.listen(port,()=>{
    console.log("Event Planner Server running on the port"+port)
})