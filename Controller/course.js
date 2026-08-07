const fs = require("fs");
const data=require("../list2")
const database=require("../database/db.js")
const getcoursedata=async(req,res)=>{
    try
    {
        const db=await database.connectDB();
        let result = await db.collection("course").find().toArray();
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
const insertcoursedata=async(req,res)=>{
   try{
    const db=await database.connectDB();
    let result = await db.collection("course").insertOne(req.body);
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


const updatecoursedata=async(req,res)=>{
    try{
         const db=await database.connectDB();
         let result = await db.collection("course").updateOne({id:parseInt(req.params.id) }, { $set: req.body});
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
const deletecoursedata=async(req,res)=>{
   try{
           const db=await database.connectDB();
           let courseid=parseInt(req.params.id)
           let result = await db.collection("course").deleteOne({id:courseid });
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
module.exports={getcoursedata,insertcoursedata,updatecoursedata,deletecoursedata}