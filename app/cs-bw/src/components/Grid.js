import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import GButtons from './GButtons';
import GOL from './GOL';
import { useAnimeFrame } from '../customHooks/useAnimeFrame.js';

import mediumDefault from './sizes/mediumDefault';
import mediumFirst from './sizes/mediumFirst';
import mediumSecond from './sizes/mediumSecond';

import smallDefault from './sizes/smallDefault';
import smallFirst from './sizes/smallFirst';
import smallSecond from './sizes/smallSecond';

import { configBlinker } from './configs/configBlinker';
import { configBeacon } from './configs/configBeacon';
import { configToad } from './configs/configToad';
import { configGlider } from './configs/configGlider';
import { configPulsar } from './configs/configPulsar';
import { configGgun } from './configs/configGgun';

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

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentGrid: mediumDefault,
			singleCellLength: 15,
			buttonText: 'Start',
			buttonTextSpeed: 'Faster',
			boardSize: 'medium',
			cellQuantityX: 50,
			cellQuantityY: 50
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
		if (this.state.buttonText === 'Start') {
			this.setState({ buttonText: 'Stop' });
		} else {
			this.setState({ buttonText: 'Start' });
		}
	};

	toggleButtonTextSpeed = () => {
		if (this.state.buttonText === 'Faster') {
			this.setState({ buttonText: 'Faster x2' });
		} else if (this.state.buttonText === 'Faster x2') {
			this.setState({ buttonText: 'Fastest' });
		} else {
			this.setState({ buttonText: 'Faster' });
		}
	};

	setToDefault = () => {
		for (let i = 0; i < this.state.cellQuantityY; i++) {
			firstGrid[i] = defaultGrid[i].slice();
			secondGrid[i] = defaultGrid[i].slice();
		}
		this.setState({ currentGrid: defaultGrid });
		currentGeneration = 1;
	};

	changeBoardSize = size => {
		if (size === 'small') {
			this.setState({ currentGrid: smallDefault });
			this.setState({ boardSize: 'small', cellQuantityX: 15, cellQuantityY: 15, singleCellLength: 30 });

			defaultGrid = smallDefault;
			firstGrid = smallFirst;
			secondGrid = smallSecond;
		} else if (size === 'medium') {
			this.setState({ currentGrid: mediumDefault });
			this.setState({ boardSize: 'medium', cellQuantityX: 50, cellQuantityY: 50, singleCellLength: 15 });

			defaultGrid = mediumDefault;
			firstGrid = mediumFirst;
			secondGrid = mediumSecond;
		}
		if (this.state.boardSize === 'small') {
			this.selectShape('toad');
		} else {
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

	componentDidMount = () => {
		this.drawCanvas();
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
					<h1>Generation {currentGeneration}</h1>
					<canvas
						ref="canvas"
						id="gameCanvas"
						width={(this.state.cellQuantityX + 1) * this.state.singleCellLength + 1}
						height={this.state.cellQuantityY * this.state.singleCellLength + 1}
						onClick={this.clickCanvas}
					/>
				</div>
				<div>
					<GButtons boardSize={this.state.boardSize} />
				</div>
			</div>
		);
	}
}

export default Game;
