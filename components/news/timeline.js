import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles';
import img from '../../assets/images/c2.jpg';
import img2 from '../../assets/images/c3.jpg';

// Material-ui/Core
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

// Material-ui/Icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(styles);

const TimelineContainer = () => {
	const classes = useStyles();
	const data = [
		{
			title: 'Effium crisis',
			body: 'Group faults kidnap, murder of rtd Inspector.',
			img,
		},
		{
			title: 'Effium crisis',
			body: 'Group commends Umahi for return of peace.',
			img: img2,
		},
	];
	return (
		<Box>
			<Timeline className={classes.timeline} align='left'>
				{data.map((news, key) => (
					<TimelineItem key={key}>
						<TimelineSeparator>
							<TimelineDot variant='outlined' />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Box>
								<Typography
									className={classes.smallTextHeader}
									variant='h6'
									color='textSecondary'
								>
									{news.title}
									<small> - {new Date().toDateString()}</small>
								</Typography>
								<Box
									marginTop='10px'
									display='grid'
									gridTemplateColumns='20% 80%'
									gridGap='10px'
								>
									<Box>
										<Image
											width='400px'
											height='300px'
											src={news.img}
											alt={news.title}
										/>
									</Box>
									<Typography variant='body2'>{news.body}</Typography>
								</Box>
							</Box>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
			<Link href='/'>
				<a className={classes.link}>
					see more <ArrowRightAltIcon />
				</a>
			</Link>
		</Box>
	);
};

export default TimelineContainer;
