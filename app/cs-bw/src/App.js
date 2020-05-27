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
`;
const FlexSubContainers1 = styled.div`
  padding: 1%;
  min-width: 775px;
	border: 1px solid black;
`;
const FlexSubContainers2 = styled.div`
  padding: 0.5%;
  max-width: 20%;
`;
const FlexSubContainers3 = styled.div`
  padding: 0.5%;
  max-width: 18%;
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
			canvasGrid: [],
			cellLifeGrid: [],
			gridSizes: [25, 50, 75],
			currentGridSize: 25,
			cWidth: 0,
			cHeight: 0,
			currentGeneration: 0
		};
	}
	updateGrid = () => {
		console.log('updateGrid running');
		this.forceUpdate();
		console.log(`${this.state.currentGridSize}`);
	};

	render() {
		return (
			<Div>
				<Header />
				<FlexContainer>
					<FlexSubContainers1>
						<Grid
							updateGrid={this.updateGrid}
							hasUpdated={this.state.hasUpdated}
							running={this.state.running}
							canvasGrid={this.state.canvasGrid}
							cellLifeGrid={this.state.cellLifeGrid}
							gridSizes={this.state.gridSizes}
							currentGridSize={this.state.currentGridSize}
							cWidth={this.state.cWidth}
							cHeight={this.state.cHeight}
						/>
					</FlexSubContainers1>
					<FlexSubContainers2>
						<PSButtons
							gridSizes={this.state.gridSizes}
							currentGridSize={this.state.currentGridSize}
							updateGrid={this.updateGrid}
						/>
					</FlexSubContainers2>
					<FlexSubContainers3>
						<Rules />
					</FlexSubContainers3>
				</FlexContainer>
				<Footer />
			</Div>
		);
	}
}

export default App;
