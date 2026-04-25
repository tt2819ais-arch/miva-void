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
import Testimonials from './components/Testimonials'
import TwoPaths from './components/TwoPaths'
import Faq from './components/Faq'
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
        <Stats />
        <Ecosystem />
        <Marquee items={['код', 'запуск', 'результат', 'miva × coder', 'void']} />
        <Cases />
        <Products />
        <Services />
        <Approach />
        <Calculator />
        <Why />
        <Testimonials />
        <TwoPaths />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
