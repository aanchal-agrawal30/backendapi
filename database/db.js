const { MongoClient } = require("mongodb");

//const url = "mongodb://127.0.0.1:27017";
//const url="mongodb+srv://aanchalagrawal90_db_user:WrgQcdmEjyP1ca0r@cluster0.hc5schj.mongodb.net/?appName=Cluster0"
const url="mongodb://aanchalagrawal90_db_user:WrgQcdmEjyP1ca0r@ac-il1bee1-shard-00-00.hc5schj.mongodb.net:27017,ac-il1bee1-shard-00-01.hc5schj.mongodb.net:27017,ac-il1bee1-shard-00-02.hc5schj.mongodb.net:27017/?ssl=true&replicaSet=atlas-7ed2dq-shard-0&authSource=admin&appName=Cluster0"
const client = new MongoClient(url);

let db;

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Connected Successfully");

   
    db = client.db("sample_mflix"); 
    return db;
  } catch (error) {
    console.error("Database Connection Error:", error);
  }
}

 

module.exports = { connectDB };