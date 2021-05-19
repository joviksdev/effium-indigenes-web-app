import React from 'react';
import Link from 'next/link';
import styles from './styles';
import img from '../../assets/images/membership.jpg';
import { grayColor, blackColor } from '../../assets/js/componentsStyles';

// MAterial-ui/core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

// Material-ui/Icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(styles);

const MembershipHeader = () => {
	const classes = useStyles();
	return (
		<Box position='relative'>
			<Box
				position='relative'
				bgcolor={blackColor}
				color={grayColor[4]}
				className={classes.wrapper}
			>
				<Box height='100%' className={classes.subHeader}>
					<Box>
						<Box maxWidth='560px'>
							<Typography className={classes.headerText}>
								Membership Signup
							</Typography>

							<Breadcrumbs className={classes.breadCrumbs}>
								<Link href='/'>
									<a className={classes.link}>Home</a>
								</Link>
								<Link href='/membership'>
									<a className={`${classes.link} ${classes.active}`}>
										Membership
									</a>
								</Link>
							</Breadcrumbs>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MembershipHeader;
