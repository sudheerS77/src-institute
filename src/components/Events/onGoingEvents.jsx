import React from 'react'

const OnGoingEvents = () => {
  return (
    <>
      <h1 className="text-xl font-bold">OnGoing Events</h1>
      <div className="flex flex-col items-center justify-center gap-10">      
        <div className="flex flex-col md:flex-row items-center justify-around gap-5 lg:gap-0 px-5 lg:px-0 bg-gray-100 md:w-3/4 py-5 rounded-md shadow-2xl">
          <div className="w-full md:w-64 h-52 lg:w-80 lg:h-60">
            <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="w-full h-full rounded-sm"/>
          </div>
          <div className="flex flex-col items-start gap-3 w-full md:w-1/2">
            <h2 className="text-xl font-bold">Event Name</h2>
            <p className="text-sm lg:text-lg font-light text-gray-800">Event Description
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero adipisci in fuga! Dolor qui iure nihil hic, corporis odio commodi pariatur, quasi placeat omnis obcaecati temporibus odit, tempora libero!
              Taking an innovative approach, this paper used an abridged version of Q methodology to seek the opinions of events experts on the topics and themes that will underpin the future</p>
          </div>
          <div>
            <button className="bg-green-400 px-4 py-2 rounded-lg">
              Register
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-5 lg:gap-0 px-5 lg:px-0 bg-gray-100 md:w-3/4 py-5 rounded-md shadow-2xl">
          <div className="w-full md:w-64 h-52 lg:w-80 lg:h-60">
            <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="w-full h-full rounded-sm"/>
          </div>
          <div className="flex flex-col items-start gap-3 w-full md:w-1/2">
            <h2 className="text-xl font-bold">Event Name</h2>
            <p className="text-sm lg:text-lg font-light text-gray-800">Event Description
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero adipisci in fuga! Dolor qui iure nihil hic, corporis odio commodi pariatur, quasi placeat omnis obcaecati temporibus odit, tempora libero!
              Taking an innovative approach, this paper used an abridged version of Q methodology to seek the opinions of events experts on the topics and themes that will underpin the future</p>
          </div>
          <div>
            <button className="bg-green-400 px-4 py-2 rounded-lg">
              Register
            </button>
          </div>
        </div>

        

      </div>

      
    </>
  )
}

export default OnGoingEvents