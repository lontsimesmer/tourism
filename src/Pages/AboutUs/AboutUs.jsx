import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const goAfter = () => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }

  return (
    <>
      <h1>About Page</h1>
      <Link to="/">Go Back</Link>
      <button onClick={goAfter} type="button">
        go after 5
      </button>
    </>
  );
}
