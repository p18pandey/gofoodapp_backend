const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoDB= require("./db")
const cors = require('cors')
const BASE_URL = process.env.BASE_URL 

mongoDB();  
// app.use(cors(
//   {origin : "http://localhost:3000",
    
//   methods : ["GET" ,"POST" ,"PUT" ,"DELETE"]
  
// }
// ));
// app.use(cors());
app.use((req,res,next)=>{
  // res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.setHeader("Access-Control-Allow-Origin","https://gofoodp42.netlify.app");
  // res.setHeader("Access-Control-Allow-Origin","https://gofood82p.netlify.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"

  );
  next();
})

app.use(express.json())
app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.get('/', (req, res) => {
  res.send('Hello World!')
})   
// app.use('/api/auth', require('./Routes/Auth'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

