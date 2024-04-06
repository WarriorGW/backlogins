import transporter from "../config/nodemailer.js";

export const sendMail = (req, res) => {
	const mailOptions = {
		from: process.env.MyMail,
		to: req.body.email,
		subject: "Validar correo electrónico",
		text: `
¡Hola! Gracias por registrarte en nuestro servicio. 

Para completar el proceso de registro, por favor haz clic en el siguiente enlace: ${req.body.text}. 
Si no has solicitado este correo, puedes ignorarlo. 

Gracias.`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error sending email: ", error);
			return res.status(500).json({ message: "Error sending email" });
		} else {
			console.log("Email sent: ", info.response);
			return res.json({ message: "Email sent" });
		}
	});
};
