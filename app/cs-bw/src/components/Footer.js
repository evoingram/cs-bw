import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

function Footer() {
	return (
		<div>
			<header>
				<Link to="/blog">
					<Button id="blog">Click here for a step-by-step in-depth guide for how I built this project.</Button>
				</Link>
				<p>FOOTER COMPONENT</p>
			</header>
		</div>
	);
}

export default Footer;
