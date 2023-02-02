'use client';
import {Skeleton} from "@mui/material";
const LoadingMatches = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) arr.push(i);
    return (
        <div className={"flex flex-col items-center justify-center relative"}>
            {arr.map((item, index) =>
                <Skeleton key={index} className={"m-[5px] opacity-[75%]"} sx={{bgcolor: 'silver', animationDuration: '1s'}} animation={"wave"} variant={"rounded"} width={750} height={96} />
            )}
        </div>
    );
}
export default LoadingMatches;