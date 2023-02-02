import {matchNamespace} from "@/app/projects/league/(helpers)/match";
import {handleTimeLength, handleTimeSince} from "@/app/projects/league/(helpers)/translateTimeStamps";
import {translateChampName} from "@/app/projects/league/(helpers)/translateChampName";
import {translateSpell} from "@/app/projects/league/(helpers)/translateSpell";
import {translatePrimary, translateSecondary} from "@/app/projects/league/(helpers)/translateRunes";
import Link from "next/link";
import {translateMultiKill} from "@/app/projects/league/(helpers)/translateMultiKill";

const Match = ({ match, win, puuid, region }: { match: matchNamespace.Match, win: boolean, puuid: string, region: string }) => {// shortcuts
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
    const minions_killed = user.totalMinionsKilled;
    const neutral_minions = user.neutralMinionsKilled;
    const cs_min = Math.round(((minions_killed+neutral_minions)/(match.info.gameDuration/60))*10)/10;
    return (
        <div className={`${win ? 'bg-cblue-backdrop' : 'bg-cred-backdrop'} opacity-[75%] hover:opacity-100 flex-row h-[96px] w-[750px] m-[5px] font-roboto rounded-[4px]`}>
            <div className={`${win ? 'border-l-cblue-dark' : 'border-l-cred-dark'} flex flex-row items-center justify-start h-[96px] w-[93%] pt-[0px] pr-[8px] pb-[0px] pl-[12px] border-l-[6px] rounded-[4px]`}>
                <div className={"flex flex-col justify-center w-[108px] bg-[#9E9EB] leading-[16px] text-[13px]"}>
                    <div className={`${win ? 'text-cblue-dark' : 'text-cred-dark'} font-extrabold text-[12px]`}>
                        {game_mode}
                    </div>
                    <div className={"leading-[16px] text-cgrey-text"}>{time_since}</div>
                    <div className={`${win ? 'bg-cblue-line' : 'bg-cred-line'} w-[48px] h-[1px] mt-[8px] mb-[4px]`} />
                    <div className={'font-bold leading-[16px] text-cgrey-text'}>{win ? 'Victory' : 'Defeat'}</div>
                    <div className={'leading-[16px] text-cgrey-text'}>{game_duration}</div>
                </div>
                <div className={"flex-row"}>
                    <div className={"flex"}>
                        <div className={"flex items-center"}>
                            <img className={"w-[50px] h-[50px] rounded-[50%] object-cover"}
                                 src={`/images/leaguestuff/champion/${champ_name}.png`} alt={"champ_name"} width={50} height={50}/>
                            <div className={"w-[20px] h-[20px] absolute ml-[30px] mt-[30px] flex justify-center items-center bg-cgrey-level text-[11px] rounded-[50%]"}>{champ_level}</div>
                        </div>
                        <div className={"ml-[4px]"}>
                            <div className={"w-[22px] h-[22px] mb-[2px]"}>
                                <div className={"relative"}>
                                    <img className={"rounded-[4px] block"}
                                         src={`/images/leaguestuff/spell/${translateSpell(summoner_1)}.png`} alt={"sum-1"} />
                                </div>
                            </div>
                            <div className={"w-[22px] h-[22px]"}>
                                <img className={"rounded-[4px]"}
                                     src={`/images/leaguestuff/spell/${translateSpell(summoner_2)}.png`} alt={"sum-2"} />
                            </div>
                        </div>
                        <div className={"ml-[2px] flex flex-col"}>
                            <div className={"mb-[2px] bg-black rounded-[50%]"}>
                                <div className={"flex items-center justify-center"}>
                                    <img className={"rounded-[50%]"}
                                         src={translateSecondary(perk_secondary)} alt={"perk-1"} width={22} height={22} />
                                </div>
                            </div>
                            <div>
                                <div className={"mt-[1px] flex items-center justify-center"}>
                                    <img className={"rounded-[50%]"}
                                         src={translatePrimary(perk_primary)} alt={"perk-1"} width={22} height={22} />
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-col justify-center relative w-[107px] pr-[12px] mr-[8px] ml-[12px]"}>
                            <div className={"text-cgrey-slash text-[15px] leading-[22px]"}>
                                <span className={"font-extrabold text-cgrey-kd"}>{kills}</span>
                                /
                                <span className={"font-bold text-cred-d"}>{deaths}</span>
                                /
                                <span className={"font-extrabold text-cgrey-kd"}>{assists}</span>
                            </div>
                            <div className={"leading-[16px] text-cgrey-text"}>
                                <span className={"text-[12px]"}>{Math.round((kills+assists)/deaths*100)/100}:1 KDA</span>
                            </div>
                        </div>
                        <div className={"flex flex-col items-start w-[140px] text-cgrey-text text-[11px]"}>
                            <div className={"text-cred-dark"}>
                                <div className={"relative"}>P/Kill {Math.round(((kills+assists)/team_kills)*100)}%</div>
                                <div className={"text-cgrey-text text-[11px]"}>Control Ward $</div>
                                <div className={"text-cgrey-text text-[11px]"}>CS {minions_killed + neutral_minions} ({cs_min})</div>
                            </div>
                        </div>
                        <div className={"text-cgrey-text text-[11px]"}></div>
                    </div>
                    <div className={"flex items-center mt-[8px]"}>
                        <div className={"flex flex-row"}>
                            {items.slice(0,6).map((item, index ) => {
                                if (item !== 0) return <img className={"w-[22px] h-[22px] rounded-[4px] mr-[2px]"}
                                                            src={`/images/leaguestuff/item/${item}.png`} alt={"item"} key={index}/>
                                else return <div className={`${win ? 'bg-cblue-item' : 'bg-cred-item'} w-[22px] h-[22px] rounded-[4px] mr-[2px]`} key={index} />
                            })}
                            {(items[6] !== 0)
                                ? <img className={"rounded-[50%] w-[22px] h-[22px] mr-[2px]"} src={`/images/leaguestuff/item/${items[6]}.png`} alt={"item"}/>
                                : <div className={`${win ? 'bg-cblue-item' : 'bg-cred-item'} w-[22px] h-[22px] rounded-[4px] mr-[2px]`} /> }
                        </div>
                        {user.largestMultiKill > 1 &&
                            <div className={"h-[18px] leading-[18px] px-[8px] ml-[4px] rounded-[9px] bg-cred-multikill text-white"}>
                                    <div className={"h-[18px] leading-[18px] px-[8px] ml-[4px] rounded-[9px] bg-cred-multikill text-white"}>
                                        {translateMultiKill(user.largestMultiKill)}
                                    </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={"absolute right-[50px]"}>
                    <ul className={"mr-[8px]"}>
                        {match.info.participants.filter(player => player.teamId === 100).map((player, index) =>
                            <li className={"flex items-center w-[88px] h-[18px] text-left whitespace-nowrap"} key={index}>
                                <div className={"relative"}>
                                    <img className={"block w-[16px] h-[16px] rounded-[4px]"}
                                        src={`/images/leaguestuff/champion/${player.championName}.png`} alt={'icon'}/>
                                </div>
                                <div className={"inline-block max-w-[60px]"}>
                                    <Link className={"ml-[5px] text-cgrey-text text-[12px] block overflow-ellipsis whitespace-nowrap overflow-hidden"}
                                            href={`/projects/league/${region}/${player.summonerName}`} target={"_blank"} rel={"noreferrer"}>
                                        {player.summonerName}
                                    </Link>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={"absolute left-[450px]"}>
                    <ul className={"mr-[8px]"}>
                        {match.info.participants.filter(player => player.teamId === 200).map((player, index) =>
                            <li className={"flex items-center w-[88px] h-[18px] text-left whitespace-nowrap"} key={index}>
                                <div className={"relative"}>
                                    <img className={"block w-[16px] h-[16px] rounded-[4px]"}
                                         src={`/images/leaguestuff/champion/${player.championName}.png`} alt={'icon'}/>
                                </div>
                                <div className={"inline-block max-w-[60px]"}>
                                    <Link className={"ml-[5px] text-cgrey-text text-[12px] block overflow-ellipsis whitespace-nowrap overflow-hidden"}
                                          href={`/projects/league/${region}/${player.summonerName}`} target={"_blank"} rel={"noreferrer"}>
                                        {player.summonerName}
                                    </Link>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Match;