import React from 'react';
import Link from 'next/link';
import styles from './styles';
import SpeedDial from './speedDial';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(styles);

const AboutLayout = ({ children }) => {
	const classes = useStyles();
	return (
		<Box margin='15px 0px'>
			<Hidden implementation='css' mdDown>
				<Box className={classes.sidebar}>
					<Grid className={classes.sidebarContent} container>
						<Grid md={4} item>
							<Card className={classes.card}>
								<List className={classes.list}>
									<Link href='/about/history'>
										<ListItem button>
											<a>history</a>
										</ListItem>
									</Link>
									<Link href='/about/custom-and-tradition'>
										<ListItem button>
											<a>custom and tradition</a>
										</ListItem>
									</Link>
									<Link href='/about/language'>
										<ListItem button>
											<a>language</a>
										</ListItem>
									</Link>
									<Link href='/about/festival'>
										<ListItem button>
											<a>festival</a>
										</ListItem>
									</Link>
								</List>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Hidden>
			<Box>
				<Grid className={classes.content} container>
					<Grid xs={12} md={8} item>
						{children}
						<SpeedDial />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default AboutLayout;
