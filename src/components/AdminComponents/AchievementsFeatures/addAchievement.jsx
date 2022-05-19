import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const AddAchievement = () => {
    const status = [
        {
          value: 'Active',
          label: 'Active',
        },
        {
          value: 'Inactive',
          label: 'InActive',
        },
        
      ];
    const [statusValue, setStatusValue] = useState();

    const handleChange = (event) => {
        setStatusValue(event.target.value);
    };
  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="flex flex-wrap gap-5">
                <TextField
                    required
                    id="outlined-required"
                    label="User name"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Image url"
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    label="description"
                    fullWidth
                    multiline
                    maxRows={4}
                /> 
                <TextField
                    required
                    id="outlined-required"
                    label="Year"
                />
                <TextField
                    id="outlined-required"
                    select
                    label="Select"
                    value={statusValue}
                    onChange={handleChange}
                    helperText="Select the status of the student"
                >
                    {status.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className="flex flex-row items-center gap-5">
                <Link to="/admin/projects"
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

export default AddAchievement;
