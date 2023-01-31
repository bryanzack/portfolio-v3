import translateRegion from "@/app/projects/league/(helpers)/translateRegion";
import {matchNamespace} from "@/app/projects/league/(helpers)/match";

export type ErrorResponse = {
    message: string,
    status_code: number,
}
export type SummonerResponse = {
    accountId: string,
    profileIconId: number,
    revisionDate: number,
    name: string,
    id: string,
    puuid: string,
    summonerLevel: number,
}

export async function getMatches(region: string, name: string) {
    const key = process.env.RIOT_KEY;

    const summoner_endpoint = 'api.riotgames.com/lol/summoner/v4/summoners/by-name';
    const summoner_url = `https://${region}.${summoner_endpoint}/${name}?api_key=${key}`
    const summoner_res = await fetch(summoner_url);
    const summoner_json = await summoner_res.json();

    console.log(summoner_json);
    return summoner_json;

    /*
    const list_endpoint = 'api.riotgames.com/lol/match/v5/matches/by-puuid';
    const list_url = `https://${translateRegion(region)}.${list_endpoint}/${summoner_json.puuid}/ids?start=0&count=10&api_key=${key}`;
    const list_res = await fetch(list_url);
    const list_json = await list_res.json();

     */
}
