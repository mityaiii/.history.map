'use client';

import Header from './components/header/header';
import Landing from './components/home/landing';
import Sections from './components/home/sections';
import Team from './components/home/sections/team';
import About from './components/home/sections/about';

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Sections>
        <About />
        <Team />
      </Sections>
    </div>
  );
}
