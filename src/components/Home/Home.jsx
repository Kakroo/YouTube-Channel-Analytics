import React from "react";
import { Link, NavLink} from "react-router-dom";
export default function Home() {
    return (
        <div className="dark:bg-black pb-28">
        <div className="mx-auto w-full  max-w-3xl">
            {/* Home Heading */}
            <div className="pt-28 mb-14 text-center text-6xl font-black">
                <h1 className="dark:text-white text-wrap leading-relaxed ">Welcome To YouTube Channel Stats</h1>
            </div>

            {/* Popular channels section */}
            <div>
                <div className="dark:text-white flex mb-5 ml-4 max-sm:ml-5 ">Popular Channels</div>
                <div className="dark:text-white flex flex-wrap ml-4 max-sm:ml-5 ">
                    
                    {/* <NavLink to="/channelpage" id="mrbeast" className="w-auto border-2 mt-2 mr-3 rounded-lg py-2 px-3" >
                        <div className="flex">
                        <img className="w-6 rounded-md" src="public\channels3_profile.jpg" alt="" />
                        <div className="ml-2">MrBeast</div>
                        </div>
                    </NavLink> */}


                    <NavLink to="/mrbeast" className="w-auto border-2 mt-2 mr-3 rounded-lg py-2 px-3" >
                        <div className="flex">
                        <img className="w-6 rounded-md" src="/images/channels3_profile.jpg" alt="" />
                        <div className="ml-2">MrBeast</div>
                        </div>
                    </NavLink>
                    
                    <NavLink to="/doctormike" className="w-auto border-2 mt-2 mr-3 rounded-lg py-2 px-3">
                    <div className="flex">
                        <img className="w-6 rounded-md" src="/images/channels5_profile.jpg" alt="" />
                        <div className="ml-2">Doctor Mike</div>
                        </div>
                    </NavLink>
                    <NavLink to='/isaiahphoto' className="w-auto border-2 mt-2 mr-3 rounded-lg py-2 px-3">
                    <div className="flex">
                        <img className="w-6 rounded-md" src="/images/channels24_profile.jpg" alt="" />
                        <div className="ml-2">Isaiah Photo</div>
                        </div>
                        </NavLink>
                    <NavLink to='/caseyneistat' className="w-auto border-2 mt-2 mr-3 rounded-lg py-2 px-3">
                    <div className="flex">
                        <img className="w-6 rounded-md" src="/images/channels25_profile.jpg" alt="" />
                        <div className="ml-2">Casey Neistat</div>
                        </div>
                        </NavLink>
                    <NavLink to='/ididathing' className="w-auto border-2 mt-2 mr-3 rounded-lg py-2 px-3">
                    <div className="flex">
                        <img className="w-6 rounded-md" src="/images/channels26_profile.jpg" alt="" />
                        <div className="ml-2">I did a thing</div>
                        </div>
                        </NavLink>
                    <NavLink to='/chrisbumstead' className="w-auto border-2 mr-3 mt-2 rounded-lg py-2 px-3">
                    <div className="flex">
                        <img className="w-6 rounded-md" src="/images/channels27_profile.jpg" alt="" />
                        <div className="ml-2">Chris Bumstead</div>
                        </div>
                        </NavLink>
                </div>

            </div>

            {/* MrBeast Vs T-Series Section */}
            <div className='flex mt-16 justify-between  items-center px-4 py-5 shadow-lg rounded-md border-2 max-sm:mx-4 border-gray-100'>
                <div className=' max-sm:hidden flex items-center mr-4 ml-6'>
                    <div>
                        <img className=' flex-shrink-0 w-12 rounded-full h-12 object-fill border-2  border-blue-400' src="/images/channels3_profile.jpg" alt="" />
                    </div>
                    
                </div>
                <span className='dark:text-white max-sm:hidden text-sm  font-bold ml-1.5 mr-1.5'>VS</span>
                <div className=' max-sm:hidden flex items-center ml-3'>
                    <div>
                        <img className='flex-shrink-0 w-12  rounded-full h-12 object-fill border-2 border-red-500' src="/images/channels4_profile.jpg" alt="" />
                    </div>
                    
                </div>
                    
                <div className='dark:text-white flex ml-10 mr-16 items-center'>
                    <span className='bg-red-500 w-1 h-1 rounded-full mr-3 '></span>
                    <div className='ml-3 mr-3'>
                        <h2 className=' text-lg font-semibold'>MrBeast</h2>
                    </div>
                    <span className='text-sm  font-semibold ml-1.5 mr-1.5'>VS</span>
                    <div className='ml-3 mr-3'>
                        <h2 className=' text-lg font-semibold text-nowrap '>T-Series</h2>
                    </div>
                </div>

                <div className="dark:text-white">
                    <a href="https://livecounts.io/compare/youtube-live-subscriber-counter/UCX6OQ3DkcsbYNE6H8uQQuVA/youtube-live-subscriber-counter/UCq-Fj5jknLsUf-MWSy4_brA">
                        <button className=' border-2 dark:bg-red-600 border-black rounded-full ml-2 px-6 p-2 mr-6 text-sm text-nowrap font-semibold'>Visit Live</button>
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
}
