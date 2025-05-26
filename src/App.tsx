import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import { ThemeToggle } from './components/ThemeToggle'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 light:bg-white transition-colors duration-300">
      <Header />
      <ThemeToggle />
      <ScrollToTop />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App