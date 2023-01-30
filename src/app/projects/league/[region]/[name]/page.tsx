import {getPuuid} from "@/app/projects/league/(helpers)/matchFetches";

type by_name_response = {
    accountId: string,
    profileIconId: number,
    revisionDate: number,
    name: string,
    id: string, //summonerid
    puuid: string,
    summonerLevel: number,
}



const MatchPage = async ({ params }: { params: {region: string, name: string}}) => {
    const summoner: by_name_response = await getPuuid(params.region, params.name);
    return (
        <>
            <h1 className={"text-white"}>{params.region} {params.name}</h1>
            <h1 className={"text-white"}>{summoner.puuid}</h1>
        </>
    );
}
export default MatchPage;