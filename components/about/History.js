import React from 'react';
import styles from './styles';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const History = () => {
	const classes = useStyles();
	return (
		<Box id='history'>
			<Typography className={classes.subHeaderText} variant='h6'>
				History <small>- The people</small>
			</Typography>
			<Box marginTop='20px'>
				<Typography
					style={{ marginBottom: '15px' }}
					className={classes.text}
					variant='body1'
				>
					<span className={classes.entryText}>Effium</span> is a distinct tribe
					of Orrin ethnic group- an Igbo sub ethnic nationality that is
					comprised of the following tribes: Effium, Ntezi, Okpoto, Amuda/Idzem,
					and Okpomolo which are Orrin tribes in Ebonyi State, Utonkon/Uffia- an
					Orrin tribe in Benue State and Ukelle- an Orrin tribe in Cross River
					State among others.
				</Typography>
				<Typography
					style={{ marginBottom: '15px' }}
					className={classes.text}
					variant='body1'
				>
					Effium is the ancestral land of Effium indigenous people- a tribe
					which is made of two (2) major Clans known as Weefa and Wigbeke and
					seven (7) autonomous sub-Clans which are: (1) Osata, (2) Wogwu, (3)
					Wogbale, (4) Waatuma, (5) Inyafuo, (6) Ogbagere, and (7) Uffiacha.
				</Typography>
				<Typography
					style={{ marginBottom: '15px' }}
					className={classes.text}
					variant='body1'
				>
					Effium share common boundary with Izzi, Ngbo (in Ebonyi state); Ulayi
					and Igumale tribe in Benue state. The major occupation of Effium
					people is farming/agriculture- this is the reason why Effium has the
					biggest markets for the supply of food items such as processed cassava
					(aka garri), okra and others to different markets in the Eastern
					region of Nigeria.
				</Typography>
				<Typography
					style={{ marginBottom: '15px' }}
					className={classes.text}
					variant='body1'
				>
					Popular markets in Effium are Effium urban market ( Udebor/Kafia kwe
					Uffium Udebo market Uffium's one of the largest commercial
					agricultural market in Southeast Nigeria and is known as Effium main
					market), Inikiri udeno, Okpeere market, Ohage market etc.
				</Typography>
			</Box>
		</Box>
	);
};

export default History;
