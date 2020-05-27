import React from 'react';
import styled from 'styled-components';
import GButtons from './GButtons';

import mediumDefault from './sizes/mediumDefault';
import mediumFirst from './sizes/mediumFirst';
import mediumSecond from './sizes/mediumSecond';

import smallDefault from './sizes/smallDefault';
import smallFirst from './sizes/smallFirst';
import smallSecond from './sizes/smallSecond';

import blinker from './shapes/Blinker';
import beacon from './shapes/Beacon';
import toad from './shapes/Toad';
import glider from './shapes/Glider';
import pulsar from './shapes/Pulsar';

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

let gridDefault = mediumDefault;
let gridRound1 = mediumFirst;
let gridRound2 = mediumSecond;

let currentGeneration = 1;
let generationSpeed = 1000;

let animationFrameRequest;
let animationInterval;

let previousColumn, previousRow, nextColumn, nextRow;
let count = 0;
		
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

	// function to draw initial canvas
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

	// set cell color as #4E8A63 (green) for live color
	setLive = (cContext, x, y) => {
		cContext.fillStyle = '#4E8A63';
		cContext.fillRect(
			y * this.state.singleCellLength + 1,
			x * this.state.singleCellLength + 1,
			this.state.singleCellLength - 1,
			this.state.singleCellLength - 1
		);
	};

	// set cell color as #2958AA (blue) for dead color
	setDead = (cContext, x, y) => {
		cContext.fillStyle = '#2958AA';
		cContext.fillRect(
			y * this.state.singleCellLength + 1,
			x * this.state.singleCellLength + 1,
			this.state.singleCellLength - 1,
			this.state.singleCellLength - 1
		);
	};

	// loop to color cells as live or dead
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

	// toggle play button text between 'play' and 'stop
	toggleButtonText = () => {
		if (this.state.buttonText === 'Play') {
			this.setState({ buttonText: 'Stop' });
		} else {
			this.setState({ buttonText: 'Play' });
		}
	};

	// function to toggle speed button text among 'fast', 'faster', and 'fastest'
	toggleButtonTextSpeed = () => {
		if (this.state.buttonTextSpeed === 'Fast') {
			this.setState({ buttonTextSpeed: 'Faster' });
		} else if (this.state.buttonTextSpeed === 'Faster') {
			this.setState({ buttonTextSpeed: 'Fastest' });
		} else {
			this.setState({ buttonTextSpeed: 'Fast' });
		}
	};

	// function to cycle animation on time interval
	aFRTime = () => {
		animationFrameRequest = requestAnimationFrame(timestamp => {
			animationInterval = setTimeout(() => {
				this.onAnimFrame(timestamp);
			}, this.state.generationSpeed);
		});
	};

	// function to play game of life according to user's desired settings
	togglePlay = () => {
		if (this.state.nextAnimation === true) {
			this.setState({ nextAnimation: false });
			cancelAnimationFrame(animationFrameRequest);
			clearInterval(animationInterval);
		} else {
			this.setState({ nextAnimation: true });
			this.aFRTime();
		}
		this.toggleButtonText();
	};

	// function to set grid to default state 
	setToDefault = () => {
		for (let i = 0; i < this.state.cellQuantityY; i++) {
			gridRound1[i] = gridDefault[i].slice();
			gridRound2[i] = gridDefault[i].slice();
		}
		this.setState({ currentGrid: gridDefault });

		currentGeneration = 1;
	};

	// function to increment speed
	toggleSpeed = currentSpeed => {
		generationSpeed = currentSpeed;

		this.setState(() => {
			return { generationSpeed: generationSpeed };
		});

		clearInterval(animationInterval);
		cancelAnimationFrame(animationFrameRequest);

		if (this.state.nextAnimation) {
			this.aFRTime();
		}
		this.toggleButtonTextSpeed();
	};

	// function to toggle grid size between 'small' (25 boxes) and 'medium' (50 boxes)
	toggleGridSize = size => {
		if (size === 'small') {
			this.setState({ currentGrid: smallDefault });
			this.setState({ boardSize: 'small', singleCellLength: 30, cellQuantityX: 25, cellQuantityY: 25 });

			gridDefault = smallDefault;
			gridRound1 = smallFirst;
			gridRound2 = smallSecond;
			this.selectShape('toad');
		} else if (size === 'medium') {
			this.setState({ currentGrid: mediumDefault });
			this.setState({ boardSize: 'medium', singleCellLength: 15, cellQuantityX: 50, cellQuantityY: 50 });

			gridDefault = mediumDefault;
			gridRound1 = mediumFirst;
			gridRound2 = mediumSecond;
			this.selectShape('pulsar');
			if ((currentGeneration = 1)) {
				this.setToDefault();
			}
		}
		setTimeout(() => this.drawCanvas(), 10);
	};

	// function to run after clicking on canvas; calculate and set state & global variables
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
			gridRound1[yc][xc] = gridRound1[yc][xc] === 1 ? 0 : 1;
			this.setState({ currentGrid: gridRound1 });
		}
	};

	// function to generate random shape 
	generateRandomShape = () => {
		if (!this.state.nextAnimation) {
			for (let y = 0; y < this.state.cellQuantityY; y++) {
				for (let x = 0; x < this.state.cellQuantityX; x++) {
					gridRound1[y][x] = Math.round(Math.random());
				}
			}
			this.setState({ currentGrid: gridRound1 });
		}
	};
	// function to load selected shape in selected size
	loadShape = (loadedShape, size) => {
		for (let x = 0; x < size; x++) {
			gridRound1[x] = loadedShape[x].slice();
		}
		this.setState({ currentGrid: gridRound1 });
	};

	// function for conditional shape selection (runs previous function based on conditionals)
	selectShape = newShape => {
		this.setState({ shape: newShape });
		if (newShape === 'beacon') {
			this.loadShape(beacon, 15);
		} else if (newShape === 'blinker') {
			this.loadShape(blinker, 15);
		} else if (newShape === 'glider') {
			this.loadShape(glider, 15);
		} else if (newShape === 'toad') {
			this.loadShape(toad, 15);
		} else if (newShape === 'pulsar') {
			this.loadShape(pulsar, 50);
		}
	};
	// function to wrap cells as game plays out
	wrapCells = (x, y) => {
		previousRow = x - 1;
		if (previousRow === -1) {
			previousRow = this.state.cellQuantityY - 1;
		}
		nextRow = x + 1;
		if (nextRow === this.state.cellQuantityY) {
			nextRow = 0;
		}
		previousColumn = y - 1;
		if (previousColumn === -1) {
			previousColumn = this.state.cellQuantityX - 1;
		}
		nextColumn = y + 1;
		if (nextColumn === this.state.cellQuantityX) {
			nextColumn = 0;
		}
	};

	// function to count all live neighbors of a cell 
	countNeighbors = (x, y, gridRound) => {
		count = 0;
		if (gridRound[previousRow][previousColumn]) {
			count++;
		}
		if (gridRound[previousRow][y]) {
			count++;
		}
		if (gridRound[previousRow][nextColumn]) {
			count++;
		}
		if (gridRound[x][previousColumn]) {
			count++;
		}
		if (gridRound[x][nextColumn]) {
			count++;
		}
		if (gridRound[nextRow][previousColumn]) {
			count++;
		}
		if (gridRound[nextRow][y]) {
			count++;
		}
		if (gridRound[nextRow][nextColumn]) {
			count++;
		}
	};

	// function to toggle state of neighbors per rules of CGOL
	toggleStateNeighbors = (x, y, gridComparisonIf, gridComparisonChanged) => {
		if (gridComparisonIf[x][y] === 1 && count < 2) {
			gridComparisonChanged[x][y] = 0;
		} else if (gridComparisonIf[x][y] === 1 && (count === 2 || count === 3)) {
			gridComparisonChanged[x][y] = 1;
		} else if (gridComparisonIf[x][y] === 1 && count > 3) {
			gridComparisonChanged[x][y] = 0;
		} else if (gridComparisonIf[x][y] === 0 && count === 3) {
			gridComparisonChanged[x][y] = 1;
		} else if (gridComparisonIf[x][y] === 0 && count !== 3) {
			gridComparisonChanged[x][y] = 0;
		}
	};
	// function to advance CGOL one generation at a time
	advanceByGeneration = () => {
		if (this.state.currentCycle === true) {
			this.aFRTime();
			this.colorCells();

			// create next buffer
			for (let i = 0; i < this.state.cellQuantityY; i++) {
				for (let j = 0; j <= this.state.cellQuantityX; j++) {
					// wrap
					this.wrapCells(i, j);

					// count live neighbors
					this.countNeighbors(i, j, gridRound1);

					// check neighbors to toggle state
					this.toggleStateNeighbors(i, j, gridRound1, gridRound2);
				}
			}
			this.setState({ currentGrid: gridRound2 });
			this.setState({ currentCycle: false });
			currentGeneration++;
		} else {
			this.aFRTime();
			this.colorCells();

			// create next buffer
			for (let i = 0; i < this.state.cellQuantityY; i++) {
				for (let j = 0; j <= this.state.cellQuantityX; j++) {
					// wrap
					this.wrapCells(i, j);

					// count live neighbors
					this.countNeighbors(i, j, gridRound2);

					// check neighbors to toggle state
					this.toggleStateNeighbors(i, j, gridRound2, gridRound1);
				}
			}
			this.setState({ currentGrid: gridRound1 });
			this.setState({ currentCycle: true });
			currentGeneration++;
		}
	};

	// 'main' function to tie everything together
	// creates buffer, loads next grid as current, changes cycle, adds to generation count, cancels as appropriate
	onAnimFrame = timestamp => {
		if (this.state.currentCycle === true) {
			if (this.state.nextAnimation === true) {
				this.aFRTime();
				this.colorCells();

				// create next buffer
				for (let i = 0; i < this.state.cellQuantityY; i++) {
					for (let j = 0; j <= this.state.cellQuantityX; j++) {
						
						this.wrapCells(i, j);
						this.countNeighbors(i, j, gridRound1);
						this.toggleStateNeighbors(i, j, gridRound1, gridRound2);
					}
				}
				this.setState({ currentGrid: gridRound2 });
				this.setState({ currentCycle: false });
				currentGeneration++;
			} else {
				cancelAnimationFrame(animationFrameRequest);
			}
		} else {
			if (this.state.nextAnimation === true) {
				this.aFRTime();
				this.colorCells();

				// create next buffer
				for (let i = 0; i < this.state.cellQuantityY; i++) {
					for (let j = 0; j <= this.state.cellQuantityX; j++) {
						
						this.wrapCells(i, j);
						this.countNeighbors(i, j, gridRound2);
						this.toggleStateNeighbors(i, j, gridRound2, gridRound1);
					}
				}
				this.setState({ currentGrid: gridRound1 });
				this.setState({ currentCycle: true });
				currentGeneration++;
			} else {
				cancelAnimationFrame(animationFrameRequest);
			}
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

	render() {
		return (
			<Div>
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
				<Div1>
						<h1>Generation {currentGeneration}</h1>
				</Div1>
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
						advanceByGeneration={this.advanceByGeneration}
					/>
				</div>
			</Div>
		);
	}
}

export default Game;
