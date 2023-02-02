import Link from "next/link";
import {ReactNode} from "react";
import ProjectNavInfo from "@/app/projects/(components)/(client)/ProjectNavInfo";
import SearchBar from "@/app/projects/league/(components)/(server)/SearchBar";

const ProjectNav = ({ children }: { children: ReactNode}) => {
    return (
        <div className={'absolute flex flex-col items-center w-screen h-screen bg-black overflow-hidden'}>
            <Link href={"/"} className={"absolute h-screen w-[2vw] custom-landing-gradient right-[0px]"} />
            <ProjectNavInfo>
                <h1>What does this do</h1>
                <ul>
                    <li>This page allows you to see the last 10 games of any <a className="api-link" target={"_blank"} rel={"noreferrer"} href={"https://en.wikipedia.org/wiki/League_of_Legends"}>League of Legends</a> player.</li>
                </ul>
                <h1>How does it work</h1>
                <ul>
                    <li>First,
                        a request containing the given region/username is sent to a <a className={"api-link"} rel={"noreferrer"} href={"https://developer.riotgames.com/apis#summoner-v4"} target={"_blank"}>summoners/v4</a> endpoint to get the users puuid. Next, the now retrieved puuid is used to make a request
                        to the <a className={"api-link"} rel={"noreferrer"} href={"https://developer.riotgames.com/apis#match-v5"} target={"_blank"}>match/v5</a> endpoint, which returns a list of match ids. Finally, a request is made for each match id to <a className={"api-link"} rel={"noreferrer"} href={"https://developer.riotgames.com/apis#match-v5"} target={"_blank"}>match/v5</a> again. Lastly, each game and its data is returned to the server, rendered, then sent to the user.</li>
                </ul>
                <h1>Why did I make this</h1>
                <ul>
                    <li>I made this to learn more about data retrieval, dynamic routing, caching (RTK Query & cookies), and state management</li>
                </ul>
                <h1>What tools did I use</h1>
                <ul>
                    <li>Redux Toolkit Query (RTK Query)</li>
                    <li>Redux Toolkit</li>
                    <li>React</li>
                </ul>
            </ProjectNavInfo>
            {children}
        </div>
    );
}
export default ProjectNav;