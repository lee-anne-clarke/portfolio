'use client'

import Image from 'next/image'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';


export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Main />
    </div>
  )
}
