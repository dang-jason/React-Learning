import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Header from "./components/Header";
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Components and parent/child components composed in page
function App() {
	return (
		<div className="wrapper">
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

root.render(<App />);
