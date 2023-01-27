'use client'

import { useAppSelector, useAppDispatch } from "@/hooks";
import { RootState } from "@/store";
import { toggleHover, switchToTab } from "@/reducers/navSlice";
import handleHover from "@/app/(helpers)/handleNavHover";

const NavItem = ({ tab_name }: {tab_name: string}) => {
    const visible_tabs = useAppSelector((state: RootState) => state.nav.visible_tabs);
    const tabs = useAppSelector((state: RootState) => state.nav.tabs);
    const dispatch = useAppDispatch();

    return (
        <div id={tab_name}>
            <h1 className={`cursor-pointer ml-[15px] text-white font-montserrat font-bold text-[30px]`}
                onMouseEnter={() => dispatch(toggleHover(handleHover(tabs, 'enter', tab_name)))}
                onClick={() => dispatch(switchToTab(tab_name))}>
                {visible_tabs.includes(tab_name) ? tab_name : ""}
            </h1>
        </div>
    );
}
export default NavItem;