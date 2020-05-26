import React from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components';
import Footer from './components/Footer';
import GButtons from './components/GButtons';
import Grid from './components/Grid';
import Header from './components/Header';
import PSButtons from './components/PSButtons';
import Rules from './components/Rules';
import { Route, Switch, Link } from 'react-router-dom';
import Blog from './components/Blog';

const smoothRide = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;


const Div = styled.div`
	background: linear-gradient(275deg, #642b73, #c6426e);
	background-size: 400% 400%;
	-webkit-animation: ${smoothRide} 17s ease infinite;
	-moz-animation: ${smoothRide} 17s ease infinite;
	-o-animation: ${smoothRide} 17s ease infinite;
	animation: ${smoothRide} 17s ease infinite;
	color: white;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	margin-top: -2.1%;
`;

const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
  padding: 3%;
`;
const FlexSubContainers1 = styled.div`
  padding: 3%;
	border: 1px solid black;
`;
const FlexSubContainers2 = styled.div`
	padding: 3%;
	max-width: 15%;
	border: 1px solid black;
`;
const FlexSubContainers3 = styled.div`
  padding: 3%;
  max-width: 25%;
  border: 1px solid black;
`;


function App() {
  return (
		<Div>
			<Header />
			<FlexContainer>
				<FlexSubContainers1>
					<Grid />
				</FlexSubContainers1>
				<FlexSubContainers2>
				<PSButtons />
				</FlexSubContainers2>
				<FlexSubContainers3>
				<Rules />
				</FlexSubContainers3>
			</FlexContainer>
			<Footer />
		</Div>
  );
}

export default App;
