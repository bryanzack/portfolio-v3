import {getMatches} from "@/app/projects/league/(helpers)/matchFetches";
import {matchNamespace} from "@/app/projects/league/(helpers)/match";
import MatchListResponse = matchNamespace.MatchListResponse;

type summoner_response = {
    accountId: string,
    profileIconId: number,
    revisionDate: number,
    name: string,
    id: string, //summonerid
    puuid: string,
    summonerLevel: number,
}

const MatchPage = async ({ params }: { params: {region: string, name: string}}) => {
    const summoner_obj = await getMatches(params.region, params.name);
    return (
        <>
            <h1 className={"text-white"}>{params.region} {params.name}</h1>
            <div className={"text-white"}>
                <div className={"text-white"}>
                    {(summoner_obj.data)
                        ? <h1 className={"text-white"}>{summoner_obj.data?.puuid}</h1>
                        : <h1 className={"text-white"}>{summoner_obj.status_code} {summoner_obj.message}</h1>}
                </div>
            </div>
        </>
    );
}
export default MatchPage;