import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

const Button = styled.button`
	background-color: #c6426e;
	color: white;
	border: 3px solid white;
	border-radius: 8px;
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		src: local('Roboto'), local('RobotoMono-Regular'), url('./fonts/RobotoMono-Regular.ttf') format('ttf');
	}
	font-family: 'Roboto', monospace;
	font-size: 1.25rem;
	padding-left: 3%;
	padding-right: 3%;
`;
const Div = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`
const H4 = styled.h4`
	margin-top: 5%;
	margin-bottom: 5%;
`;


function GButtons() {
	return (
		<div>
			<Div>
				<Button id="GB1">
					<H4>Play</H4>
				</Button>
				<Button id="GB2">
					<H4>Pause</H4>
				</Button>
				<Button id="GB3">
					<H4>Stop</H4>
				</Button>
				<Button id="GB4">
					<H4>Next</H4>
				</Button>
				<Button id="GB5">
					<H4>Clear</H4>
				</Button>
			</Div>
		</div>
	);
}

export default GButtons;
