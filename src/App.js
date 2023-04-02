import { useEffect, useState } from 'react';

import Section from './Components/Section';
import SectionMobile from './Components/SectionMobile';

import athletsDesktopImage from './images/athlets-desktop.svg';
import athletsTabletImage from './images/athlets-tablet.svg';
import athletsMobileImage from './images/athlets-mobile.svg';
import playersDesktopImage from './images/players-desktop.svg';
import playersTabletImage from './images/players-tablet.svg';
import playersMobileImage from './images/players-mobile.svg';
import './App.css';

const DESKTOP_DEVICE = 'desktop';
const TABLET_DEVICE = 'tablet';
const MOBILE_DEVICE = 'mobile';

const sections = [
	{
		title: 'athlets',
		image: {
			[DESKTOP_DEVICE]: athletsDesktopImage,
			[TABLET_DEVICE]: athletsTabletImage,
			[MOBILE_DEVICE]: athletsMobileImage,
		},
		itemsAlign: 'right',
		items: [
			{
				title: 'connetion',
				description:
					'Connect with coaches directly, you can ping coaches to view profile.',
				bgColor: 'white',
				numberColor: 'black',
				underlineColor: 'purple',
			},
			{
				title: 'collaboration',
				description:
					'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
				bgColor: 'gray',
				numberColor: 'black',
				underlineColor: 'purple',
			},
			{
				title: 'growth',
				description:
					'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
				bgColor: 'purple',
				numberColor: 'black',
				underlineColor: 'white',
			},
		],
	},
	{
		title: 'players',
		image: {
			[DESKTOP_DEVICE]: playersDesktopImage,
			[TABLET_DEVICE]: playersTabletImage,
			[MOBILE_DEVICE]: playersMobileImage,
		},
		itemsAlign: 'left',
		items: [
			{
				title: 'connetion',
				description:
					'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
				bgColor: 'white',
				numberColor: 'black',
				underlineColor: 'purple',
			},
			{
				title: 'collaboration',
				description:
					'Work with recruiter to increase your chances of finding talented athlete.',
				bgColor: 'gray',
				numberColor: 'black',
				underlineColor: 'purple',
			},
			{
				title: 'growth',
				description:
					'Save your time, recruit proper athlets for your team.',
				bgColor: 'darkpurple',
				numberColor: 'purple',
				underlineColor: 'white',
			},
		],
	},
];

function App() {
	const [device, setDevice] = useState(null);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
	}, []);

	const handleResize = () => {
		const width = window.innerWidth;
		if (width <= 320) {
			setDevice((prev) => MOBILE_DEVICE);
		} else if (width <= 768) {
			setDevice((prev) => TABLET_DEVICE);
		} else {
			setDevice((prev) => DESKTOP_DEVICE);
		}
	};

	return (
		<div className='App'>
			{device === MOBILE_DEVICE ? (
				<>
					{sections.map((section, index) => (
						<SectionMobile
							section={{
								...section,
								image: section.image[device],
							}}
							key={`section_${index}`}
						></SectionMobile>
					))}
				</>
			) : (
				<>
					{sections.map((section, index) => (
						<Section
							section={{
								...section,
								image: section.image[device],
							}}
							key={`section_${index}`}
						></Section>
					))}
				</>
			)}
		</div>
	);
}

export default App;
