import translateRegion from "@/app/projects/league/(helpers)/translateRegion";

// sequential fetching needed since each request depends on information from the previous
export async function getMatches(region: string, name: string) {
    const key = process.env.RIOT_KEY;

    // fetch summonerID
    const summoner_endpoint = 'api.riotgames.com/lol/summoner/v4/summoners/by-name';
    const summoner_url = `https://${region}.${summoner_endpoint}/${name}?api_key=${key}`
    const summoner_res = await fetch(summoner_url, { cache: 'no-store' });
    const summoner_json = await summoner_res.json();
    if (!summoner_json.puuid) {
        console.log("does not exist");
        return {
            message: summoner_json.status.message,
            status_code: summoner_json.status.status_code
        };
    }

    // fetch list of recent match ids
    const list_endpoint = 'api.riotgames.com/lol/match/v5/matches/by-puuid';
    const list_url = `https://${translateRegion(region)}.${list_endpoint}/${summoner_json.puuid}/ids?start=0&count=10&api_key=${key}`;
    const list_res = await fetch(list_url, { cache: 'no-store' });
    const list_json = await list_res.json();
    if (list_json.length === 0 || list_json.length === undefined) {
        return {
            message: list_json.status.message,
            status_code: list_json.status_code,
        }
    }

    // fetch data for each match id
    const matches_endpoint = 'api.riotgames.com/lol/match/v5/matches';
    const matches_urls = list_json.map((id: string, index: number) => `https://${translateRegion(region)}.${matches_endpoint}/${id}?api_key=${key}`);
    const matches_json = await Promise.all(matches_urls.map((url: string) => fetch(url, { cache: 'no-store' }).then(res => res.json())));
    return {
        message: "Successful matches fetch",
        status_code: 200,
        data: matches_json,
        puuid: summoner_json.puuid,
    };
}
