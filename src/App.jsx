  import 'animate.css'
  import { useEffect, useState } from 'react'
  import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
  import './App.css'
  import Footer from './components/Layout/Footer'
  import Navbar from './components/Layout/Navbar/Navbar'
  import './index.css'
  import Home from './pages/Home'
  import NotFound from './pages/NotFound'
  function App() {
    const [theme, setTheme] = useState(null)

    const handleThemeSwitch = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }, [])

    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, [theme])
    return (
      <Router>
        <div className="dark:bg-bg-gradient-to-b overflow-hidden bg-gradient-to-b from-[#f8f5f5] via-white to-[#f8fbff] dark:from-[#252529] dark:to-[#252529]">
          <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
          <div className="max-w-screen z-20 mx-auto flex  min-h-screen flex-col  justify-center  text-center sm:p-7 xl:mx-auto xl:w-10/12 xl:p-0 xl:pt-5 2xl:w-8/12 3xl:w-7/12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }

  export default App
