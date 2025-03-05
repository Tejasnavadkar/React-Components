
function Card ({userinfo}){

    return <>
    
    <div className="border border-black w-80 h-72  grid grid-rows-12 rounded-lg ">
        <div className="bg-blue-300 row-span-5 flex items-end justify-center relative rounded-t-lg">
            <div className="bg-white h-24 w-24 rounded-full absolute top-12 overflow-hidden ">
                {/* <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" /> */}
                <img src={`${userinfo.avatar_url}`} alt="" />
            </div>
        </div>
        <div className="bg-white row-span-4 flex flex-col justify-center items-center">
            <div>
                <span className="font-medium text-xl">{userinfo.login}</span>
                <span className="text-gray-600 ml-1">{userinfo.user_view_type}</span>
            </div>

            <a href="https://github.com/Tejasnavadkar" target="_blank" className="text-gray-600">View profile</a>
        </div>
        <div className="bg-white border border-t-gray-600 row-span-3 flex items-center justify-evenly rounded-b-lg">
            <div>
                <div className="font-medium text-lg">{userinfo.followers}</div>
                <div className="text-gray-600 text-xs">Followers</div>
            </div>
            <div>
                <div className="font-medium text-lg">{userinfo.following}</div>
                <div className="text-gray-600 text-xs">Following</div>
            </div>
            <div>
                <div className="font-medium text-lg">{userinfo.public_repos}</div>
                <div className="text-gray-600 text-xs">Repos</div>
            </div>
           
        </div>

    </div>
    
    </>
}

export default Card