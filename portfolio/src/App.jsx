import Footer from './components/layout/Footer/Footer.jsx'
import Header from './components/layout/Header/Header.jsx'
import About from './components/sections/About/About.jsx'
import Contact from './components/sections/Contact/Contact.jsx'
import Hero from './components/sections/Hero/Hero.jsx'
import Services from './components/sections/Services/Services.jsx'
import Work from './components/sections/Work/Work.jsx'
import LanguageProvider from './i18n/LanguageProvider.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <div id="top">
        <Header />
        <main>
          <Hero />
          <Work />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
