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
		path: '/about#history',
	},
	{
		name: 'custom and tradition',
		path: '/about#custom-and-tradition',
	},
	{
		name: 'festival',
		path: '/about#festival',
	},
	{
		name: 'ASSEI',
		path: '/about#ASSEI',
	},
];

export { mediaLists, historyLists };
