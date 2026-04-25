import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Ecosystem from './components/Ecosystem'
import Products from './components/Products'
import Cases from './components/Cases'
import Services from './components/Services'
import Approach from './components/Approach'
import Calculator from './components/Calculator'
import Why from './components/Why'
import TwoPaths from './components/TwoPaths'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Marquee from './components/Marquee'
import Splash from './components/Splash'

export default function App() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      {!entered && <Splash onEnter={() => setEntered(true)} />}
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Ecosystem />
        <Marquee items={['код', 'запуск', 'результат', 'miva × coder', 'системы']} />
        <Cases />
        <Products />
        <Services />
        <Approach />
        <Calculator />
        <Why />
        <TwoPaths />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
