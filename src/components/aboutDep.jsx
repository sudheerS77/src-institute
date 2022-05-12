import React from 'react'

const AboutDep = () => {
  return (
    <>
      <div className="my-10 bg-blue-50 py-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
          <div className="w-full md:w-2/6 flex flex-col gap-10">
            <h1 className="text-3xl font-bold pl-3">About the Department</h1>
            <p className="text-md lg:text-lg text-gray-500 font-light px-4">The department of Oral Pathology is situated in the fourth floor of dental college, spread out in 10,000 square feet area housing state of the art equipment in the field of academics and research. The undergraduate program in our department was established in the year 1995 &the Postgraduate course started from the year 2000.The department of Oral Pathology provides a centre for teaching scholarly activities, deals with patient care and is concerned with the diagnosis of a wide range of abnormalities in the oral and maxillofacial region.</p>
          </div>
          <div className="w-full h-full md:w-2/6 md:h-1/6 px-4">
            <img src="https://oralpath.sriher.com/resources/template/images/aboutoral.jpg" alt="Loading ..." className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutDep