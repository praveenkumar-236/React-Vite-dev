import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import praveen from '../../assets/praveen.jpg'
import Experience from './Experience'
import Skills from './Skills'

export default function AboutMe() {
  return (
    <>
      <div className="cont grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
        <div className="car mainCard col-span-4 row-span-2 lg:col-span-2">
          <div className="flex justify-between">
            <h1 className=" pt-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Personal Note</h1>

            <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
          </div>
          <hr className="my-3" />
          <p className="text-justify font-supreme text-lg tracking-wide text-gray-700 dark:text-[#383b41] md:text-[20.5px] lg:leading-normal">
            I am a Software Engineer who grew up in Madurai, with a passion for building clean designs and visually appealing applications.
            <br /> <br />
            Frontend and full-stack technologies have been my main focus for projects lately.
            <br /> <br />
            Technologies I am currently working with include: Java, SpringBoot, Kafka, Next.js, React, Tailwind, and Amazon Web Services .
            <br /> <br />
            The constant exploration of intriguing new technologies fuels my motivation to plan and execute projects that I find enjoyable, leading to enhanced learning outcomes.
            <br /> <br />
            Staying up to date with web technologies in particular and working with React has been highly enjoyable and it motivated me to build
            interesting software.
            <br /> <br />
            Beyond the realm of technology, I have a keen interest in Tamil literature and indulge in the art of writing Poetry, combining my technical expertise with a love for the cultural and literary aspects of my heritage.
          </p>
        </div>
        <div className=" align-center col-span-4 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] p-1.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#edeeef] lg:col-span-2 2xl:col-span-2 3xl:col-span-1">
          <div className=" flex-wrap overflow-hidden rounded-xl p-1.5">
            <img src={praveen} alt="asd" className="min-h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>

        <Skills />



        <Experience />
        <div className="  col-span-4 ">
          <div className="grid grid-cols-4 gap-3.5  xl:grid-cols-3">
            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] py-6 text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-3 text-[19.5px] font-bold">Web Development</h>
              <div className="mb-2 flex ">
                <i className="devicon-css3-plain colored text-6xl"></i>
                <i className="devicon-html5-plain colored text-6xl"></i>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-14" />
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p style={{ textAlign: 'justify' }}>
                  I have solid experience building with HTML, CSS, JavaScript and TypeScript through work place projects and personal projects.
                </p>
              </div>
            </div>
            {/* One card END */}

            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee]   py-6 text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-3 text-[19.5px] font-bold ">Frontend Framework</h>
              <div className="mb-2 flex">
                <i class="devicon-react-original-wordmark colored text-6xl"></i>
                <i class="devicon-nextjs-original text-6xl"></i>
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p style={{ textAlign: 'justify' }}>
                  I currently work as a Software Developer for AVPS Tech.ie where I have gained solid experience with React.js, Javascript and Tailwind.
                  Also, I have experience building personal projects with Next.js during and after university.
                </p>
              </div>
            </div>
            {/* One card END */}

            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] py-6  text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-3 text-[19.5px] font-bold">Backend Development</h>
              <div className="mb-2 flex gap-3">
                <i class="devicon-java-plain-wordmark colored text-5xl"></i>
                <i class="devicon-spring-plain-wordmark colored text-5xl"></i>
                {/* <i class="devicon-nodejs-plain colored text-5xl"></i> */}

              </div>
              <div style={{ textAlign: 'justify' }} className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p>

                  At my job, I used Java Spring Boot to make strong and scalable solutions for projects. When I was in college for my last year, I worked on a team project using Python and Machine Learning.                </p>
              </div>
            </div>
            {/* One card END */}

            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] py-6  text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-2 text-[19.5px] font-bold">Databases</h>
              <div className="mb-3 flex gap-3">
                <i class="devicon-mongodb-plain-wordmark colored text-6xl"></i>
                <i class="devicon-mysql-plain-wordmark colored text-6xl"></i>
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p style={{ textAlign: 'justify' }}>

                  I used MongoDB and MySQL as databases for end-to-end applications in both workplace projects and personal projects. In these projects, I managed and organized data using MongoDB and MySQL, ensuring that the applications could handle data storage and retrieval efficiently.
                </p>
              </div>
            </div>
            {/* One card END */}

            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] py-6  text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-3 text-[19.5px] font-bold">Frontend Design and UI</h>
              <div className="mb-2 flex gap-3">

                <i class="devicon-tailwindcss-plain colored text-6xl"></i>
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p style={{ textAlign: 'justify' }}>
                  To ensure that my applications are responsive and stylish I use Tailwind, which allows me to design with mobile first approach and
                  be as creative as possible. I also like using the amazing ui/shadcn components to make my applications look more clean.
                </p>
              </div>
            </div>
            {/* One card END */}

            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] py-6  text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-3 text-[19.5px] font-bold">Source Control</h>
              <div className="mb-2 flex gap-3">

                <i class="devicon-git-plain colored text-6xl"></i>

                <i class="devicon-github-original-wordmark colored text-6xl"></i>
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p style={{ textAlign: 'justify' }}>
                  To keep track of my code changes and project versions I use Git and GitHub. Most of my projects are hosted on GitHub, where I try to
                  work on side projects continually. For work, I use Linear for sprints and task management.
                </p>
              </div>
            </div>
            {/* One card END */}
          </div>
        </div>
      </div>
    </>
  )
}
