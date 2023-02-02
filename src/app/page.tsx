import Nav from "@/app/(components)/(client)/Nav";
import TrailContainer from "@/app/(components)/(client)/TrailContainer";

const Landing = () => {
    return (
        <div className={"flex justify-center items-center h-screen w-screen bg-black"}>
            <div className={"z-2 fixed h-[470px] w-[520px] bg-white"}/>
            <div className={"z-3 absolute h-[470px] w-[520px] custom-landing-gradient"}/>
            <div className={"z-4 absolute flex justify-center items-center bg-white h-[470px] w-[520px] pointer-events-none mix-blend-exclusion"}>
                <div className={"font-bebas"}>
                    <TrailContainer />
                </div>
            </div>
            <div className={`z-5 fixed flex mb-[520px] mr-[50px] w-[540px] justify-end mix-blend-difference`}>
                <Nav />
            </div>
        </div>
  );
}

export default Landing;