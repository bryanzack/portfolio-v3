import {ReactNode} from "react";
import ProjectNavInfo from "@/app/projects/(components)/(client)/ProjectNavInfo";
import SearchBar from "@/app/projects/league/(components)/(server)/SearchBar";

const LeagueLayout = ({ children }: { children: ReactNode }) => {
    return (
            <div className={"w-[100vw] overflow-y-scroll flex flex-col items-center"}>
                <SearchBar />
                {children}
            </div>
    );
}
export default LeagueLayout;