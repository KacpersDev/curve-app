import Post from "./Post";

const Posts = () => {
    return(
        <div className="flex justify-center space-x-[15px] mt-[150px]">
            <div>
                <div>
                    <Post title="Lunar Champs" author="Lobsided" description="Lunar Champs is an invitational competitive event we are bringing to Lunar. It is practically a division filled with the best practice players in the PotPvP community. These players played in a bracket made up of 15 people, which determined their ranking in our division (https://gyazo.com/9f45dd1576647fe272a2470cafa9b42c?token=a5c4d792b9b8da543b183fe220b20cc1).

                    These are our current rankings (Updated 12/24/2020):

                    👑Champion - Staind x2

                    ⚔️Rank 1 - deadass
                    " ago="2 days ago"/>
                </div>
                <div>
                    <Post title="Practice Updates & Staff Recruitment" author="I3rother" description="Hey guys,

                    We are actively working on the server-side anticheat to make Lunar as enjoyable as possible given the circumstances of not having a client-side anticheat.

                    As a reminder, any mouse that intentionally tampers with your clicks and gives you an advantage over others may result in a ban, so use it at your own risk. If you are using the Glorious Model O, your debounce timer should be set to 8-10 ms.

                    We are also looking to recruit more Practice staff. Apply at https://lunar.gg/staff-apps." ago="5 days ago"/>
                </div>
                <div>
                    <Post title="Important Announcement Regarding the Lunar Network" author="Physci" description="Hey everyone, it's been a while since we’ve openly communicated with you all regarding our network and client. After more than 1 ½ years of consistently pushing out updates to our server, releasing HCF maps, and dedicating a lot of time and effort into making Lunar competitive pvp server, we’ve finally hit a roadblock. We came to the realization that it is not worth the time, money, or stress that requires running a “competitive” Minecraft server, especially in this community.

                    As of today, Lunar Client no longer utilizes AAL (our third-party client-side anti-cheat). This was a hard decision to make since we’ve been working together for so long, but we believe it's the best decision moving forward.
                    " ago="12 days ago"/>
                </div>
            </div>
            <iframe src="https://discord.com/widget?id=515954361810157568&theme=dark"
                width="350"
                height="500"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
            </iframe>
        </div>
    )
}

export default Posts;