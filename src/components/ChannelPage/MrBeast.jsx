import React from 'react'


function MrBeast() {
  return (
    <>
        <div className="Main-container flex dark:bg-black dark:text-white  flex-col justify-center m-auto items-center  w-full py-16">
            <div className='flex justify-between  items-center px-4 py-5 shadow-lg rounded-md border-2 border-gray-100'>
                <div className='flex items-center mr-8 ml-4'>
                    <div>
                        <img className=' flex-shrink-0 w-16 rounded-full h-16 object-fill border-2  border-blue-400' src="./src/assets/channels3_profile.jpg" alt="" />
                    </div>
                    <div className='ml-6'>
                        <h2 className=' text-xl font-semibold'>MrBeast</h2>
                    </div>
                </div>
                <span className='text-3xl  font-bold ml-6 mr-6'>VS</span>
                <div className='flex items-center ml-8'>
                    <div>
                        <img className='flex-shrink-0 w-16  rounded-full h-16 object-fill border-2 border-red-500' src="./src/assets/channels4_profile.jpg" alt="" />
                    </div>
                    <div className='ml-6'>
                        <h2 className=' text-xl font-semibold text-nowrap '>T-Series</h2>
                    </div>
                </div>
                    
                <div className=' flex ml-32 mr-32 items-center'>
                    <span className='bg-red-500 w-2 h-2 rounded-full mr-3 '></span>
                    <h1 className='text-xl font-semibold text-nowrap '>Trending Right Now</h1>
                </div>

                <div>
                    <a href="https://livecounts.io/compare/youtube-live-subscriber-counter/UCX6OQ3DkcsbYNE6H8uQQuVA/youtube-live-subscriber-counter/UCq-Fj5jknLsUf-MWSy4_brA">
                        <button className='bg-red-600 ml-4 border-2 border-black rounded-full px-8 p-3 mr-4 text-xl text-nowrap font-semibold'>Visit Live</button>
                    </a>
                </div>
            </div>
            
            
            <div className='Channel-Info max-w-4xl mt-6 shadow-lg p-6 rounded-md border-2 border-gray-100'>
                <div className='flex justify-between '>
                    <div className='flex items-center mr-10 '>
                        <div>
                            <img className='w-24 rounded-md' src="./src/assets/channels3_profile.jpg" alt="" />
                        </div>
                        <div className='ml-4'>
                            <div className='text-2xl font-bold'>MrBeast</div>
                            <div className='flex items-center'>
                                <div className=' text-gray-500'>@mrbeast</div>
                                <div className=' text-sm ml-4 text-gray-400'>794 videos</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex items-center'>
                        <div className='mr-4 pr-6  text-center border-r-2 border-gray-400'>
                            <div className=' font-normal'>Subscribers</div>
                            <div className='flex items-center mt-1.5'>
                                <div className='font-bold  mr-2'>259,000,000</div>
                                <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold  hover:text-white hover:bg-black hover:border-black dark:bg-white dark:text-black'>#2</div>
                                
                            </div>
                            
                        </div>

                        
                        <div className='ml-4 text-center'>
                            <div className='font-normal'>Total Views</div>
                            <div className='flex items-center mt-1.5'>
                                <div className='font-bold mr-2'>49,013,743,635</div>
                                <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold hover:text-white hover:bg-black hover:border-black  dark:bg-white dark:text-black   '>#22</div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-4 border-t-2'>
                    <div> 
                        <div>
                        <div className=' text-center mt-4 ml-4 font-bold text-2xl w-32 px-6 py-1 rounded-3xl cursor-pointer  hover:text-white hover:bg-red-600 hover:border-none'>About</div>

                        </div>
                        <div className='flex justify-between'>
                            <div className='flex justify-evenly py-7'>
                                <div className='text-center rounded-md border-2  px-12 py-10     shadow-lg'>
                                    <div className='font-bold'>Views</div>
                                    <div>49.1B</div> 
                                    <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold hover:text-white hover:bg-black hover:border-black dark:bg-white dark:text-black'>#22</div>
                                </div>
                                    
                                <div className='shadow-lg rounded-md text-center ml-4 border-2  px-12 py-10 '>
                                    <div className='font-bold'>Subscribers</div>
                                    <div>259M</div> 
                                    <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold hover:text-white hover:bg-black hover:border-black dark:bg-white dark:text-black'>#2</div>
                                </div>
                                    
                                <div className='shadow-lg rounded-md border-2 ml-4 text-center px-12 py-10  '>
                                    <div className='font-bold'>Country</div>
                                    <div>US</div> 
                                    <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold hover:text-white hover:bg-black hover:border-black dark:bg-white dark:text-black'>#1</div>
                                </div>
                                    
                                <div className='shadow-lg rounded-md border-2 ml-4 text-center px-12 py-10  '>
                                    <div className='font-bold'>Category</div>
                                    <div>Entertainment</div> 
                                    <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold hover:text-white hover:bg-black hover:border-black 
                                    dark:bg-white dark:text-black'>#1</div>
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-evenly text-center'>
                                <div>
                                    <div className='text-sm pb-2 text-gray-600'>Category</div>
                                    <div className='font-semibold'>Entertainment</div>
                                </div>
                                <div>
                                    <div className='text-sm pb-2 text-gray-600'>Channel Age</div>
                                    <div className='font-semibold'>12 years</div>
                                </div>
                            </div>
                            <div className='mt-4 ml-4 px-6 py-1 border-t-2 '>
                                <p className='pt-8 font-bold text-lg'>About</p>
                                <p>SUBSCRIBE FOR A COOKIE!</p>
                                <ul title='Accomplishments'>
                                    <li>-Raised $20,000,000 To Plant 20,000,000 Trees
                                    </li>
                                    <li>-Removed 30,000,000 pounds of trash from the ocean
                                    </li>
                                    <li>-Built wells in Africa
                                    </li>
                                    <li>-helped 1,000 blind people see
                                    </li>
                                    <li>-helped 1,000 deaf people hear
                                    </li>
                                    <li>-Given millions to charity
                                    </li>
                                    <li>-Started my own snack company Feastables
                                    </li>
                                    <li>-Donated over 100 cars lol
                                    </li>
                                    <li>-Gave away a private island (twice)
                                    </li>
                                    <li>-Gave away 1 million dollars in one video
                                    </li>
                                    <li>-Counted to 100k
                                    </li>
                                    <li>-Read the Dictionary
                                    </li>
                                    <li>-Read Bee Movie Script
                                    </li>
                                    <li>-Read Longest English Word
                                    </li>
                                    <li>-Watched Paint Dry</li>
                                    <li>-Ubering Across America</li>
                                    <li>-Watched It's Every Day Bro For 10 Hours</li>
                                    <li>-Ran a marathon in the world's largest shoes</li>
                                    <li>-Adopted every dog in a shelter</li>
                                    <li>-Bought $1,000,000 in lottery tickets</li>
                                    <li>-Sold houses for $1</li>
                                    <li>-I got buried alive</li>
                                    <li>-Recreated Squid Game in real life</li>
                                    <li>-Gave away a chocolate factory</li>
                                    <li>-Gave away private jet</li>
                                    <li>-Survived 50 hours in Antarctica</li>
                                </ul>
                                <p>You get the point haha</p>
                                <p className='pt-8'>*Do not email me asking for money, I give away money because it makes me happy :)</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
            
            
            <div></div>

        </div>
    </>
  )
}

export default MrBeast