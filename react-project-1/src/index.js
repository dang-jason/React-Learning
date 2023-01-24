import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
//very first page written with react
function PracticePage() {
  return (
    <div>
      <img src="./react-logo.png" width="80px"></img>
      <h1>Fun facts about react</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was orginially created by Jordan Walke</li>
        <li>Has well over 100K stars on GIthub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

//Components and parent/child components composed in page
function Header(){
  return (
    <header>
      <nav>
          <img src="./react-logo.png" width="40px"/>
      </nav>
    </header>
  );
}

function MainContent(){
  return (
    <div>
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
    <footer>
      <small>© 2023 Dang development. All rights reserved.</small>
    </footer>
  );
}


function Page() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
  )
}

root.render(<Page />);
