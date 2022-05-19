import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const AddImage = () => {
    
  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="flex flex-col w-full gap-5">
                <span className="w-72">
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                    />
                </span>
                <TextField
                    required
                    id="outlined-required"
                    label="Image url"
                    fullWidth
                />                                              
            </div>
            <div className="flex flex-row items-center gap-5">
                <Link to="/admin/gallery"
                    className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </Link>
                <button className="px-2 py-1 bg-green-900 text-gray-50 rounded-md">
                    Submit
                </button>
            </div>

        </div>
    </>
  )
}

export default AddImage;
