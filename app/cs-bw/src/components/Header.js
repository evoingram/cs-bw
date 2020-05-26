import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

const Div = styled.div`
	justify-content: center;
	text-align: center;
`

function Header() {
	return (
		<Div>
			<h1>Conway's Game of Life</h1>
			<h2>By Erica L. Ingram</h2>
		</Div>
	);
}

export default Header;
