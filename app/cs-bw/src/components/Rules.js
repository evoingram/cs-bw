import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

const Li = styled.li`
	padding: 3%;
`

function Footer() {
	return (
		<div>
			<header>
				<h1>Rules:</h1>
				<ul>
					<Li>Any live cell with two or three live neighbors survive; any others die.</Li>
					<Li>Any dead cell with three live neighbors becomes alive; else remains dead.</Li>
					<Li>All other live cells in next generation die and all dead remain dead.</Li>
				</ul>
			</header>
		</div>
	);
}

export default Footer;
