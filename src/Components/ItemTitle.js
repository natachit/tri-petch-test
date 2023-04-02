import React from 'react';

const ItemTitle = ({ number, text }) => {
	const formatNumber = (number) => (number < 10 ? `0${number}` : `${number}`);

	return (
		<div className='item-title'>
			<div class='item-title-number-container'>
				<div className='item-title-number'>{formatNumber(number)}</div>
				<div className='item-title-number-underline'></div>
			</div>
			{text}
		</div>
	);
};

export default ItemTitle;
