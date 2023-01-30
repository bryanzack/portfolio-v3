'use client';

import Link from "next/link";
import {useAppSelector} from "@/hooks";
import {RootState} from "@/store";

const SearchButton = () => {
    const user_input = useAppSelector((state: RootState) => state.league.user_input);
    const selected_region = useAppSelector((state: RootState) => state.league.selected_region);
    return (
        <Link className={"flex justify-center items-center h-[75%] w-[75px] rounded-[7px] border-black border-[1px] font-roboto text-[14px]"}
                href={`/projects/league/${selected_region}/${user_input}`}>
            Submit
        </Link>
    );
}
export default SearchButton;