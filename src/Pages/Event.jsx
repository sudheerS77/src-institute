import React from 'react'
import OnGoingEvents from '../components/Events/onGoingEvents'
import CompletedEvents from '../components/Events/completedEvents'

//Components
import Tag from '../components/Tag'
import Footer from '../components/footer'
import NavBar from '../components/Navbar/NavBar'

const Event = () => {
  return (
    <>
    <NavBar />
    <div className="bg-purple-50">
      <div className='lg:w-full h-32 lg:-mb-1.5'></div>
      {/* <div className="md:ml-10 w-2/5">
        <Tag eventName={"Events"} />
      </div> */}
      <div className="flex flex-row items-center justify-around md:justify-start md:gap-10 mt-5 md:ml-10">
        <div className="w-40 md:w-72 h-24 md:h-36 bg-cyan-600 rounded-xl flex items-center justify-center shadow-xl">
          <h4 className="text-md md:text-xl text-gray-50 font-light">Upcoming Events 2</h4>
        </div>
        <div className="w-40 md:w-72 h-24 md:h-36 bg-sky-900 rounded-xl flex items-center justify-center shadow-xl">
          <h4 className="text-md md:text-xl text-gray-50 font-light">Upcoming Events 2</h4>
        </div>
      </div>
     

      <div className="flex flex-col gap-10 w-full items-center justify-center mt-5 pb-10">    
        <OnGoingEvents />
        <CompletedEvents />
      </div>
    
    <Footer />

    </div>

    </>
  )
}

export default Event