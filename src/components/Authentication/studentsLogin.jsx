import React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const StudentsLogin = () => {
    const [values, setValues] = React.useState({
        name: "",
        institution: "",
        statDentalCouncilNumber: "",
        state: "",
        number: "",
        password: '',
        address: "",
        showPassword: false,

      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const registrationType = [
        { value : "" }
    ]
    const [currency, setCurrency] = React.useState('EUR');

  const handleChanges = (event) => {
    setCurrency(event.target.value);
  };


  return (
    <>
        <div className="">
            <div className="flex flex-col items-center justify-center gap-4">
                <h2>Login</h2>
                <div>
                    <div className="w-72 flex flex-col items-end justify-center gap-5 bg-gray-300">
                        <TextField
                            required
                            id="outlined-required"
                            label="enter your email"  
                            fullWidth
                        />
                        <span className="mx-2 w-full">
                            <FormControl sx={{ m: 1, width: '33.5ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </span>
                        <Button variant="outlined" fullWidth className="h-14" >Login</Button>

                    </div>
                    <div className="border-t border-gray-200 w-72 py-2">
                        <a href="#">forgot Password ?</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default StudentsLogin