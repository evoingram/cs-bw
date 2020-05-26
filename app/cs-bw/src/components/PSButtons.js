import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 35%;
`;

const Button = styled.button`
	background-color: #c6426e;
	color: white;
	border: 3px solid white;
	border-radius: 8px;
	max-width: 70%;
	flex-wrap: nowrap;
	margin-top: 5%;
	margin-bottom: 5%;
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		src: local('Roboto'), local('RobotoMono-Regular'), url('./fonts/RobotoMono-Regular.ttf') format('ttf');
	}
	font-family: 'Roboto', monospace;
	font-size: 1.25rem;
	&:hover {
		background-color: #642b73;
	}
`;
const H4 = styled.h4`
	margin-top: 5%;
	margin-bottom: 5%;
`;

/*
font-family: 'Caveat', cursive;
font-family: 'Oxanium', cursive;
font-family: 'Roboto Mono', monospace;

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('RobotoMono-Regular'), url('./fonts/RobotoMono-Regular.ttf') format('ttf');
}

html {
  font-family: 'Roboto', monospace;
}
*/


function PSButtons() {
	return (
		<Div>
			<Button id="PS1">
				<H4>Glider</H4>
			</Button>
			<Button id="PS2">
				<H4>Beacon</H4>
			</Button>
			<Button id="PS3">
				<H4>Pulsar</H4>
			</Button>
			<Button id="PS4">
				<H4>Random</H4>
			</Button>
			<Button id="PS5">
				<H4>Toggle Grid Size: 25x25</H4>
			</Button>
			<Button id="PS5">
				<H4>3D Version</H4>
			</Button>
		</Div>
	);
}

export default PSButtons;
