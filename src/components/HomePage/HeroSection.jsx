import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from '@mui/material';
import React from 'react';
import cartoon from '../../assets/cartoon.gif';
const openPortfolio = () => {
  const portfolioUrl = "https://praveenpage.netlify.com/";
  window.open(portfolioUrl, '_blank');
}; export default function HeroSection() {
  return (
    <div className="z-0 mb-3.5 w-full items-center justify-center ">
      <div className="flex h-[calc(100vh-200px)]  rounded-xl">
        <div className="align-center z-20 px-3.5 sm:px-0 flex max-w-full flex-col justify-center text-center  md:relative  xl:left-0">
          <h1 className="animate__animated animate__lightSpeedInLeft max-w-full text-left font-outfit text-7xl font-medium text-[#202124] dark:text-[#16c4cd] sm:text-8xl md:mb-3">
            Hi, I'm
            <br />
            <b style={{ paddingRight: '10px' }} className="bg-[#202124] from-[#16c4cd] to-blue-500  bg-clip-text pl-2 font-outfit font-medium text-transparent underline dark:bg-gradient-to-r">
              Praveen
            </b>

          </h1>
          <p style={{ textAlign: 'justify' }} className="animate__animated animate__flipInX mt-4 max-w-md pl-1.5 text-justify font-supreme text-[20px] leading-relaxed text-[#45474e] dark:text-[#edeeef] sm:max-w-md md:mt-0">
            A <b>Full Stack Developer</b>  located in India with a strong enthusiasm for web development. I derive satisfaction from crafting web applications.
            <br></br> <br></br>
            Read on to learn more about me
            <IconButton><LaunchIcon onClick={openPortfolio} style={{
              color: "#416fa5", cursor: "pointer", paddingLeft: '3px', paddingBottom: '1px'
            }} /></IconButton>
          </p>
        </div>

        <div className="wrap animate__animated animate__fadeInTopRight invisible right-2 top-28 z-10 mx-auto flex max-w-[10px] flex-col justify-center opacity-75 md:opacity-70 lg:visible lg:max-w-[470px] lg:opacity-100 xl:bottom-32 xl:right-0 xl:max-w-[540px] 2xl:top-20 2xl:max-w-[580px] 2.5xl:max-w-[600px] 3xl:top-0  3xl:max-w-[700px]">
          <img src={cartoon} style={{ height: '462px', width: '900px', paddingBottom: '20px' }} alt="gif" />
        </div>

      </div>
    </div>
  )
}
