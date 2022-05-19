import React from 'react'
import { Link } from "react-router-dom";

const PG = () => {
  return (
    <>
        <div className="flex flex-col mb-14">
            <div className="flex flex-row items-center justify-between mx-10 md:mx-40 pb-10 mt-10">
                <h1 className="text-2xl md:font-3xl font-semibold md:font-bold pl-3">PG</h1>
                <Link to="./allfaculty"><p className="text-xs md:text-sm font-light">see more</p></Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 md:gap-20">
                <div className="lg:mx-60 flex flex-col md:flex-row items-center justify-center md:justify-between shadow-2xl md:shadow-sm">
                    <div className="w-80 md:h-48 border-2">
                        <img src="https://oralpath.sriher.com/resources/pcadmin/img/faculties/1257593313__VKP9672-min.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="w-full md:w-3/5 md:ml-10 md:ml-0 px-2 md:px-10 py-5 bg-slate-50 flex flex-col gap-2 md:gap-5">
                        <div className="flex flex-col items-start gap-0.2">
                            <h5 className="text-md md:text-lg font-semibold">N.JUVANITA MARIA NIVEDA</h5>
                            <h6 className="text-md text-blue-400 font-light">MDS Oral Pathology</h6>
                            <p className="text-md font-thin text-blue-400">Second Year</p>
                        </div>
                        <p className="text-sm md:text-md font-light text-gray-500 w-80 md:w-full">TEACHING AND RESEARCH I have an interest in baking cakes and am the co-founder of Sumira_bakeology( Home Baker).Also have a profound interest in the Gospel, reading books and listening to piano pieces.</p>
                    </div>
                </div>
                <div className="lg:mx-60 flex flex-col md:flex-row-reverse items-center justify-center md:justify-between shadow-2xl md:shadow-sm">
                    <div className="w-80 md:h-48">
                        <img src="https://oralpath.sriher.com/resources/pcadmin/img/faculties/1261559156__VKP9675%20(1)-min.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="w-full md:w-3/5 md:ml-10 md:ml-0 px-2 md:px-10 py-5 bg-slate-50 flex flex-col gap-2 md:gap-5">
                        <div className="flex flex-col items-start gap-0.2">
                            <h5 className="text-md md:text-lg font-semibold">N.JUVANITA MARIA NIVEDA</h5>
                            <h6 className="text-md text-blue-400 font-light">MDS Oral Pathology</h6>
                            <p className="text-md font-thin text-blue-400">Second Year</p>
                        </div>
                        <p className="text-sm md:text-md font-light text-gray-500 w-80 md:w-full">TEACHING AND RESEARCH I have an interest in baking cakes and am the co-founder of Sumira_bakeology( Home Baker).Also have a profound interest in the Gospel, reading books and listening to piano pieces.</p>
                    </div>
                </div>
                <div className="lg:mx-60 flex flex-col md:flex-row items-center justify-center md:justify-between shadow-2xl md:shadow-sm">
                    <div className="w-80 md:h-48">
                        <img src="https://oralpath.sriher.com/resources/pcadmin/img/faculties/1654716136__VKP9678%20(1)-min.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="w-full md:w-3/5 md:ml-10 md:ml-0 px-2 md:px-10 py-5 bg-slate-50 flex flex-col gap-2 md:gap-5">
                        <div className="flex flex-col items-start gap-0.2">
                            <h5 className="text-md md:text-lg font-semibold">N.JUVANITA MARIA NIVEDA</h5>
                            <h6 className="text-md text-blue-400 font-light">MDS Oral Pathology</h6>
                            <p className="text-md font-thin text-blue-400">Second Year</p>
                        </div>
                        <p className="text-sm md:text-md font-light text-gray-500 w-80 md:w-full">TEACHING AND RESEARCH I have an interest in baking cakes and am the co-founder of Sumira_bakeology( Home Baker).Also have a profound interest in the Gospel, reading books and listening to piano pieces.</p>
                    </div>
                </div>
                


            </div>
        </div>
    </>
  )
}

export default PG