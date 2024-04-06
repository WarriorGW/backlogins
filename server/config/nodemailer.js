import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	auth: {
		user: process.env.MyMail,
		pass: process.env.MyPass,
	},
});

console.log(process.env.MyMail, process.env.MyPass);

transporter.verify().then(console.log).catch(console.error);

export default transporter;
