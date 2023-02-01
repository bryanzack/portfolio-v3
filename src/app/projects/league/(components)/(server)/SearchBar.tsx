import RegionSelector from "@/app/projects/league/(components)/(client)/RegionSelector";
import SearchInput from "@/app/projects/league/(components)/(client)/SearchInput";
import SearchButton from "@/app/projects/league/(components)/(client)/SearchButton";

const SearchBar = () => {
    return (
        <div className={"mt-[50px] flex justify-center items-center flex w-[535px] h-[100px] rounded-[7px]"}>
            <div className={"flex justify-start w-[500px] h-[70px] bg-white border-black border-[2px] rounded-[7px] pt-[16px] pb-[5px] pl-[15px] pr-[15px]"}>
                <RegionSelector />
                <SearchInput />
                <SearchButton />
            </div>
        </div>
    );
}
export default SearchBar;