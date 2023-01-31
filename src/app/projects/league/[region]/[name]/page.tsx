import {getMatches} from "@/app/projects/league/(helpers)/matchFetches";

const MatchPage = async ({ params }: { params: {region: string, name: string}}) => {
    const matches = await getMatches(params.region, params.name);
    return (
        <>
            <h1 className={"text-white"}>{params.region} {params.name}</h1>
            <div className={"text-white"}>
                <div className={"text-white"}>
                    {(matches.data)
                        ? <h1 className={"text-white"}>{matches.data?.length}</h1>
                        : <h1 className={"text-white"}>{matches.status_code} {matches.message}</h1>}
                </div>
            </div>
        </>
    );
}
export default MatchPage;