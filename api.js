const express = require("express");
const app = express(); 
const cors=require('cors')
const PORT = 3001
const swaggerDocs = require("./swagger");
const indexRouter = require("./Router/index.js");
app.use(cors())
app.use(express.json())
app.use("/",indexRouter)
swaggerDocs(app);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
