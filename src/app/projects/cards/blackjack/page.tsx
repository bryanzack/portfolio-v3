import Deck from "@/app/projects/cards/blackjack/(components)/Deck";

const Blackjack = () => {
    return(
        <div className={"flex flex-col w-2/4 h-full "}>
            <div className={"flex justify-center items-center w-full h-1/2 bg-blue-300"}>
                <div className={"flex justify-center items-end w-1/3 h-full bg-green-100"}>
                    <Deck />
                </div>
                <div className={"flex justify-center items-center w-1/3 h-full bg-orange-100"}>
                    <Deck />
                </div>
                <div className={"flex justify-center items-end w-1/3 h-full bg-purple-100"}>
                    <Deck />
                </div>
            </div>
            <div className={"flex justify-center items-center w-full h-1/2 bg-red-300"}>
                <div className={"flex justify-center items-center w-1/3 h-full bg-blue-100"}>
                    <Deck />
                </div>
            </div>
        </div>
    );
}
export default Blackjack;