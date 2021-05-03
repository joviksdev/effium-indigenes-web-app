import React from 'react';
import styles from './styles';

//MAterial-UI/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// Materil-Ui/Icon
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(styles);

const ContactDetails = () => {
	const classes = useStyles();
	return (
		<Box>
			<Typography variant='h6' className={classes.headerText}>
				Contact details
			</Typography>
			<Typography variant='body2' paragraph>
				Do well to contact us or follow us on any of our social media platform.
			</Typography>
			<Box>
				<List className={classes.list}>
					<ListItem button>
						<a
							className={classes.link}
							href='https://web.facebook.com/groups/146043538866715'
							target='_blank'
						>
							<FacebookIcon />
							<span>Facebook/Effium Community</span>
						</a>
					</ListItem>
					<ListItem button>
						<PhoneIcon />
						<a
							style={{ marginRight: '8px' }}
							className={classes.link}
							href='tel:+234 8033751328'
						>
							<span>+234 8033751328,</span>
						</a>
						{'  '}
						<a className={classes.link} href='tel:+234 7081816961'>
							<span>+234 7081816961</span>
						</a>
					</ListItem>
					<ListItem button>
						<EmailIcon />
						<span>info@effiumindigenes.org</span>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default ContactDetails;
