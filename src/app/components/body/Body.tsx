"use client";
import Image from "next/image"
import Logo from "@/app/assets/images/curve_logo.png";
import { useState } from "react";

const Body = () => {

    const [players] = useState(100);

    return (
        <div className="w-full h-[400px] ml-auto mr-auto bg-cover bg-center flex items-center justify-center mt-[100px] text-white font-poppins bg-gradient-to-r from-blue-700 to-[rgba(147,197,253,0)]" >
            <div className="rounded-lg w-[1000px] ml-auto mr-auto">
                <div className="ml-auto mr-auto grid justify-center">
                    <Image className="ml-auto mr-auto" width={256} src={Logo} alt="logo"/>
                    <p className="text-center text-[25px] font-poppins_bold">Competitive Minecraft PvP</p>
                    <p className="text-center text-[14px]">Join hundreds of players in intense battles across our network.</p>
                </div>
                <div className="flex justify-center space-x-[50px] mt-[40px] h-[35px] text-[12px] ">
                    <button className="w-[320px] bg-black rounded font-poppins_bold border border-[#4338ca] hover:cursor-pointer hover:opacity-75">CONNECT TO CURVE.RIP</button>
                    <button className="w-[320px] rounded font-poppins_bold bg-[#4338ca] hover:cursor-pointer hover:opacity-75">THERE ARE CURRENTLY {players} PLAYERS ONLINE</button>
                    <button className="w-[320px] rounded font-poppins_bold bg-[#db4040] hover:cursor-pointer hover:opacity-75">VISIT THE CURVE STORE</button>
                </div>
            </div>
        </div>
    )
}

export default Body;

