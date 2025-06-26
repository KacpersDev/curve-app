import Image from "next/image";
import Discord from "@/app/assets/images/discord.png";
import Twitter from "@/app/assets/images/twitter.png";

const Footer = () => {
    return(
        <div className="bg-black text-white h-[50px]">
            <div className="flex justify-center space-x-[560px]">
                <div className="pl-[10px] mt-[20px]">
                    <p className="text-[13px]">© 2025 Curve Network. Not affiliated with Microsoft or Mojang.</p>
                </div>
                <div className="flex space-x-[5px] mt-[20px]">
                    <button className="text-[13px] mt-[-6px]">FAQ</button>
                    <Image width={16} className="h-[16px] hover:cursor-pointer" src={Discord} alt="discord"/>
                    <Image width={16} className="h-[16px] hover:cursor-pointer" src={Twitter} alt="twitter"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;