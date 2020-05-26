import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import App from '../App';
import About from './About';
import '../App.css';

const Button = styled.button`
	background-color: #c6426e;
	color: white;
	max-width: 100%;
	border: 3px solid white;
	border-radius: 8px;
	padding-left: 1%;
	padding-right: 1%;
`;

const Div2 = styled.div`
	@font-face {
	font-family: 'Caveat';
	font-style: normal;
	font-weight: 400;
	src: local('Caveat'), local('Caveat-Regular'), url('../fonts/Caveat-Regular.ttf') format('ttf');
	}
	justify-content: left;
	text-align: left;
  	font-family: 'Caveat', cursive;
`

const H4 = styled.h4`
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		src: local('Roboto'), local('RobotoMono-Regular'), url('./fonts/RobotoMono-Regular.ttf') format('ttf');
	}
	font-family: 'Roboto', monospace;
	font-size: 1rem;
`;
/*
font-family: 'Caveat', cursive;
font-family: 'Oxanium', cursive;
font-family: 'Roboto Mono', monospace;
*/

function Blog(props) {

	function toggleBlogPost() {
		props.setToggleBlog(false);
	};
	
	return (
		<div>
			<Route>
				<Link to="/blog">
					<Button id="blog" onClick={toggleBlogPost}>
						<H4>Learn more about Conway's Game of Life.</H4>
					</Button>
				</Link>
			</Route>

			<h1>About This Project's Development</h1>
			<Div2>
				<h2>Day 1: Monday</h2>
				<p>
					This project was assigned to us as our build-week assignment for Lambda School's first unit of
					computer science. This post is intended to describe how I built this project. The steps I took are
					the following.
				</p>
				<p>
					First, of course, I did some research to learn what Conway's Game of Life (CGOL) actually is, how it
					works, its rules, and why it's useful as well as, relatedly, what are cellular automata, how are
					they useful in real life. Then we were also asked to correctly analyze the Turing completeness of
					CGOL. I researched how to work with canvas and how to render multiple components.  I took handwritten notes on all of it for purposes of additional repetition.
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
					out as I complete the code. I picked out colors to go with my animated gradient background and added
					the actual blank canvas in a separate canvas component.
				</p>
				<p>
					This was a holiday weekend, so our build week, normally five days, was cut short to four days, and
					beacuse I still wanted to get five days in for the build week, I went ahead, got all nice and set up
					for Tuesday, when i will start working on the actual Game of Life part. I've mostly got everything
					else set up, so I'm in a pretty good spot for tomorrow.
				</p>
				<h2>Day 2: Tuesday</h2>
				<p>
					I incorporated three fonts into the UI before I started in on the grid/algorithm portions of this project.  I selected a handwriting-style font for the blog post, a computer-looking or style font for the default, and a second handwriting-style font for the about portion.  I might change the second one before this is complete; it looks a little like Comic Sans now that I've got it installed.
				</p>
				<p></p>
				<h2>Day 3: Wednesday</h2>
				<p></p>
				<h2>Day 4: Thursday</h2>
				<p></p>
				<h2>Day 5: Friday</h2>
				<p></p>
			</Div2>
		</div>
	);
}

export default Blog;
