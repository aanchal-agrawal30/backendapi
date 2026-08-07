const fs = require("fs");
const data=require("../list1")
const database=require("../database/db.js")
const getteacherdata=async(req,res)=>{
    try
    {
        const db=await database.connectDB();
        let result = await db.collection("teacher").find().toArray();
        res.json({
            success:true,
            message: data,
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

const insertteacherdata=async(req,res)=>{
   try{
    const db=await database.connectDB();
    let result = await db.collection("teacher").insertOne(req.body);
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


const updateteacherdata=async(req,res)=>{
  try{
      const db=await database.connectDB();
      let result = await db.collection("teacher").updateOne({id:parseInt(req.params.id) }, { $set: req.body});
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
const deleteteacherdata=async(req,res)=>{
    try{
        const db=await database.connectDB();
        let teacherid=parseInt(req.params.id)
        let result = await db.collection("teacher").deleteOne({id:teacherid });
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
module.exports={getteacherdata,insertteacherdata,updateteacherdata,deleteteacherdata}