import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

const mediaLists = [
	{
		name: 'news',
		path: '/',
		icon: <AnnouncementIcon />,
	},
	{
		name: 'picture',
		path: '/',
		icon: <PhotoLibraryIcon />,
	},
	{
		name: 'Video',
		path: '/',
		icon: <VideoLibraryIcon />,
	},
];

const historyLists = [
	{
		name: 'history',
		path: '/',
	},
	{
		name: 'custom and tradition',
		path: '/',
	},
	{
		name: 'fashion',
		path: '/',
	},
	{
		name: 'festival',
		path: '/',
	},
];

const menu = [
	{
		name: 'home',
		path: '/',
	},
];

export { mediaLists, historyLists };
