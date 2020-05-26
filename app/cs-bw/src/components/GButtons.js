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
	margin-top: 3%;
`

function GButtons() {
	return (
		<div>
		<Div>
			<Button id="GB1">
				<h4>Play</h4>
			</Button>
			<Button id="GB2">
				<h4>Pause</h4>
			</Button>
			<Button id="GB3">
				<h4>Stop</h4>
			</Button>
			<Button id="GB4">
				<h4>Next</h4>
			</Button>
			<Button id="GB5">
				<h4>Clear</h4>
			</Button>
		</Div>
		</div>
	);
}

export default GButtons;
