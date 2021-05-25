const nodemailer = require('nodemailer');

export default function (req, res) {
	const { surname, firstName, email, body } = req.body;
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
			clientId: process.env.OAUTH_CLIENTID,
			clientSecret: process.env.OAUTH_CLIENT_SECRET,
			refreshToken: process.env.OAUTH_REFRESH_TOKEN,
		},
	});
	let mailOptions = {
		from: email,
		to: 'effiumindigenes@gmail.com',
		subject: `Message From ${surname} ${firstName}`,
		text: `${body} | Sent from: ${email}`,
		html: `<div>${body}</div><p>Sent from:
    ${email}</p>`,
	};
	transporter.sendMail(mailOptions, function (err, data) {
		if (err) {
			console.log('Error ' + err);
			res.json({ success: false, payload: err });
		} else {
			res.json({ success: true, payload: 'Message sent successfully' });
			console.log('Email sent successfully');
		}
	});
}
