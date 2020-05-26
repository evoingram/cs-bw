import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';



function Footer() {
	return (
		<div>
			<header>
				<h1>Rules:</h1>
				<ul>
					<li>Any live cell with two or three live neighbors survive; any others die.</li>
					<li>Any dead cell with three live neighbors becomes alive; else remains dead.</li>
					<li>All other live cells in next generation die and all dead remain dead.</li>
				</ul>
			</header>
		</div>
	);
}

export default Footer;
