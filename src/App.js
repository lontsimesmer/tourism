import './App.css';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import Home from './Pages/Home/Home';

function App() {
  return (
   <div>
    <NavBar />
    <Home />
   </div>
  );
}

export default App;

/* export const Header = () => {
  return (
    <div>
      <h1>My Header</h1>
    </div>
  )
}

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>My Header</h1>
      </div>
    )  
  }
} */
