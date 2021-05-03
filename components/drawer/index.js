import React, { useContext, useState } from 'react';
import Link from 'next/link';
import AppContext from '../../context/app/appContext';
import styles from './styles';
import cx from 'classnames';
import Icons from '../header/logo-lists';

// MAterial-ui/Core
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';

// Material-ui/Icons
import CloseIcon from '@material-ui/icons/Close';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PeopleIcon from '@material-ui/icons/People';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles(styles);

const Drawer = () => {
	const classes = useStyles();
	const appContext = useContext(AppContext);
	const { isDisplayDrawer, toggleDrawer } = appContext;

	const toggleDrawerHandler = () => {
		toggleDrawer();
		setIsDisplayAbout(false);
		setIsDisplayMedia(false);
	};

	const [isDisplayMedia, setIsDisplayMedia] = useState(false);
	const toggleMedia = () => setIsDisplayMedia(!isDisplayMedia);
	const closeMedia = () => {
		toggleDrawer();
		setIsDisplayMedia(false);
	};

	const [isDisplayAbout, setIsDisplayAbout] = useState(false);
	const toggleAbout = () => setIsDisplayAbout(!isDisplayAbout);
	const closeAbout = () => {
		toggleDrawer();
		setIsDisplayAbout(false);
	};

	const drawer = cx(classes.drawer, {
		[classes.displayDrawer]: isDisplayDrawer,
	});

	const lists = (
		<List className={classes.listWrapper}>
			<ListItem onClick={toggleDrawerHandler} button>
				<Link href='/'>
					<a className={classes.link}>
						<HomeIcon />
						home
					</a>
				</Link>
			</ListItem>
			<ListItem onClick={toggleDrawerHandler} button>
				<PeopleIcon />
				membership
			</ListItem>
			<ListItem
				className={cx({ [classes.collapseListItem]: isDisplayMedia })}
				style={{
					dislay: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
				onClick={toggleMedia}
				button
			>
				<Box display='flex' alignItems='center'>
					<PermMediaIcon />
					media
				</Box>
				<ChevronRightIcon
					className={cx({
						[classes.rotate]: isDisplayMedia,
					})}
				/>
			</ListItem>
			<Collapse in={isDisplayMedia}>
				<List>
					<ListItem
						className={classes.innerListItem}
						onClick={closeMedia}
						button
					>
						news
					</ListItem>
					<ListItem
						className={classes.innerListItem}
						onClick={closeMedia}
						button
					>
						picture
					</ListItem>
					<ListItem
						className={classes.innerListItem}
						onClick={closeMedia}
						button
					>
						video
					</ListItem>
				</List>
			</Collapse>
			<ListItem onClick={toggleDrawerHandler} button>
				<BookIcon />
				blog
			</ListItem>
			<ListItem
				className={cx({ [classes.collapseListItem]: isDisplayAbout })}
				style={{ display: 'flex', justifyContent: 'space-between' }}
				onClick={toggleAbout}
				button
			>
				<Box display='flex' alignItems='center'>
					<InfoIcon />
					about us
				</Box>

				<ChevronRightIcon
					className={cx({
						[classes.rotate]: isDisplayAbout,
					})}
				/>
			</ListItem>
			<Collapse in={isDisplayAbout}>
				<List>
					<ListItem
						className={classes.innerListItem}
						onClick={closeAbout}
						button
					>
						history
					</ListItem>
					<ListItem
						className={classes.innerListItem}
						onClick={closeAbout}
						button
					>
						custom and tradition
					</ListItem>
					<ListItem
						className={classes.innerListItem}
						onClick={closeAbout}
						button
					>
						language
					</ListItem>
					<ListItem
						className={classes.innerListItem}
						onClick={closeAbout}
						button
					>
						festival
					</ListItem>
				</List>
			</Collapse>
			<ListItem onClick={toggleDrawerHandler} button>
				<Link href='/contact'>
					<a className={classes.link}>
						<ContactsIcon />
						contact
					</a>
				</Link>
			</ListItem>
		</List>
	);

	return (
		<Box zIndex='10000'>
			<SwipeableDrawer
				className={drawer}
				anchor='left'
				variant='persistent'
				open={isDisplayDrawer}
				onClose={toggleDrawerHandler}
				onOpen={toggleDrawerHandler}
			>
				<Box
					padding='5px 15px'
					display='flex'
					justifyContent='space-between'
					alignItems='center'
				>
					<Typography
						onClick={toggleDrawerHandler}
						className={classes.textHeader}
					>
						<Link href='/'>
							<a>Effium Indigenes</a>
						</Link>
					</Typography>
					<Button onClick={toggleDrawerHandler} className={classes.btn}>
						<CloseIcon />
					</Button>
				</Box>
				<Divider />
				{lists}
				<Box
					display='flex'
					alignItems='center'
					padding='0px 15px'
					justifyContent='space-between'
				>
					<Typography variant='body2'>
						Follow us on{' '}
						<ArrowRightAltIcon
							style={{ marginLeft: '5px', verticalAlign: 'middle' }}
						/>
					</Typography>

					<Icons />
				</Box>
			</SwipeableDrawer>
		</Box>
	);
};

export default Drawer;
