import {getMatches} from "@/app/projects/league/(helpers)/matchFetches";
import {matchNamespace} from "@/app/projects/league/(helpers)/match";
import Match from "@/app/projects/league/(components)/(server)/Match";

export const dynamic = 'force-dynamic';

const MatchPage = async ({ params }: { params: {region: string, name: string}}) => {
    const matches = await getMatches(params.region, params.name);
    return (
        <>
            <h1 className={"text-white"}>{params.region} {params.name}</h1>
            <div className={"text-white"}>
                {matches.data &&
                    //for every match
                    matches.data.map((match: matchNamespace.Match, index) => (
                        // for every player in match
                        match.info.participants.map((player, index) => {
                            // if player is user, render match
                            if (player.puuid === matches.puuid)
                                return <Match win={player.win} match={match} puuid={matches.puuid}/>
                        })
                    ))}
                {!matches.data &&
                    <h1 className={"text-white"}>{matches.status_code} {matches.message}</h1>
                }
            </div>
        </>
    );
}
export default MatchPage;