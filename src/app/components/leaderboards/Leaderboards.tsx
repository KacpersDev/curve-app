"use client";

import Leaderboard from "./Leaderboard";
import { LeaderboardProps } from "./Leaderboard";

const Leaderboards = () => {
    const leaderboardData: LeaderboardProps[] = [
        {
          position: 1,
          username: "AceSlayer",
          elo: 2450,
          wins: 320,
          kills: 5400,
          deaths: 1200,
          kd: 4.5,
        },
        {
          position: 2,
          username: "ShadowWolf",
          elo: 2380,
          wins: 310,
          kills: 5000,
          deaths: 1300,
          kd: 3.85,
        },
        {
          position: 3,
          username: "PixelHunter",
          elo: 2305,
          wins: 295,
          kills: 4700,
          deaths: 1400,
          kd: 3.36,
        },
        {
          position: 4,
          username: "CrimsonBlade",
          elo: 2250,
          wins: 280,
          kills: 4500,
          deaths: 1500,
          kd: 3.0,
        },
        {
          position: 5,
          username: "RapidFire",
          elo: 2190,
          wins: 270,
          kills: 4200,
          deaths: 1600,
          kd: 2.63,
        },
        {
          position: 6,
          username: "StealthNinja",
          elo: 2125,
          wins: 260,
          kills: 4000,
          deaths: 1700,
          kd: 2.35,
        },
        {
          position: 7,
          username: "IronFist",
          elo: 2050,
          wins: 250,
          kills: 3800,
          deaths: 1800,
          kd: 2.11,
        },
        {
          position: 8,
          username: "Vortex",
          elo: 1985,
          wins: 240,
          kills: 3600,
          deaths: 1900,
          kd: 1.89,
        },
        {
          position: 9,
          username: "SilverShot",
          elo: 1920,
          wins: 230,
          kills: 3400,
          deaths: 2000,
          kd: 1.7,
        },
        {
          position: 10,
          username: "NightCrawler",
          elo: 1850,
          wins: 220,
          kills: 3200,
          deaths: 2100,
          kd: 1.52,
        },
      ];

    return (
        <div>
            <div className="flex space-x-[460px] mt-[100px] justify-center font-poppins text-white">
                <div>
                    <p className="text-[30px] font-poppins_bold">Leaderboard</p>
                </div>
                <div className="flex space-x-[15px]">
                    <div className="border border-[#1f2937] p-[5px] outline-none">
                        <input className="outline-none w-full mt-[12px] text-[14px] pl-[10px]" type="text" placeholder="Search player"/>
                    </div>
                    <div className="border border-[#1f2937] p-[5px] outline-none">
                        <p className="text-[12px] text-slate-500 ml-[4px]">Game mode:</p>
                        <select className="outline-none w-[150px] ">
                            <option className="border border-[#1f2937]" value="uhc">UHC</option>
                            <option value="uhc">UHC Meetup</option>
                            <option value="uhc">FFA</option>
                            <option value="uhc">Arena PVP</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid mt-[50px] mb-[100px]">
                <div className="flex ml-auto mr-auto items-center w-[1005px] text-[13px] justify-between border border-[#1f2937] text-white px-6 py-4 rounded-lg shadow-md hover:cursor-pointer hover:bg-[#2a2a2a] transition font-poppins">
                    <div className="flex-1 ml-4 font-poppins_bold text-slate-500">Username</div>
                    <div className="w-16 text-center text-slate-500">Elo</div>
                    <div className="w-16 text-center text-slate-500">Wins</div>
                    <div className="w-16 text-center text-slate-500">Kills</div>
                    <div className="w-16 text-center text-slate-500">Deaths</div>
                    <div className="w-16 text-center text-slate-500">K/D</div>
                </div>
                {leaderboardData.map((entry) => (
                    <Leaderboard key={entry.position} {...entry} />
                ))}
            </div>
        </div>
    )
}

export default Leaderboards;