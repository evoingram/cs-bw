import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import GButtons from "./GButtons";
import GOL from './GOL';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	max-width: 100%;
	justify-content: center;
`;
const Div1 = styled.div`
	text-align: center;
`
function Grid() {
	return (
		<Div1>
			<h1>Generation ##</h1>
			<Div>
				<GOL />
				<GButtons />
			</Div>
		</Div1>
	);
}

export default Grid;
