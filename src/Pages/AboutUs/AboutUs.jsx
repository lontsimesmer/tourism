import React from 'react'
import StickyBar from '../../Components/StickyBar/StickyBar';
import NavBar from '../../Components/NavBar/NavBar';
/* import { Link, useNavigate } from 'react-router-dom'; */

export default function AboutUs () {
  return (
    <div>
      <StickyBar/>
      <NavBar />
    </div>
  )
  /* const navigate = useNavigate();

  const goAfter = () => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  } */

  /* return (
    <>
      <h1>About Page</h1>
      <Link to="/">Go Back</Link>
      <button onClick={goAfter} type="button">
        go after 5
      </button>
    </>
  ); */
}
