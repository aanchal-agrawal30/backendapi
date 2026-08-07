const database = require("../database/db.js");
const email1=require("../Controller/email.js")
const login = async (req, res) => {
  try {

    const db = await database.connectDB();

    const { email, password } = req.body;

    const user = await db.collection("users").findOne({
      email: email,
      password: password,
    });

    if (user) {
      res.json({
        success: true,
        message: "Login Successful",
        user: user,
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

  } catch (err) {

    res.json({
      success: false,
      status: 500,
      message: err.message,
    });

  }
};

const register = async (req, res) => {

    try {

        const db = await database.connectDB();

        const { name, email, password } = req.body;

        // Check if email already exists
        const existingUser = await db.collection("users").findOne({
            email: email
        });

        if (existingUser) {
            return res.json({
                success: false,
                message: "Email already exists"
            });
        }

        // Insert new user
        await db.collection("users").insertOne({
            name,
            email,
            password
        });
    
        res.json({
            success: true,
            message: "Registration Successful"
        });

    }
    catch (err) {

        res.json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {login,register}