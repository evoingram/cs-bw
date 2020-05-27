
import React from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
    border: 1px solid black;
    margin-bottom: 3%;
`

class GOL extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            currentSizeGrid: this.props.currentGS
        }
	}
	// Colors:  #2958AA (blue), #4E8A63 (green), #642B73 (purple), #C6426E (pink)

	setLive = (cContext, x, y, boxWidth, boxHeight) => {
		// TODO:  Add live state
		cContext.fillStyle = `rgb(78, 138, 99)`;
		cContext.fillRect(x, y, boxWidth, boxHeight);
	};

	setDead = (cContext, x, y, boxWidth, boxHeight) => {
		// TODO:  Add dead state
		cContext.fillStyle = `rgb(41, 88, 170)`;
		cContext.fillRect(x, y, boxWidth, boxHeight);
	};

	defaultFill = (cContext, cWidth, boxWidth, cHeight, boxHeight) => {
		for (let x = 0; x <= cWidth; x += boxWidth) {
			for (let y = 0; y <= cHeight; y += boxHeight) {
				cContext.moveTo(x, 0);
				cContext.lineTo(x, cHeight);
				cContext.stroke();
				cContext.moveTo(0, y);
				cContext.lineTo(cWidth, y);
				cContext.stroke();
				// TODO:  if cell is alive/dead
				if ((x === 720) & (y === 390)) {
					this.setLive(cContext, x, y, boxWidth, boxHeight);
				} else {
					this.setDead(cContext, x, y, boxWidth, boxHeight);
				}
			}
		}
	};

	componentDidMount() {
							let canvasGrid = new Array(255).fill(0);
							let actualCanvas = this.refs.canvas;
							let cContext = actualCanvas.getContext('2d');
							let cWidth = cContext.canvas.width;
							let cHeight = cContext.canvas.height;
							let boxWidth = cWidth / this.state.currentSizeGrid;
							let boxHeight = cHeight / this.state.currentSizeGrid;
							console.log(`CDM currentSizeGrid = ${this.state.currentSizeGrid}`);
							console.log(`CDM currentGS = ${this.props.currentGS}`);
							console.log(`CDM currentGridSize = ${this.props.currentGridSize}`);
							this.defaultFill(cContext, cWidth, boxWidth, cHeight, boxHeight);

							/*
		let imageData = cContext.getImageData(0, 0, cWidth, cHeight);

		let screenBuffer = imageData.data;

		let x = 10,
			y = 20;

		let index = (y * cWidth + x) * 4;

		screenBuffer[index + 0] = 0x4e; // Red
		screenBuffer[index + 1] = 0x8a; // Green
		screenBuffer[index + 2] = 0x63; // Blue
		screenBuffer[index + 3] = 0xff; // Alpha

		cContext.putImageData(imageData, 0, 0);

            this.setState({
                canvasGrid: canvasGrid,
                cWidth: boxWidth,
                cHeight: boxHeight
            });
            
            
        */
						}
	render() {
		return (
			<div>
				<Canvas id="canvas" ref="canvas" width="750" height="650"></Canvas>
			</div>
		);
	}
}

export default GOL;
