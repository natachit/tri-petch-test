import React from 'react';
import styled from 'styled-components';

const getNumberColor = (numberColor) => {
	if (numberColor === 'purple') {
		return '#8F6BE8';
	}
	return '#000000';
};

const getUnderlineColor = (underlineColor) => {
	if (underlineColor === 'white') {
		return '#FFFFFF';
	}
	return '#603EBE';
};

const ItemTitle = ({ number, text, numberColor, underlineColor }) => {
	const formatNumber = (number) => (number < 10 ? `0${number}` : `${number}`);

	return (
		<Title>
			<NumberContainer>
				<Number numberColor={numberColor}>
					{formatNumber(number)}
				</Number>
				<Underline underlineColor={underlineColor}></Underline>
			</NumberContainer>
			<Text>{text}</Text>
		</Title>
	);
};

const NumberContainer = styled.div`
	margin-right: 6px;
	margin-top: 2px;
`;

const Underline = styled.div`
	width: 100%;
	background-color: ${(props) => getUnderlineColor(props.underlineColor)};
	height: 3px;
	margin-top: 1px;
	border-radius: 5px;
`;

const Number = styled.div`
	font-size: 0.8rem;
	color: ${(props) => getNumberColor(props.numberColor)};
	line-height: normal;
`;

const Text = styled.div`
	font-size: 1.3rem;
	color: #c2c2c2;
	text-transform: uppercase;
`;

const Title = styled.div`
	display: flex;
	margin-bottom: 15px;
`;

export default ItemTitle;
