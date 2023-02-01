import './globals.css'
import Providers from "@/app/(components)/(client)/Providers";
import {ReactNode} from "react";


const RootLayout = ({children}: { children: ReactNode; }) => {
    return (
        <html lang="en">
        {/*
            <head /> will contain the (components) returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
          */}
            <head>
                <title>bryan zack</title>
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
};
export default RootLayout;