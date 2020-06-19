import React, { useState } from 'react';
import styled from 'styled-components';
import Blog from './Blog';
import About from './About';

const Div = styled.div`
	justify-content: center;
	text-align: center;
	padding: 2%;
`;

	
function Footer() {

	const [toggleBlog, setToggleBlog] = useState(false);

	return (
		(!toggleBlog && (
			<Div>
				<header>
					<About toggleBlog={toggleBlog} setToggleBlog={setToggleBlog} />
				</header>
			</Div>
		)) ||
		(toggleBlog && (
			<Div>
				<header>
					<Blog toggleBlog={toggleBlog} setToggleBlog={setToggleBlog} />
				</header>
			</Div>
		))
	);
}

export default Footer;
