interface PostInterface {
    title: string,
    author: string,
    description: string,
    ago: string,
}

const Post = (post: PostInterface) => {

    const { title, author, description, ago } = post;

    return(
        <div className="w-[630px] ml-auto mr-auto font-poppins text-white mb-[50px]">
            <div className="grid">
                <p className="text-white text-[25px] font-poppins_bold">{title}</p>
                <div className="flex">
                    <p className="text-white text-[12px]"><span className="text-white">{author}</span></p>
                    <p className="ml-[6px] text-[12px]">{ago}</p>
                </div>
            </div>
            <div className="mt-[25px]">
                <p>{description}</p>
            </div>
            <button className="w-[630px] text-center border border-[#4338ca] rounded mt-[10px] p-[7px] text-[12px] mt-[35px] font-poppins_black hover:cursor-pointer hover:opcity-75">READ MORE...</button>
        </div>
    )
}

export default Post;