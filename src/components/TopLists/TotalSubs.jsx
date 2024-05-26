import React from 'react'
import { NavLink } from 'react-router-dom'

function TotalSubs() {
  return (
    <div className='flex justify-center dark:bg-black dark:text-white px-28 py-16  '>
        <div className='mr-16 border-2 h-48 rounded-xl'>
            <div className='flex justify-between m-2 px-6 py-3'>
                <div>Channels</div>
            </div>
            <div>
                
                <div className='  mx-10 hover:bg-gray-500 py-3 rounded-lg  '>
                <NavLink to='/totalsubs' className={({isActive}) =>
                    `m-2  px-6 py-3 rounded-lg ${isActive ? "text-orange-600" : "" } `
                }>Total Subscribers</NavLink>
                </div>
                
                <div className='  mx-10 hover:bg-gray-500 py-3 rounded-lg  '>
                <NavLink to='/totalviews' className={({isActive}) =>
                    `m-2  px-6 py-3 rounded-lg ${isActive ? "text-orange-600" : "" } `
                }>Total Views</NavLink>
                </div>
                
                {/* <div className='  mx-10 hover:bg-gray-500 py-3 rounded-lg  '>
                <NavLink to='/mostsubs' className={({isActive}) =>
                    `m-2  px-6 py-3 rounded-lg ${isActive ? "text-orange-600" : "" } `
                }>Most Subs Gained (last 7 days)</NavLink>
                </div> */}

            </div>
        </div>
        <div className='border-2 rounded-lg'>
            <div className='border-b-2'>
                <div className='flex justify-between px-6  py-6 '>
                    <div className='text-center mr-12 '>Rank</div>
                    <div className='text-center mx-28 '>Channel</div>
                    <div className='text-center '>Views</div>
                    <div className='text-center mx-24 '>Subs</div>
                    <div className='text-center ml-8 '>Uploads</div>
                </div>
            </div>
            
            
            <div >
                <NavLink to='/t-series'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>1</div>
                        <div className=' flex pl-0 w-64 pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels4_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className=' text-sm m-0 p-0'>T-Series</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@tseries</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>255B</div>
                        <div className='px-16'>265M</div>
                        <div className='px-12'>21K</div>
                    </div>
                </NavLink>
                <NavLink to='/mrbeast'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>2</div>
                        <div className='flex pl-0 w-64 justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels3_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>MrBeast</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@mrbeast</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>49.2B</div>
                        <div className='px-10'>259M</div>
                        <div className='px-12'>794</div>
                    </div>
                </NavLink>
                <NavLink to='/setindia'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>3</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels6_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>SET India</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@setindia</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>163B</div>
                        <div className='px-10'>172M</div>
                        <div className='px-12'>137K</div>
                    </div>
                </NavLink>
                <NavLink to='/pewdiepie'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>4</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels7_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>PewDiePie</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@pewdiepie</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>29.3B</div>
                        <div className='px-10'>111M</div>
                        <div className='px-12'>4.8K</div>
                    </div>
                </NavLink>
                <NavLink to='/zeemusiccompany'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>5</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels8_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>Zee Music Company</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@zeemusiccompany</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>66.4B</div>
                        <div className='px-10'>101M</div>
                        <div className='px-12'>11K</div>
                    </div>
                </NavLink>
                <NavLink to='/wwe'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>6</div>
                        <div className='flex pl-0 w-64 justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels9_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'> WWE</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@wwe</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>84.5B</div>
                        <div className='px-10'>101M</div>
                        <div className='px-12'>76.3K</div>
                    </div>
                </NavLink>
                <NavLink to='/goldmines'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>7</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels10_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>Goldmines</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@goldminestelefilms</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>28.9B</div>
                        <div className='px-10'>96.8M</div>
                        <div className='px-12'>8.5K</div>
                    </div>
                </NavLink>
                <NavLink to='/blackpink'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>8</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels11_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>BLACKPINK</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@blackpink</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>35.3B</div>
                        <div className='px-10'>93.7M</div>
                        <div className='px-12'>596</div>
                    </div>
                </NavLink>
                <NavLink to='/sonysab'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>9</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels12_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>Sony SAB</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@sonysab</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>114B</div>
                        <div className='px-10'>92M</div>
                        <div className='px-12'>85.1K</div>
                    </div>
                </NavLink>
                <NavLink to='/minutecrafts'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>10</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels13_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>5-Minute Crafts</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@5minutecraftsyoutube</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>27.3B</div>
                        <div className='px-10'>80.6M</div>
                        <div className='px-12'>7K</div>
                    </div>
                </NavLink>
                {/* <NavLink to='/channelpage'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>11</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels14_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'> Zee TV</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@zeetv</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>89.2B</div>
                        <div className='px-10'>80.3M</div>
                        <div className='px-12'>175K</div>
                    </div>
                </NavLink>
                <NavLink to='/channelpage'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>12</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels15_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>BANGTANTV</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@bts</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>22.7B</div>
                        <div className='px-10'>78M</div>
                        <div className='px-12'>2.5K</div>
                    </div>
                </NavLink>
                <NavLink to='/channelpage'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>13</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels16_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>Hybe Labels</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@hybelabels</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>34B</div>
                        <div className='px-10'>74.8M</div>
                        <div className='px-12'>1.8K</div>
                    </div>
                </NavLink>
                <NavLink to='/channelpage'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>14</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels17_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>Justin Bieber</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@justinbieber</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>32.3B</div>
                        <div className='px-10'>72.9M</div>
                        <div className='px-12'>249</div>
                    </div>
                </NavLink>
                <NavLink to='/channelpage'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>15</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels18_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>Colors TV</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@colorstv</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>70.4B</div>
                        <div className='px-10'>72.5M</div>
                        <div className='px-12'>149K</div>
                    </div>
                </NavLink>
                <NavLink to='/channelpage'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>16</div>
                        <div className='flex pl-0 w-64  justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels19_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>Shemaroo Filmi Gaane</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@filmigaane</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>29.2B</div>
                        <div className='px-10'>68.4M</div>
                        <div className='px-12'>8.6K</div>
                    </div>
                </NavLink>
                <NavLink to='/channelpage'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>17</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels20_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>T-Series Bhakti Sagar</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@tseriesbhaktisagar</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>33.9B</div>
                        <div className='px-10'>67.6M</div>
                        <div className='px-12'>27.9K</div>
                    </div>
                </NavLink>
                <NavLink to='/channelpage'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>18</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels21_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>Canal KondZilla</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@kondzilla</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>38.1B</div>
                        <div className='px-10'>67.1M</div>
                        <div className='px-12'>2.8K</div>
                    </div>
                </NavLink>
                <NavLink to='/channelpage'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>19</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels22_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>Tips Official</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@tipsofficial</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>38.5B</div>
                        <div className='px-10'>65.9M</div>
                        <div className='px-12'>5.7K</div>
                    </div>
                </NavLink>
                <NavLink to='/channelpage'>
                    <div className='flex mt-2  py-2 justify-between border-b-2 items-center'>
                        <div className='pl-8 flex justify-center pr-12'>20</div>
                        <div className='flex pl-0 w-64   justify-start pr-12'>
                            <div className=''>
                                <img className='border-2 h-12 rounded-md' src="public\channels23_profile.jpg" alt="" />
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm m-0 p-0'>Aaj Tak</div>
                                <span className='m-0 p-0 text-gray-400 text-xs' >@aajtak</span>
                                
                            </div>
                        </div>
                        <div className='px-12'>30.8B</div>
                        <div className='px-10'>67.6M</div>
                        <div className='px-12'>27.9K</div>
                    </div>
                </NavLink> */}
                

            </div>
        </div>
    </div>
  )
}

export default TotalSubs