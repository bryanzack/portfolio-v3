'use client'

import { useDispatch, useSelector } from 'react-redux';
import { toggleHover } from "@/reducers/navSlice";
import handleHover from "@/app/(helpers)/handleNavHover";
import NavItem from "@/app/(components)/NavItem";
import type { RootState } from "@/store";


const Nav = () => {
    const tabs = useSelector((state: RootState) => state.nav.tabs);
    const active_tab = useSelector((state: RootState) => state.nav.active_tab);
    const dispatch = useDispatch();


    return (
        <div className={`z-5 fixed flex mb-[520px] mr-[50px] w-[540px] justify-end mix-blend-difference`}>
            <div className={"flex flex-row w-fit h-[25px] justify-center items-center"}
                onMouseLeave={() => dispatch(toggleHover(handleHover(tabs, 'leave', active_tab)))}>
                {tabs.map((tab: string, index: number) => (
                    <NavItem key={index} tab_name={tab} />
                ))}
            </div>
        </div>
    );
}
export default Nav;