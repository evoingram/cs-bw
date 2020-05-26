import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

const Button = styled.button`
	background-color: #c6426e;
	color: white;
	max-width: 100%;
	min-width: 90%;
	border: 3px solid white;
	border-radius: 8px;
	padding: 3%;
	flex-wrap: nowrap;
	margin-top: 5%;
	margin-bottom: 5%;
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 45%;
`;


function PSButtons() {
	return (
		<Div>
				<Button id="PS1">
					<h4>Preset 1</h4>
				</Button>
				<Button id="PS2">
					<h4>Preset 2</h4>
				</Button>
				<Button id="PS3">
					<h4>Preset 3</h4>
				</Button>
				<Button id="PS4">
					<h4>Preset 4</h4>
				</Button>
		</Div>
	);
}

export default PSButtons;
