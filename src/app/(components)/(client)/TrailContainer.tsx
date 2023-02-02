'use client';

import Trail from "@/app/(components)/(server)/Trail";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const TrailContainer = () => {
    const [open, setOpen] = useState(false);
    const active_tab = useSelector((state: RootState) => state.nav.active_tab);
    const about: string[] = ['PHOTOGRAPHY', 'PENNSTATE', 'WEBDEV', 'MUSIC'];
    const tech: string[] = ['TYPESCRIPT', 'REACTJS', 'NEXTJS', 'REDUX'];
    const projects: string[] = ['DATADISPLAY', 'PORTFOLIO', '...'];
    const router = useRouter();
    const handleClick = (item: string) => {
        switch(item.toLowerCase()) {
            case 'cards':
                console.log("send user to card game selection");
                router.push('/projects/cards/blackjack');
                // NAVIGATE TO CARDS
                break;
            case '...':
                console.log("send user to github");
                // @ts-ignore
                window.open('https://github.com/bryanzack', '_blank').focus();
                break;
            case 'datadisplay':
                console.log("send user to league project");
                router.push('/projects/league');
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
    return (
        <Trail open={open}>
            {active_tab === 'about' && about.map((item, index) => (
                <span className={"pointer-events-auto cursor-pointer"}
                      onClick={() => handleClick(item)} key={index}>{item}</span>
            ))}
            {active_tab === 'tech' && tech.map((item, index) => (
                <span className={"pointer-events-auto cursor-pointer"}
                      onClick={() => handleClick(item)} key={index}>{item}</span>
            ))}
            {active_tab === 'projects' && projects.map((item, index) => (
                <span className={"pointer-events-auto cursor-pointer"}
                      onClick={() => handleClick(item)} key={index}>{item}</span>
            ))}
        </Trail>
    );
}
export default TrailContainer;