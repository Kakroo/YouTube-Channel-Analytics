import React from 'react'

function Zeetv() {
  return (
    <>
        <div className="Main-container flex dark:bg-black dark:text-white  flex-col justify-center m-auto items-center  w-full py-16">
            <div className='flex justify-between  items-center px-4 py-5 shadow-lg rounded-md border-2 border-gray-100'>
                <div className='flex items-center mr-8 ml-4'>
                    <div>
                        <img className=' flex-shrink-0 w-16 rounded-full h-16 object-fill border-2  border-blue-400' src="public\images\channels3_profile.jpg" alt="" />
                    </div>
                    <div className='ml-6'>
                        <h2 className=' text-xl font-semibold'>MrBeast</h2>
                    </div>
                </div>
                <span className='text-3xl  font-bold ml-6 mr-6'>VS</span>
                <div className='flex items-center ml-8'>
                    <div>
                        <img className='flex-shrink-0 w-16  rounded-full h-16 object-fill border-2 border-red-500' src="public\images\channels4_profile.jpg" alt="" />
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
                            <img className='w-24 rounded-md' src="public\images\channels14_profile.jpg" alt="" />
                        </div>
                        <div className='ml-4'>
                            <div className='text-2xl font-bold'>ZEE TV</div>
                            <div className='flex items-center'>
                                <div className=' text-gray-500'>@zeetv</div>
                                <div className=' text-sm ml-4 text-gray-400'>175,223 videos</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex items-center'>
                        <div className='mr-4 pr-6  text-center border-r-2 border-gray-400'>
                            <div className=' font-normal'>Subscribers</div>
                            <div className='flex items-center mt-1.5'>
                                <div className='font-bold  mr-2'>80,400,000</div>
                                <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold  hover:text-white hover:bg-black hover:border-black dark:bg-white dark:text-black'>#16</div>
                                
                            </div>
                            
                        </div>

                        
                        <div className='ml-4 text-center'>
                            <div className='font-normal'>Total Views</div>
                            <div className='flex items-center mt-1.5'>
                                <div className='font-bold mr-2'>89,274,437,641</div>
                                <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold hover:text-white hover:bg-black hover:border-black  dark:bg-white dark:text-black'>#8</div>
                            
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
                                    <div>89.2B</div> 
                                    <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold hover:text-white hover:bg-black hover:border-black dark:bg-white dark:text-black'>#8</div>
                                </div>
                                    
                                <div className='shadow-lg rounded-md text-center ml-4 border-2  px-12 py-10 '>
                                    <div className='font-bold'>Subscribers</div>
                                    <div>80.4M</div> 
                                    <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold hover:text-white hover:bg-black hover:border-black dark:bg-white dark:text-black'>#16</div>
                                </div>
                                    
                                <div className='shadow-lg rounded-md border-2 ml-4 text-center px-12 py-10  '>
                                    <div className='font-bold'>Country</div>
                                    <div>IN</div> 
                                    <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold hover:text-white hover:bg-black hover:border-black dark:bg-white dark:text-black'>#7</div>
                                </div>
                                    
                                <div className='shadow-lg rounded-md border-2 ml-4 text-center px-12 py-10  '>
                                    <div className='font-bold'>Category</div>
                                    <div>Entertainment</div> 
                                    <div className=' ml-2 border-2 px-6 py-1 rounded-3xl cursor-pointer text-sm font-semibold hover:text-white hover:bg-black hover:border-black dark:bg-white dark:text-black'>#7</div>
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
                                    <div className='font-semibold'>18 years</div>
                                </div>
                            </div>
                            <div className='mt-4 ml-4 px-6 py-1 border-t-2 '>
                                <p className='py-8 font-bold text-lg'>About</p>
                                <p>Launched in 1992, ZEE TV is the pioneer of television entertainment industry in India. Official account of India’s pioneering Hindi General Entertainment Channel of India.</p>
                                <p>Our innovative programming has set new benchmarks, and helped us connect with over 3 billion viewers across world. We celebrate the hopes and ambitions of the great Indian middle class community like no other.</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
            
            
            

        </div>
    </>
  )
}

export default Zeetv

