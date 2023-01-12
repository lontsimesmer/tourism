import React from 'react';
import StickyBar from '../../Components/StickyBar/StickyBar';
import NavBar from '../../Components/NavBar/NavBar';
import DisplayCards from '../../Components/DisplayCards/DisplayCards';
import PageImage from './PageImage';

export default function Home () {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <PageImage />
      <DisplayCards />
    </div>
  )
}
