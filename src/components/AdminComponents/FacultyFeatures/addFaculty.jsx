import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const AddFaculty = () => {
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
                    label="Faculty name"
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
                    label="Degree"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Position"
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
                <button className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </button>
                <button className="px-2 py-1 bg-green-900 text-gray-50 rounded-md">
                    Submit
                </button>
            </div>

        </div>
    </>
  )
}

export default AddFaculty;