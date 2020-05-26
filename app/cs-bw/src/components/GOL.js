import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

const Canvas = styled.canvas`
    border: 1px solid black;
    margin-bottom: 3%;
`

class GOL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            canvasGrid: [],
            cWidth: 0,
            cHeight: 0,
            currentGeneration: 0
        };
    }

    componentDidMount() {
        let boxes = new Array(255).fill(0);
        let actualCanvas = this.refs.canvas;
        let cContext = actualCanvas.getContext('2d');
        let cWidth = cContext.canvas.width;
        let cHeight = cContext.canvas.height;
        let boxWidth = cWidth / 25;
        let boxHeight = cHeight / 25;

    };
    
    render() {
        return (
            <div>
                <Canvas id="canvas" ref="canvas" width="725" height="550"></Canvas>
            </div>
        );
    }
}

export default GOL;
