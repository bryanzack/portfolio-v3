'use client';

import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/store";
import { updateUserInput } from "@/reducers/leagueSlice";
import React from "react";

const SearchInput = () => {
    const dispatch = useAppDispatch();
    const user_input = useAppSelector((state: RootState) => state.league.user_input);
    return (
        <input className={"h-[90%] w-[300px] focus:outline-none ml-[15px] text-[17px] font-roboto font-black"}
                type={"text"}
                value={user_input}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateUserInput(e.target.value))} />
    );
}
export default SearchInput;