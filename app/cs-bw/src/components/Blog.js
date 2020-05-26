import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import App from '../App';
import About from './About';

const Button = styled.button`
	background-color: #c6426e;
	color: white;
	max-width: 100%;
	border: 3px solid white;
	border-radius: 8px;
	padding: 3%;
`;

const Div2 = styled.div`
	justify-content: left;
	text-align: left;
`


function Blog(props) {

	function toggleBlogPost() {
		props.setToggleBlog(false);
	};
	
	return (
		<div>
			<Route>
				<Link to="/blog">
					<Button id="blog" onClick={toggleBlogPost}>
						<h4>Learn more about Conway's Game of Life.</h4>
					</Button>
				</Link>
			</Route>

			<h1>About This Project's Development</h1>
			<Div2>
				<h2>Day 1: Monday</h2>
				<p>
					This project was assigned to us as our build-week assignment for Lambda School's computer science
					first unit. This post is intended to describe how I built this project. The steps I took are the
					following.
				</p>
				<p>
					First, of course, I did some research to learn what Conway's Game of Life (CGOL) actually is, how it
					works, its rules, and why it's useful as well as, relatedly, what are cellular automata, how are
					they useful in real life. Then we were also asked to correctly analyze the Turing completeness of
					CGOL.
				</p>
				<p>
					Second, I took the rubric and the goals and made my own readme, including an evolving task list, to
					guide me as a project plan for how I would develop this project overall. I made a blank repo and did
					some initial set-up. I organized the branches by day, so this repo has five branches, one for each
					day I worked on it.
				</p>
				<p>
					After that, I actually wrote the 'rules' and 'about' portions of this project. This gave me
					directional clarity in terms of what to do and what my overall goal was.
				</p>
				<p>
					Then I used the provided or suggested wireframe to build the UI, what would house the CGOL, but
					added my own stylings to be much more interesting than just a black-and-white rendering. For the
					interim period, I am using placeholders for the calculated pieces of information and will sub those
					out as I complete the code.
				</p>
				<h2>Day 2: Tuesday</h2>
				<h2>Day 3: Wednesday</h2>
				<h2>Day 4: Thursday</h2>
				<h2>Day 5: Friday</h2>
			</Div2>
		</div>
	);
}

export default Blog;
