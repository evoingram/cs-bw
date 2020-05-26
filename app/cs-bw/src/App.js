import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { keyframes } from 'styled-components';
import About from './components/About';
import Footer from './components/Footer';
import GButtons from './components/GButtons';
import Grid from './components/Grid';
import Header from './components/Header';
import PSButtons from './components/PSButtons';
import Rules from './components/Rules';

const Div = styled.div`
	background: linear-gradient(275deg, #642b73, #c6426e);
	background-size: 400% 400%;
	-webkit-animation: ${smoothRide} 17s ease infinite;
	-moz-animation: ${smoothRide} 17s ease infinite;
	-o-animation: ${smoothRide} 17s ease infinite;
	animation: ${smoothRide} 17s ease infinite;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
`;

const smoothRide = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;


function App() {
  return (
    <Div>
      <header className="App-header">
        <Header />
        <div>
          <Grid />
          <PSButtons />
          <Rules />
        </div>
      </header>
      <Footer />
    </Div>
  );
}

export default App;
