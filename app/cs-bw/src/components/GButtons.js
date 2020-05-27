import React from 'react';
import styled from 'styled-components';

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
	&:hover {
		background-color: #642b73;
	}
	min-width: 147px;
`;
const Div = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin-top: 2%;
	margin-bottom: 2%;
`;
const H4 = styled.h4`
	margin-top: 5%;
	margin-bottom: 5%;
`;


class GButtons extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Div>
					<Button id="GB1" onClick={this.props.togglePlay}>
						<H4>{this.props.buttonText}</H4>
					</Button>
					<Button id="GB2" onClick={this.props.toggleSpeed}>
						<H4>{this.props.buttonTextSpeed}</H4>
					</Button>
					<Button id="GB3" onClick={this.props.setToDefault}>
						<H4>Clear</H4>
					</Button>
					<Button
						id="GB4"
						onClick={e => {
							let size;
							if (this.props.boardSize === 'small') {
								size = 'medium';
							} else {
								size = 'small';
							}
							this.props.toggleGridSize(size);
							console.log(size);
						}}
					>
						<H4>Toggle Grid Size</H4>
					</Button>
				</Div>
				<Div>
					<Button id="PS1" onClick={() => this.props.selectShape('glider')}>
						<H4>Glider</H4>
					</Button>
					<Button id="PS2" onClick={() => this.props.selectShape('beacon')}>
						<H4>Beacon</H4>
					</Button>
					<Button id="PS3" onClick={() => this.props.selectShape('toad')}>
						<H4>Toad</H4>
					</Button>
					<Button id="PS3" onClick={() => this.props.selectShape('pulsar')}>
						<H4>
							Pulsar <br />
							(Medium Only)
						</H4>
					</Button>
				</Div>
				<Div>
					<Button id="PS4" onClick={this.props.generateRandomShape}>
						<H4>Random</H4>
					</Button>
					<Button id="PS5">
						<H4>3D Version</H4>
					</Button>
				</Div>
			</div>
		);
	}
}

export default GButtons;
