import React from 'react';
import styled from 'styled-components';
import GButtons from './GButtons';

import mediumDefault from './sizes/mediumDefault';
import mediumFirst from './sizes/mediumFirst';
import mediumSecond from './sizes/mediumSecond';

import smallDefault from './sizes/smallDefault';
import smallFirst from './sizes/smallFirst';
import smallSecond from './sizes/smallSecond';

import { blinker } from './shapes/Blinker';
import { beacon } from './shapes/Beacon';
import { toad } from './shapes/Toad';
import { glider } from './shapes/Glider';
import { pulsar } from './shapes/Pulsar';
import { ggun } from './shapes/Ggun';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	max-width: 100%;
	justify-content: center;
`;
const Div1 = styled.div`
	text-align: center;
`;

// Colors:  #2958AA (blue), #4E8A63 (green), #642B73 (purple), #C6426E (pink)

let defaultGrid = mediumDefault;
let firstGrid = mediumFirst;
let secondGrid = mediumSecond;

let currentGeneration = 1;
let generationSpeed = 1000;

let animationFrameRequest;
let animationInterval;

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonText: 'Play',
			buttonTextSpeed: 'Fast',
			boardSize: 'medium',
			shape: 'pulsar',
			nextAnimation: false,
			currentCycle: true,
			generationSpeed: 200,
			currentGrid: mediumDefault,
			cellQuantityX: 50,
			cellQuantityY: 50,
			singleCellLength: 15
		};
	}
	drawCanvas = () => {
		let canvas = this.refs.canvas;
		let cContext = canvas.getContext('2d');
		let maxWidth = this.state.cellQuantityX * this.state.singleCellLength + 1;
		let maxHeight = (this.state.cellQuantityY + 1) * this.state.singleCellLength;
		for (let x = 0.5; x < maxWidth; x += this.state.singleCellLength) {
			cContext.moveTo(x, 0);
			cContext.lineTo(x, (this.state.cellQuantityX + 1) * this.state.singleCellLength);
		}

		for (let y = 0.5; y < maxHeight; y += this.state.singleCellLength) {
			cContext.moveTo(0, y);
			cContext.lineTo(maxHeight, y);
		}

		cContext.strokeStyle = '#000';
		cContext.stroke();
	};

	setLive = (cContext, x, y) => {
		cContext.fillStyle = '#4E8A63';
		cContext.fillRect(
			y * this.state.singleCellLength + 1,
			x * this.state.singleCellLength + 1,
			this.state.singleCellLength - 1,
			this.state.singleCellLength - 1
		);
	};
	setDead = (cContext, x, y) => {
		cContext.fillStyle = '#2958AA';
		cContext.fillRect(
			y * this.state.singleCellLength + 1,
			x * this.state.singleCellLength + 1,
			this.state.singleCellLength - 1,
			this.state.singleCellLength - 1
		);
	};

	colorCells = () => {
		const canvas = this.refs.canvas;
		const cContext = canvas.getContext('2d');
		for (let x = 0; x < this.state.cellQuantityY; x++) {
			for (let y = 0; y <= this.state.cellQuantityX; y++) {
				if (this.state.currentGrid[x][y]) {
					this.setLive(cContext, x, y);
				} else {
					this.setDead(cContext, x, y);
				}
			}
		}
	};

	toggleButtonText = () => {
		if (this.state.buttonText === 'Play') {
			this.setState({ buttonText: 'Stop' });
		} else {
			this.setState({ buttonText: 'Play' });
		}
	};

	toggleButtonTextSpeed = () => {
		if (this.state.buttonTextSpeed === 'Fast') {
			this.setState({ buttonTextSpeed: 'Faster' });
		} else if (this.state.buttonTextSpeed === 'Faster') {
			this.setState({ buttonTextSpeed: 'Fastest' });
		} else {
			this.setState({ buttonTextSpeed: 'Fast' });
		}
	};

	togglePlay = () => {
		if (this.state.nextAnimation === true) {
			this.setState({ nextAnimation: false });
			cancelAnimationFrame(animationFrameRequest);
			clearInterval(animationInterval);
		} else {
			this.setState({ nextAnimation: true });
			animationFrameRequest = requestAnimationFrame(timestamp => {
				animationInterval = setTimeout(() => {
					this.onAnimFrame(timestamp);
				}, this.state.generationSpeed);
			});
		}
		this.toggleButtonText();
	};

	setToDefault = () => {
		for (let i = 0; i < this.state.cellQuantityY; i++) {
			firstGrid[i] = defaultGrid[i].slice();
			secondGrid[i] = defaultGrid[i].slice();
		}
		this.setState({ currentGrid: defaultGrid });

		currentGeneration = 1;
	};

	toggleSpeed = currentSpeed => {
		generationSpeed = currentSpeed;

		this.setState(() => {
			return { generationSpeed: generationSpeed };
		});

		clearInterval(animationInterval);

		cancelAnimationFrame(animationFrameRequest);

		if (this.state.nextAnimation) {
			animationFrameRequest = requestAnimationFrame(timestamp => {
				animationInterval = setTimeout(() => {
					this.onAnimFrame(timestamp);
				}, this.state.generationSpeed);
			});
		}
		this.toggleButtonTextSpeed();
	};

	toggleGridSize = (size) => {
		if (size === 'small') {
			this.setState({ currentGrid: smallDefault });
			this.setState({ boardSize: 'small', singleCellLength: 30, cellQuantityX: 15, cellQuantityY: 15 });

			defaultGrid = smallDefault;
			firstGrid = smallFirst;
			secondGrid = smallSecond;
			this.selectShape('toad');

		} else if (size === 'medium') {
			this.setState({ currentGrid: mediumDefault });
			this.setState({ boardSize: 'medium', singleCellLength: 15, cellQuantityX: 50, cellQuantityY: 50 });

			defaultGrid = mediumDefault;
			firstGrid = mediumFirst;
			secondGrid = mediumSecond;
			this.selectShape('pulsar');
		}
		setTimeout(() => this.drawCanvas(), 10);
	};

	clickCanvas = event => {
		let canvas = this.refs.canvas;
		let rectangle = canvas.getBoundingClientRect();

		if (!this.state.nextAnimation) {
			let x = event.pageX - rectangle.left;
			let y = event.pageY - rectangle.top - window.scrollY;
			let ceilingToCalcX = x / this.state.singleCellLength;
			let ceilingToCalcY = y / this.state.singleCellLength;
			let xc = Number(Math.ceil(ceilingToCalcX)) - 1;
			let yc = Number(Math.ceil(ceilingToCalcY)) - 1;
			firstGrid[yc][xc] = firstGrid[yc][xc] === 1 ? 0 : 1;
			this.setState({ currentGrid: firstGrid });
		}
	};

	generateRandomShape = () => {
		if (!this.state.nextAnimation) {
			for (let y = 0; y < this.state.cellQuantityY; y++) {
				for (let x = 0; x < this.state.cellQuantityX; x++) {
					firstGrid[y][x] = Math.round(Math.random());
				}
			}
			this.setState({ currentGrid: firstGrid });
		}
	};

	loadShape = (loadedShape, size) => { 
		for (let x = 0; x < size; x++) {
			firstGrid[x] = loadedShape[x].slice();
		}
		this.setState({ currentGrid: firstGrid });
	}

	selectShape = newShape => {
		this.setState({ shape: newShape });
		if (newShape === 'beacon') {
			this.loadShape(beacon, 15);
		} else if (newShape === 'blinker') {
			this.loadShape(blinker, 15);
		}  else if (newShape === 'glider') {
			this.loadShape(glider, 15);
		} else if (newShape === 'toad') {
			this.loadShape(toad, 15);
		} else if (newShape === "pulsar") {
			this.loadShape(pulsar, 50);
		}
	};

	componentDidMount = () => {
		this.drawCanvas();
		this.toggleGridSize('medium');
	};

	componentDidUpdate = () => {
		if (!this.state.nextAnimation) {
			this.colorCells();
		}
	};

	componentWillUnmount = () => {
		this.setState({ nextAnimation: false });
	};

	render() {
		return (
			<div>
				<div>
					<canvas
						ref="canvas"
						id="gameCanvas"
						width={(this.state.cellQuantityX + 1) * this.state.singleCellLength + 1}
						height={this.state.cellQuantityY * this.state.singleCellLength + 1}
						onClick={this.clickCanvas}
					/>
				</div>
				<div>
					<center>
						<h1>Generation {currentGeneration}</h1>
					</center>
					<GButtons
						buttonText={this.state.buttonText}
						buttonTextSpeed={this.state.buttonTextSpeed}
						boardSize={this.state.boardSize}
						toggleGridSize={this.toggleGridSize}
						setToDefault={this.setToDefault}
						togglePlay={this.togglePlay}
						toggleSpeed={this.toggleSpeed}
						selectShape={this.selectShape}
						generateRandomShape={this.generateRandomShape}
					/>
				</div>
			</div>
		);
	}
}

export default Game;
