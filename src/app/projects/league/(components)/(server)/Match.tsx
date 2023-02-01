import {matchNamespace} from "@/app/projects/league/(helpers)/match";
import {handleTimeLength, handleTimeSince} from "@/app/projects/league/(helpers)/translateTimeStamps";
import {translateChampName} from "@/app/projects/league/(helpers)/translateChampName";

const Match = ({ match, win, puuid }: { match: matchNamespace.Match, win: boolean, puuid: string}) => {// shortcuts
    const user_index = match.metadata.participants.indexOf(puuid); // user participant object index
    const info = match.info; // shortcut to match.info
    const user = info.participants[user_index]; // shortcut for info.participants[user_index]

    // game content
    const now_timestamp = new Date().getTime();
    const end_timestamp = (info.gameCreation + info.gameDuration); // game end timestamp
    const seconds_since = (now_timestamp - end_timestamp)/1000; // seconds since game ended
    const time_since = handleTimeSince(seconds_since); // time since game ended as pretty string
    const game_duration = handleTimeLength(info.gameDuration); // game duration as pretty string
    const game_mode = info.gameMode;

    // user content
    const team_kills = user.teamId === 100
        ? match.info.teams[0].objectives.champion.kills
        : match.info.teams[1].objectives.champion.kills;
    const kills = user.kills;
    const deaths = user.deaths;
    const assists = user.assists;
    const champ_name = translateChampName(user.championName);
    const champ_level = user.champLevel;
    const summoner_1 = user.summoner1Id;
    const summoner_2 = user.summoner2Id;
    const items = [
        user.item0,
        user.item1,
        user.item2,
        user.item3,
        user.item4,
        user.item5,
        user.item6,
    ];
    const multi_kill = user.largestMultiKill;
    const perk_primary = user.perks.styles[0].selections[0].perk;
    const perk_secondary = user.perks.styles[1].style;
    return (
        <div className={`match ${win ? 'bg-cblue-light' : 'bg-cred-light'}`}>
            match
        </div>
    );
}
export default Match;