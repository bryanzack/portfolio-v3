'use client';

import { useAppDispatch, useAppSelector } from "@/hooks";
import { useState } from 'react';
import { easings, animated, useTransition, useSpring } from '@react-spring/web';
import { RootState } from "@/store";
import { selectRegion, setRegionMenu } from "@/reducers/leagueSlice";
import Regions from "@/app/projects/league/(helpers)/regions";

const RegionSelector = () => {
    const dispatch = useAppDispatch();
    const region_menu = useAppSelector((state: RootState) => state.league.region_menu);
    const regions = useAppSelector((state: RootState) => state.league.regions);
    const menu_spring = useSpring({
        to: {
            height: region_menu ? '875%' : '75%',
        },
        config: {
            duration: 200,
            easing: easings.easeInQuad,
        },
    });
    return (
        <animated.div className={"flex items-center flex-col overflow-hidden w-[75px] bg-white border-[1px] border-black rounded-[7px] pt-[5px]"}
                style={menu_spring}
                onMouseEnter={() => dispatch(setRegionMenu(true))}
                onMouseLeave={() => dispatch(setRegionMenu(false))}>
                {regions.map((region, index) => (
                    <span className={"select-none cursor-pointer"}
                          key={index}
                          onClick={() => {dispatch(selectRegion(region)); dispatch(setRegionMenu(false));}}>
                        {Regions[region].abbreviation}
                    </span>
                ))}
        </animated.div>
    );
}

export default RegionSelector;