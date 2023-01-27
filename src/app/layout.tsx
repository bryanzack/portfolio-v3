import './globals.css'
import Providers from "@/app/(components)/Providers";

type Props = {
    children: JSX.Element,
}
const RootLayout = ({ children }: Props) => {
    return (
        <html lang="en">
            {/*
            <head /> will contain the (components) returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
          */}
            <head />
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
export default RootLayout;