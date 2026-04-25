import Nav from './components/Nav'
import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'
import Products from './components/Products'
import Services from './components/Services'
import Approach from './components/Approach'
import Why from './components/Why'
import TwoPaths from './components/TwoPaths'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Marquee from './components/Marquee'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ecosystem />
        <Marquee items={['код', 'запуск', 'результат', 'miva × coder', 'void']} />
        <Products />
        <Services />
        <Approach />
        <Why />
        <TwoPaths />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
