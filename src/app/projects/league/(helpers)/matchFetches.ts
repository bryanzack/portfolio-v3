export async function getMatches(region: string, name: string) {
    const key = process.env.RIOT_KEY;

    const summoner_endpoint = 'api.riotgames.com/lol/summoner/v4/summoners/by-name';
    const summoner_url = `https://${region}.${summoner_endpoint}/${name}?api_key=${key}`
    const summoner_res = await fetch(summoner_url);
    const summoner_json = await summoner_res.json();

    console.log(summoner_json);
    if (!summoner_json.puuid) {
        console.log("does not exist");
        return {
            message: summoner_json.status.message,
            status_code: summoner_json.status.status_code
        };
    }

    return {
        message: "successful puuid fetch",
        status_code: 200,
        data: summoner_json,
    };

    /*
    const list_endpoint = 'api.riotgames.com/lol/match/v5/matches/by-puuid';
    const list_url = `https://${translateRegion(region)}.${list_endpoint}/${summoner_json.puuid}/ids?start=0&count=10&api_key=${key}`;
    const list_res = await fetch(list_url);
    const list_json = await list_res.json();

     */
}
