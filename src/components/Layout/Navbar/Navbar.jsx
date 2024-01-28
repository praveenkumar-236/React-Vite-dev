import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CVButton from './CVButton'
import './CVButtonAnimate.css'
import './darkModeSwitch.css'

export default function Navbar({ handleThemeSwitch }) {

  return (
    <div className="align-center mx-auto mb-3.5 flex items-center justify-between p-5 px-2 pt-5 text-center sm:p-7 xl:mx-auto xl:w-10/12 xl:p-0 xl:pt-5 2xl:w-8/12 3xl:w-7/12">
      <div className="flex items-center">
        <div className="dropdown mt-2 block lg:hidden">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>

        </div>
        <Link to="https:praveenpage.netlify.com/" target="_blank" rel="noopener noreferrer">
          <p className=" mt-2 py-1 font-outfit text-xl tracking-wider text-[#202124] transition-all delay-150 duration-300 ease-in-out hover:translate-x-1 hover:scale-105 hover:cursor-pointer hover:rounded-xl hover:bg-[#e9e6e6] hover:px-3 hover:py-1 dark:text-[#f6eee8] hover:dark:bg-[#36363b]">
            PraVeen
          </p>
        </Link>
      </div>


      <div className="flex gap-2 pt-3  dark:text-[#e0eaf2]">
        <a className="tooltip tooltip-bottom" data-tip="linkedin.com/praveen" target="_blank" href="https://www.linkedin.com/in/pk-b87b3b212/">
          <BsLinkedin
            className="tooltip cursor-pointer  rounded-md text-[1.8rem] hover:fill-[#0069b9] dark:fill-[#f9f3ee]  dark:hover:fill-[#00adb5]"
            fill="black"
          />
        </a>
        <a className="tooltip tooltip-bottom" data-tip="github.com/praveen" target="_blank" href="https://github.com/praveenkumar-236">
          <BsGithub
            className=" cursor-pointer text-[1.8rem]  hover:fill-[#0069b9] dark:fill-[#f9f3ee] dark:hover:fill-[#00adb5]"
            fill="black"
            data-tip="hello"
          />
        </a>

        <CVButton />

        <label className="switch tooltip tooltip-bottom " data-tip="Toggle Dark Mode">
          <input onClick={handleThemeSwitch} type="checkbox" />
          <span className="slider"></span>
        </label>

      </div>
    </div>
  )
}
