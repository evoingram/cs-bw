import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

const Button = styled.button`
	background-color: #c6426e;
	color: white;
	max-width: 100%;
	border: 3px solid white;
	border-radius: 8px;
	padding: 3%;
`;
const Div = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`

function GButtons() {
	return (
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
				<h4>Clear Grid</h4>
			</Button>
		</Div>
	);
}

export default GButtons;
