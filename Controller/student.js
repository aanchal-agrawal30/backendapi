const fs = require("fs");
const data=require("../list")
const database=require("../database/db.js")
const getstudentdata=async(req,res)=>{
    try
    {
        const db=await database.connectDB();
        let result = await db.collection("student").find().toArray();
        res.json({
            success:true,
            message: result,
            status:200
        })
    }
    catch(err)
    {
      res.json({
    success: false,
    status:500,
    message: "Error Reading File",    
    error: err.message,
    });
}
}

const insertstudentdata=async(req,res)=>{
   try{
    const db=await database.connectDB();
    let result = await db.collection("student").insertOne(req.body);
    if(result.acknowledged==true)
    {
     res.json({
    success: true,
    message:"record insert successful",
    status:200,
});
}
else{
    res.json({
    success: false,
    message:"something went wrong",
});
}
   }
   catch(err)
    {
      res.json({
    success: false,
    status:500,
    message: "Error Reading File",    
    error: err.message,
    });
}
}
const updatestudentdata=async(req,res)=>{
  try{
    const db=await database.connectDB();
    let result = await db.collection("student").updateOne({id:parseInt(req.params.id) }, { $set: req.body});
    if(result.modifiedCount>0)
    {
     res.json({
    success: true,
     resultdata:result,
    message:"record update successful",
    status:200,
});
}
else{
    res.json({
    success: false,
    message:"something went wrong",
});
}
   }
   catch(err)
    {
      res.json({
    success: false,
    status:500,
    message: "Error Reading File",    
    error: err.message,
    });
}
}
const deletestudentdata=async(req,res)=>{
   try{
    const db=await database.connectDB();
    let studentid=parseInt(req.params.id)
    let result = await db.collection("student").deleteOne({id:studentid });
    if(result.deletedCount>0)
    {
     res.json({
    success: true,
    resultdata:result,
    message:"record deleted successful",
    status:200,
});
}
else{
    res.json({
    success: false,
    message:"something went wrong",
});
}
   }
   catch(err)
    {
      res.json({
    success: false,
    status:500,
    message: "Error Reading File",    
    error: err.message,
    });
}
}
module.exports={getstudentdata,insertstudentdata,updatestudentdata,deletestudentdata}