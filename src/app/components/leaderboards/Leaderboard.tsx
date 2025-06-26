export interface LeaderboardProps {
    position: number,
    username: string,
    elo: number,
    wins: number,
    kills: number,
    deaths: number,
    kd: number;
}

const getColor = (position: number) => {
    if (position === 1) return 'text-green-400';
    if (position === 2) return 'text-yellow-400';
    if (position === 3) return 'text-red-400';
    return '';
};

const Leaderboard = ({ position, username, elo, wins, kills, deaths, kd }: LeaderboardProps) => {
    const colorClass = getColor(position);
    return (
        <div className="flex ml-auto mr-auto items-center w-[1005px] justify-between border border-[#1f2937] text-white px-6 py-4 shadow-md hover:cursor-pointer hover:bg-[#2a2a2a] transition font-poppins">
            <div className={`w-10 text-center text-lg font-bold ${colorClass || 'text-gray-300'}`}>{position}</div>
            
            <div className={`flex-1 ml-4 flex items-center gap-2 font-poppins_bold ${colorClass || 'text-white'}`}>
                <img 
                    src={`https://mc-heads.net/avatar/${username}/16`} 
                    alt={`${username}'s avatar`} 
                    width={24}
                    height={24}
                    className="rounded-xl"
                />
                <span>{username}</span>
            </div>
            
            <div className="w-16 text-center text-green-400">{elo}</div>
            <div className="w-16 text-center text-blue-400">{wins}</div>
            <div className="w-16 text-center text-yellow-400">{kills}</div>
            <div className="w-16 text-center text-red-400">{deaths}</div>
            <div className="w-16 text-center text-purple-400">{kd.toFixed(2)}</div>
        </div>
    );
};

export default Leaderboard;