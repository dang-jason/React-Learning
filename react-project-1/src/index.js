import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

//Components and parent/child components composed in page
function Header(){
  return (
    <header>
      <nav className="nav">
          <img src="./react-logo.png" className="nav-logo"/>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
    </header>
  );
}

function MainContent(){
  return (
    <div className='main'>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
          <li>It's a popular library, so I'll be 
          able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
    </div>
  );
}

function Footer(){
  return (
    <footer className='footer'>
      <small>© 2023 Dang development. All rights reserved.</small>
    </footer>
  );
}


function Page() {
    return (
      <div className="wrapper">
        <Header />
        <MainContent/>
        <Footer />
      </div>
  )
}

root.render(<Page />);
