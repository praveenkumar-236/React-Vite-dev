import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import CVButton from './Navbar/CVButton'
import { MailLock } from '@mui/icons-material'

export default function Footer() {
  return (
    <div className="mt-3.5 flex justify-between rounded-t-lg bg-[#f1f0ee] p-5 px-5 text-left text-gray-600 dark:bg-[#edeeef]">
      <div>
        <p className="text-xs text-gray-500">© Made by Praveen Kumar in 2024</p>

        <a href="mailto:praveencse041@gmail.com" className="mt-2 text-xs text-gray-500 hover:text-indigo-500">
          praveencse041@gmail.com
        </a>
      </div>


      <div className="flex gap-2 text-right dark:text-[#e0eaf2]">
        <a className="tooltip tooltip-bottom" data-tip="Linkedin.com/praveen" target="_blank" href="https://www.linkedin.com/in/pk-b87b3b212/">
          <BsLinkedin className="tooltip cursor-pointer  rounded-md text-[1.8rem] hover:fill-[#0069b9]   dark:hover:fill-[#00adb5]" fill="black" />
        </a>
        <a className="tooltip tooltip-bottom" data-tip="github.com/praveen" target="_blank" href="https://github.com/praveenkumar-236">
          <BsGithub className=" cursor-pointer text-[1.8rem]  hover:fill-[#0069b9]  dark:hover:fill-[#00adb5]" fill="black" data-tip="hello" />
        </a>
        <CVButton />
      </div>
    </div>
  )
}
