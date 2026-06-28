const nodemailer = require("nodemailer");
require("dotenv").config();


const mailSender = async (email, title, body) => {
     console.log("mailSender called");
    try {
        console.log({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            user: process.env.MAIL_USER,
            passExists: !!process.env.MAIL_PASS,
        });
        
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true, // Required for port 465
            family: 4,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })
        await transporter.verify();
        console.log("SMTP Connected");

        let info = await transporter.sendMail({
            from: `"Delhi Meerut Cargo" <${process.env.MAIL_USER}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        // console.log("info", info);
        return info;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = mailSender;