'use client';
import {ReactNode, useEffect, useState} from "react";
import { animated, useSpring } from '@react-spring/web';

type Props = {
    children: ReactNode,
}
const ProjectNavInfo = ({ children }: Props) => {
    const [show_help, setShowHelp] = useState(true);
    /// -18vw
    const help_tab = useSpring({
        to: {
            left: show_help ? '0vw' : '-18vw',
        },
    });
    const text_style = useSpring({
        to: {
            opacity: show_help ? 1 : 0,
        }
    });
    return (
        <animated.div className={"cursor-pointer absolute h-screen w-[20vw] custom-landing-gradient"}
            style={help_tab} onClick={() => setShowHelp(!show_help)}>
            <div className={"flex items-center justify-center w-full h-full custom-landing-gradient"}>
                <animated.div className={"mix-blend-exclusion text-cwhite-mintcream font-roboto w-[90%] h-[95%]"}
                    style={text_style}>
                    {children}
                </animated.div>
            </div>
        </animated.div>
    );
}
export default ProjectNavInfo;