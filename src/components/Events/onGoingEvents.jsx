import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import Razorpay from "razorpay";

//Redux action
import { eventRegisteration, createPayment } from "../../Redux/Reducer/Events/event.action";

const OnGoingEvents = () => {
  const [eventData, setEventsData] = useState([]);
  const navigate = useNavigate();
  const reduxState = useSelector((globalStore) => globalStore.event);
  const userState = useSelector((globalStore) => globalStore.user.user);
  useEffect(() => {
    reduxState?.events && setEventsData(reduxState.events?.events);
  }, [reduxState?.events]);
  console.log(userState);

  const dispatch = useDispatch();
  // const payNow = async (e) => {
  //   try {
  //     const  payments = await dispatch(createPayment(200));
  //     const options = {
  //       "key": "rzp_test_f7AzNO9BLJVfUI", // Enter the Key ID generated from the Dashboard
  //       "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //       "currency": "INR",
  //       "name": "SRC",
  //       "description": "Test Transaction",
  //       "image": "https://example.com/your_logo",
  //       "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //       "handler": function (response){
  //           alert(response.razorpay_payment_id);
  //           alert(response.razorpay_order_id);
  //           alert(response.razorpay_signature)
  //       },
  //       "prefill": {
  //           "name": "Gaurav Kumar",
  //           "email": "gaurav.kumar@example.com",
  //           "contact": "9999999999"
  //       },
  //       "notes": {
  //           "address": "Razorpay Corporate Office"
  //       },
  //       "theme": {
  //           "color": "#3399cc"
  //       }
  //     };
  //     const razorpay = new Razorpay(options);
  //       razorpay.open();
  //       e.preventDefault();
      
  //   } catch (error) {
  //     alert(error)
  //   }
    
  // }
  const launchRazorpyay = () => {
    let options ={
      key: "rzp_test_f7AzNO9BLJVfUI",
      amount: 500*100,
      currency: "INR",
      name: "Sri Ramachandra",
      description: "Payment for the event registration",
      image: "https://oralpath.sriher.com/resources/assets/images/fav.png",
      handler: () => {
          alert("payment Completed");
      },
      prefill: {
        name: userState.user?.fullName,
        email: userState.user?.email,
      },
      theme: {color:"#c4242d"},
    };
    let razorPay = new window.Razorpay(options);
    const rp = razorPay.open();
    return rp;
};
console.log(eventData);
  const eventRegister = ({data}) => {
    console.log(data);
    const eventRegData = {
      event_id: data._id,
      user_id: userState?.user?._id,
      user_name: userState?.user?.fullName,
      eventName: data.eventName,
      eventCostType: "Free",
      paymentStatus: false,        
      registrationDate: Date.now(),
      user_email : userState?.user?.email,
      user_phonenumber: userState?.user?.phoneNumber,
      user_institution: userState?.user?.institution,
      user_State: userState?.user?.state,
      venue: data.venues,
      event_start_data: data.conferenceStartDate,
      event_end_data: data.conferenceEndDate,
      event_link: data.conferenceURL
    }
    console.log(eventRegData);    
    
    if(localStorage.SRCUser) {
      if(data.conferenceType === "free") {
        dispatch(eventRegisteration(eventRegData));
      } else {        
        if(launchRazorpyay()) {
          eventRegData.paymentStatus = true;
          dispatch(eventRegisteration(eventRegData));          
        }        
      }      
    } else {
      alert("Please login to register for the event");
      navigate("/login")
    }
  }
  
  return (
    <>
      <h1 className="text-3xl font-bold border-2 mt-3 text-center p-2 w-full shadow-lg">OnGoing Events</h1>
      <div className="flex flex-col items-center justify-center gap-10">      
        {
          eventData?.length > 0 ?
          eventData?.map((data) => (
            data.status === "active" && (
            <div className="flex flex-col md:flex-row items-center justify-around gap-5 lg:gap-0 px-5 lg:px-0 bg-gray-100 md:w-3/4 py-5 rounded-md shadow-2xl">
              <div className="w-full md:w-64 h-52 lg:w-80 lg:h-60">
                <img src={`${data.image}`} alt="Loading" className="w-full h-full rounded-sm"/>
              </div>
              <div className="flex flex-col items-start gap-3 w-full md:w-1/2">
                <h2 className="text-xl font-bold">{data.eventName}</h2>
                <div className="flex items-start gap-3">
                  <h4 className="text-lg font-semibold w-1/4">Speakers</h4>
                  <p className="text-sm lg:text-lg font-light text-gray-800 w-full">{data.speaker}</p>
                </div>
                <div className="flex items-start gap-3">
                  <h4 className="text-lg font-semibold w-1/4">Eligibility</h4>
                  <p className="text-sm lg:text-lg font-light text-gray-800 w-full">{data.eligibility.join(" , ")}</p>
                </div>
                <p className="text-sm lg:text-lg font-light text-gray-800">{data.description}</p>

              </div>
              <div>
                {/* <div>
                  <p className="text-sm lg:text-lg font-light text-gray-800">{data.conferenceStartDate}</p>
                  <p className="text-sm lg:text-lg font-light text-gray-800">{data.conferenceEndDate}</p>
                </div> */}
                <div>
                  
                </div>
                <button 
                  className="bg-green-400 px-4 py-2 rounded-lg"
                  onClick={() => { eventRegister({data}) }}
                >
                  Register
                </button>
              </div>
            </div>
            )
          )) : (
            <div>
              <div className="flex flex-col md:flex-row items-center justify-around gap-5 lg:gap-0 px-5 lg:px-0 bg-gray-100 md:w-3/4 py-5 rounded-md shadow-2xl">
              <div className="w-full md:w-64 h-52 lg:w-80 lg:h-60 border">
              </div>
              <div className="flex flex-col items-start gap-3 w-full md:w-1/2">
                <h2 className="text-xl font-bold"></h2>
                <p className="text-sm lg:text-lg font-light text-gray-800"></p>
              </div>
              <div>
                <button 
                  className="bg-gray-100 border px-4 py-2 rounded-lg"
                >
                </button>
              </div>
            </div>              
            </div>
          )
        }         
      </div>
    </>
  )
}

export default OnGoingEvents;
// {
//   "_id": "629f94cea52f728051002a1d",
//   "eventName": "demoEvent",
//   "subHeading": "sub",
//   "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, nesciunt pariatur fugiat quo doloribus reprehenderit labore architecto repellendus dolores consectetur ullam, deserunt iure laborum facere, perferendis dolorem voluptas commodi! Veritatis.",
//   "specialNotes": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, nesciunt pariatur fugiat quo doloribus reprehenderit labore architecto repellendus dolores consectetur ullam, deserunt iure laborum facere, perferendis dolorem voluptas commodi! Veritatis.",
//   "speaker": [
//       "DR.RAGHU DHANAPAL",
//       "DR.SHREENIVAS, S. VANAKI",
//       "DR.ABIKSHYEET PANDA "
//   ],
//   "organiser": [
//       "Dr.H.Thamizhchelvan",
//       "Dr.N.Malathi"
//   ],
//   "eligibility": [
//       "Postgraduates",
//       "Faculty",
//       "International"
//   ],
//   "status": "active",
//   "currentHome": "yes",
//   "abstractForm": "yes",
//   "registerDate": "2022-06-08T18:30:00.000Z",
//   "conferenceStartDate": "2022-06-06T18:30:00.000Z",
//   "conferenceEndDate": "2022-06-09T18:30:00.000Z",
//   "image": "https://oralpath.sriher.com//resources/pcadmin/img/gallery/1103513440_WhatsApp%20Image%202021-02-25%20at%202.07.11%20PM.jpeg",
//   "venues": "online",
//   "conferenceType": "free",
//   "conferenceURL": "www.zoom.dkgbj36984y.com",
//   "scheduleConference": [],
//   "__v": 0
// }