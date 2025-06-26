"use client";

import { useRouter } from "next/navigation";

const Header = () => {

    const router = useRouter();

    return(
        <div className="flex justify-center mt-[25px] space-x-[530px] font-poppins">
            <div className="text-[14px] space-x-[10px] text-gray-400 mt-[7px]">
                <button className="hover:cursor-pointer hover:opacity-75" onClick={() => router.push('/leaderboards')}>LEADERBOARDS</button>
                <button className="hover:cursor-pointer hover:opacity-75" onClick={() => router.push('/staff')}>STAFF</button> 
                <button className="hover:cursor-pointer hover:opacity-75" onClick={() => router.push('/media')}>MEDIA</button>
                <button className="hover:cursor-pointer hover:opacity-75">STORE</button>
            </div>
            <div className="space-x-[15px]">
                <button className="border border-[#4338ca] text-[14px] p-[5px] rounded w-[100px] text-white hover:cursor-pointer hover:opacity-75"
                    onClick={() => router.push('/login')}>Login</button>
                <button className="bg-[#4338ca] p-[5px] text-[14px] rounded w-[100px] text-white hover:cursor-pointer hover:opacity-75"
                    onClick={() => router.push('/register')}>Register</button>
            </div>
        </div>
    )
}

export default Header;