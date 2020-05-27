import React from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components';
import Footer from './components/Footer';
import Grid from './components/Grid';
import Header from './components/Header';
import PSButtons from './components/PSButtons';
import Rules from './components/Rules';

const smoothRide = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;


const Div = styled.div`
	background: linear-gradient(275deg, #642b73, #c6426e);
	background-size: 400% 400%;
	-webkit-animation: ${smoothRide} 10s ease infinite;
	-moz-animation: ${smoothRide} 10s ease infinite;
	-o-animation: ${smoothRide} 10s ease infinite;
	animation: ${smoothRide} 10s ease infinite;
	color: white;
	margin-top: -1.5%;
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		src: local('Roboto'), local('RobotoMono-Regular'), url('./fonts/RobotoMono-Regular.ttf') format('ttf');
	}
	font-family: 'Roboto', monospace;
`;

const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
  	padding: 1%;
	margin-top: 1%;
`;
const FlexSubContainers1 = styled.div`
  	padding: 1%;
  	min-width: 800px;
	border: 1px solid black;
	display: block;
`;
const FlexSubContainers2 = styled.div`
  padding: 0.5%;
  max-width: 20%;
`;
const FlexSubContainers3 = styled.div`
  padding: 0.5%;
  max-width: 25%;
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

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasUpdated: false,
			running: false,
			cellLifeGrid: [],
			cWidth: 0,
			cHeight: 0,
			currentGeneration: 1
		};
	}

	render() {
		return (
			<Div>
				<FlexContainer>
					<FlexSubContainers1>
						<Grid
							hasUpdated={this.state.hasUpdated}
							running={this.state.running}
							cellLifeGrid={this.state.cellLifeGrid}
							cWidth={this.state.cWidth}
							cHeight={this.state.cHeight}
							currentGeneration={this.state.currentGeneration}
						/>
					</FlexSubContainers1>
					<FlexSubContainers3>
						<Header />
						<Rules />
					</FlexSubContainers3>
				</FlexContainer>
				<Footer />
			</Div>
		);
	}
}

export default App;
