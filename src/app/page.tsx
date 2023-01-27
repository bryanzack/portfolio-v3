'use client';

import type { RootState } from '../store';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { animated, useTransition } from '@react-spring/web';
import { Bebas_Neue } from "@next/font/google";
import Trail from "@/app/(components)/Trail";
import Nav from "@/app/(components)/Nav";

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-bebas'
});

const Landing = (): JSX.Element => {
    const active_tab = useSelector((state: RootState) => state.nav.active_tab);
    const [open, setOpen] = useState(false);
    const about: string[] = ['PHOTOGRAPHY', 'PENNSTATE', 'WEBDEV', 'MUSIC'];
    const tech: string[] = ['TYPESCRIPT', 'REACTJS', 'NEXTJS', 'REDUX'];
    const projects: string[] = ['DATADISPLAY', 'PORTFOLIO', 'CARDS', '...'];
    const fade_in = useTransition(null, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
    const handleClick = (item: string) => {
      switch(item.toLowerCase()) {
        case 'cards':
          console.log("send user to card game selection");
          // NAVIGATE TO CARDS
          break;
        case '...':
          console.log("send user to github");
          // @ts-ignore
          window.open('https://github.com/bryanzack', '_blank').focus();
          break;
        case 'datadisplay':
          console.log("send user to league project");
          // NAVIGATE TO LEAGUE
          break;
        default:
          console.log("clicked: " + item);
      }
    }
    useEffect(() => {
      setOpen(false);
      setTimeout(() => {
        setOpen(true);
      }, 100);
    }, [active_tab]);
    return fade_in((style) => (
        <div className={"flex justify-center items-center h-screen w-screen bg-black"}>
            <div className={"z-2 fixed h-[470px] w-[520px] bg-white"}/>
            <div className={"z-3 absolute h-[470px] w-[520px] custom-landing-gradient"}/>
            <div className={"z-4 flex justify-center items-center bg-white h-[470px] w-[520px] pointer-events-none mix-blend-exclusion"}>
              <div className={`${bebas_neue.variable} font-sans`}>
                <Trail open={open}>
                  {active_tab === 'about' && about.map((item, index) => (
                      <span onClick={() => handleClick(item)} key={index}>{item}</span>
                  ))}
                  {active_tab === 'tech' && tech.map((item, index) => (
                      <span onClick={() => handleClick(item)} key={index}>{item}</span>
                  ))}
                  {active_tab === 'projects' && projects.map((item, index) => (
                      <span onClick={() => handleClick(item)} key={index}>{item}</span>
                  ))}
                </Trail>
              </div>
            </div>
            <Nav />
        </div>
  ));
}

export default Landing;