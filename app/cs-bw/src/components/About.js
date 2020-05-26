import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import Blog from './Blog';

const Button = styled.button`
	background-color: #c6426e;
	color: white;
	max-width: 100%;
	border: 3px solid white;
	border-radius: 8px;
	padding-left: 1%;
	padding-right: 1%;
`;

const Div = styled.div`
	justify-content: center;
	text-align: center;
	padding: 2%;
`;

/*
font-family: 'Caveat', cursive;
font-family: 'Oxanium', cursive;
font-family: 'Roboto Mono', monospace;
*/

const Div2 = styled.div`
	justify-content: left;
	text-align: left;
	@font-face {
		font-family: 'Oxanium';
		font-style: normal;
		font-weight: 400;
		src: local('Oxanium'), local('Oxanium-Regular'), url('../fonts/Oxanium-Regular.ttf') format('ttf');
	}
	font-family: 'Oxanium', cursive;
	font-size: 1rem;
`;
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

function About(props) {
	function toggleBlogPost() {
		console.log('toggleBlogPost running');
		props.setToggleBlog(true);
	}
		return (
			<Div>
				<Link to="/blog">
					<Button id="blog" onClick={toggleBlogPost}>
						<H4>Read my step-by-step in-depth guide.</H4>
					</Button>
				</Link>
				<h1>About This Project</h1>
				<h2>Conway's Game of Life</h2>
				<Div2>
					<h3>About Conway's Game of Life</h3>
					<p>
						Conway's Game of Life was invented in 1970 by John H. Conway. His initial goal was to "define an
					interesting and unpredictable cell automaton", according to{' '}
						<strong>
							<a
								href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
								target="_blank"
								rel="noopener noreferrer"
							>
								Wikipedia
						</a>
						</strong>
					. According to that same source, "He wanted some configurations to last for a long time before dying
					and other configurations to go on forever without allowing cycles. It was a significant challenge
					and an open problem for years before experts on cellular automata managed to prove that, indeed, the
					Game of Life admitted of a configuration which was alive in the sense of satisfying Von Neumann's
					two general requirements. While the definitions before the Game of Life were proof-oriented,
					Conway's construction aimed at simplicity without a priori providing proof the automaton was alive."
				</p>
					<p>
						Early versions did not use computers, but rather graph paper, blackboards, and physical game boards
						such as for the game go. It is a zero-player game and requires no input past your initial input
						prior to starting the game. CGOL has three pattern types; still lifes, oscillators, and spaceships.
						It has an infinite two-dimensional grid of square cells, each of which has a state of either being
						alive or dead. Whether they are alive or dead is determined by the rules of the game (see "Rules").
						Every cell interacts with each of its eight neighbors (up, down, left, right, and diagonal
						directions). Each step in time is called a "generation" and the game grid updates with each
						generation.
				</p>
					<p>
						The initial pattern is called a seed, and the first generation is created by applying the rules to
						the seed's every cell simultaneously. Births and deaths occur simultaneously. Each generation is a
						"pure function" of the preceding one.
				</p>
					<h3>Why is it useful?</h3>
					<p>
						It simulates a Turing machine. It is Turing-complete. It is an example of cellular automata, which
						are extremely useful for modeling complex non-linear systems in many branches of science such as
						chemistry, biology, physics, cosmology, engineering, meteorology, and computer science. Daniel
						Dennett has used it to show evolution of things like consciousness and free will within the physical
						laws which govern the universe. Early use of it on computers foreshadowed the popularity of
						computer-generated fractals. Some people just look at it as a fun way to use otherwise wasted CPU
						cycles. Current developments have emulated theoretical computer systems within its confines.
				</p>
					<h3>Turing Completeness of Conway's Game of Life</h3>
					<p>
						CGOL is Turing-complete, meaning it can simulate a universal constructor on any other Turing
						machine. It is able to recognize or decide other data manipulation rulesets. It is also used as a
						way to express the power of such a ruleset. Virtually all programming languages today are
						Turing-complete. As stated earlier, it can be used to simulate the computational aspects of any
					possible real-world computer. It can compute every Turing-computable function.{' '}
					</p>
					<p>
						"Turing-completeness" is shown by showing that it can be used to simulate any other Turing-complete
						system. Example: An imperative language is Turing-complete if it has, one, conditional branching or
						branch-if-zero instruction and, two, the ability to change an arbitrary amount of memory, a.k.a.
						maintain an arbitrary number of data items.
				</p>
				</Div2>
				<h2>Cellular Automata</h2>
				<Div2>
					<p>
						A cellular automaton is a discrete model studied in "automata theory", a regular grid of cells, each
						cell in one of a finite number of states. The grid can be any finite number of dimensions. Cellular
						automata are also known as cellular spaces, cellular structures, and iterative arrays.
				</p>
				</Div2>
			</Div>
		)
};

export default About;