const nodemailer = require('nodemailer');

export default function (req, res) {
	const {
		surname,
		firstName,
		otherName,
		gender,
		age,
		clan,
		subClan,
		email,
		dailingCode,
		phone,
		address,
		location,
		lga,
		state_province,
		country,
	} = req.body;
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
		subject: `New Membership registration`,
		text: ` By ${surname}, ${firstName} ${otherName && otherName}`,
		html: `
      <div>
        <h4>New Membership Registration</h4>
        <p>Name: ${surname}, ${firstName}, ${otherName && otherName}</p>
        <p>Gender: ${gender}</p>
        <p>Age range: ${age}</p>
        <P>Phone: ${dailingCode}${phone.substring(1)}</P>
        <p>Clan: ${clan}, sub-clan: ${subClan}</p>
        <p>Address: ${address}, ${location && location}, ${
			lga && lga
		}, ${state_province}, ${country}</p>

      </div>
    `,
	};
	transporter.sendMail(mailOptions, function (err, data) {
		if (err) {
			console.log('Error ' + err);
			res.json({ success: false, payload: err });
		} else {
			res.json({ success: true, payload: 'Message sent successfully' });
			console.log('Resgistration was successfully');
		}
	});
}
