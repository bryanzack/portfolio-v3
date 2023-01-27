import React, {ReactNode} from "react";
import { animated, useTrail } from '@react-spring/web';

type Props = {
    children?: ReactNode,
    open: boolean,
}
const Trail = ({ open, children }: Props) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        reset: true,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <>
            {trail.map(({ height, ...style}, index) => (
                <animated.div key={index} className={'relative w-max h-[80px] leading-[80px] text-black text-[6em] font-extrabold tracking-tighter will-change-transform'} style={style}>
                    <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
            ))}
        </>
    )
}
export default Trail;