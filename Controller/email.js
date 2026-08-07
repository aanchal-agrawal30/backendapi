const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    console.log("API Called");
    console.log(req.body);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "aanchalagrawal3306@gmail.com",
        pass: "tdljfoqybeamzmoh",
      },
    });

    await transporter.verify();
    console.log("Transporter verified");

    const info = await transporter.sendMail({
      from: "aanchalagrawal3306@gmail.com",
      to: req.body.to,
      subject: "Test Email",
      text: "this is the test mail",
    });

    console.log(info);

    res.json({
      success: true,
      message: "Email sent",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};


 
const sendMailnew= async (to) => {
  try {
    console.log("API Called");
   

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "aanchalagrawal3306@gmail.com",
        pass: "tdljfoqybeamzmoh",
      },
    });

    await transporter.verify();
    console.log("Transporter verified");

    const info = await transporter.sendMail({
      from: "aanchalagrawal3306@gmail.com",
      to: to,
      subject: "Test Email",
      text: "this is the test mail",
    });

    console.log(info);

    res.json({
      success: true,
      message: "Email sent",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = { sendMail,sendMailnew };