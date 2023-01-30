export async function getPuuid(region: string, name: string) {
    const key = process.env.RIOT_KEY;
    const endpoint = 'api.riotgames.com/lol/summoner/v4/summoners/by-name';
    const url = `https://${region}.${endpoint}/${name}?api_key=${key}`
    console.log(url);
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('failed to fetch puuid');
    }
    return res.json();
}

export async function getMatchList(puuid: string) {
    const key = process.env.RIOT_KEY;
    const endpoint = 'api.riotgames.com/lol/summoner/v4'
}
