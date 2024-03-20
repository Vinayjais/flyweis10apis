const express = require('express');
const optrouter = require('./Routers/OtpRouter');
const funRouter = require('./Routers/funRouters')
const bodyParser = require('body-parser');
const sequelize = require('./Utilities/database');
const user = require('./Modals/user')


const server = express();
 server.use(express.json());
 server.use(bodyParser.urlencoded({ extended: true}));
 const PORT = 4000;
  server.use(optrouter);
  server.use(funRouter)



  sequelize
  .sync()
  .then((result) => {
   server.listen(PORT, ()=>{
      console.log("Server Running On Port 4000")
   })
  }).catch((err) => {
       console.log(err)
  });

