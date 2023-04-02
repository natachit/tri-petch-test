import React from 'react';
import ItemTitle from './ItemTitle';

export default function Section({ section }) {
	return (
		<div className='section'>
			<div
				className={`image image-${
					section.itemsAlign === 'left' ? 'right' : 'left'
				}`}
				style={{ backgroundImage: `url(${section.image})` }}
			></div>
			<div className={`title ${section.itemsAlign}`}>{section.title}</div>
			{section.items.map((item, index) => (
				<div
					key={`item_${index}`}
					className={`item bg-${item.bgColor}`}
				>
					<div className={section.itemsAlign}>
						<ItemTitle
							number={index + 1}
							text={item.title}
							numberColor={item.numberColor}
							underlineColor={item.underlineColor}
						></ItemTitle>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}
