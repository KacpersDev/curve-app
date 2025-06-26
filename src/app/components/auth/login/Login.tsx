import Image from "next/image";
import Logo from "@/app/assets/images/curve_logo.png";

const Login = () => {
    return(
        <div>
            <Image className="ml-auto mr-auto mt-[250px]" width={128} src={Logo} alt="logo"/>
            <div className="mt-[30px] ml-auto mr-auto w-[400px] border border-[#1f2937] rounded-2xl">
                <form className="grid justify-center mt-[50px] mb-[50px] font-poppins">
                    <input className="w-[300px] h-[40px] rounded border border-[#1f2937] mt-[15px] text-white p-[10px] outline-none" type="text" placeholder="Username"/>
                    <input className="w-[300px] h-[40px] rounded border border-[#1f2937] mt-[15px] text-white p-[10px] outline-none" type="password" placeholder="Password"/>
                    <input className="w-[300px] h-[40px] rounded border border-[#1f2937] font-poppins_bold mt-[35px] text-white p-[10px] outline-none text-center bg-[#4338ca]" type="input" value="Sign Up"/>
                </form>
            </div>
            <div className="mb-[470px]"/>
        </div>
    )
}

export default Login;