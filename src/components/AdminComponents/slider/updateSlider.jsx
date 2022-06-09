import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Redux action
import { getSpecificSlider, updateSlider } from '../../../Redux/Reducer/Slider/slider.action';

const UpdateSliderImage = () => {
    const { type } = useParams();
    const [sliderImages, setSliderImages] = useState([]);
        
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSpecificSlider(type));      
    }, []) 

    const reduxState = useSelector((globalStore) => globalStore.Slider);
    console.log(reduxState);
    useEffect(() => {
      reduxState?.slider && setSliderImages(reduxState.slider.data);
    }, [reduxState]);
    console.log(sliderImages);

    const submit = () => {
        dispatch(
            updateSlider({
            ...sliderImages,
          })
        );
    } 
    

  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="flex flex-col w-full gap-5">
                <span className="w-72">
                    <TextField
                        required
                        id="outlined-required"
                        helperText="Name"
                        value={sliderImages?.imageType}
                        onChange={(e) => setSliderImages((prev) => ({...prev, imageType: e.target.value}))}
                    />
                </span>
                <TextField
                    required
                    id="outlined-required"
                    helperText="Image url"
                    fullWidth
                    value={sliderImages?.image}
                    onChange={(e) => setSliderImages((prev) => ({...prev, image: e.target.value}))}
                />                                              
            </div>
            <div className="flex flex-row items-center gap-5">
                <Link to="/admin/slider"
                    className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </Link>
                <Link to="/admin/slider"
                    onClick={submit}
                    className="px-2 py-1 bg-green-900 text-gray-50 rounded-md"
                >
                    Update
                </Link>
            </div>

        </div>
    </>
  )
}

export default UpdateSliderImage;
