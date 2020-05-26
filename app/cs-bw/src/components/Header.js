import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

function Header() {
	return (
		<div>
			<header>
				<h1>Conway's Game of Life</h1>
				<h2>By Erica L. Ingram</h2>
			</header>
		</div>
	);
}

export default Header;
