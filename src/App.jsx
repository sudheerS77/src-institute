import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

// React-Slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import Master from './Pages/master';
import Home from './Pages/Home';
import AdminMaster from './Pages/Admin/adminMaster';
import AdminHomePage from './Pages/Admin/admin.home';
import AchUpdate from './Pages/Admin/achievemenetUpdate.page';
import EventsUpdate from './Pages/Admin/eventsUpdate.page';
import FacultyUpdate from './Pages/Admin/facultyUpdate.page';
import VFUpdate from './Pages/Admin/vfUpdate.page';
import PGUpdate from './Pages/Admin/pgUpdate.page';
import ProjectUpdate from './Pages/Admin/projectUpdate.page';
import GalleryUpdate from './Pages/Admin/galleryUpdate.page';

//Redux actions
import { getMySelf } from './Redux/Reducer/User/user.action';
import SliderUpdate from './Pages/Admin/sliderUpdate.page';
import EventParticipants from './Pages/Admin/eventsParticipants.page';
import BrochureUpdate from './Pages/Admin/Brochure/brochureUpdate.page';
import UpdateFeedbackFaculty from './components/AdminComponents/Feedback/updateFeedbackFaculty';
import FFUpdate from './Pages/Admin/AFeedback/feedbackFacultyUpdate.page';
import DognutChart from './components/AdminComponents/Feedback/dognutChart';
import SpeakerFeedback from './Pages/speakerFeedback';

// axios global settings
if(localStorage.SRCUser) {
  const { token } = JSON.parse(localStorage.SRCUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}


const App = () => {
  const dispatch = useDispatch();
  const data = localStorage.SRCUser;
  useEffect(() => {
    if(localStorage.SRCUser) {
      dispatch(getMySelf());
    }
  }, [data]);

  const reduxState = useSelector((globalStore) => globalStore.user.user);
  const user_role = reduxState?.user?.userRole;
  localStorage.setItem("user_id", reduxState?.user?._id);

  return (
    <>     
      <Routes>
        <Route path="/" element={<Home/>} />            
        <Route path="/feedback/:type"  element={<SpeakerFeedback />} />
        <Route path="/:type"  element={<Master />} />
      </Routes>
      { user_role === "admin" ? (
        <Routes>
          <Route path="/admin" element={<AdminHomePage />}/>
          <Route path="/admin/:type" element={<AdminMaster/>} />
          <Route path="/admin/achievemnts/:type" element={<AchUpdate urltype={"id"}/>} />        
          <Route path="/admin/events/:type" element={<EventsUpdate urltype={"id"}/>} />
          <Route path="/admin/events/show-participants/:type" element={<EventParticipants />} />
          <Route path="/admin/faculty/:type" element={<FacultyUpdate urltype={"id"}/>} />        
          <Route path="/admin/visitingfaculty/:type" element={<VFUpdate urltype={"id"}/>} />        
          <Route path="/admin/pg/:type" element={<PGUpdate urltype={"id"}/>} />
          <Route path="/admin/projects/:type" element={<ProjectUpdate urltype={"id"}/>} />        
          <Route path="/admin/gallery/:type" element={<GalleryUpdate urltype={"id"}/>} /> 
          <Route path="/admin/slider/:type" element={<SliderUpdate urltype={"id"}/>} /> 
          <Route path="/admin/brochure/:type" element={<BrochureUpdate urltype={"id"}/>} /> 
          <Route path="/admin/feedback/:type" element={<FFUpdate urltype={"id"}/>} /> 
          <Route path="/admin/faculty-feedback/:type" element={<FFUpdate urltype={"faculty-feedback"}/>} /> 
        </Routes>
      ) : (
        <></>
      )

      }
    </>
  )
}

export default App;