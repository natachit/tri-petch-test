import React from 'react';
import ItemTitle from './ItemTitle';
import Carousel from 'react-elastic-carousel';

export default function SectionMobile({ section }) {
	return (
		<>
			<div className='title'>{section.title}</div>
			<img src={section.image} alt=''></img>
			<Carousel itemsToShow={1} showArrows={false} className='bg-gray'>
				{section.items.map((item, itemIndex) => (
					<div key={`item_${itemIndex}`}>
						<ItemTitle
							number={itemIndex + 1}
							text={item.title}
						></ItemTitle>
						<p>{item.description}</p>
					</div>
				))}
			</Carousel>
		</>
	);
}
