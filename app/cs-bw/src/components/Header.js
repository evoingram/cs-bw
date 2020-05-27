import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	justify-content: center;
	text-align: center;
	padding-top: 3%;
	padding-bottom: 3%;
`;

function Header() {
	return (
		<Div>
			<h1>Conway's Game of Life</h1>
			<h2>By Erica L. Ingram</h2>
		</Div>
	);
}

export default Header;
