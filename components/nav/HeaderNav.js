import React from 'react';
import Link from 'next/link';
import styles from './styles';
import cx from 'classnames';
import { historyLists, mediaLists } from './data';

// MAterial-ui
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// Material-ui/Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(styles);

const HeaderNav = () => {
	const classes = useStyles();

	const [mediaAnchorEl, setMediaAnchorEl] = React.useState(null);
	const [historyAnchorEl, setHistoryAnchorEl] = React.useState(null);

	// Toggle media drop down
	const toggleMediaDropdown = (event) => {
		setMediaAnchorEl(mediaAnchorEl ? null : event.currentTarget);
	};

	// Toggle media drop down
	const toggleHistoryDropdown = (event) => {
		setHistoryAnchorEl(historyAnchorEl ? null : event.currentTarget);
	};

	const rotateMediaIcon = cx({ [classes.expandMoreIcon]: mediaAnchorEl });
	const rotateHistoryIcon = cx({ [classes.expandMoreIcon]: historyAnchorEl });

	return (
		<Box marginTop='10px'>
			<Box className={classes.container}>
				<MenuList className={classes.menu}>
					<Link href='/'>
						<MenuItem>
							<a>home</a>
						</MenuItem>
					</Link>
					<Link href='/membership'>
						<a>
							<MenuItem>membership</MenuItem>
						</a>
					</Link>
					<MenuItem onClick={toggleMediaDropdown}>
						media <ExpandMoreIcon className={rotateMediaIcon} />
					</MenuItem>
					<Popper
						style={{ zIndex: '10000' }}
						open={Boolean(mediaAnchorEl)}
						anchorEl={mediaAnchorEl}
					>
						<ClickAwayListener onClickAway={toggleMediaDropdown}>
							<Paper>
								<List className={classes.list}>
									{mediaLists.map((list, key) => (
											<Link href={list.path} key={key}>
											<a>
										<ListItem onClick={toggleMediaDropdown} button>
											{list.icon}
											{list.name}
										</ListItem>
										</a>
										</Link>
									))}
								</List>
							</Paper>
						</ClickAwayListener>
					</Popper>
					<MenuItem>blog</MenuItem>
					<MenuItem onClick={toggleHistoryDropdown}>
						about us <ExpandMoreIcon className={rotateHistoryIcon} />
					</MenuItem>
					<Popper
						style={{ zIndex: '10000' }}
						open={Boolean(historyAnchorEl)}
						anchorEl={historyAnchorEl}
					>
						<ClickAwayListener onClickAway={toggleHistoryDropdown}>
							<Paper>
								<List className={classes.list}>
									{historyLists.map((list, key) => (
										<Link href={list.path} key={key}>
											<a>
												<ListItem onClick={toggleHistoryDropdown} button>
													{list.icon}
													{list.name}
												</ListItem>
											</a>
										</Link>
									))}
								</List>
							</Paper>
						</ClickAwayListener>
					</Popper>
					<Link href='/contact'>
						<MenuItem>
							<a>contact</a>
						</MenuItem>
					</Link>
				</MenuList>
			</Box>
		</Box>
	);
};

export default HeaderNav;
